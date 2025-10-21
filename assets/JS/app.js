document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;

  // date comune
  const signs = ["Berbec","Taur","Gemeni","Rac","Leu","Fecioară","Balanță","Scorpion","Săgetător","Capricorn","Vărsător","Pești"];

  if (page === 'compatibilitati') {
    const selectA = document.getElementById('signA');
    const selectB = document.getElementById('signB');

    // populate dropdowns
    signs.forEach(s => {
      selectA.innerHTML += `<option value="${s}">${s}</option>`;
      selectB.innerHTML += `<option value="${s}">${s}</option>`;
    });

    // demo: generare aleatoare compatibilitate
    const compatibility = {};
    signs.forEach(a => {
      compatibility[a] = {};
      signs.forEach(b => {
        compatibility[a][b] = {
          text: `Calități între ${a} și ${b}`,
          compat: Math.random() > 0.5 ? 'Da' : 'Nu'
        };
      });
    });

    document.getElementById('checkCompat').addEventListener('click', () => {
      const a = selectA.value;
      const b = selectB.value;
      const info = compatibility[a][b];
      const resultDiv = document.getElementById('compatResult');
      resultDiv.style.display = 'block';
      resultDiv.textContent = `${a} + ${b}: ${info.text} | Compatibilitate: ${info.compat}`;
    });
  }

  if (page === 'test') {
    document.getElementById('quizBtn').addEventListener('click', () => {
      const answers = [];
      for (let i = 1; i <= 2; i++) {
        const val = document.querySelector(`input[name=q${i}]:checked`);
        answers.push(val ? val.value : '');
      }
      const countA = answers.filter(a => a === 'A').length;
      const countB = answers.filter(a => a === 'B').length;
      const countC = answers.filter(a => a === 'C').length;

      let result = '';
      if (countA >= 2) result = 'Zodie activă și aventuroasă';
      else if (countB >= 2) result = 'Zodie calmă și stabilă';
      else result = 'Zodie sociabilă și creativă';

      const resDiv = document.getElementById('quizResult');
      resDiv.style.display = 'block';
      resDiv.textContent = result;
    });
  }

  if (page === 'ghicitoare') {
    const fortunes = [
      "Astăzi este o zi bună pentru aventură!",
      "Fii atent la relațiile apropiate.",
      "O surpriză plăcută te așteaptă.",
      "Zi perfectă pentru creativitate.",
      "Relaxarea aduce claritate."
    ];
    document.getElementById('fortuneBtn').addEventListener('click', () => {
      const f = fortunes[Math.floor(Math.random() * fortunes.length)];
      document.getElementById('fortune').textContent = f;
    });
  }
});