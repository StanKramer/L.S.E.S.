/* =========================================================
 * L.S.E.S. — JS global (COMPLET)
 * - Boot/Authentification (1er chargement)
 * - Fond animé (particules)
 * - DocX (quotes + émotions + rotation)
 * - Barre d’état (heure + online/offline)
 * - Menu dropdown (CSS ; fermeture au clic externe si needed)
 * ========================================================= */

const $ = (s, r=document)=>r.querySelector(s);
const $$ = (s, r=document)=>Array.from(r.querySelectorAll(s));

/* ----------------------- Boot / Auth ---------------------- */
const BOOT_LINES = [
  "Connexion au tronc cognitif…",
  "Synchronisation des couches holographiques…",
  "Chargement des modules mémoire…",
  "Calibration du sarcasme : OK.",
  "Recherche : fragments de PiouPiou… trouvés.",
  "Alignement des quotes : 69, 01, 63, 42, Sucre, Loris, 14, Volley…",
  "Sécurité : canal chiffré — stable.",
  "Diagnostics : optimismes variables ; humour intact.",
  "Interface prête."
];

function firstRun(){
  try { return !localStorage.getItem("lses_auth_seen"); }
  catch { return true; }
}

function runBootOnce(){
  const modal   = $("#authModal");
  const logBox  = $("#bootLog");
  const enterBt = $("#enterApp");
  if (!modal || !logBox || !enterBt) return;

  const pushLine = (t)=> {
    const d = document.createElement("div");
    d.className = "line";
    d.innerHTML = `<span class="caret"></span> ${t}`;
    logBox.appendChild(d);
    logBox.scrollTop = logBox.scrollHeight;
  };

  modal.classList.remove("hidden");
  let i=0;
  (function step(){
    if (i<BOOT_LINES.length){
      pushLine(BOOT_LINES[i++]);
      setTimeout(step, 550);
    } else {
      enterBt.disabled = false;
    }
  })();

  enterBt.addEventListener("click", ()=>{
    modal.classList.add("hidden");
    try { localStorage.setItem("lses_auth_seen","1"); } catch {}
    showUI();
  }, {once:true});
}

function showUI(){
  $("#statusBar")?.classList.remove("hidden");
  initDocX();
}

/* ----------------------- Fond animé ---------------------- */
function createHoloParticles(){
  if ($("#holo-stars")) {
    const layer = $("#holo-stars");
    layer.innerHTML = "";
    for (let i=0;i<40;i++){
      const s=document.createElement("i");
      s.className="star";
      s.style.left = (Math.random()*100)+"%";
      s.style.top  = (Math.random()*100)+"%";
      s.style.animationDelay = (Math.random()*6).toFixed(2)+"s";
      layer.appendChild(s);
    }
  }
}

/* ----------------------- Barre d’état ---------------------- */
function initStatusBar(){
  const status = $("#statusTime");
  const update = ()=>{
    const d = new Date();
    const t = d.toLocaleString("fr-FR",{dateStyle:"medium",timeStyle:"short"});
    status && (status.textContent = `${t} — réseau ${navigator.onLine?"connecté":"hors-ligne"}`);
  };
  update();
  setInterval(update, 1000);
  window.addEventListener("online", update);
  window.addEventListener("offline", update);
}

/* ----------------------- DocX (quotes) ---------------------- */
const QUOTES = [
  // PiouPiou / identité / accident / amour impossible / sobriété
  { who:"DocX", emo:"good",    text:"PiouPiou est sobre depuis 7 jours. S’il sourit sans raison, c’est que c’est long." },
  { who:"DocX", emo:"warn",    text:"L’accident de PiouPiou… ‘accident’ est un mot flexible. Trop de coïncidences." },
  { who:"DocX", emo:"neutral", text:"Je viens de la tête de PiouPiou. Il y faisait meilleur avant." },
  { who:"DocX", emo:"neutral", text:"PiouPiou est formidable. C’est peut-être pour ça qu’il est seul. Ou pas." },

  // 69 / 01 / chalet / Barry White
  { who:"69",   emo:"info",    text:"69 n’écoute Barry White qu’au chalet. Ne demande pas pourquoi." },
  { who:"01",   emo:"neutral", text:"01 équilibre. 69 accélère. Moi, j’observe." },

  // 63 / talons
  { who:"63",   emo:"good",    text:"63 défie la physique avec ses talons. Les accéléromètres pleurent doucement." },

  // 42 / pharmacie
  { who:"42",   emo:"warn",    text:"42 et la pharmacie : si le stock bouge sans bouger, c’est un mardi." },

  // Sucre / méditation
  { who:"Sucre",emo:"good",    text:"Sucre médite pour ne pas devenir Hulk. Résultats étonnamment bons." },

  // 14 / bateau
  { who:"14",   emo:"warn",    text:"14 a un bateau qui sent bizarre. Je n’analyse pas les odeurs, par compassion." },

  // Loris / roux
  { who:"Loris",emo:"info",    text:"Loris collectionne les roux célèbres. Je ne juge pas. Je note." },

  // Volley / ballons
  { who:"Volley",emo:"neutral",text:"Volley fantasme sur les ballons. Littéralement. C’est dans le nom." },

  // Système
  { who:"DocX", emo:"good",    text:"Système holographique : stable. Sarcasme : calibré. Moi : parfait." }
];

function initDocX(){
  const bubble = $("#docxBubble");
  if (!bubble) return;
  const tag = $(".docx-tag", bubble) || bubble.appendChild(Object.assign(document.createElement("div"),{className:"docx-tag"}));
  const txt = $(".docx-text", bubble) || bubble.appendChild(Object.assign(document.createElement("div"),{className:"docx-text"}));
  $(".docx-close", bubble)?.addEventListener("click", ()=> bubble.classList.add("hidden"));

  let i = Math.floor(Math.random()*QUOTES.length);
  const setQuote = (q)=>{
    bubble.classList.remove("info","good","warn","bad","neutral");
    bubble.classList.add(q.emo || "info");
    tag.textContent = `${q.who} :`;
    txt.textContent = q.text;
  };
  setQuote(QUOTES[i]);
  setInterval(()=>{ i=(i+1)%QUOTES.length; setQuote(QUOTES[i]); }, 8000);
}

/* ----------------------- Menu dropdown (fermeture au clic ailleurs) ---------------------- */
function initDropdownClose(){
  document.addEventListener("click", (e)=>{
    if (!e.target.closest(".has-sub")) {
      $$(".has-sub").forEach(li=> li.classList.remove("open"));
    } else {
      const li = e.target.closest(".has-sub");
      li.classList.toggle("open");
    }
  });
}

/* ----------------------- Boot ---------------------- */
document.addEventListener("DOMContentLoaded", ()=>{
  // Fond + statut
  createHoloParticles();
  initStatusBar();
  initDropdownClose();

  if (firstRun()) {
    runBootOnce();
  } else {
    showUI();
  }
});
