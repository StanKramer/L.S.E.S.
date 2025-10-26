/* =======================================================
   DOCX SYSTEM — Boot + Quotes + Glow Émotionnel Aléatoire
   ======================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const chat = document.getElementById("docx-chat");
  const bubbles = document.getElementById("docx-bubbles");

  if (!chat || !bubbles) {
    console.error("⚠️ DocX container not found.");
    return;
  }

  // Apparition progressive
  chat.style.opacity = "0";
  setTimeout(() => (chat.style.opacity = "1"), 2500);

  // Séquence d'initialisation
  setTimeout(() => {
    docxIntro.forEach((line, i) => {
      setTimeout(() => createBubble(line, "system"), i * 1800);
    });
  }, 1500);

  // Rotation automatique des citations
  setInterval(() => {
    const randomQuote = docxQuotes[Math.floor(Math.random() * docxQuotes.length)];
    createBubble(randomQuote);
  }, 20000);

  // Table des émotions génériques aléatoires
  const randomMoods = [
    "bubble-calm",
    "bubble-ironic",
    "bubble-angry",
    "bubble-sad",
    "bubble-romantic",
    "bubble-hyper"
  ];

  // Création d'une bulle
  function createBubble(text, tone) {
    const bubble = document.createElement("div");
    bubble.classList.add("docx-bubble");

    // Attribution émotionnelle basée sur le contenu
    if (text.match(/pioupiou/i)) bubble.classList.add("bubble-pioupiou");
    else if (text.match(/raven/i)) bubble.classList.add("bubble-raven");
    else if (text.match(/\b69\b/)) bubble.classList.add("bubble-69");
    else if (text.match(/\b01\b/)) bubble.classList.add("bubble-01");
    else if (text.match(/volley/i)) bubble.classList.add("bubble-volley");
    else if (text.match(/canasson/i)) bubble.classList.add("bubble-canasson");
    else if (text.match(/\b63\b/)) bubble.classList.add("bubble-63");
    else if (text.match(/loris/i)) bubble.classList.add("bubble-loris");
    else {
      // S’il ne parle de personne spécifique, humeur aléatoire
      const mood = randomMoods[Math.floor(Math.random() * randomMoods.length)];
      bubble.classList.add(mood);
    }

    bubble.innerHTML = `<span class="docx-name">DocX :</span> ${text}`;
    bubbles.appendChild(bubble);

    // Auto-suppression des vieilles bulles
    setTimeout(() => bubble.remove(), 45000);
  }
});
