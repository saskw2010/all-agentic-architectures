# Agentic Systems Academy — Visual Knowledge Base

**Created and maintained by Mostafa Elnagar**  
CEO & CTO · AI Architect · **WytSky Clouding Solutions / Sky365**

Arabic-first visual learning platform that turns Agentic Systems architecture into interactive infographics, animated diagrams, structured learning paths, and Sky365 enterprise case studies.

## Public links

- Main Portal: https://saskw2010.github.io/all-agentic-architectures/
- Academy: https://saskw2010.github.io/all-agentic-architectures/academy/
- Learning Universe: https://saskw2010.github.io/all-agentic-architectures/learning-paths/
- Strategy & Research Index: https://saskw2010.github.io/all-agentic-architectures/strategy/

## Current scope

- Premium Arabic-first landing experience
- Interactive nine-world project map
- 20 infographic-style visual lessons
- Four independent architecture SVG posters
- Animated SVG, Lottie and GIF motion systems
- Search and domain filters
- Full-screen detail posters
- Sky365 Agentic case studies
- Flight Recorder and observability views
- Responsive RTL/LTR presentation
- Dark and light themes

## Content model

Each visual lesson should include:

1. Big Picture
2. Mental Model
3. Scientific / Architectural View
4. Visual Flow or Layer Map
5. Common Failure Mode
6. Sky365 Engineering Lens
7. Sources and Evidence
8. Practical Lab or Case Study

The objective is not to collect attractive cards. The objective is to build an applied visual textbook for enterprise Agentic Systems.

## Project routes

```text
/
├── academy/          # Visual Agentic Systems Academy
├── learning-paths/   # 16-path Learning Universe
├── strategy/         # Strategy & Research Index
├── research/         # Planned source and ADR library
└── sky365/           # Planned architecture lab
```

## Source structure

```text
academy/
├── index.html
├── README.md
├── assets/
│   ├── styles.css
│   ├── app.js
│   ├── animations/
│   └── infographics/
├── data/
│   └── series.js
└── strategy/
    ├── index.html
    └── assets/
```

## Run locally

```bash
python -m http.server 8081 --directory academy
```

Then open:

```text
http://localhost:8081
```

## Sky365 differentiation

Our value is not repeating general definitions of ReAct, RAG or Multi-Agent Systems. The Academy connects those concepts to real enterprise implementation concerns:

- Shared Action Core
- Semantic Dictionary
- Policy Corpus Retrieval
- DraftOnly safety
- Approval gates
- Agent Observatory
- Flight Recorder
- Supplier Approval E2E
- Multi-tenant security and evidence

## Authorship and upstream attribution

The Academy, Learning Universe, Strategy Index, Sky365 diagrams and visual knowledge extensions are created and maintained by **Mostafa Elnagar / WytSky / Sky365**.

The underlying 35-architecture Python library and its original technical documentation come from the MIT-licensed upstream project by **Fareed Khan**:

- https://github.com/FareedKhan-dev/all-agentic-architectures
- https://fareedkhan-dev.github.io/all-agentic-architectures/

We preserve the upstream attribution and do not claim authorship of the original Python library.

## Next production milestones

- Dedicated permalink for every learning lesson
- Research citations and Source Registry
- Arabic/English content parity
- Exportable PNG and PDF packages
- Inside the LLM interactive journey
- Sky365 Shared Action Core deep map
- Supplier Approval reference workflow
- Research Library and Sky365 Architecture Lab
