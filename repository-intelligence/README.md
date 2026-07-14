# Repository Intelligence Index

Central audit and inventory workspace for repositories accessible under the `saskw2010` GitHub account.

## Purpose
- Inventory repositories and classify their purpose.
- Detect duplicate, historical, forked, empty, inactive, and superseded repositories.
- Capture technology stack, version signals, default branch, repository size, latest commit, releases/tags, CI status, and maintenance state.
- Compare repositories that appear to represent the same project and identify the most current and most complete candidate.
- Produce evidence-based recommendations: keep active, consolidate, archive candidate, reference-only, or requires manual review.

## Planned Structure
- `index.html` — visual dashboard and report cards.
- `reports/` — dated HTML and Markdown audit reports by batch.
- `catalog/` — repository inventory grouped by domain and technology.
- `comparisons/` — duplicate and related-project comparisons.
- `policies/` — audit methodology, scoring, and safety rules.
- `data/` — machine-readable snapshots.

## Safety Rules
1. Auditing is read-only by default.
2. No repository is archived, deleted, merged, renamed, or modified automatically.
3. Commit date alone does not determine the canonical repository.
4. Completeness, build configuration, migrations, tests, documentation, active branches, and recent meaningful changes must also be considered.
5. Any destructive or structural recommendation requires explicit human approval.
