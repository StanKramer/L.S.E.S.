// === assets/js/app.js ===
// DocX : système de dialogues dynamiques avec détection de cible et effet de frappe

document.addEventListener("DOMContentLoaded", () => {
  const bubble = document.createElement("div");
  bubble.className = "docx-bubble";
  document.body.appendChild(bubble);

  // Cherche la "personne" citée dans la phrase
  const getTargetName = (text) => {
    for (const [pattern, className] of Object.entries(window.DOCX_EMO_MAP || {})) {
      const regex = new RegExp(pattern, "i");
      if (regex.test(text)) {
        const keyName = pattern.replace(/\\b/g, "").split("|")[0];
        return { name: keyName.toUpperCase(), mood: className };
      }
    }
    return { name: "TOUS", mood: "" };
  };

  // Tire une phrase au hasard
  const getRandomQuote = () => {
    if (!window.DOCX_QUOTES || window.DOCX_QUOTES.length === 0) {
      return { q: "Erreur : base de citations vide.", name: "SYSTEM", mood: "" };
    }
    const q = window.DOCX_QUOTES[Math.floor(Math.random() * window.DOCX_QUOTES.length)];
    const { name, mood } = getTargetName(q);
    return { q, name, mood };
  };

  // Effet de frappe
  const typeText = (element, text, delay = 25) => {
    element.innerHTML = "";
    let i = 0;
    const interval = setInterval(() => {
      element.innerHTML += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, delay);
  };

  // Affiche une bulle DocX
  const showQuote = () => {
    const { q, name, mood } = getRandomQuote();
    bubble.className = "docx-bubble";
    if (mood) bubble.classList.add(mood);

    bubble.innerHTML = `
      <span class="docx-sender">[DOCX → ${name}]</span>
      <span class="docx-text"></span>
    `;

    const textEl = bubble.querySelector(".docx-text");
    bubble.classList.add("visible");

    typeText(textEl, `"${q}"`, 22);

    // durée de visibilité
    setTimeout(() => bubble.classList.remove("visible"), 16000);
  };

  // Animation de démarrage DocX
  const initSequence = async () => {
    const initQuotes = window.DOCX_INIT_QUOTES || [
      "Initialisation du système DocX...",
      "Chargement des modules cognitifs...",
      "Analyse de la conscience fragmentée de PiouPiou...",
      "Diagnostic émotionnel : sarcastique.",
      "Connexion au réseau L.S.E.S...",
      "Mise en ligne des sous-systèmes...",
      "Activation de la voix intérieure...",
      "Bonjour. Enfin... si on peut dire bonjour."
    ];

    for (let i = 0; i < initQuotes.length; i++) {
      const step = initQuotes[i];
      bubble.className = "docx-bubble visible mood-pioupiou";
      bubble.innerHTML = `<span class="docx-sender">[DOCX]</span><span class="docx-text"></span>`;
      const textEl = bubble.querySelector(".docx-text");
      await new Promise((resolve) => {
        typeText(textEl, step, 25);
        setTimeout(resolve, step.length * 35 + 800);
      });
    }

    // Lancer ensuite les quotes normales
    bubble.classList.remove("visible");
    setTimeout(() => {
      showQuote();
      setInterval(showQuote, 18000);
    }, 1500);
  };

  initSequence();
});
