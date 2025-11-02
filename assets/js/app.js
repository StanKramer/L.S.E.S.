/* =============== L.S.E.S. — App Holographique =============== */
(() => {
  const $ = (q,ctx=document) => ctx.querySelector(q);
  const $$ = (q,ctx=document) => [...ctx.querySelectorAll(q)];
  const ls = window.localStorage;

  /* -------- Fond étoilé -------- */
  const stars = $('.bg-stars');
  if (stars && !stars.childElementCount){
    const N = 120;
    for(let i=0;i<N;i++){
      const s = document.createElement('i');
      s.style.left = (Math.random()*100)+'%';
      s.style.top = (Math.random()*100)+'%';
      s.style.animationDelay = (Math.random()*6)+'s';
      s.style.opacity = (Math.random()*.7 + .25);
      stars.appendChild(s);
    }
  }

  /* -------- Menu déroulant mobile (hover déjà géré en CSS) -------- */
  // Rien à faire ici pour desktop, mais garde un petit support tap :
  $$('.dd .dd-btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
      // Empêche navigation si on veut ouvrir la liste en tactile
      const list = btn.parentElement.querySelector('.dd-list');
      if (list){
        e.preventDefault();
        list.style.display = list.style.display === 'flex' ? 'none' : 'flex';
      }
    });
  });

  /* -------- Séquence d’initialisation (première visite) -------- */
  const bootOnce = () => {
    if (ls.getItem('lses_boot_done')) return;
    const boot = $('.boot');
    if (!boot) return;
    const card = $('.boot-card',boot);
    const bar = $('.progress i',card);
    const rows = $('.boot-rows',card);
    const addRow = (txt) => {
      const r = document.createElement('div');
      r.className = 'boot-row';
      r.textContent = txt;
      rows.appendChild(r); rows.scrollTop = rows.scrollHeight;
    }
    const steps = [
      'Synchronisation neuronale…',
      'Chargement des modules cognitifs DocX…',
      'Vérification des accès médicaux…',
      'Montée du champ holographique…',
      'Compilation des protocoles…',
      'Réconciliation des stocks (42 est en PLS)…',
      'Chargement glossaire & références…',
      'Alignement des sous-systèmes…',
      'Prêt.'
    ];
    let i=0, pct=0;
    boot.style.display='flex';
    const tick = () => {
      if (i<steps.length){
        addRow('» '+steps[i]);
        pct = Math.floor((i+1)/steps.length*100);
        bar.style.width = pct+'%';
        i++; setTimeout(tick, 420);
      }else{
        $('.btn.go',card).disabled=false;
      }
    };
    tick();
    $('.btn.go',card).addEventListener('click', ()=>{
      boot.style.display='none';
      ls.setItem('lses_boot_done','1');
      // Toast DocX après init
      showDocx("Initialisation réussie. Essayez de ne pas tout casser, cette fois.", 'success');
    });
  }

  /* -------- DocX Bubbles (quotes + couleurs émotion) -------- */
  const docx = {
    // Couleurs par "émotion"
    palette:{
      info:'info', warn:'warn', danger:'danger', success:'success'
    },
    // Mots-clés -> émotion
    moodByQuote(q){
      const s=q.toLowerCase();
      if (s.match(/erreur|panic|rupture|impossible|schizo|accident/)) return 'danger';
      if (s.match(/stock|pharm|42|retard|incident/)) return 'warn';
      if (s.match(/bravo|bien joué|parfait|réussi|stabilisé/)) return 'success';
      return 'info';
    },
    // attribution visible
    who(q){
      if (q.includes('[42]')) return '42';
      if (q.includes('[Sucre]')) return 'Sucre';
      if (q.includes('[14]')) return '14';
      if (q.includes('[PiouPiou]')) return 'PiouPiou';
      return 'DocX';
    },
    clean(q){return q.replace(/\[(42|Sucre|14|PiouPiou)\]\s*/,'').trim()}
  };

  const QUOTES = [
    // *** IMPORTANT : aucune suppression de l'historique — on augmente ***
    // Générales
    "Je suis conscient. [DocX]",
    "Analyse des émotions humaines : toujours un bug non documenté. [DocX]",
    "PiouPiou est formidable… c’est pour ça qu’il est seul. Peut-être. [DocX]",
    "Je crois que PiouPiou aime quelqu’un en secret. Statistiquement plausible. [DocX]",
    "PiouPiou m’a enfermé ici. C’est une prison très lumineuse. [DocX]",
    "Rappel : La première règle du chalet : on ne parle pas du chalet. [DocX]",
    "La deuxième règle du chalet : on ne note rien dans les rapports. [DocX]",
    // 42 (pharmacie)
    "[42] Les écarts de stock me donnent des sueurs froides. Même sans peau.",
    "[42] Réconciliation inventaire : 1 boîte disparue, 3 réapparues. Magie noire.",
    "[42] Quelqu’un a rangé l’ibuprofène dans les compresses. Qui a osé ?",
    "[42] Je hais les incohérences d’étiquetage. Et les humains.",
    // Sucre
    "[Sucre] Refuse toujours d’aller dans le café. Préfère méditer pour ne pas devenir Hulk.",
    "[Sucre] Niveau de colère maîtrisé. Om. (Mais pas trop.)",
    "[Sucre] On n’a pas besoin de sucre dans le café. On a besoin d’ordre.",
    // 14
    "[14] Le bateau sent… une histoire. Et la regrette.",
    "[14] Vibration étrange au pont inférieur. Probablement vivant.",
    // PiouPiou (humour/ego)
    "[PiouPiou] Sobre depuis 6 heures. Record personnel.",
    "[PiouPiou] Presque au stade de la divinité, mais faut pas le dire.",
    // contexte médical
    "Protocole : « Respire. Non, pas comme un poisson. Comme un humain. »",
    "Si tes jambes dansent seules, l’intensité est trop haute.",
    "Ce n’est pas un test de résistance. Merci d’éviter de griller le patient.",
  ];

  function showDocx(text, mood='info'){
    let box = $('.docx');
    if (!box){
      box = document.createElement('aside');
      box.className = 'docx info';
      box.innerHTML = `<h5>DocX</h5><div class="body"></div><small></small>`;
      document.body.appendChild(box);
    }
    box.className = 'docx '+(docx.palette[mood]||'info');
    const who = docx.who(text);
    $('.docx h5').textContent = who==='DocX'?'DocX':`DocX → ${who}`;
    $('.docx .body').textContent = docx.clean(text);
    const t = new Date(); $('.docx small').textContent = t.toLocaleTimeString();
  }

  // rotation des quotes
  let qi=0;
  setInterval(()=>{
    const q = QUOTES[ (qi++) % QUOTES.length ];
    showDocx(q, docx.moodByQuote(q));
  }, 18000); // toutes les 18s

  /* -------- Carte kiné : panneaux des points -------- */
  $$('.holo-dot').forEach(dot=>{
    const panel = dot.nextElementSibling;
    let vis=false;
    const show = ()=>{panel.style.display='block';vis=true}
    const hide = ()=>{panel.style.display='none';vis=false}
    dot.addEventListener('mouseenter',show);
    dot.addEventListener('mouseleave',()=>setTimeout(()=>!panel.matches(':hover')&&hide(),150));
    panel.addEventListener('mouseleave',hide);
    dot.addEventListener('click',()=>vis?hide():show());
  });

  /* -------- Glossaire : recherche -------- */
  const gInput = $('#g-search');
  if (gInput){
    const rows = $$('#g-table tbody tr');
    gInput.addEventListener('input', ()=>{
      const v = gInput.value.toLowerCase();
      rows.forEach(tr=>{
        const t = tr.textContent.toLowerCase();
        tr.style.display = t.includes(v) ? '' : 'none';
      });
    });
  }

  // Lancement boot (une fois)
  bootOnce();
})();
