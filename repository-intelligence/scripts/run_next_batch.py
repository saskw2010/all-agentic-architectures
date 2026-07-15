from __future__ import annotations

import html
import json
import os
import re
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
STATE_PATH = ROOT / "state" / "progress.json"
ERRORS_PATH = ROOT / "state" / "errors.json"
DATA_DIR = ROOT / "data"
REPORTS_DIR = ROOT / "reports"
OWNER = os.getenv("REPOSITORY_AUDIT_OWNER", "saskw2010")
TOKEN = os.getenv("REPO_AUDIT_TOKEN") or os.getenv("GITHUB_TOKEN")
API = "https://api.github.com"


def api_get(url: str) -> Any:
    if not TOKEN:
        raise RuntimeError("Missing REPO_AUDIT_TOKEN or GITHUB_TOKEN")
    request = urllib.request.Request(
        url,
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "User-Agent": "mostafa-repository-audit-loop",
        },
    )
    with urllib.request.urlopen(request, timeout=45) as response:
        return json.load(response)


def load_json(path: Path, fallback: Any) -> Any:
    if not path.exists():
        return fallback
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, value: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def list_owned_repositories() -> list[dict[str, Any]]:
    repos: list[dict[str, Any]] = []
    page = 1
    while True:
        batch = api_get(
            f"{API}/user/repos?affiliation=owner&visibility=all&sort=full_name&direction=asc&per_page=100&page={page}"
        )
        if not batch:
            break
        repos.extend(repo for repo in batch if repo.get("owner", {}).get("login", "").lower() == OWNER.lower())
        page += 1
    return repos


def version_family(name: str) -> str:
    normalized = name.lower()
    normalized = re.sub(r"(?:19|20)\d{6}", "", normalized)
    normalized = re.sub(r"(?:19|20)\d{2}[-_]\d{2}[-_]\d{2}", "", normalized)
    normalized = re.sub(r"(?:19|20)\d{2}[-_]\d{2}", "", normalized)
    normalized = re.sub(r"[-_]?v(?:ersion)?\d+(?:\.\d+)*", "", normalized)
    normalized = re.sub(r"[-_]?(?:final|last|latest|master|copy|test|trial)$", "", normalized)
    normalized = re.sub(r"[^a-z0-9]+", "", normalized)
    return normalized or name.lower()


def repository_record(repo: dict[str, Any]) -> dict[str, Any]:
    full_name = repo["full_name"]
    default_branch = repo.get("default_branch") or ""
    latest_commit: dict[str, Any] | None = None
    if default_branch and repo.get("size", 0) > 0:
        try:
            latest_commit = api_get(f"{API}/repos/{full_name}/commits/{default_branch}")
        except urllib.error.HTTPError as exc:
            if exc.code not in (404, 409):
                raise

    commit_data = (latest_commit or {}).get("commit", {})
    committer = commit_data.get("committer", {})
    return {
        "name": repo["name"],
        "full_name": full_name,
        "visibility": repo.get("visibility", "private" if repo.get("private") else "public"),
        "fork": bool(repo.get("fork")),
        "archived": bool(repo.get("archived")),
        "disabled": bool(repo.get("disabled")),
        "default_branch": default_branch,
        "size_kb": repo.get("size", 0),
        "language": repo.get("language"),
        "description": repo.get("description"),
        "created_at": repo.get("created_at"),
        "updated_at": repo.get("updated_at"),
        "pushed_at": repo.get("pushed_at"),
        "open_issues": repo.get("open_issues_count", 0),
        "html_url": repo.get("html_url"),
        "family_key": version_family(repo["name"]),
        "latest_commit_sha": (latest_commit or {}).get("sha"),
        "latest_commit_message": commit_data.get("message"),
        "latest_commit_date": committer.get("date"),
        "scan_status": "scanned",
    }


def render_batch(records: list[dict[str, Any]], batch_number: int) -> str:
    rows = []
    for index, record in enumerate(records, 1):
        rows.append(
            "<tr>"
            f"<td>{index}</td>"
            f"<td><a href='{html.escape(record.get('html_url') or '')}'>{html.escape(record['full_name'])}</a></td>"
            f"<td>{html.escape(record.get('description') or 'No description')}</td>"
            f"<td>{html.escape(record['visibility'])}</td>"
            f"<td>{'Yes' if record['fork'] else 'No'}</td>"
            f"<td>{html.escape(record.get('default_branch') or '')}</td>"
            f"<td>{record.get('size_kb', 0):,}</td>"
            f"<td>{html.escape(record.get('language') or 'Unknown')}</td>"
            f"<td>{html.escape(record.get('family_key') or '')}</td>"
            f"<td>{html.escape(record.get('latest_commit_date') or 'No commit')}</td>"
            f"<td>{html.escape((record.get('latest_commit_message') or '')[:160])}</td>"
            f"<td>{'Archived' if record['archived'] else 'Active metadata'}</td>"
            "</tr>"
        )
    return f"""<!doctype html>
<html lang='en'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'>
<title>Repository Audit — Batch {batch_number:02d}</title>
<style>body{{font-family:Arial,sans-serif;margin:0;background:#f6f7fb;color:#172033}}main{{max-width:1700px;margin:auto;padding:28px}}section{{background:#fff;padding:18px;border-radius:14px;margin-bottom:18px}}table{{width:100%;border-collapse:collapse;background:#fff;font-size:12px}}th,td{{padding:9px;border:1px solid #e3e6ee;vertical-align:top;text-align:left}}th{{background:#172033;color:#fff;position:sticky;top:0}}a{{color:#155eef}}</style></head>
<body><main><section><h1>Repository Audit — Batch {batch_number:02d}</h1><p>Generated {datetime.now(timezone.utc).isoformat()} · {len(records)} repositories · Read-only metadata pass.</p></section>
<table><thead><tr><th>#</th><th>Repository</th><th>Description</th><th>Visibility</th><th>Fork</th><th>Default branch</th><th>Size KB</th><th>Language</th><th>Family key</th><th>Latest commit</th><th>Commit message</th><th>Status</th></tr></thead><tbody>{''.join(rows)}</tbody></table></main></body></html>"""


def main() -> int:
    state = load_json(STATE_PATH, {})
    errors_doc = load_json(ERRORS_PATH, {"errors": []})
    if state.get("status") == "completed":
        print("Audit loop already completed.")
        return 0

    repos = list_owned_repositories()
    all_names = [repo["name"] for repo in repos]
    processed = set(state.get("processed", []))
    pending = [name for name in all_names if name not in processed]
    state["pending"] = pending
    state["total_repositories"] = len(all_names)

    batch_size = int(state.get("batch_size", 20))
    selected_names = pending[:batch_size]
    selected_map = {repo["name"]: repo for repo in repos if repo["name"] in selected_names}
    records: list[dict[str, Any]] = []

    for name in selected_names:
        try:
            records.append(repository_record(selected_map[name]))
            processed.add(name)
        except Exception as exc:  # continue the loop and preserve failure evidence
            errors_doc.setdefault("errors", []).append(
                {
                    "repository": name,
                    "error": f"{type(exc).__name__}: {exc}",
                    "at_utc": datetime.now(timezone.utc).isoformat(),
                    "phase": state.get("current_phase"),
                }
            )

    batch_number = int(state.get("current_batch", 1))
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    save_json(DATA_DIR / f"batch-{batch_number:02d}.json", records)
    (REPORTS_DIR / f"batch-{batch_number:02d}-auto.html").write_text(
        render_batch(records, batch_number), encoding="utf-8"
    )

    remaining = [name for name in all_names if name not in processed]
    state["processed"] = sorted(processed, key=str.lower)
    state["pending"] = remaining
    state["failed"] = sorted({entry["repository"] for entry in errors_doc.get("errors", [])})
    state["last_run_utc"] = datetime.now(timezone.utc).isoformat()
    state["current_batch"] = batch_number + 1
    state["definition_of_done"]["all_repositories_scanned"] = not remaining
    state["definition_of_done"]["no_pending_items"] = not remaining

    if not remaining:
        state["current_phase"] = "branch_inventory"
        state["status"] = "repository_inventory_completed"

    save_json(STATE_PATH, state)
    save_json(ERRORS_PATH, errors_doc)
    print(f"Processed {len(records)} repositories. Remaining: {len(remaining)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
