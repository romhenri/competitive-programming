# Competitive Programming

Reading a problem's constraints and knowing what you're allowed to write —
then having the technique in hand to hit that budget. Python. See
[MISSION.md](MISSION.md).

Open [index.html](index.html) in a browser to start.

## Lessons

```
+------+---------------------------+------------------------------------------------------+
| N    | Lesson                    | What it gives you                                    |
+------+---------------------------+------------------------------------------------------+
| 0001 | From n to your time       | The 10^8 rule: constraint -> allowed complexity, in  |
|      | budget                    | under 10 seconds.                                    |
| 0002 | Counting loops            | Nesting multiplies, sequential takes max, and the    |
|      |                           | hidden loops inside Python one-liners.               |
| 0003 | Where log n comes from    | Halving, binary search, a template that cannot loop  |
|      |                           | forever, and binary searching the answer.            |
| 0004 | Two pointers              | O(n^2) -> O(n) collapse, both pointer shapes, and    |
|      |                           | spotting the nested loop that is secretly linear.    |
| 0005 | Complete search           | Tiny n is permission to brute force: permutations,   |
|      |                           | subsets, and where the cliff actually is.            |
+------+---------------------------+------------------------------------------------------+
```

Files: `lessons/0001-from-n-to-your-time-budget.html` … `lessons/0005-complete-search.html`

## Reference

Compressed, printable, meant to be revisited.

```
+---------------------------+------------------------------------------------------------+
| Page                      | Contents                                                   |
+---------------------------+------------------------------------------------------------+
| The Complexity Budget     | Constraint -> allowed complexity, the two landmarks worth  |
| Table                     | memorising, and the Python tax. Print this one.            |
| Technique by Budget       | Budget -> what to actually write. Binary search and        |
|                           | two-pointer templates.                                     |
| Python Operation Costs    | What every line costs — list, dict, set, sort, `in`.       |
| Glossary                  | Amortised, monotonic, invariant, TLE, sum-of-n, sliding    |
|                           | window.                                                    |
+---------------------------+------------------------------------------------------------+
```

Files: `reference/complexity-budget.html`, `reference/technique-by-budget.html`,
`reference/python-costs.html`, `reference/glossary.html`

## Also here

- [RESOURCES.md](RESOURCES.md) — external links
- [NOTES.md](NOTES.md)
- `learning-records/` — what changed and why
