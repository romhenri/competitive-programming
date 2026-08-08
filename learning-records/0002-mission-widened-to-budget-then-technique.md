# Mission widened: from judging cost to budget → technique

On 2026-08-07 User asked to be taught Binary Search & Two Pointers, explicitly "conciliating with the existing subject". The old [[MISSION.md]] put *learning the algorithms themselves* out of scope — the workspace was about judging cost, not building a toolbox. He confirmed the widening rather than the alternative (teaching the techniques as pure cost examples with the mission untouched).

The mission now reads **constraint → budget → technique**. The boundary that replaced the old one: a technique earns its way in only when it *is the answer to a budget line*. Binary search is what O(log n) means; two pointers is what O(n) over a sorted array or a contiguous window means. DP, graphs and segment trees stay out — they are toolbox for its own sake, and there is no budget row that names them uniquely.

**Implications for future sessions:**

1. **The filter for "should I teach this?" changed.** It is no longer "does this help him judge cost?" but "is this the thing you reach for when the table says X?". Prefix sums pass that filter (the O(n) row names them). Segment trees do not, yet.
2. **Complexity is still the spine, not a co-equal topic.** Both new lessons teach a costing skill first and the technique second — 0003 teaches where the log factor comes from and only then binary search; 0004 teaches amortised counting (nested loops that add rather than multiply) and only then two pointers. Keep that ordering. The moment a lesson is *just* an algorithm walkthrough, the widening has been abused.
3. **New risk to watch: technique-reaching.** Knowing a technique creates pressure to use it. Lesson 0003's quiz already re-tests the `n ≤ 1000` → double loop question for exactly this reason. Future quizzes should keep including problems where the lazy solution is the correct one.

User subsequently retitled the mission to "Competitive Programming" with a *current track* line, rather than leaving it named after a single subject — a signal he expects further tracks after this one, and that the workspace should not be re-scoped around each new topic.
