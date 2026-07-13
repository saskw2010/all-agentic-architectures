# SKY365 Agentic Architecture Integration Index

> Purpose: use this repository as a benchmark and reference catalog for SKY365 without rebuilding capabilities that already exist under different names.

## Mandatory engineering rule

For every architecture below:

1. Inspect the current SKY365 code, runtime, database, workflows, traces, APIs, and UI.
2. Map existing capabilities even when names differ.
3. Verify the capability with evidence.
4. Implement only the missing or broken integration.
5. Keep business mutations `DraftOnly` unless policy and approval explicitly allow execution.
6. Record every integration in Agent Observatory.

## Status legend

| Status | Meaning |
|---|---|
| `VERIFIED` | Exists and has runtime/database evidence |
| `PARTIAL` | Core exists but integration, persistence, or coverage is incomplete |
| `AUDIT` | Likely exists under another name; inspect before implementation |
| `GAP` | No equivalent identified yet |
| `OPTIONAL` | Not required for the current enterprise ERP roadmap |

## SKY365 shared integration points

| SKY365 capability | Architecture role |
|---|---|
| Shared Action Core | Unified action/tool execution boundary |
| Semantic Dictionary | Intent, entity, action, and business-term grounding |
| Policy Corpus Retrieval | Permission, risk, governance, and approval grounding |
| DraftWorkflowArtifact | Safe proposed workflow/action output |
| Workflow Engine | Long-running stages, tasks, approvals, and actions |
| Agent Observatory | Trace, step, LLM, tool, DB, memory, policy, and error visibility |
| Agent Workbench / Mascot | User-facing orchestration and explanation surface |
| Deterministic fallback | Stable non-LLM routing and recovery path |

## Master architecture index

### 1. Reasoning & Reflection

| Architecture | Repository pattern | Current SKY365 mapping | Status | Integration action |
|---|---|---|---|---|
| Reflection | Generate → critique → refine | Draft → Validation → Revision | `PARTIAL` | Verify whether revisions are iterative or single-pass; add bounded retry only if missing |
| Reflexion | Store verbal reflection in episodic memory | Agent memory + trace outcomes | `AUDIT` | Check whether failures/approvals become reusable memory; avoid storing hidden reasoning |
| Chain-of-Verification | Independently verify claims | Validation + policy + DB/tool evidence | `PARTIAL` | Add claim/evidence validation for high-risk answers |
| Self-Discover | Select and compose reasoning modules | Router + planner + skills | `AUDIT` | Map existing skills and planner modules before adding a composer |
| Constitutional AI | Evaluate against explicit principles | Policy corpus + guardrails | `PARTIAL` | Make policy rules versioned, cited, and observable |

### 2. Sampling & Search

| Architecture | Repository pattern | Current SKY365 mapping | Status | Integration action |
|---|---|---|---|---|
| Self-Consistency | Multiple candidate paths + vote | Possible multi-model/router path | `OPTIONAL` | Use only for high-value ambiguous decisions due to cost |
| Tree of Thoughts | Search multiple reasoning branches | Planner alternatives | `OPTIONAL` | Do not add globally; evaluate for planning-heavy workflows only |
| LATS | Tree search with reward feedback | No confirmed equivalent | `GAP` | Defer until measurable reward functions exist |
| Mental Loop | Simulate → score → choose | DraftOnly + validation | `PARTIAL` | Add deterministic scoring for proposed actions where useful |
| Ensemble | Aggregate multiple agents/models | Multi-provider routing | `OPTIONAL` | Use for legal, forecasting, or critical review, not routine ERP commands |

### 3. Retrieval / RAG

| Architecture | Repository pattern | Current SKY365 mapping | Status | Integration action |
|---|---|---|---|---|
| Agentic RAG | Agent chooses when/what to retrieve | Route selection + knowledge tools | `PARTIAL` | Verify retrieval decision is explicit and traced |
| Corrective RAG | Grade retrieval and fall back | Validation + fallback | `AUDIT` | Check document grading and alternate-source fallback |
| Self-RAG | Reflect on retrieved documents | Policy/knowledge evidence review | `GAP` | Add only for citation-sensitive domains |
| Adaptive RAG | Route by query complexity | Intent/risk/router | `PARTIAL` | Add deterministic complexity categories and route evidence |
| GraphRAG | Knowledge graph + summaries | Semantic dictionary / future graph | `AUDIT` | Verify whether entity relationships already exist in ERP metadata |

### 4. Memory

| Architecture | Repository pattern | Current SKY365 mapping | Status | Integration action |
|---|---|---|---|---|
| Episodic + Semantic Memory | Turns + facts | Conversation/business memory | `PARTIAL` | Separate event history from durable facts and tenant-scope both |
| Graph Memory | Subject-predicate-object facts | ERP relations / semantic metadata | `AUDIT` | Reuse current relational metadata before adding a graph store |
| MemGPT | Tiered working and archival memory | Context builder + persistence | `PARTIAL` | Define working, session, durable, and archive tiers |
| Voyager | Reusable executable skills | Skills + Shared Action Core | `PARTIAL` | Store approved reusable workflows, never arbitrary unsafe code |
| Agent Workflow Memory | Reuse successful workflow recipes | Workflow engine + artifacts | `PARTIAL` | Persist approved workflow templates with versioning and provenance |

### 5. Tools & Actions

| Architecture | Repository pattern | Current SKY365 mapping | Status | Integration action |
|---|---|---|---|---|
| Tool Use | Single or multiple tool execution | Shared Action Core | `PARTIAL` | Close all entry points through the shared core |
| ReAct | Reason/action/observation loop | Route → Plan → Tool → Validate | `PARTIAL` | Confirm bounded loops, stop conditions, and full observability |
| Planning | Decompose task before execution | Action planner | `PARTIAL` | Persist plans as typed artifacts and validate dependencies |
| PEV | Plan → Execute → Verify | Flight Recorder pipeline | `VERIFIED` | Maintain strict separation and evidence per stage |
| SWE-Agent | Coding tools in structured loop | External coding agents | `OPTIONAL` | Keep outside ERP runtime; integrate through governed development workflows |
| Browser / Computer Use | Operate UI/browser | No confirmed production path | `OPTIONAL` | Require sandboxing, allowlists, screenshots, and approvals before adoption |

### 6. Multi-Agent

| Architecture | Repository pattern | Current SKY365 mapping | Status | Integration action |
|---|---|---|---|---|
| Multi-Agent | Specialist agents collaborate | Future domain agents | `PARTIAL` | Standardize contracts, handoffs, ownership, and correlation IDs |
| Blackboard | Shared workspace for agents | Workflow artifacts / shared state | `AUDIT` | Check whether workflow tables and artifacts already provide this role |
| Debate | Agents argue opposing positions | No confirmed equivalent | `OPTIONAL` | Use only for high-risk advisory decisions |
| STORM | Multi-perspective research synthesis | Research/legal agents | `OPTIONAL` | Relevant to SkyLegalAI research, not routine ERP execution |
| Meta-Controller | Select and coordinate specialists | Agent router/orchestrator | `PARTIAL` | Make routing deterministic where possible and log alternatives |

### 7. Safety & Routing

| Architecture | Repository pattern | Current SKY365 mapping | Status | Integration action |
|---|---|---|---|---|
| Dry-Run | Simulate without mutation | DraftOnly | `VERIFIED` | Keep as platform default |
| Reflexive Metacognitive | Inspect confidence/risk before action | Policy + risk + approval | `PARTIAL` | Standardize confidence, uncertainty, escalation, and abstention |
| Computer Use Safety | Govern UI actions | No confirmed production execution | `GAP` | Do not enable without sandbox, policy, approval, and replay evidence |

### 8. Specialty & Cross-Cutting

| Architecture | Repository pattern | Current SKY365 mapping | Status | Integration action |
|---|---|---|---|---|
| RLHF Self-Improvement | Learn from preference feedback | User approvals/feedback | `OPTIONAL` | Start with analytics and offline evaluation, not online model updates |
| Cellular Automata | Emergent local-rule simulation | No ERP need identified | `OPTIONAL` | No current implementation priority |
| Deterministic Picker | LLM emits categories; code decides | Deterministic fallback/policy | `PARTIAL` | Expand typed categorical outputs across routing, risk, and validation |

## Recommended integration order

### Priority A — complete current platform foundations

1. Shared Action Core for all entry points.
2. Semantic Dictionary V1.
3. Policy Corpus Retrieval.
4. DraftWorkflowArtifact.
5. End-to-end Supplier Approval Workflow demo.
6. Persisted Journey Explorer using Agent Observatory data.

### Priority B — improve agent quality safely

1. Adaptive RAG.
2. Corrective RAG.
3. Reflection with bounded revisions.
4. Typed deterministic picker outputs.
5. Workflow memory from approved successful executions.

### Priority C — selective advanced patterns

1. Multi-agent specialist handoffs.
2. Meta-controller routing.
3. GraphRAG only if current ERP metadata cannot satisfy relationship retrieval.
4. Ensemble/debate only for high-risk advisory domains.

## Evidence required before marking an item VERIFIED

- Source file/class/service location.
- Database table or persisted artifact where applicable.
- Runtime trace ID.
- Observatory steps showing the capability was invoked.
- Input/output example.
- Policy and approval behavior.
- Build result.
- Clear statement of whether the path is production, scaffold, demo, or in-memory.

## Integration contract proposal

Every architecture adapter should expose a common contract conceptually equivalent to:

```text
ArchitectureId
Family
Version
SupportedIntents
RequiredContext
RequiredTools
ExecutionMode
RiskProfile
PolicyRequirements
ExecuteAsync
ValidateAsync
ExplainAsync
```

Every execution must emit:

```text
TraceId
ConversationId
SessionId
RequestId
CorrelationId
UserId
TenantId
ArchitectureId
Plan
Steps
ToolCalls
DatabaseCalls
LlmCalls
MemoryEvents
PolicyDecisions
Validation
FinalStatus
```

## Completion definition

SKY365 is not considered compliant because an architecture name exists in code.

An architecture is complete only when:

- its real business use case is defined;
- the existing implementation has been audited;
- duplicate infrastructure was avoided;
- the integration uses shared platform services;
- the execution is observable and persisted;
- security, tenant isolation, and approvals are enforced;
- an end-to-end trace proves the behavior.
