# Sky365 Agentic Knowledge Platform — Canonical Index

This file is the repository-level source of truth for application discovery and navigation.

## Hierarchy

```text
Sky365 Agentic Knowledge Platform
│
├── 01. Agentic Systems Academy              /academy/
│   ├── Foundations and operating loops
│   ├── Design patterns, planning and reflection
│   ├── Memory, context engineering and RAG
│   ├── Tools, MCP and multi-agent systems
│   ├── Security, governance and approval gates
│   └── Observability, evaluation and production
│
├── 02. Learning Universe                    /learning-paths/
│   └── Sixteen specialized learning paths
│
├── 03. Strategy & Research Index            /strategy/
│   ├── Product architecture
│   ├── Semantic Dictionary and Policy Corpus
│   ├── Decision register
│   └── 90-day roadmap
│
├── 04. Agentic Design Studio                /agentic-design-studio/
│   ├── Penpot and design tokens
│   ├── MCP-assisted design operations
│   ├── Design-to-Blazor workflow
│   └── Shared Action Core and Flight Recorder
│
├── 05. Skyverse Stories                     /stories/
│   └── Interactive architecture and AI-history stories
│
├── 06. Research Library                     /research/          [PLANNED]
│   └── Sources, critiques, ADRs and adopt/watch/reject decisions
│
└── 07. Sky365 Knowledge Room                /sky365/
    ├── Human voice and transcript
    ├── Multi-provider agent council
    ├── Scoped document and company knowledge access
    ├── Shared conversation memory
    ├── Evidence and policy gates
    └── Decisions, actions, podcast and institutional memory
```

## Public navigation

- Main portal: `/`
- Complete visual index: `/platform-index.html`
- Knowledge Room reference application: `/sky365/`

## No-orphan-page policy

A user-facing page is not complete unless all of the following are true:

1. It is reachable from its application's index page.
2. The application is reachable from the main portal or the complete platform index.
3. The page or application has a visible route back to the main portal.
4. Important applications also link back to the complete platform index.
5. Planned routes are listed explicitly as planned; hidden placeholders are not allowed.
6. Local links are reviewed before merge, and missing link targets block release.

## Release audit checklist

- [ ] Every application listed above has the correct status.
- [ ] Every live application has a reachable index page.
- [ ] Main portal links resolve to every live application.
- [ ] `platform-index.html` includes every live and planned application.
- [ ] Every application provides a route back to the portal.
- [ ] Every important internal page is linked from its parent index.
- [ ] No user-facing HTML file is left without an inbound navigation path.

Maintained by **Mostafa Elnagar / WytSky Clouding Solutions / Sky365**.