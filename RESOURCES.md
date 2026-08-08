# Competitive Programming Resources

*Current track: complexity, and the techniques that hit the budget.*

## Knowledge

- [USACO Guide — Time Complexity (Bronze)](https://usaco.guide/bronze/time-comp)
  **The primary source for this workspace.** Free, maintained by USACO finalists and used as official prep material. Contains the canonical constraint→complexity table and the "10^8 operations per second" server estimate. Use for: the budget table, loop-counting rules, the formal Big O definition.

- [Competitive Programmer's Handbook — Antti Laaksonen (Chapter 2: Time Complexity)](https://cses.fi/book/book.pdf)
  Free PDF book, the de facto textbook of competitive programming. Chapter 2 is a tight 6-page treatment of complexity with CP-specific framing. Use for: worked examples of estimating complexity from code, and the classic complexity classes. Also **§3.3 (p. 31)** for binary search, and **ch. 8 “Amortized analysis” — §8.1 (p. 77)** for the two pointers method, which is the primary source for lesson 0004; **ch. 5 (p. 47)** for complete search, backtracking, pruning and meet in the middle (lesson 0005); and **ch. 10 (p. 95)** for bit manipulation and representing sets as integers (lesson 0006). Code samples are C++, and ch. 10 in particular needs the Python correction on `~` from the [bitwise cheat sheet](./reference/bitwise-cheatsheet.html).

- [USACO Guide — Binary Search (Silver)](https://usaco.guide/silver/binary-search)
  The clearest free statement of the monotonicity requirement and of binary searching *on the answer*. Use for: deciding whether a problem is binary-searchable at all, and for practice problems graded by difficulty.

- [USACO Guide — Two Pointers (Silver)](https://usaco.guide/silver/two-pointers)
  Covers both shapes — opposite ends and sliding window — as one topic, with the “both pointers will move at most N times” argument for linearity. Use for: recognising which of the two shapes a problem wants.

- [Python documentation — `bisect`](https://docs.python.org/3/library/bisect.html)
  Primary source, and the only Python-specific one here. Use for: `bisect_left` vs `bisect_right` semantics, and the Performance Notes section — which is where the `insort` is O(n) trap is documented in the library's own words.

- [USACO Guide — Basic Complete Search (Bronze)](https://usaco.guide/bronze/intro-complete)
  One-paragraph definition of complete search covering all four shapes (elements, pairs, subsets, permutations). Use for: the vocabulary, and graded practice problems. Note the companion module [Complete Search with Recursion](https://usaco.guide/bronze/complete-rec) for backtracking.

- [USACO Guide — Intro to Bitwise Operators (Silver)](https://usaco.guide/silver/intro-bitwise)
  Short. Its real value is the XOR properties (`x^x = 0`, and XOR as addition without carry). It explicitly defers operator definitions to CPH, so read it *after* CPH ch. 10, not before.

- [Python documentation — `itertools`](https://docs.python.org/3/library/itertools.html)
  Primary source for `permutations`, `combinations`, `product`. Use for: the exact output counts (`math.perm`, `math.comb`), the lexicographic-ordering guarantee, and the `product` memory caveat. These generate in C, which is why brute force in Python is more viable than it sounds.

- [Python documentation — bitwise operations on integers](https://docs.python.org/3/library/stdtypes.html#bitwise-operations-on-integer-types)
  Primary source for the operators, `int.bit_count()` (3.10+) and `int.bit_length()`. **Critically**, it documents that Python integers have unlimited precision, which is why `~a` is not a set complement in Python. Pair with the [operator precedence table](https://docs.python.org/3/reference/expressions.html#operator-precedence).

- [CSES Problem Set](https://cses.fi/problemset/)
  Not a reading resource — a graded problem set by the same author. Use for: testing a complexity prediction against a real judge. Introductory Problems section is the right starting point. The **Sorting and Searching** section is the practice ground for lessons 0003–0004: 1640 Sum of Two Values, 1660 Subarray Sums I, 1090 Ferris Wheel, 1620 Factory Machines, 1085 Array Division. The **Introductory Problems** section serves lessons 0005–0006: 1622 Creating Strings, 1623 Apple Division, 1617 Bit Strings, 2205 Gray Code, 1624 Chessboard and Queens (backtracking), and 1628 Meet in the Middle in Advanced Techniques.

- [Codeforces blog — "Using time complexity to estimate running time"](https://codeforces.com/blog/entry/65404)
  Community discussion on how well the ops/second heuristic actually holds. Use for: understanding when the rule of thumb lies (cache effects, constant factors). *Note: Codeforces blocks automated fetching — open in a browser.*

## Wisdom (Communities)

- [r/competitiveprogramming](https://reddit.com/r/competitiveprogramming)
  Use for: "why did this TLE?" post-mortems, language-choice debates, contest strategy.

- [Codeforces — blogs & problem comment sections](https://codeforces.com/)
  The centre of gravity of the sport. After a contest, every problem's editorial comments are full of people explaining *why* the intended complexity is what it is. Use for: seeing complexity reasoning done by strong competitors in public.

- [AtCoder](https://atcoder.jp/)
  Beginner Contests (ABC) run weekly and are famously well-suited to newcomers. Use for: real deadline pressure, which is where complexity judgement actually gets tested.

## Gaps

- No high-trust source found yet quantifying **Python's constant factor** on judges (the ~10–50× figure circulating is folklore from blogs and Quora, not measured). This matters directly to the mission — User writes Python. **Action:** measure it empirically in a future lesson by timing a known-size loop on their own machine and on a judge.
- No source yet on **space complexity** in CP specifically (memory limits, Python object overhead — a Python `list` of ints is far heavier than a C++ `vector<int>`). Needs searching before the memory lesson.
