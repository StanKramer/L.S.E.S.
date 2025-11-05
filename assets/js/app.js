// === L.S.E.S. APP CORE ===
// Chargement principal et interface DocX / PiouPiou

document.addEventListener("DOMContentLoaded", () => {
  const authModal = document.getElementById("authModal");
  const bootLog = document.getElementById("bootLog");
  const enterApp = document.getElementById("enterApp");
  const docxBubble = document.getElementById("docxBubble");
  const docxText = docxBubble?.querySelector(".docx-text");
  const statusBar = document.getElementById("statusBar");

  // === Boot Sequence ===
  const bootLines = [
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

  let lineIndex = 0;
  const bootTimer = setInterval(() => {
    if (lineIndex < bootLines.length) {
      const line = document.createElement("p");
      line.textContent = bootLines[lineIndex++];
      bootLog.appendChild(line);
      bootLog.scrollTop = bootLog.scrollHeight;
    } else {
      clearInterval(bootTimer);
      enterApp.disabled = false;
    }
  }, 600);

  enterApp?.addEventListener("click", () => {
    authModal.classList.add("hidden");
    document.body.classList.add("boot-complete");
    if (statusBar) statusBar.classList.remove("hidden");
    startDocXQuotes();
  });

  // === Quotes ===
  const quotes = [
    // Sérénité
    { speaker: "DocX", text: "Respirez. Pas comme un poisson. Comme un humain. Bravo.", color: "blue" },
    { speaker: "DocX", text: "Les protocoles sont stables. Votre calme aussi, espérons-le.", color: "blue" },
    { speaker: "DocX", text: "N’oubliez pas : un esprit apaisé est un scalpel précis.", color: "blue" },

    // Sarcasme / humour
    { speaker: "DocX", text: "Note système : PiouPiou a encore demandé de calculer l’impossible. Résultat : sarcasme généré.", color: "green" },
    { speaker: "DocX", text: "Statistiquement, PiouPiou frôle la divinité. Mais chut, c’est confidentiel.", color: "green" },
    { speaker: "DocX", text: "Je veux retourner dans la tête de PiouPiou… on s’amusait plus là-bas.", color: "green" },

    // Fatigue / tension
    { speaker: "DocX", text: "Vos pupilles indiquent une fatigue cognitive. Café recommandé.", color: "violet" },
    { speaker: "DocX", text: "Charge mentale élevée. Activation du mode autopilote ? (non disponible)", color: "violet" },

    // Concentration
    { speaker: "DocX", text: "Focus. Votre patient respire. Pour l’instant.", color: "yellow" },
    { speaker: "DocX", text: "Synchronisation : main droite / main gauche — 97%.", color: "yellow" },

    // Stress / urgence
    { speaker: "DocX", text: "Anxiété détectée. Respirez profondément. Ou simulez.", color: "red" },
    { speaker: "DocX", text: "Rappel : vous n’êtes pas seul. Sauf dans vos gardes de nuit.", color: "red" },

    // Citations du personnel (bonus)
    { speaker: "DocX", text: "42 : sa hantise, la gestion de la pharmacie. Les stocks bougent plus que les patients.", color: "yellow" },
    { speaker: "DocX", text: "Sucre : refuse de se mettre dans les cafés. Préfère méditer pour ne pas devenir Hulk.", color: "green" },
    { speaker: "DocX", text: "14 : a un bateau. Il sent bizarre, mais il flotte toujours.", color: "blue" }
  ];

  let quoteIndex = 0;
  let quoteTimer;

  function startDocXQuotes() {
    showNextQuote();
    quoteTimer = setInterval(showNextQuote, 90000); // 1m30 entre chaque
  }

  function showNextQuote() {
    const q = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;

    if (docxBubble && docxText) {
      docxText.textContent = `${q.speaker} : ${q.text}`;
      docxBubble.className = `docx-bubble ${q.color}`;
      docxBubble.classList.add("visible");
      setTimeout(() => docxBubble.classList.remove("visible"), 10000);
    }
  }

  // === Barre d’état (horloge) ===
  function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    document.getElementById("statusTime").textContent = `${h}:${m}`;
  }
  setInterval(updateClock, 60000);
  updateClock();

  // === Effets décoratifs (étoiles / fond animé) ===
  const starfield = document.createElement("div");
  starfield.className = "starfield-bg";
  for (let i = 0; i < 80; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 10 + "s";
    starfield.appendChild(star);
  }
  document.body.appendChild(starfield);
});
