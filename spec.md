# Specification

## Summary
**Goal:** Limit the Partners section to display exactly 5 partner cards, regardless of static data or backend response.

**Planned changes:**
- Ensure the static partners data array in the Partners component contains exactly 5 entries, removing any beyond the 5th
- Cap the rendered partners list to the first 5 entries when data is fetched from the backend via `useGetPartners`

**User-visible outcome:** The Partners section always shows exactly 5 partner cards — no more, no less — under all data conditions.
