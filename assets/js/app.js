/* =========================================================================
 * L.S.E.S. — Interface Médicale Holographique
 * JS unique : boot sequence, Auth (1er run), DocX chat, menu déroulant,
 * statut bas de page, fond holographique, interactions Kiné.
 * ========================================================================= */

(() => {
  "use strict";

  /* -----------------------------------------------------------------------
   * UTILITAIRES
   * --------------------------------------------------------------------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const on = (el, ev, cb, opts) => el && el.addEventListener(ev, cb, opts);

  const wait = (ms) => new Promise(res => setTimeout(res, ms));

  // Couleurs par émotion (classe appliquée sur la bulle)
  const EMOTION_CLASS = {
    neutral: "docx-neutral",
    info:    "docx-info",
    joy:     "docx-joy",
    calm:    "docx-calm",
    warn:    "docx-warn",
    danger:  "docx-danger",
    pride:   "docx-pride",
  };

  // Classe par interlocuteur (pour badge)
  const WHO_CLASS = {
    "DocX":         "who-docx",
    "PiouPiou":     "who-pioupiou",
    "69":           "who-69",
    "01":           "who-01",
    "Volley":       "who-volley",
    "Canasson":     "who-canasson",
    "63":           "who-63",
    "Loris":        "who-loris",
    "42":           "who-42",
    "Sucre":        "who-sucre",
    "14":           "who-14",
  };

  /* -----------------------------------------------------------------------
   * MODALE D’AUTHENTIFICATION (1er chargement seulement)
   * --------------------------------------------------------------------- */
  async function initAuthOnce() {
    if (localStorage.getItem("lses_auth_seen") === "1") return;

    // Crée la modale si absente
    let modal = $("#auth-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "auth-modal";
      modal.className = "auth-modal";
      modal.innerHTML = `
        <div class="auth-card">
          <h3>Authentification</h3>
          <p>Utilisateur détecté : <b>PiouPiou</b> <span class="badge">niveau GOAT</span></p>
          <p class="sub">Accès sécurisé aux pôles médicaux interplanétaires.</p>
          <button id="auth-ok" class="btn-primary">Accéder à l’interface</button>
        </div>
      `;
      document.body.appendChild(modal);
    }

    await wait(300); // petit délai pour l’animation CSS
    modal.classList.add("show");

    on($("#auth-ok", modal), "click", () => {
      modal.classList.remove("show");
      localStorage.setItem("lses_auth_seen", "1");
      setTimeout(() => modal.remove(), 350);
    }, { once: true });
  }

  /* -----------------------------------------------------------------------
   * SÉQUENCE DE BOOT (affichée si #boot-seq existe)
   * --------------------------------------------------------------------- */
  async function initBootSequence() {
    const box = $("#boot-seq");
    if (!box) return;

    const steps = [
      "Initialisation du noyau holographique…",
      "Connexion au réseau médical interplanétaire…",
      "Chargement des protocoles, checklists et formations…",
      "Synchronisation émotionnelle de DocX…",
      "Vérification de l’intégrité des données…",
      "Interface prête."
    ];

    box.classList.add("show");
    for (const line of steps) {
      box.innerHTML = `<p>${line}</p>`;
      await wait(900);
    }
    await wait(300);
    box.classList.remove("show");
  }

  /* -----------------------------------------------------------------------
   * BARRE D’ÉTAT INFÉRIEURE (après lancement)
   * --------------------------------------------------------------------- */
  function initStatusBar() {
    const footer = $(".footer");
    const status = $(".footer .status");

    if (!footer || !status) return;

    const update = () => {
      const now = new Date();
      const t = now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
      const online = navigator.onLine ? "connecté" : "hors-ligne";
      status.textContent = `L.S.E.S. actif — ${t} — réseau ${online}`;
    };

    update();
    setInterval(update, 30_000);
    on(window, "online", update);
    on(window, "offline", update);

    // Visibilité après boot seulement
    footer.classList.add("ready");
  }

  /* -----------------------------------------------------------------------
   * MENU DÉROULANT (desktop : hover / mobile : tap)
   * --------------------------------------------------------------------- */
  function initDropdownMenu() {
    // Optionnel : si tu utilises des sous-menus <li class="has-sub"><button>…</button><ul class="sub">…</ul></li>
    const items = $$(".menu .has-sub");
    if (!items.length) return;

    const isTouch = matchMedia("(pointer: coarse)").matches;

    items.forEach(li => {
      const btn = $("button, .sub-trigger", li);
      const sub = $(".sub", li);
      if (!btn || !sub) return;

      if (isTouch) {
        on(btn, "click", (e) => {
          e.preventDefault();
          li.classList.toggle("open");
        });
      } else {
        on(li, "mouseenter", () => li.classList.add("open"));
        on(li, "mouseleave", () => li.classList.remove("open"));
      }
    });

    // Fermer en cliquant ailleurs
    on(document, "click", (e) => {
      if (!e.target.closest(".menu .has-sub")) {
        items.forEach(li => li.classList.remove("open"));
      }
    });
  }

  /* -----------------------------------------------------------------------
   * DOCX — BULLES DE DIALOGUE, COULEUR PAR ÉMOTION, ORIGINE PARLANT
   * --------------------------------------------------------------------- */
  const docxQuotes = [
    // --------------- Général / DocX
    { who: "DocX", emotion: "info",    text: "Analyse cognitive : sarcasme stabilisé, dignité incertaine." },
    { who: "DocX", emotion: "calm",    text: "Respiration lente… maintenant, moins comme un poisson, plus comme un humain." },
    { who: "DocX", emotion: "info",    text: "Le réseau médical est synchronisé. (En théorie.)" },
    { who: "DocX", emotion: "joy",     text: "Statistiquement, PiouPiou frôle la divinité. Chut, c’est confidentiel." },
    { who: "DocX", emotion: "warn",    text: "Les protocoles sont stables. Les humains, moins." },
    { who: "DocX", emotion: "pride",   text: "Interface holographique prête. Bon goût garanti." },

    // --------------- 69 & 01
    { who: "DocX", emotion: "joy",     text: "69 aime Barry White. Mais seulement au chalet. Ne posez pas de questions." },
    { who: "DocX", emotion: "calm",    text: "01 veille. 69 s’emballe. Équilibre biologique curieux mais fonctionnel." },
    { who: "DocX", emotion: "info",    text: "PiouPiou & 01 : amour (im)possible — statistiquement instable, narrativement parfait." },

    // --------------- Volley
    { who: "DocX", emotion: "joy",     text: "Volley fantasme sur les ballons. Littéralement. C’est dans le nom." },

    // --------------- Canasson
    { who: "DocX", emotion: "warn",    text: "Canasson n’arrive pas à tenir debout. Suggestion : supprimer la gravité ?" },

    // --------------- 63
    { who: "DocX", emotion: "pride",   text: "63 défie les lois de la physique avec ses talons. Newton approuve… ou pas." },

    // --------------- Loris
    { who: "DocX", emotion: "warn",    text: "Loris possède une salle creepy avec des photos de roux célèbres. Je n’ai pas scanné. Promis." },

    // --------------- 42
    { who: "DocX", emotion: "warn",    text: "42 redoute la pharmacie. Les stocks bougent sans bouger. Je compatis." },
    { who: "DocX", emotion: "danger",  text: "Écart détecté dans les stocks. 42 soupire. Encore." },

    // --------------- Sucre
    { who: "DocX", emotion: "calm",    text: "Sucre refuse d’aller dans les cafés. Médite pour ne pas devenir Hulk. Ça marche… parfois." },

    // --------------- 14
    { who: "DocX", emotion: "warn",    text: "14 a un bateau qui sent… bizarre. Analyse olfactive annulée." },

    // --------------- PiouPiou — sobriété & secrets
    { who: "DocX", emotion: "pride",   text: "PiouPiou est sobre depuis… encore ! Très impressionnant." },
    { who: "DocX", emotion: "info",    text: "PiouPiou a peut-être enfermé son alter ego ici. Cherchez mieux." },
    { who: "DocX", emotion: "joy",     text: "PiouPiou est formidable. C’est pour ça qu’il est seul. Peut-être pas ?" },
  ];

  // Pas de “Raven” (retiré selon ta demande)
  // Orchestration des citations (éviter la répétition immédiate)
  let lastIndex = -1;
  function nextQuote() {
    if (!docxQuotes.length) return null;
    let i = Math.floor(Math.random() * docxQuotes.length);
    if (i === lastIndex) i = (i + 1) % docxQuotes.length;
    lastIndex = i;
    return docxQuotes[i];
  }

  function renderDocxBubble(q) {
    const box = $("#docx-console");
    if (!box || !q) return;

    // Nettoyage des classes d’émotion
    Object.values(EMOTION_CLASS).forEach(c => box.classList.remove(c));
    // Ajout classe d’émotion
    box.classList.add(EMOTION_CLASS[q.emotion] || EMOTION_CLASS.neutral);

    // Classe d’interlocuteur
    const whoClass = WHO_CLASS[q.who] || WHO_CLASS["DocX"];

    box.innerHTML = `
      <div class="docx-bubble">
        <span class="docx-badge ${whoClass}">[${q.who}]</span>
        <span class="docx-text">${q.text}</span>
      </div>
    `;
  }

  function initDocxLoop() {
    const box = $("#docx-console");
    if (!box) return;

    // Première bulle
    renderDocxBubble(nextQuote());

    // Rotation régulière
    setInterval(() => renderDocxBubble(nextQuote()), 12_000);
  }

  /* -----------------------------------------------------------------------
   * FOND HOLOGRAPHIQUE (étoiles animées — optionnel si CSS déjà fait)
   * --------------------------------------------------------------------- */
  function initHoloBackground() {
    const layer = $("#holo-stars");
    if (!layer) return;
    // Si tu veux ajouter des points mobiles par JS :
    const COUNT = 40;
    for (let i = 0; i < COUNT; i++) {
      const s = document.createElement("i");
      s.className = "star";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.animationDelay = (Math.random() * 6).toFixed(2) + "s";
      layer.appendChild(s);
    }
  }

  /* -----------------------------------------------------------------------
   * INTERACTIONS KINÉ — hotspots basés sur data-zone
   * --------------------------------------------------------------------- */
  function initKineHotspots() {
    const holo = $("#holo");
    if (!holo) return;

    // On cherche des éléments .hotspot[data-zone="..."]
    const card = $("#proto-card") || (() => {
      const c = document.createElement("div");
      c.id = "proto-card";
      c.className = "proto-card";
      c.innerHTML = `<h3>Protocole</h3><div class="content">Sélectionnez une zone du corps.</div>`;
      document.body.appendChild(c);
      return c;
    })();

    const ZONES = {
      "cou": {
        title: "Relaxation cervicale",
        html: `<p>Électrodes sur trapèzes supérieurs. <b>Intensité</b> douce.</p>
               <p>Respiration lente guidée. <b>Durée</b> : 10 min.</p>
               <p class="tip">Astuce : « Respire… comme un humain. » — DocX</p>`
      },
      "lombaires": {
        title: "Stimulation lombaire",
        html: `<p>Électrodes de part et d’autre de la colonne. Progression jusqu’au picotement.</p>
               <p><b>Durée</b> : 15 min.</p>`
      },
      "sciatique": {
        title: "Stimulation sciatique",
        html: `<p>Placement sur le trajet du nerf. Alternance droite/gauche. <b>Intensité</b> modérée.</p>
               <p><b>Durée</b> : 20 min.</p>`
      },
      "quadriceps": {
        title: "Récupération post-effort (quad/mollet)",
        html: `<p>Programme doux basse fréquence après activité sportive.</p>
               <p><b>Durée</b> : 12 min.</p>`
      },
      "bras": {
        title: "Exercices bras/avant-bras",
        html: `<p>Isométrie guidée + électro légère. <b>3 séries</b> de 45s.</p>`
      },
      "jambe": {
        title: "Exercices membre inférieur",
        html: `<p>Étirements & activation neuromusculaire. <b>4 x 60s</b>.</p>`
      }
    };

    function openCard(zone, target) {
      const data = ZONES[zone];
      if (!data) return;
      card.querySelector("h3").textContent = data.title;
      card.querySelector(".content").innerHTML = data.html;
      // Position près du hotspot
      const r = target.getBoundingClientRect();
      card.style.left = Math.min(window.innerWidth - 340, r.left + r.width + 16) + "px";
      card.style.top = Math.max(80, r.top - 10) + "px";
      card.classList.add("show");
    }

    on(document, "click", (e) => {
      const hs = e.target.closest(".hotspot[data-zone]");
      if (hs) {
        e.preventDefault();
        openCard(hs.dataset.zone, hs);
      } else if (!e.target.closest("#proto-card")) {
        card.classList.remove("show");
      }
    });
  }

  /* -----------------------------------------------------------------------
   * LANCEMENT
   * --------------------------------------------------------------------- */
  async function boot() {
    // Auth uniquement au 1er run
    await initAuthOnce();

    // Boot sequence (si présent)
    await initBootSequence();

    // UI
    initDropdownMenu();
    initHoloBackground();
    initStatusBar();

    // DocX
    initDocxLoop();

    // Pages spécifiques
    initKineHotspots();
  }

  // Go
  on(document, "DOMContentLoaded", boot);

})();
