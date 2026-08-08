# The budget-line filter absorbed a new topic without a mission change

On 2026-08-07 User asked for "Search Paradigms & Bitwise Operations", again framed as needing to conciliate with the existing subject. Unlike the previous topic (see [[0002-mission-widened-to-budget-then-technique]]), **no mission change was needed**, and none was proposed.

The filter from LR 0002 (*a technique earns its way in only when it is the answer to a budget line*) resolved it cleanly: complete search is what `n ≤ 10` and `n ≤ 20` mean, and bitmasks are how the `O(2ⁿ·n)` row is implemented. Both rows had been sitting unexplained in the budget table since lesson 0001. This is the second time a topic has turned out to be an *unpaid debt in the budget table* rather than new territory: `log n` was the first (lesson 0003), `·n` the second (lesson 0006).

**Implications for future sessions:**

1. **Look for the unexplained row first.** When a new topic is proposed, check whether the budget table already references it. If it does, the lesson writes itself as "here is the thing you have been reading past", and the mission needs no negotiation. Remaining unexplained entries: `O(n√n)` (square-root decomposition, Mo's algorithm) and the segment-tree mention in the `O(n log n)` row.
2. **The filter has now been tested twice and has held.** Treat it as settled rather than provisional. It also produced a clean *refusal*: bitmask DP was deliberately left out of lesson 0006 because no budget row names it uniquely.
3. **A genuine Python correction was found, not just a translation.** CPH's set-operation table lists `~a` for complement, which is wrong in Python because integers are unbounded. Lessons should keep actively checking primary-source C++ advice against CPython rather than transcribing it; this is the second such find after `insort` in lesson 0003.

**Not yet evidence of learning.** Six lessons exist and no exercise result has been reported back for any of them. The zone of proximal development is currently being inferred from the mission alone, which is a weaker signal than it should be. Ask before lesson 0007.
