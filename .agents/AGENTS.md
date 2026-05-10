# Agent Notes: Story System

This document is guidance for agents working on the interactive stories system.

## Goals
- Keep story JSONs compact and easy to author.
- Avoid duplicating actor definitions across pages.
- Keep runtime behavior consistent with existing stories.

## Current Story Data Model
- Story JSONs define `actors` at the top level.
- Pages only include actions (e.g. `onEnter`, `onExit`) and page metadata.
- Actor runtime state is derived from `story.actors` and starts hidden.

## Source of Truth
- The JSON contract is defined in `src/lib/storySchema.ts` (Zod schemas).
- Types should be inferred from the schema and re-exported via `src/types/story.ts`.
- Avoid duplicating schema definitions in multiple files.

## Action Rules
- `appear`, `disappear`, `move`, `playSound`, `drag`, `change-src`, `change-text`.
- `move` requires `to: { x, y }`.
- `change-src` requires `to: { src }` and only applies to image actors.
- `change-text` requires `to: { text }` and only applies to text actors.

## Authoring Guidelines
- Prefer one reusable actor over multiple nearly identical ones.
- Use `change-src` and `change-text` before `appear` if you need to reuse the same actor.
- Do not redeclare `width`, `height`, `x`, `y` when reappearing.

## When Editing Stories
- Keep actor IDs stable across pages.
- Use `onEnter` for timed action sequences; use `delay` for ordering.
- If an actor must disappear before leaving a page, add a `disappear` action.

## Validation Expectations
- All story JSONs must validate against `StoryDataSchema`.
- Runtime code should assume validated data only.

## Files to Check
- `src/lib/storySchema.ts` (schema and types)
- `src/types/story.ts` (re-exports + runtime types)
- `src/lib/validateStory.ts` (parser/validator)
- `src/lib/storyActions.ts` (action execution)
- `src/data/cuentos/*.story.json` (story data)
