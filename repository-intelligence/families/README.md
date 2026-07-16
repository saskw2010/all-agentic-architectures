# Incremental Repository Family Model

## Decision

Families are created incrementally as soon as audit evidence identifies a meaningful relationship. The audit does not wait for a final global registry before creating family records.

Each family owns a directory under `repository-intelligence/families/<family-id>/` containing:

- `family.json` — family identity, relationship type, business domain and lifecycle.
- `members.json` — repositories and their roles, tags, confidence and evidence.
- `decisions.json` — canonical, merge, retain and future archive decisions.
- `health.json` — operational, security, dependency and observability findings.
- `report.html` — human-readable family report.

## Relationship types

- `version_family`: historical or divergent versions of substantially the same codebase.
- `product_family`: backend, frontend, mobile, API, reporting and documentation repositories belonging to one product.
- `platform_umbrella`: independent products sharing the SKY365/WytSky platform.
- `component_family`: reusable libraries, templates, samples or infrastructure components.
- `reference_or_upstream`: third-party, fork, mirror, learning or upstream repositories.
- `unclassified_candidate`: relationship suspected but evidence remains insufficient.

## Repository roles

A repository can have multiple roles:

- `backend`
- `frontend`
- `mobile`
- `api`
- `database`
- `reporting`
- `documentation`
- `infrastructure`
- `windows_service`
- `integration`
- `template`
- `sample`
- `learning_reference`
- `core_product`
- `strategic_product`
- `legacy_version`
- `experimental`
- `family_governance`

## Required tags

Recommended tags include business domain, technology, lifecycle, security sensitivity, business priority, production status and migration status.

## Archive policy

No repository is archived during discovery, family creation, branch inventory or initial comparison.

A future archive recommendation is allowed only after:

1. canonical repository approval;
2. complete branch and tag inventory;
3. unique commit and file comparison;
4. feature migration or explicit rejection;
5. secret and sensitive-history review;
6. successful build and tests;
7. deployment and rollback evidence;
8. explicit approval from Mostafa.

Archive is preferred over delete. Delete remains prohibited.

## Concurrency rule

The repository intelligence audit owns family metadata and reports. A separate consolidation agent may consume approved family records, but it must write execution artifacts under `repository-intelligence/migration/consolidation/` and must not overwrite family evidence concurrently.
