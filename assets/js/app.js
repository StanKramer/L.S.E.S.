// Effet de démarrage visuel de DocX
document.addEventListener("DOMContentLoaded", () => {
  const chat = document.getElementById("docx-chat");
  if (chat) {
    chat.style.opacity = "0";
    setTimeout(() => chat.style.opacity = "1", 2500);
  }
});

// =======================================================
//   DOCX — IA sarcastique du L.S.E.S. (v10)
//   Effet de frappe + bulles émotionnelles colorées
//   S'appuie sur docx_quotes.js (docxIntro + docxQuotes)
// =======================================================

// Crée le conteneur de chat s'il n'existe pas
(function ensureChatContainer() {
  if (!document.getElementById("docx-chat")) {
    const chat = document.createElement("div");
    chat.id = "docx-chat";
    document.body.appendChild(chat);
  }
})();

function getEmotionClass(text) {
  const t = String(text || "").toLowerCase();

  if (t.includes("pioupiou")) return "bubble-pioupiou";
  if (t.includes("raven")) return "bubble-raven";
  // 69 -> matricule, on évite les confusions numériques
  if (/\b69\b/.test(t)) return "bubble-69";
  // 01 -> compagne de 69
  if (/\b01\b/.test(t) || /\bzero ?one\b/.test(t)) return "bubble-01";
  if (t.includes("volley")) return "bubble-volley";
  if (t.includes("canasson")) return "bubble-canasson";
  if (/\b63\b/.test(t)) return "bubble-63";
  if (t.includes("loris")) return "bubble-loris";

  // introspection/philo (heuristique simple)
  if (/(conscience|je suis|je pense|existe|âme|mémoire|solitude|liberté)/.test(t)) {
    return "bubble-introspect";
  }
  return "bubble-neutral";
}

// Effet de frappe (typewriter)
function typeMessage(targetEl, text, speed = 20, doneCb = null) {
  let i = 0;
  const s = String(text || "");
  (function step() {
    if (i < s.length) {
      targetEl.textContent += s.charAt(i++);
      setTimeout(step, speed);
    } else if (typeof doneCb === "function") {
      doneCb();
    }
  })();
}

// Indicateur "DocX écrit..."
function showTypingIndicator(emotionClass) {
  const chat = document.getElementById("docx-chat");
  const tip = document.createElement("div");
  tip.className = `docx-typing ${emotionClass || "bubble-neutral"}`;
  tip.innerHTML = `<span class="dots">DocX est en train de répondre<span>.</span><span>.</span><span>.</span></span>`;
  chat.appendChild(tip);
  chat.scrollTop = chat.scrollHeight;
  return tip; // pour pouvoir le retirer
}

// Crée une bulle DocX (avec option intro)
function createBubble(text, { delay = 0, isIntro = false } = {}) {
  setTimeout(() => {
    const emotionClass = getEmotionClass(text);
    const typing = showTypingIndicator(emotionClass);

    setTimeout(() => {
      typing.remove();

      const chat = document.getElementById("docx-chat");
      const bubble = document.createElement("div");
      bubble.className = `docx-bubble ${emotionClass} ${isIntro ? "intro" : ""}`;

      const prefix = document.createElement("strong");
      prefix.className = "docx-prefix";
      prefix.textContent = "⚙️ [DOCX] ";

      const msg = document.createElement("span");
      msg.className = "docx-text";

      bubble.appendChild(prefix);
      bubble.appendChild(msg);
      chat.appendChild(bubble);

      chat.scrollTop = chat.scrollHeight;
      typeMessage(msg, text, 20);
    }, 900);
  }, delay);
}

// Boot + flux aléatoire
window.addEventListener("load", () => {
  if (typeof docxIntro === "undefined" || typeof docxQuotes === "undefined") {
    console.error("⚙️ [DOCX] docx_quotes.js manquant (docxIntro / docxQuotes).");
    return;
  }

  // Séquence d'initialisation (8 lignes)
  let t = 1000;
  docxIntro.forEach((line) => {
    createBubble(line, { delay: t, isIntro: true });
    t += 4000 + Math.random() * 1000;
  });

  // Démarrage du flux aléatoire (toutes les 2 min)
  setTimeout(() => {
    // premier message 20s après l'intro, puis toutes les 120s
    setTimeout(() => {
      const first = docxQuotes[Math.floor(Math.random() * docxQuotes.length)];
      createBubble(first);
    }, 20000);

    setInterval(() => {
      const q = docxQuotes[Math.floor(Math.random() * docxQuotes.length)];
      createBubble(q);
    }, 120000);
  }, t + 2000);
});
