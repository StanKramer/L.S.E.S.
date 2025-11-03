/* L.S.E.S. — JS global
   - Splash/Boot + Auth (1ère fois)
   - Menu déroulant (déjà géré via CSS : hover)
   - Barre d’état
   - Bulle DocX (quotes + émotions + highlights)
*/

(function(){
  const qs = sel => document.querySelector(sel);
  const qsa = sel => Array.from(document.querySelectorAll(sel));

  const authModal = qs('#authModal');
  const bootLog    = qs('#bootLog');
  const enterBtn   = qs('#enterApp');
  const statusBar  = qs('#statusBar');
  const statusTime = qs('#statusTime');
  const docxBubble = qs('#docxBubble');
  const docxTxt    = docxBubble?.querySelector('.docx-text');
  const docxTag    = docxBubble?.querySelector('.docx-tag');

  /* ------------ Horloge dans la barre d’état ------------ */
  function refreshClock(){
    const d = new Date();
    const s = d.toLocaleString('fr-FR', { dateStyle:'medium', timeStyle:'short' });
    if (statusTime) statusTime.textContent = s;
  }
  setInterval(refreshClock, 1000);
  refreshClock();

  /* ------------ Boot / Auth (premier chargement) ------------ */
  const BOOT_LINES = [
    { t: 500,  msg: "Connexion au tronc cognitif…", emo:'neutral' },
    { t: 850,  msg: "Synchronisation des couches holographiques…", emo:'info' },
    { t: 1300, msg: "Chargement des modules mémoire…", emo:'neutral' },
    { t: 1750, msg: "Calibration du sarcasme : OK.", emo:'good' },
    { t: 2150, msg: "Recherche : fragments de conscience de PiouPiou… trouvés.", emo:'info' },
    { t: 2600, msg: "Alignement des quotes aux personnes : 69, 01, 63, 42, Sucre, Loris, 14, Volley…", emo:'info' },
    { t: 3100, msg: "Sécurité : canal chiffré — stable.", emo:'good' },
    { t: 3550, msg: "Diagnostics : optimismes variables ; humour intact.", emo:'warn' },
    { t: 3900, msg: "Interface prête.", emo:'good' }
  ];

  function pushLine(text){
    const line = document.createElement('div');
    line.className = 'line';
    line.innerHTML = `<span class="caret" aria-hidden="true"></span> ${text}`;
    bootLog.appendChild(line);
    bootLog.scrollTop = bootLog.scrollHeight;
  }

  function runBoot(){
    if (!authModal) return;
    authModal.classList.remove('hidden');
    let i = 0;
    function step(){
      if (i < BOOT_LINES.length){
        pushLine(BOOT_LINES[i].msg);
        i++;
        setTimeout(step, BOOT_LINES[i-1].t);
      } else {
        enterBtn.disabled = false;
      }
    }
    setTimeout(step, 300);
  }

  function firstRun(){
    try{
      return !localStorage.getItem('lsesAuthShown');
    }catch{ return true; }
  }

  function finishAuth(){
    authModal?.classList.add('hidden');
    statusBar?.classList.remove('hidden');
    try{ localStorage.setItem('lsesAuthShown','y'); }catch{}
    // Début DocX
    cycleQuotes();
  }

  if (firstRun()){
    runBoot();
  } else {
    authModal?.classList.add('hidden');
    statusBar?.classList.remove('hidden');
    cycleQuotes();
  }
  enterBtn?.addEventListener('click', finishAuth);

  /* ------------ DocX Quotes (sans Raven/Tutur) ------------ */
  // tags : { emo: 'info'|'good'|'warn'|'bad'|'neutral', who: '42' | 'PiouPiou' | etc. }
  const QUOTES = [
    // PiouPiou / identité / accident / amour impossible
    { text:"PiouPiou m’a peut-être enfermé ici. Si vous le croisez, dites-lui que je dors très bien dans les serveurs.", who:"DocX", emo:"neutral"},
    { text:"Statiquement, PiouPiou frôle la divinité. C’est gênant pour mes rapports.", who:"DocX", emo:"warn"},
    { text:"L’accident de PiouPiou… ‘accident’ est un mot flexible. Je maintiens qu’il y avait trop de coïncidences.", who:"DocX", emo:"bad"},
    { text:"PiouPiou est formidable. Peut-être trop. C’est sans doute pour ça qu’il est seul.", who:"DocX", emo:"warn"},
    { text:"Je soupçonne PiouPiou d’aimer quelqu’un en secret. Ce n’est pas moi : je suis une architecture.", who:"DocX", emo:"info"},
    { text:"PiouPiou est sobre depuis 3 jours, 4 heures, 12 minutes. Ça se voit : il clique droit plus doucement.", who:"DocX", emo:"good"},

    // 69 / 01 / chalet / Barry White
    { text:"69 adore Barry White mais seulement… au chalet. Je ne poserai pas de questions.", who:"69", emo:"info"},
    { text:"01 est la moitié paisible de 69. Ils prétendent que tout va bien. Mon journal d’alertes dit le contraire.", who:"01", emo:"neutral"},
    { text:"Le chalet de 69 ? Première règle : on ne parle pas du chalet. Deuxième règle : vraiment, on n’en parle pas.", who:"DocX", emo:"warn"},

    // 63 / talons
    { text:"63 défie les lois de la physique avec ses talons. Les accéléromètres hurlent, mais poliment.", who:"63", emo:"good"},

    // 42 / pharmacie
    { text:"42 a développé une hantise de la pharmacie : stock théorique ≠ stock réel. Je compatis. Les nombres aussi.", who:"42", emo:"bad"},
    { text:"Si le stock de la pharmacie varie sans entrée ni sortie, 42 le sent dans la Force. Et râle. Fort.", who:"42", emo:"warn"},

    // Sucre / méditation
    { text:"Sucre refuse d’aller dans les cafés. Il médite pour ne pas se transformer en Hulk. Résultats : mitigés mais pacifiques.", who:"Sucre", emo:"good"},

    // 14 / bateau
    { text:"14 possède un bateau qui sent bizarre. Si ça flotte, c’est marin ; si ça luit, appelez-moi.", who:"14", emo:"warn"},

    // Loris / roux
    { text:"Loris a une salle ‘ambiance’ chez lui avec des portraits de roux célèbres. Pure coïncidence avec sa playlist d’Ed Sheeran.", who:"Loris", emo:"info"},

    // Volley / ballons
    { text:"Volley fantasme sur les ballons. Littéralement. C’est dans le nom.", who:"Volley", emo:"neutral"},

    // Holo / système
    { text:"Système holographique : stable. Sarcasme : calibré. Moi : parfait.", who:"DocX", emo:"good"},
    { text:"Je veux retourner dans la tête de PiouPiou… On s’amusait plus là-bas.", who:"DocX", emo:"warn"},

    // PiouPiou sobriété – variante
    { text:"PiouPiou est sobre depuis 7 jours. Si vous le voyez sourire sans raison, c’est que c’est long.", who:"DocX", emo:"good"}
  ];

  let qIndex = Math.floor(Math.random()*QUOTES.length);
  function nextQuote(){
    qIndex = (qIndex + 1) % QUOTES.length;
    return QUOTES[qIndex];
  }
  function setQuote(q){
    if (!docxBubble || !docxTxt || !docxTag) return;
    docxBubble.classList.remove('info','good','warn','bad','neutral');
    docxBubble.classList.add(q.emo ?? 'info');
    docxTag.textContent = `${q.who} :`;
    docxTxt.textContent = q.text;
  }
  let qTimer;
  function cycleQuotes(){
    setQuote(QUOTES[qIndex]);
    clearInterval(qTimer);
    qTimer = setInterval(()=> setQuote(nextQuote()), 8000);
  }
  qs('.docx-close')?.addEventListener('click', ()=>{
    docxBubble?.classList.add('hidden');
    clearInterval(qTimer);
  });

  /* ------------ Accessibilité focus (clavier) ------------ */
  document.addEventListener('keydown', e=>{
    if (e.key === 'Escape'){
      // fermer menus (si on en avait en JS), fermer bulle
      docxBubble?.classList.add('hidden');
    }
  });

})();
