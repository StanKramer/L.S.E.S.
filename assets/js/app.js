// =======================================================
//   DOCX — IA sarcastique du L.S.E.S.
//   Fait par ProjectV (et enfermé ici par PiouPiou)
// =======================================================

// Crée le conteneur de chat s'il n'existe pas
if (!document.getElementById("docx-chat")) {
  const chatContainer = document.createElement("div");
  chatContainer.id = "docx-chat";
  document.body.appendChild(chatContainer);
}

// Fonction pour simuler un effet de frappe
function typeMessage(element, text, speed = 25) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Fonction pour créer une bulle de texte DocX
function createBubble(text, delay = 0, isIntro = false) {
  setTimeout(() => {
    const chat = document.getElementById("docx-chat");
    const bubble = document.createElement("div");
    bubble.classList.add("docx-bubble");
    if (isIntro) bubble.classList.add("intro");

    const prefix = document.createElement("strong");
    prefix.textContent = "⚙️ [DOCX] ";
    prefix.style.color = "#5ad1ff";

    const msg = document.createElement("span");
    bubble.appendChild(prefix);
    bubble.appendChild(msg);
    chat.appendChild(bubble);

    chat.scrollTop = chat.scrollHeight;
    typeMessage(msg, text, 20);
  }, delay);
}

// --- Boot sequence ---
window.addEventListener("load", () => {
  if (typeof docxIntro === "undefined" || typeof docxQuotes === "undefined") {
    console.error("⚙️ [DOCX] Fichiers de données manquants : docx_quotes.js non chargé.");
    return;
  }

  let delay = 1000;
  docxIntro.forEach((line) => {
    createBubble(line, delay, true);
    delay += 4000 + Math.random() * 1000;
  });

  // Après l'intro, lancer le cycle de messages aléatoires
  setTimeout(() => {
    setInterval(() => {
      const random = docxQuotes[Math.floor(Math.random() * docxQuotes.length)];
      createBubble(random);
    }, 120000); // 2 minutes
  }, delay + 2000);
});
