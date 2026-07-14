# Local AI Academy

قسم عملي داخل **Agentic Systems Academy** لتشغيل النماذج محليًا، اختيار الـquantization المناسب، قياس الأداء، وربط LM Studio بمنصة SKY365 دون السماح للنموذج بتنفيذ إجراءات ERP مباشرة.

## Contents

- [Colibrì and Disk Streaming](colibri-and-disk-streaming.md)
- [Mixture of Experts Explained](mixture-of-experts-explained.md)
- [LM Studio Implementation Plan](lm-studio-implementation-plan.md)
- [Model Selection for 48 GB RAM](model-selection-for-48gb-ram.md)
- [Benchmarking Template](benchmarking-template.md)
- [Troubleshooting](troubleshooting.md)

## Operating Principle

Use local models for privacy, low-cost drafting, extraction, classification, routing, and bounded reasoning. Use cloud or remote-GPU models for frontier reasoning and very large-context workloads.

> Local models are **DraftOnly by default**. Any ERP action must pass through SKY365 Model Router, Policy Engine, validation, approval rules, Shared Action Core, and observability.
