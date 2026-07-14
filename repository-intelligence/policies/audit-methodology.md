# Repository Audit Methodology

## Repository-Level Fields
- Repository full name
- Visibility
- Archived status
- Fork/original status when detectable
- Default branch
- Size
- Description and topics when available
- Primary languages and frameworks
- Version signals
- Latest commit SHA, date, author, and message
- Latest pull request and issue activity
- CI/workflow status when available
- Documentation quality
- Test/build indicators
- Maintenance classification

## Version Discovery Order
1. Git tags and releases
2. Explicit `VERSION` or version metadata files
3. Project manifests such as `.csproj`, `Directory.Build.props`, `package.json`, `pyproject.toml`, `setup.py`, `Cargo.toml`, `pom.xml`, and similar
4. README/changelog declarations
5. Repository naming conventions only as a weak signal

## Related-Repository Comparison
Repositories are grouped by naming similarity, shared file structure, framework, commit history signals, and project manifests.

A newer commit date is not sufficient to declare a repository canonical. The comparison must consider functional completeness, source tree depth, build viability, database migrations, tests, deployment assets, documentation, branch activity, and meaningful code changes.

## Recommended Classifications
- Active canonical candidate
- Active secondary/experimental
- Historical snapshot
- Duplicate candidate
- Fork/reference repository
- Empty or placeholder
- Archive candidate
- Manual review required

## Output Policy
Reports must clearly separate observed facts from inferred recommendations. No destructive action is authorized by an audit report.
