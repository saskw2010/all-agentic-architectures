# LM Studio Implementation Plan for SKY365

## Target Machine

- Windows 11 Pro
- 48 GB RAM
- Intel i7-8750H
- NVIDIA Quadro P2000 4 GB
- Fast NVMe recommended

## Phase 1 — Environment

1. Update LM Studio.
2. Store models on the fastest NVMe drive.
3. Keep at least 100–150 GB free.
4. Start with 4K context.
5. Move to 8K only after measuring memory and speed.
6. Increase GPU offload gradually.
7. Record load time, RAM, VRAM, first-token latency, Tokens/sec, and stability.

## Phase 2 — Model Tiers

### Daily Model

- 7B–14B
- Q4_K_M or Q5_K_M
- Chat, extraction, summarization, classification, routing, drafting.

### Heavy Local Model

- 20B–32B
- Q3_K_M or Q4_K_M
- Coding, deeper analysis, controlled planning.

### Research Only

- 70B-class models on this machine.
- GLM-scale disk-streaming experiments.
- Extremely long contexts.

## Phase 3 — Standard Evaluation Pack

### Arabic ERP

> اشرح الفرق بين أمر شراء، إذن استلام، وفاتورة مورد داخل نظام ERP.

### SQL Server

> Write a query that identifies customers with invoices overdue by more than 90 days and no collection follow-up record.

### Agent Planning

> Analyze a supplier-creation request. Identify required data, risks, approvals, and execution steps without performing any action.

### C# Integration

> Create a robust .NET service that calls an OpenAI-compatible endpoint with cancellation, timeout, and error handling.

## Phase 4 — Local Server

Expected endpoint:

```text
http://localhost:1234/v1
```

Suggested configuration:

```json
{
  "LocalAI": {
    "Provider": "LMStudio",
    "BaseUrl": "http://localhost:1234/v1",
    "ApiKey": "lm-studio",
    "TimeoutSeconds": 180,
    "MaxRetries": 1,
    "DraftOnly": true
  }
}
```

## Phase 5 — SKY365 Integration

```text
Agent Request
  -> OmniRoute / Model Router
  -> Task Classification
  -> Policy Check
  -> LM Studio or Cloud Model
  -> Output Validation
  -> Approval when required
  -> Shared Action Core
  -> Trace + Flight Recorder
```

## Acceptance Criteria

- Stable loading without heavy paging.
- Repeatable benchmark results.
- Acceptable Arabic quality.
- Correct structured outputs.
- No direct ERP execution from model output.
- Full observability and correlation IDs.
