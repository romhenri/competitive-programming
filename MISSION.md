# Mission: Competitive Programming

*Current track: complexity — and the techniques that hit the budget.*

## Why
User wants to compete in competitive programming (Codeforces / AtCoder / USACO-style contests) writing Python. In a contest, the constraints are printed at the top of the problem — they tell you which algorithms are allowed *before you write a line of code*. Right now they can't read that signal, so they risk writing a correct solution that TLEs, or spending 40 minutes optimising something that was already fast enough. Reading the signal is only half the job: once the budget says O(log n) or O(n), they need a technique in hand that actually reaches it.

## Success looks like
- Given a problem statement's constraints (e.g. `1 ≤ n ≤ 2·10^5`), name the time complexity they are allowed to use — in under 10 seconds, without notes.
- Look at a chunk of their own Python and state its time complexity, including nested loops, recursion, and library calls like `sort()` and `in`.
- Predict TLE *before* submitting, and explain which line causes it.
- **Go from budget to technique**: recognise that O(log n) means binary search, and that a scan over a sorted array or a contiguous window means two pointers — then write either one correctly under time pressure.
- Account for Python's constant factor honestly (Python is ~10–50× slower than C++ per operation), and know when that turns a "should pass" into a TLE.
- Reason about memory limits the same way: know when an `n × n` table blows the 256 MB budget.

## Constraints
- Started from zero on Big O notation on 2026-08-07.
- All code examples in **Python**.
- Lessons should be short and completable in one sitting.

## Out of scope (for now)
- Proving complexity bounds formally (limits, master theorem proofs).
- The wider algorithm toolbox — DP, graphs, segment trees, tree structures. A technique earns its way in only when it is *the answer to a budget line* (as binary search is for O(log n) and two pointers is for O(n)); the toolbox for its own sake stays out.
- Low-level Python optimisation tricks (PyPy flags, `sys.stdin` buffering) until the complexity fundamentals land.
