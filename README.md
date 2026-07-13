<div align="center">

# Sky365 Agentic Knowledge Platform

### Agentic Systems Academy · Learning Universe · Strategy & Research · Sky365 Architecture

**Created and maintained by Mostafa Elnagar**  
CEO & CTO · AI Architect · **WytSky Clouding Solutions / Sky365**

[![Portal](https://img.shields.io/badge/MAIN_PORTAL-OPEN-38e7d2?style=for-the-badge)](https://saskw2010.github.io/all-agentic-architectures/)
[![Academy](https://img.shields.io/badge/AGENTIC_ACADEMY-OPEN-5d8cff?style=for-the-badge)](https://saskw2010.github.io/all-agentic-architectures/academy/)
[![Learning Paths](https://img.shields.io/badge/LEARNING_PATHS-16_PATHS-a97cff?style=for-the-badge)](https://saskw2010.github.io/all-agentic-architectures/learning-paths/)
[![Strategy](https://img.shields.io/badge/STRATEGY_INDEX-OPEN-ffbd5b?style=for-the-badge)](https://saskw2010.github.io/all-agentic-architectures/strategy/)
[![License](https://img.shields.io/badge/license-MIT-ec4899?style=for-the-badge)](LICENSE)

</div>

---

## ما هو هذا المستودع؟

هذا المستودع يجمع طبقتين واضحتين:

1. **الأساس التقني المفتوح المصدر**: مكتبة تضم 35 نمطًا من معماريات Agentic AI مع notebooks واختبارات ووثائق تقنية.
2. **امتداد Sky365 الخاص بنا**: بوابة تعليمية واستراتيجية وبصرية تربط المفاهيم العامة بخبرتنا العملية في بناء **Sky365 Agentic ERP**.

هدف امتدادنا ليس إعادة تسمية المشروع الأصلي، بل بناء منظومة معرفية مستقلة فوقه تشمل:

- Agentic Systems Academy
- Interactive Infographics and Motion Systems
- Learning Universe with 16 educational paths
- Strategy & Research Index
- Sky365 case studies and architecture maps
- Research-to-product decision system

---

## روابط ومسارات مشروعنا

| التطبيق | الرابط المباشر | الحالة |
|---|---|---|
| **Sky365 Agentic Portal** | https://saskw2010.github.io/all-agentic-architectures/ | Live |
| **Agentic Systems Academy** | https://saskw2010.github.io/all-agentic-architectures/academy/ | Live |
| **Learning Universe** | https://saskw2010.github.io/all-agentic-architectures/learning-paths/ | Live |
| **Strategy & Research Index** | https://saskw2010.github.io/all-agentic-architectures/strategy/ | Live |
| **Research Library** | `/research/` | Planned |
| **Sky365 Architecture Lab** | `/sky365/` | Planned |

### Public route map

```text
https://saskw2010.github.io/all-agentic-architectures/
├── academy/
├── learning-paths/
├── strategy/
├── research/        # planned
└── sky365/          # planned
```

---

## Sky365 Learning & Strategy Layer

### 1. Agentic Systems Academy

منهج بصري عربي أولًا يشرح:

- Foundations and agent operating loops
- Design patterns, planning and reflection
- Memory, context engineering and RAG
- Tools, MCP and multi-agent systems
- Security, governance and approval gates
- Observability, evaluation and production
- Sky365 Shared Action Core and Flight Recorder

### 2. Learning Universe

فهرس حي يحتوي على 16 مسارًا تعليميًا، منها:

- Inside the LLM — From Query to Answer
- Sky365 Agent Journey
- Skyverse Evolution Story
- RAG, Memory & Semantic Systems
- Multi-Agent, MCP & Interoperability
- AI Coding Harness & Skills
- Local AI & Inference
- MLOps, Kubeflow and AI Infrastructure
- Robotics & Physical AI
- Visual Storytelling, Lottie and YouTube Studio

### 3. Strategy & Research Index

خريطة تربط الأبحاث بالقرارات والتنفيذ، وتشمل:

- Product architecture
- Semantic Dictionary and Policy Corpus
- Execution safety and DraftOnly defaults
- Agent Observatory and evidence
- Supplier Approval reference workflow
- Adopt / Watch / Reject research decisions
- 90-day execution roadmap

---

## Sky365 engineering principles

- **Check first, then implement only what is missing or broken.**
- **Shared Action Core before adding more entry points.**
- **DraftOnly and approval gates for sensitive ERP operations.**
- **Evidence by design: traces, policy basis, inputs and results.**
- **One deep reference workflow before broad multi-agent expansion.**
- **Research must end in a decision, experiment, component or measurable outcome.**

---

## Repository structure

```text
all-agentic-architectures/
├── portal/                 # Main Sky365 portal
├── academy/                # Visual Agentic Systems Academy
│   └── strategy/           # Strategy application source
├── learning-paths/         # 16-path Learning Universe
├── agentic_architectures/  # Upstream Python architecture library
├── notebooks/              # Runnable architecture notebooks
├── docs/                   # Upstream technical documentation
└── .github/workflows/      # CI and GitHub Pages deployment
```

---

## Run the Sky365 applications locally

```bash
git clone https://github.com/saskw2010/all-agentic-architectures.git
cd all-agentic-architectures

python -m http.server 8080 --directory portal
python -m http.server 8081 --directory academy
python -m http.server 8082 --directory learning-paths
```

Then open:

```text
http://localhost:8080
http://localhost:8081
http://localhost:8082
```

---

## Python architecture library

The underlying Python package keeps the original uniform interface across the 35 architectures:

```bash
pip install "agentic-architectures[nebius,faiss,tavily]"
```

```python
from agentic_architectures import get_llm
from agentic_architectures.architectures import Reflection

architecture = Reflection(llm=get_llm(), max_iterations=2, target_score=8)
result = architecture.run("Write a haiku about a glacier.")
print(result.output)
```

Technical architecture documentation remains available in `docs/`. The original upstream documentation is linked below.

---

## Authorship and attribution

### Sky365 extension

The following work in this fork is created and maintained by:

**Mostafa Elnagar**  
CEO & CTO · AI Architect  
**WytSky Clouding Solutions / Sky365**  
Email: `info@wytsky.com`

This includes the portal, academy extensions, visual systems, learning paths, strategic index, Sky365 case studies, and the research-to-product structure.

### Original open-source foundation

The original **Agentic Architectures** Python library, its 35 architecture implementations, notebooks, tests and original technical documentation were created by **Fareed Khan** and are distributed under the MIT License.

- Upstream repository: https://github.com/FareedKhan-dev/all-agentic-architectures
- Upstream documentation: https://fareedkhan-dev.github.io/all-agentic-architectures/

We preserve this attribution and do not claim authorship of the upstream library.

---

## Citation

### Cite the Sky365 knowledge extension

```bibtex
@misc{elnagar2026sky365agentic,
  title        = {Sky365 Agentic Knowledge Platform: Academy, Learning Universe and Strategy Index},
  author       = {Elnagar, Mostafa},
  year         = {2026},
  howpublished = {\url{https://github.com/saskw2010/all-agentic-architectures}},
  note         = {WytSky Clouding Solutions / Sky365 visual and strategic knowledge extension}
}
```

### Cite the original architecture library

```bibtex
@misc{khan2026agentic,
  title        = {Agentic Architectures: A Library of 35 Production-Grade Agentic AI Patterns},
  author       = {Khan, Fareed},
  year         = {2026},
  howpublished = {\url{https://github.com/FareedKhan-dev/all-agentic-architectures}},
  note         = {MIT licensed Python library and runnable textbook}
}
```

---

## License

The repository remains under the [MIT License](LICENSE).

- Upstream library copyright remains with its original author.
- New Sky365 documentation, portal structure and visual knowledge extensions are attributed to **Mostafa Elnagar / WytSky / Sky365**.

<div align="center">

**Mostafa Elnagar · WytSky Clouding Solutions · Sky365**

[Main Portal](https://saskw2010.github.io/all-agentic-architectures/) ·
[Academy](https://saskw2010.github.io/all-agentic-architectures/academy/) ·
[Learning Paths](https://saskw2010.github.io/all-agentic-architectures/learning-paths/) ·
[Strategy](https://saskw2010.github.io/all-agentic-architectures/strategy/)

</div>
