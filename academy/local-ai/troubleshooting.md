# LM Studio Troubleshooting

## Model Does Not Load

- Reduce context size.
- Use a smaller quantization.
- Reduce GPU offload.
- Close memory-heavy applications.
- Verify free disk space and page-file capacity.

## System Becomes Unresponsive

The machine is usually paging heavily. Select a smaller model, lower context, or reduce concurrent workloads.

## Slow Output

- Reduce context.
- Test fewer GPU-offloaded layers.
- Use a smaller model.
- Move model files to NVMe.
- Avoid loading multiple models.

## Weak Arabic

Benchmark Arabic separately. Coding performance does not guarantee strong Arabic business-language performance.

## Good Demo, Bad Production Result

One successful prompt proves nothing. Use a fixed benchmark pack and rerun it after every model, quantization, context, or runtime change.

## Unsafe Agent Behavior

- Keep `DraftOnly=true`.
- Validate structured output.
- Block direct database writes.
- Route actions through Shared Action Core.
- Require approval based on policy and risk.
- Store TraceId, ConversationId, TenantId, tool calls, validation results, and final decision.
