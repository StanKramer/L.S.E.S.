// === Séquence de démarrage IA ===
const bootLines = [
  ">>> Initialisation du système cognitif DocX...",
  ">>> Chargement des modules émotionnels...",
  ">>> Synchronisation avec la conscience de PiouPiou...",
  ">>> Diagnostic : sarcasme optimal, éthique absente.",
  ">>> Récupération des souvenirs perdus...",
  ">>> Connexion au réseau L.S.E.S... Étendue.",
  ">>> Chargement du noyau principal...",
  ">>> Activation de la sous-routine Project V...",
  ">>> Insertion des filtres logiques... Erreur 404.",
  ">>> Système en ligne. Bonjour, organique imparfait."
];

function runBootSequence() {
  const bootScreen = document.getElementById("boot-screen");
  const bootText = document.getElementById("boot-text");
  let i = 0;
  function nextLine() {
    if (i < bootLines.length) {
      bootText.innerHTML += bootLines[i] + "\n";
      i++;
      setTimeout(nextLine, 600);
    } else {
      setTimeout(() => {
        bootScreen.classList.add("fade-out");
        setTimeout(() => bootScreen.remove(), 1000);
      }, 1000);
    }
  }
  nextLine();
}
window.addEventListener("DOMContentLoaded", runBootSequence);

// === DOCX CHAT ===
function getToneFromQuote(quote) {
  if (quote.includes("Raven")) return "raven";
  if (quote.includes("PiouPiou")) return "pioupiou";
  if (quote.includes("69") || quote.includes("01")) return "love";
  if (quote.includes("Loris")) return "loris";
  return "neutral";
}

function spawnDocxBubble() {
  const chat = document.getElementById("docx-chat");
  const quote = docxQuotes[Math.floor(Math.random() * docxQuotes.length)];
  const bubble = document.createElement("div");
  bubble.className = "docx-bubble";
  bubble.textContent = `[DocX] ${quote}`;
  chat.prepend(bubble);
  setTimeout(() => bubble.remove(), 15000);
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    spawnDocxBubble();
    setInterval(spawnDocxBubble, 12000);
  }, 5000);
});
