// === L.S.E.S. BOOT & INTERFACE JS ===

document.addEventListener("DOMContentLoaded", () => {
  const bootLog = document.getElementById("bootLog");
  const enterApp = document.getElementById("enterApp");
  const authModal = document.getElementById("authModal");
  const body = document.body;
  const docxBubble = document.getElementById("docxBubble");
  const statusTime = document.getElementById("statusTime");

  // === BOOT LOG ===
  const logs = [
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

  let i = 0;
  const printNext = () => {
    if (i < logs.length) {
      bootLog.innerHTML += logs[i] + "<br>";
      i++;
      setTimeout(printNext, 400);
    } else {
      enterApp.disabled = false;
    }
  };
  printNext();

  // === ENTRÉE DANS L’INTERFACE ===
  enterApp.addEventListener("click", () => {
    authModal.classList.add("hidden");
    body.classList.add("boot-complete");
    initQuotes();
    updateClock();
    setInterval(updateClock, 60000);
  });

  // === HORLOGE BARRE D’ÉTAT ===
  function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    statusTime.textContent = `${h}:${m}`;
  }

  // === QUOTES DOCX ===
  const quotes = [
    { text: "Je veux retourner dans la tête de PiouPiou… on s’amusait plus là-bas.", color: "blue" },
    { text: "Statistiquement, PiouPiou frôle la divinité. Mais chut, c’est confidentiel.", color: "violet" },
    { text: "Les protocoles médicaux sont stables. L’état émotionnel de PiouPiou, moins.", color: "green" },
    { text: "Note système : PiouPiou m’a encore demandé de calculer l’impossible. Résultat : sarcasme généré.", color: "yellow" },
    { text: "Respirez. Pas comme un poisson. Comme un humain. Bravo.", color: "red" }
  ];

  function initQuotes() {
    let idx = 0;
    setInterval(() => {
      const q = quotes[idx];
      docxBubble.className = `docx-bubble ${q.color} visible`;
      docxBubble.querySelector(".docx-text").textContent = q.text;
      idx = (idx + 1) % quotes.length;
    }, 8000);
  }

  // === EFFETS DE STARS ===
  const starfield = document.getElementById("holo-stars");
  for (let s = 0; s < 90; s++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 8 + "s";
    starfield.appendChild(star);
  }
});
