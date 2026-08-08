# Working Notes

## About User
- Goal: competitive programming (see [MISSION.md](./MISSION.md)).
- Language: **Python**. Every code example must be Python. Flag the Python constant-factor tax whenever it changes the answer.
- Self-described **total beginner** on Big O as of 2026-08-07.
- Mission widened 2026-08-07 to *budget → technique* — see [learning record 0002](./learning-records/0002-mission-widened-to-budget-then-technique.md).

## Teaching preferences
- Prefers **more material up front** over drip-feeding: given the choice of one lesson or two in a session, chose two (2026-08-07). Pace the reading himself.
- Retitled MISSION.md to a general "Competitive Programming" with a *current track* line rather than naming it after one subject — expects further tracks, so don't re-scope the workspace per topic.

## Ideas for future lessons
1. ~~From N to your time budget~~ — done, lesson 0001.
2. ~~Counting loop complexity in Python~~ — done, lesson 0002 (counting loops).
3. ~~Where log n comes from: halving, binary search, binary search on the answer~~ — done, lesson 0003.
4. ~~Two pointers, sliding window, and the nested loop that is secretly O(n)~~ — done, lesson 0004. Absorbed the old "amortised analysis" idea.
5. The `n(n+1)/2` → O(n²) case: loops whose bound depends on the outer variable. Lesson 0002 covered plain nesting and lesson 0004 the amortised case; the triangular loop is still owed.
6. Hidden costs in Python one-liners: `s += char` in a loop, slicing copies, `list.pop(0)`. Lesson 0002 covered `x in list` vs `x in set`; the rest is still owed and is high value for a Python competitor.
7. Prefix sums — passes the new mission filter (the O(n) budget row names them), and is the stated fallback in lesson 0004 for sliding windows over negative values. Slotted as lesson 0005 on the [course hub](./index.html).
8. Space complexity + memory limits; Python list-of-ints overhead vs. `array`/`bytearray`.
9. Measure Python's real constant factor on his machine — closes a gap in [RESOURCES.md](./RESOURCES.md).

## Open questions to ask
- Which judge is he actually using (Codeforces? AtCoder? CSES?) — affects time limits and whether PyPy is available. **Still unanswered**, and it now matters more: lesson 0003's Factory Machines exercise is genuinely borderline in CPython and comfortable in PyPy.
- Does he have contest experience yet, or is this pre-first-contest?
- Did the CSES exercises from lessons 0003/0004 actually pass? Ask before writing lesson 0005 — the answer sets the ZPD.
