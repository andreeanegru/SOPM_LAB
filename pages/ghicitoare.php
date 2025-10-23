<!doctype html>
<html lang="ro">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Cine ești când nu te vede nimeni?</title>
  <style>
    body {
      margin: 0;
      font-family: Inter, system-ui;
      background: radial-gradient(circle at 20% 30%, #151a24, #0a0d11);
      color: #f3f4f6;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
      transition: background 1s;
    }
    h1 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      background: linear-gradient(90deg, #a855f7, #ec4899);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    button {
      margin-top: 1rem;
      padding: 0.7rem 1.4rem;
      border: none;
      border-radius: 8px;
      background: linear-gradient(90deg, #4338ca, #7e22ce);
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: 0.3s;
    }
    button:hover {
      transform: scale(1.05);
      box-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
    }
    .q {
      display: none;
      max-width: 360px;
      margin: auto;
    }
    .active {
      display: block;
      animation: fade 0.5s;
    }
    @keyframes fade {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: none; }
    }
  </style>
</head>
<body>
  <h1 id="title">Cine ești când nu te vede nimeni?</h1>
  <div id="quote"></div>
  <div id="quiz">
    <button id="start">Începe testul</button>
  </div>

  <script>
    const quotes = [
      "Lumina vine uneori din umbre.",
      "Ceea ce taci te definește.",
      "În tăcere, devii adevărat."
    ];

    const qs = [
      { q: "Ce te atrage cel mai mult?", a: ["Ordinea", "Visul", "Revolta"] },
      { q: "Ce faci când ești singur?", a: ["Planific", "Visez", "Simt intens"] },
      { q: "Ce îți dă energie?", a: ["Claritatea", "Imaginația", "Provocarea"] }
    ];

    const results = [
      { t: "Mintea Analitică", d: "Cauți sens și structură. În tăcere, te aliniază gândurile." },
      { t: "Inima Visătoare", d: "Îți creezi lumi proprii și le hrănești cu emoție." },
      { t: "Umbra Rebelă", d: "Îmbrățișezi contradicția și o transformi în forță." }
    ];

    const qDiv = document.getElementById("quiz");
    const quote = document.getElementById("quote");
    quote.textContent = "„" + quotes[Math.floor(Math.random() * quotes.length)] + "”";

    document.getElementById("start").onclick = () => {
      qDiv.innerHTML = "";
      let idx = 0, score = [0, 0, 0];
      next();

      function next() {
        qDiv.innerHTML = `
          <div class='q active'>
            <p>${qs[idx].q}</p>
            ${qs[idx].a.map((x, i) => `<button>${x}</button>`).join("")}
          </div>`;
        qDiv.querySelectorAll("button").forEach((b, i) => b.onclick = () => {
          score[i]++; idx++;
          if (idx < qs.length) next(); else show();
        });
      }

      function show() {
        const top = score.indexOf(Math.max(...score));
        qDiv.innerHTML = `
          <div class='q active'>
            <h2>${results[top].t}</h2>
            <p>${results[top].d}</p>
            <button onclick='location.reload()'>Reîncearcă</button>
          </div>`;
      }
    };
  </script>
</body>
</html>


