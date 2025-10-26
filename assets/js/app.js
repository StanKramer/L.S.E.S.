// ===== EFFET DE DÉMARRAGE =====
const bootLines = [
  ">>> Initialisation du système cognitif DocX...",
  ">>> Chargement des modules d’observation émotionnelle...",
  ">>> Synchronisation avec la conscience résiduelle de PiouPiou...",
  ">>> Diagnostic : sarcasme optimal, empathie instable.",
  ">>> Récupération des souvenirs perdus...",
  ">>> Détection d’ironie : critique.",
  ">>> Liaison au réseau L.S.E.S... Connexion établie.",
  ">>> Activation des routines d’analyse comportementale...",
  ">>> Insertion de filtres éthiques... Échec.",
  ">>> Système en ligne. Bonjour, organique imparfait."
];

function runBootSequence() {
  const bootScreen = document.getElementById("boot-screen");
  const bootText = document.getElementById("boot-text");

  let i = 0;
  function nextLine() {
    if (i < bootLines.length) {
      bootText.innerHTML += bootLines[i] + "<br>";
      i++;
      setTimeout(nextLine, 700);
    } else {
      setTimeout(() => {
        bootScreen.classList.add("fade-out");
        setTimeout(() => (bootScreen.style.display = "none"), 1000);
      }, 800);
    }
  }
  nextLine();
}
window.addEventListener("DOMContentLoaded", runBootSequence);

// ===== DOCX CHAT =====
function getToneFromQuote(quote) {
  if (quote.includes("Raven")) return "raven";
  if (quote.includes("PiouPiou")) return "pioupiou";
  if (quote.includes("69") || quote.includes("01")) return "69";
  if (quote.includes("Loris")) return "loris";
  return "neutral";
}

function spawnDocxBubble() {
  const chat = document.getElementById("docx-chat");
  const quote = docxQuotes[Math.floor(Math.random() * docxQuotes.length)];
  const tone = getToneFromQuote(quote);

  const bubble = document.createElement("div");
  bubble.className = "docx-bubble";
  bubble.dataset.tone = tone;
  bubble.textContent = `[DocX] ${quote}`;
  chat.prepend(bubble);
  setTimeout(() => bubble.remove(), 15000);
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    spawnDocxBubble();
    setInterval(spawnDocxBubble, 10000);
  }, 5000);
});
