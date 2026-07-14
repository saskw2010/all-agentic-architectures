# Sky365 Knowledge Room

**Reference application for governed human–agent knowledge meetings.**

## Product definition

Sky365 Knowledge Room is not a side-by-side multi-LLM chat. It is a meeting operating system where humans and AI agents share a governed conversation history, receive scoped access to company and meeting knowledge, and produce traceable outcomes.

## Core capabilities

- Human voice recording and transcript retention
- Multiple humans identified inside one meeting
- OpenAI, Gemini, Claude, Sky365 and local-model adapters
- Agent roles independent from model providers
- Turn-by-turn or selected-agent discussion
- Shared meeting history and persistent memory
- Company, project, customer and meeting knowledge scopes
- Per-agent document permissions
- Discussion rules, policy gates and confidentiality controls
- Evidence-linked responses and confidence disclosure
- Summary, decisions, objections, action items and decision rationale
- Podcast, transcript, article, PDF and knowledge-base outputs

## Reference architecture

```text
Human Voice / Text
        ↓
Speech + Transcript Layer
        ↓
Meeting Orchestrator
        ↓
Rules and Policy Gates
        ↓
Knowledge Scope + Retrieval
        ↓
Sky365 LLM Gateway
        ├── OpenAI Adapter
        ├── Gemini Adapter
        ├── Anthropic Adapter
        └── Local Model Adapter
        ↓
Evidence + Meeting Memory + Outcomes
```

## Knowledge hierarchy

```text
Organization Knowledge
├── General company knowledge
├── Departments and policies
├── Customers and classifications
├── Running projects
├── Historical meetings
└── Contracts and operational evidence

Meeting Knowledge
├── Topic and objectives
├── Discussion rules
├── Agenda
├── Meeting document pack
├── Participant permissions
└── Current conversation history
```

## Navigation contract

This application must remain reachable from:

1. The main Sky365 portal.
2. The complete `platform-index.html` hierarchy.
3. The repository README route map.

The application must always provide explicit links back to the main portal and the complete platform index. A page that is not reachable through this hierarchy is considered an orphan page and must not be merged.

## Initial investor demo

1. Create a meeting and define its objective and discussion rules.
2. Add a human chair and three agents.
3. Attach meeting documents and authorize company knowledge scopes.
4. Record a human contribution and generate its transcript.
5. Continue several turns with one selected agent.
6. Invite other agents to support, oppose or fact-check the emerging position.
7. Generate a decision package containing evidence, dissent and action items.
8. Export the session as a podcast and searchable institutional memory.

## Ownership

Created and maintained by **Mostafa Elnagar / WytSky Clouding Solutions / Sky365** as part of the Sky365 Agentic Knowledge Platform.