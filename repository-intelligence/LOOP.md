# Repository Audit and Migration Loop

## Safety invariants

1. Read-only analysis is the default.
2. Never delete, archive, rename, merge, or force-update a repository or branch during the audit phase.
3. Every recommendation must include evidence: repository metadata, latest commit, detected stack/version, origin/fork status, unique files, and overlap group.
4. A newer commit date does not automatically mean a better or more complete project.
5. Branches containing unique work are extracted into a migration manifest before any cleanup.

## Phase A — Repository inventory

For each accessible repository:

1. Capture metadata: visibility, default branch, size, archived status, permissions.
2. Identify purpose from README and manifests.
3. Detect stack and version from package manifests, tags, releases, or source constants.
4. Record latest commit SHA, message, author/date when available.
5. Check PR/issue/CI activity where relevant.
6. Identify fork/origin and license.
7. Group related or duplicate repositories.
8. Score completeness, uniqueness, strategic value, and migration priority.
9. Write the result to the current batch HTML page and structured catalog.

## Phase B — Branch inventory

For each repository selected for migration:

1. List branches.
2. Compare each branch to the default branch.
3. Classify: merged, behind-only, unique work, experimental, dangerous tree, or unknown.
4. Record unique files and commits in `MIGRATION-MANIFEST.md`.
5. Do not merge automatically.

## Phase C — Consolidation proposal

1. Recommend the canonical repository for each duplicate group.
2. Define which code/docs/assets should migrate.
3. Define what remains an upstream fork/reference.
4. Produce a no-delete migration plan and conflict map.
5. Obtain explicit approval before writes outside the report hub.

## Phase D — Controlled migration

1. Create clean branches from current default branches.
2. Copy or cherry-pick approved unique work.
3. Open reviewable pull requests.
4. Verify diffs contain no unintended deletions.
5. Merge only after explicit approval and validation.

## Batch policy

- Batch 1: highest strategic relevance to AI agents, architecture, MCP, local AI, Sky365, and developer tooling.
- Later batches: ERP/Blazor, business applications, legacy snapshots, utilities, and low-priority mirrors.
- Each batch gets its own HTML page and is linked from the repository intelligence landing page.
