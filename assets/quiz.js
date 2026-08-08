/* Reusable retrieval-practice quiz widget.
 *
 * Usage in a lesson:
 *   <link rel="stylesheet" href="../assets/quiz.css">
 *   <div class="quiz" data-quiz='[ { ...question... } ]'></div>
 *   <script src="../assets/quiz.js"></script>
 *
 * Question shape:
 *   { "q":   "Question text (may contain HTML)",
 *     "opts": ["exactly", "same", "length", "answers"],
 *     "a":    0,                       // index of correct option
 *     "why":  "Feedback shown after answering (may contain HTML)" }
 *
 * Design notes:
 *  - Options are shuffled on load, so re-reading the lesson is genuine retrieval
 *    practice rather than position recall.
 *  - Feedback is immediate and automatic: the tightest possible feedback loop.
 *  - You cannot see the next question until you have committed to an answer.
 *    Commitment before feedback is what builds storage strength.
 */
(function () {
  "use strict";

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function build(root) {
    var questions;
    try {
      questions = JSON.parse(root.getAttribute("data-quiz"));
    } catch (e) {
      root.innerHTML = "<p>Quiz failed to load: " + e.message + "</p>";
      return;
    }

    var idx = 0, score = 0;

    var head  = el("div", "quiz-head");
    var body  = el("div", "quiz-body");
    var meter = el("div", "quiz-meter");
    root.appendChild(head);
    root.appendChild(body);
    root.appendChild(meter);

    function el(tag, cls, html) {
      var n = document.createElement(tag);
      if (cls) n.className = cls;
      if (html != null) n.innerHTML = html;
      return n;
    }

    function renderMeter() {
      meter.innerHTML = "";
      for (var i = 0; i < questions.length; i++) {
        var dot = el("span", "quiz-dot" + (i < idx ? " done" : "") + (i === idx ? " here" : ""));
        meter.appendChild(dot);
      }
    }

    function render() {
      if (idx >= questions.length) return finish();

      var q = questions[idx];
      head.innerHTML = "Check yourself &nbsp;·&nbsp; " + (idx + 1) + " of " + questions.length;
      body.innerHTML = "";
      renderMeter();

      body.appendChild(el("p", "quiz-q", q.q));

      var order = shuffle(q.opts.map(function (text, i) { return { text: text, i: i }; }));
      var list  = el("div", "quiz-opts");
      var locked = false;

      order.forEach(function (o) {
        var btn = el("button", "quiz-opt", o.text);
        btn.type = "button";
        btn.addEventListener("click", function () {
          if (locked) return;
          locked = true;
          var right = o.i === q.a;
          if (right) score++;

          Array.prototype.forEach.call(list.children, function (c, k) {
            c.disabled = true;
            if (order[k].i === q.a) c.classList.add("right");
          });
          if (!right) btn.classList.add("wrong");

          var fb = el("div", "quiz-fb " + (right ? "ok" : "no"));
          fb.appendChild(el("span", "quiz-verdict", right ? "Correct" : "Not quite"));
          fb.appendChild(el("span", "quiz-why", q.why));
          body.appendChild(fb);

          var next = el("button", "quiz-next",
            idx === questions.length - 1 ? "See your score →" : "Next question →");
          next.type = "button";
          next.addEventListener("click", function () { idx++; render(); });
          body.appendChild(next);
          next.focus();
        });
        list.appendChild(btn);
      });

      body.appendChild(list);
    }

    function finish() {
      renderMeter();
      head.innerHTML = "Done";
      var pct = Math.round((score / questions.length) * 100);
      body.innerHTML = "";
      body.appendChild(el("p", "quiz-score", score + " / " + questions.length));
      body.appendChild(el("p", "quiz-verdict-final",
        pct === 100 ? "Clean sweep. This one has landed."
        : pct >= 60 ? "Solid. Re-run it tomorrow, not today — the gap is what makes it stick."
        : "Worth re-reading the section above, then running this again."));
      var again = el("button", "quiz-next", "Run it again ↻");
      again.type = "button";
      again.addEventListener("click", function () { idx = 0; score = 0; render(); });
      body.appendChild(again);
    }

    render();
  }

  document.addEventListener("DOMContentLoaded", function () {
    Array.prototype.forEach.call(document.querySelectorAll(".quiz[data-quiz]"), build);
  });
})();
