param(
  [string]$Owner = "saskw2010",
  [switch]$IncludeExistingFamilies
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  throw "GitHub CLI (gh) is required. Install it, then run: gh auth login"
}

$null = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
  throw "GitHub CLI is not authenticated. Run: gh auth login"
}

$families = @(
  @{ Name="wytsky-blazorshop-family"; Description="BlazorShop and WytSky Commerce family governance, comparison, and migration intelligence"; Existing=$true },
  @{ Name="wytsky-authentication-family"; Description="Authentication and Identity family governance, security review, and migration intelligence"; Existing=$true },
  @{ Name="wytsky-net5wasm-family"; Description="Net5Wasm and Blazor application base family governance and migration intelligence"; Existing=$true },
  @{ Name="wytsky-erp-family"; Description="ERP and SAS ERP family governance, feature recovery, and migration intelligence" },
  @{ Name="wytsky-cpd-event-family"; Description="CPD Event Planner and Event Management version-family intelligence" },
  @{ Name="wytsky-cpd-helpdesk-family"; Description="CPD HelpDesk product-family intelligence" },
  @{ Name="wytsky-sky365-core-family"; Description="SKY365 Platform Core family governance and architecture intelligence" },
  @{ Name="wytsky-sky365-offers-family"; Description="SKY365 Offers strategic product-family intelligence" },
  @{ Name="wytsky-appointment-planner-family"; Description="Appointment Planning web and mobile product-family intelligence" },
  @{ Name="wytsky-skoola-family"; Description="Skoola education platform product-family intelligence" },
  @{ Name="wytsky-ezee-family"; Description="eZee education and quiz product-family intelligence" },
  @{ Name="wytsky-zain-task-family"; Description="Zain Agenda and task-management product-family intelligence" },
  @{ Name="wytsky-file-upload-family"; Description="File upload component-family intelligence" },
  @{ Name="wytsky-collaboration-family"; Description="HelpDesk, Forum, and Collaboration product-family intelligence" },
  @{ Name="wytsky-delivery-family"; Description="WytSky Delivery version-family intelligence" },
  @{ Name="wytsky-hms-family"; Description="Healthcare and HMS product-family intelligence and security review" },
  @{ Name="wytsky-youth-apps-family"; Description="Youth Applications product-family intelligence" },
  @{ Name="wytsky-windows-services-family"; Description="CMGS Messaging and Windows Services component-family intelligence" },
  @{ Name="wytsky-mobile-family"; Description="MAUI and Xamarin mobile platform-family intelligence" },
  @{ Name="wytsky-websites-family"; Description="Websites, landing pages, and portfolio component-family intelligence" },
  @{ Name="wytsky-agentic-ai-family"; Description="AI, Agentic, RAG, and MCP platform-family intelligence" },
  @{ Name="wytsky-governance-family"; Description="Knowledge, documentation, and governance platform-family intelligence" }
)

$created = @()
$skipped = @()
$failed = @()

foreach ($family in $families) {
  if ($family.Existing -and -not $IncludeExistingFamilies) {
    $skipped += "$Owner/$($family.Name) (known existing family)"
    continue
  }

  $fullName = "$Owner/$($family.Name)"
  Write-Host "Checking $fullName ..."

  gh repo view $fullName --json name,isPrivate 1>$null 2>$null
  if ($LASTEXITCODE -eq 0) {
    $skipped += "$fullName (already exists)"
    continue
  }

  try {
    gh repo create $fullName --private --add-readme --disable-wiki --description $family.Description
    if ($LASTEXITCODE -ne 0) { throw "gh repo create failed" }

    $readme = @"
# $($family.Name)

Private governance repository for repository-family intelligence.

## Safety policy

- Source repositories remain unchanged.
- No deletion, archive, rename, merge, or force-push is authorized.
- Canonical selection requires evidence and owner approval.
- Migration work must use dedicated branches and pull requests.

## Planned structure

- `family/family.json`
- `family/members.json`
- `family/decisions.json`
- `family/health.json`
- `reports/`
- `migration/`
- `validation/`
- `history/`

Source of truth: `saskw2010/all-agentic-architectures`, branch `repository-intelligence-hub-v2`.
"@

    $encoded = [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($readme))
    $currentSha = gh api "repos/$fullName/contents/README.md" --jq '.sha'
    gh api --method PUT "repos/$fullName/contents/README.md" -f message="Initialize family governance README" -f content=$encoded -f sha=$currentSha 1>$null

    $created += $fullName
  }
  catch {
    $failed += "$fullName :: $($_.Exception.Message)"
  }
}

Write-Host ""
Write-Host "Created: $($created.Count)"
$created | ForEach-Object { Write-Host "  + $_" }
Write-Host "Skipped: $($skipped.Count)"
$skipped | ForEach-Object { Write-Host "  = $_" }
Write-Host "Failed: $($failed.Count)"
$failed | ForEach-Object { Write-Host "  ! $_" }

if ($failed.Count -gt 0) { exit 1 }
