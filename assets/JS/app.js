document.addEventListener('DOMContentLoaded', () => {
  // ------------------- Date comune -------------------
  const signs = ["Berbec","Taur","Gemeni","Rac","Leu","Fecioară","Balanță","Scorpion","Săgetător","Capricorn","Vărsător","Pești"];

  // ========== COMPATIBILITĂȚI ==========
  (function initCompat() {
    const selectA = document.getElementById('signA');
    const selectB = document.getElementById('signB');
    const btn = document.getElementById('checkCompat');
    const resultDiv = document.getElementById('compatResult');

    if (!selectA || !selectB || !btn || !resultDiv) return; // nu e pagina

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

    btn.addEventListener('click', () => {
      const a = selectA.value;
      const b = selectB.value;
      const info = compatibility[a][b];
      resultDiv.style.display = 'block';
      resultDiv.textContent = `${a} + ${b}: ${info.text} | Compatibilitate: ${info.compat}`;
    });
  })();

  // ========== TEST PERSONALITATE ==========
  (function initQuiz() {
    const btn = document.getElementById('quizBtn');
    const resDiv = document.getElementById('quizResult');
    if (!btn || !resDiv) return;

    btn.addEventListener('click', () => {
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

      resDiv.style.display = 'block';
      resDiv.textContent = result;
    });
  })();

  // ========== GHICITOAREA ZILEI ==========
  (function initFortune() {
    const signSelect = document.getElementById('fortuneSign');
    const darkToggle = document.getElementById('darkToggle');
    const fortuneBtn = document.getElementById('fortuneBtn');
    const output = document.getElementById('fortune');

    // dacă elementele nu există, ieșim (nu e pagina de ghicitoare)
    if (!fortuneBtn || !output) return;

    // Populate select dacă există
    if (signSelect) {
      signs.forEach(s => signSelect.innerHTML += `<option value="${s}">${s}</option>`);
    }

    // per-sign „flair”
    const signTraits = {
      "Berbec":   { element:"Foc",  vibes:["berbeceală maximă","combativ, dar simpatic","start în forță"], roast:"Calci pedala ca la semafor pe verde… și pe roșu, dacă nu te vede nimeni." },
      "Taur":     { element:"Pământ",vibes:["calm și fixat pe confort","încăpățânat premium","gând la mâncare"], roast:"Ai planuri mari… după somnul de prânz și încă un desert." },
      "Gemeni":   { element:"Aer",  vibes:["vorbăreț olimpic","10 idei/minut","multitasking haotic"], roast:"Ai două păreri la orice. Din care niciuna nu e definitivă." },
      "Rac":      { element:"Apă",  vibes:["sensibil cu carapace","homebody deluxe","nostalgic"], roast:"Te atașezi de oameni ca bandă dublu-adezivă pe perete proaspăt vopsit." },
      "Leu":      { element:"Foc",  vibes:["dramă și lumină","regal peste medie","glam instinctiv"], roast:"Soarele răsare, păsările ciripesc, iar tu… faci intrarea." },
      "Fecioară": { element:"Pământ",vibes:["ordine la pixeli","critică constructivă (și neconstructivă)","to-do list la to-do list"], roast:"Ai șters și praful de pe planurile altora." },
      "Balanță":  { element:"Aer",  vibes:["diplomat de serviciu","nuanțe de gri","aesthetics first"], roast:"Te hotărăști greu: ai trei playlist-uri pentru „poate”." },
      "Scorpion": { element:"Apă",  vibes:["intensitate 220V","mister și investigație","loialitate dură"], roast:"Ții minte tot. Inclusiv ce nu s-a întâmplat încă." },
      "Săgetător":{ element:"Foc",  vibes:["aventură și glume","bagaj mereu semi-făcut","adevăr direct"], roast:"Spui adevărul fără ambalaj. De multe ori nici nu era cadou." },
      "Capricorn":{ element:"Pământ",vibes:["disciplină HQ","ambitie pragmatică","umor sec"], roast:"Ai KPI-uri și pentru timp liber." },
      "Vărsător": { element:"Aer",  vibes:["rebel cu cauză","tech & idei","outsider cool"], roast:"Ești înaintea timpului tău. Din păcate, și a programului tuturor." },
      "Pești":    { element:"Apă",  vibes:["visător full HD","empatic","playlist cu ploi"], roast:"Ai în suflet IMAX, în calendar snooze." }
    };

    // seturi de replici (light / dark)
    const colors = ["mov prună","albastru petrol","verde mentă","roșu cărămiziu","galben muștar","negru asfalt","gri de ploaie","turcoaz","bleu ciel","portocaliu dovleac"];
    const openers = {
      light:[
        "Universul îți face cu ochiul, dar tot tu plătești nota.",
        "Astrele au ridicat o sprânceană – în sens bun.",
        "Zi cu potențial: exact ca un covrig cald la 7 dimineața.",
        "Sincronizare ok: nici prea devreme, nici la și jumate.",
        "Ai semnal cosmic 4G – folosește-l, nu-l pune pe modul avion."
      ],
      dark:[
        "Astrele te sună pe necunoscut – răspunzi sau lași pe vibrații?",
        "Destinul ți-a făcut cu mâna; tu i-ai făcut cu ochiul și ai mers mai departe.",
        "Ai noroc… varianta demo, cu watermark mare pe mijloc.",
        "E liniște pe cer. Probabil te lasă să te bagi singur în belele, pentru sport.",
        "Universul a trimis hinturi. Ai dat dismiss la toate."
      ]
    };
    const love = {
      light:[
        "Complimente scurte, efecte lungi. Zâmbește înainte să dezbați.",
        "Mic gest > mare discurs. Cafea + mesaj haios.",
        "Nu confunda confortul cu plictiseala – aprinde un plan spontan.",
        "Fii clar, nu criptic. Nu e horoscop, e conversație.",
        "Împarte meritele. Romantismul se face în echipă."
      ],
      dark:[
        "Dacă taci, pari misterios. Dacă vorbești, pari… tu. Alege cu cap.",
        "Eviți drama? Perfect, drama nu te evită pe tine.",
        "Flirt pasiv-agresiv: 0/10, nu recomandă nimeni.",
        "Nu mai interpreta mesaje la 3 dimineața. Emoji-urile mint.",
        "Ai standarde înalte; realitatea are umorul ei."
      ]
    };
    const money = {
      light:[
        "Buget ok dacă nu confunzi reducerile cu investițiile.",
        "Plătește-ți întâi viitorul: pușculiță înainte de poftă.",
        "Mică victorie la bani – marcheaz-o cu o plăcintă, nu cu un televizor.",
        "Trei oferte, alege pe cea fără comision ascuns.",
        "Nu e zi de all-in; e zi de „încă un pas”."
      ],
      dark:[
        "Cardul tău face cardio. Mai lasă-l să respire.",
        "Banii vin și pleacă. La tine știu deja drumul de întoarcere.",
        "Cumperi ca să te simți bine. Te simți bine 14 minute.",
        "Investiție promițătoare: somn. Nu costă, aduce randament.",
        "Ai evitat cheltuiala mare, dar ai luat cinci mici. Clasic."
      ]
    };
    const work = {
      light:[
        "Bifează una grea dimineața; restul zilei te va lăuda.",
        "Întreabă înainte să „optimizezi” ceva ce merge.",
        "Focus de 25 min + pauză scurtă: magic.",
        "Șefu’ vrea progres, nu epopee. Trimite draft.",
        "Începe cu ce contează, nu cu ce lucește."
      ],
      dark:[
        "Deadline-ul se uită la tine cum te uiți tu la deadline.",
        "Nu e burnout, e … „arde-n altă parte”.",
        "Meeting care putea fi email? Ai reușit să fie nici una, nici alta.",
        "Dacă amâni mult, se numește incubare a ideilor. Sau altceva.",
        "Nu promite luni ce știi că vei livra joi. La prânz."
      ]
    };
    const health = {
      light:[
        "Apă > cafea #șoc #groază.",
        "Plimbare scurtă = update de firmware pentru creier.",
        "Stretch 3 minute, spatele îți trimite inimioare.",
        "Mănâncă real, nu doar frumos.",
        "Somn + lumină naturală = upgrade instant."
      ],
      dark:[
        "Nu mai citi etichete după miezul nopții. Totul pare toxic.",
        "Dacă te doare spatele de la stat jos, încearcă… să nu mai stai jos.",
        "Organismul cere pauză. Tu îi dai notificări.",
        "Detox digital? Măcar în timpul dușului.",
        "Ține minte: nu ești plantă, dar apa te ajută."
      ]
    };
    const oneLiners = {
      light:[
        "Ai carismă cât să muți un rând la ghișeu.",
        "Planul tău B tocmai arată mai bine decât A.",
        "Nu e noroc; e pregătire cu timing bun.",
        "Azi chiar îți iese să fii tu, dar pe versiunea cu update."
      ],
      dark:[
        "Ai aceeași șansă ca Wi-Fi-ul vecinului să aibă parola „parola”.",
        "Când viața îți dă lămâi, tu cauți sare și o tequila. Responsabil, evident.",
        "Dacă te prinde karma, spune că e proiect pilot.",
        "Nu e dezastru, e doar… poveste cu plot twist."
      ]
    };
    const tips = {
      light:[
        "Scrie trei lucruri de făcut. Doar trei.",
        "Răspunde cu bunăvoință, apoi fii ferm.",
        "Alege o mică bucurie care nu costă: soare, aer, muzică.",
        "Închide tab-urile care te stresează. Și din browser."
      ],
      dark:[
        "Nu lua decizii majore când ți-e foame. Sau somn. Sau chef de ceartă.",
        "Fii amabil, dar nu te transforma în covoraș.",
        "Când simți că te ia valul, scoate capul din comentarii.",
        "Notează ideea pe hârtie. Pixelii uită, tu nu."
      ]
    };

    // utilitare: seed zilnic și alegeri deterministe
    function dailySeed(sign) {
      const t = new Date();
      const iso = `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`;
      const str = sign + '|' + iso;
      let h = 0; for (let i=0;i<str.length;i++) h = (h*31 + str.charCodeAt(i)) >>> 0;
      return h;
    }
    function prng(seed){ return () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296; }
    function pick(arr, rnd){ return arr[Math.floor(rnd() * arr.length)]; }

    function generateFortune() {
      const sign = (signSelect && signSelect.value) || "Berbec";
      const dark = !!(darkToggle && darkToggle.checked);
      let rnd = prng(dailySeed(sign));

      const trait = signTraits[sign];
      const luckyNumber = 3 + Math.floor(rnd()*88);
      const luckyColor = pick(colors, rnd);
      const compat = (() => {
        const pool = signs.filter(s => s !== sign);
        return pick(pool, rnd);
      })();

      const opener = pick(dark ? openers.dark : openers.light, rnd);
      const loveLine = pick(dark ? love.dark : love.light, rnd);
      const moneyLine = pick(dark ? money.dark : money.light, rnd);
      const workLine = pick(dark ? work.dark : work.light, rnd);
      const healthLine = pick(dark ? health.dark : health.light, rnd);
      const one = pick(dark ? oneLiners.dark : oneLiners.light, rnd);
      const tip = pick(dark ? tips.dark : tips.light, rnd);
      const vibe = pick(trait.vibes, rnd);

      output.style.display = 'block';
      output.innerHTML = `
        <h3>${sign} — <span class="muted">${trait.element}, vibe: ${vibe}</span></h3>
        <p class="muted">${opener}${dark ? " " + trait.roast : ""}</p>

        <div class="fortune-grid">
          <div><strong>Dragoste:</strong> ${loveLine}</div>
          <div><strong>Bani:</strong> ${moneyLine}</div>
          <div><strong>Muncă/Școală:</strong> ${workLine}</div>
          <div><strong>Sănătate:</strong> ${healthLine}</div>
        </div>

        <ul class="meta">
          <li><strong>Număr norocos:</strong> ${luckyNumber}</li>
          <li><strong>Culoare:</strong> ${luckyColor}</li>
          <li><strong>Compatibil azi:</strong> ${compat}</li>
        </ul>

        <blockquote class="one-liner">${one}</blockquote>
        <p class="tip"><strong>Sfat:</strong> ${tip}</p>
        <p class="disclaimer">*E umor, nu știință. Dacă iese bine, a fost destin; dacă nu, a fost glumă 🙂</p>
      `;
    }

    fortuneBtn.addEventListener('click', generateFortune);
  })();
});
