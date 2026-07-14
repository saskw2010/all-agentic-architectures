# Model Selection for 48 GB RAM

## Recommended Bands

| Tier | Size | Quantization | Primary Use |
|---|---:|---|---|
| Fast | 7B–9B | Q4_K_M / Q5_K_M | Routing, extraction, summarization |
| Balanced | 12B–14B | Q4_K_M | Arabic, coding, ERP analysis |
| Heavy | 20B–32B | Q3_K_M / Q4_K_M | Deeper reasoning and coding |
| Experimental | 70B+ | Low quantization | Research only |

## Selection Rule

The best model is not the largest model that loads. It is the smallest model that passes the acceptance criteria at an acceptable latency.

## Test Sequence

1. Test one 8B model.
2. Test one 14B model.
3. Test one 32B model.
4. Compare quality, speed, RAM, and stability.
5. Keep only models that have a clear operational role.

## Recommended Runtime Roles

- **Fast local:** classification, extraction, intent routing.
- **Balanced local:** drafting, Arabic business tasks, SQL and C# assistance.
- **Heavy local:** bounded analysis and coding when latency is acceptable.
- **Cloud/remote GPU:** frontier reasoning, complex multimodal tasks, and large contexts.
