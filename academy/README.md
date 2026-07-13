# Agentic Systems Academy — Visual Knowledge Base

A self-contained Arabic-first static site that turns the Agentic Systems curriculum into an interactive visual series and connects each concept to the Sky365 Agentic implementation journey.

## Included in V1

- Premium landing page and visual identity
- Interactive nine-world project map
- 20 infographic-style visual lessons
- Search and domain filters
- Full-screen detail posters
- Learning roadmap
- Sky365 Agentic case-study section
- Responsive RTL/LTR presentation
- Dark and light themes

## Structure

```text
academy/
├── index.html
├── README.md
├── assets/
│   ├── styles.css
│   └── app.js
└── data/
    └── series.js
```

## Run locally

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8080 --directory academy
```

Then open `http://localhost:8080`.

## Content model

Each infographic includes:

1. A central architectural idea
2. A visual sequence or layered flow
3. A common implementation failure
4. A Sky365 engineering lens

The objective is not to collect attractive cards. The objective is to build an applied visual textbook for enterprise agentic systems.

## Next production milestones

- Exportable SVG/PNG social versions for each infographic
- Dedicated permalink page for every part
- Research citations and source registry
- Arabic/English content parity
- GitHub Pages deployment
- Sky365 diagrams: Shared Action Core, Flight Recorder, Observatory, and Supplier Approval E2E
