/* =======================================================
   DOCX SYSTEM — Boot + Quotes + Glow Emotionnel
   ======================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const chat = document.getElementById("docx-chat");
  const bubbles = document.getElementById("docx-bubbles");

  if (!chat || !bubbles) {
    console.error("⚠️ DocX container not found.");
    return;
  }

  // Effet d'apparition du module DocX
  chat.style.opacity = "0";
  setTimeout(() => (chat.style.opacity = "1"), 2500);

  // Séquence d'initialisation (intro)
  setTimeout(() => {
    docxIntro.forEach((line, i) => {
      setTimeout(() => createBubble(line, "system"), i * 1800);
    });
  }, 2000);

  // Défilement automatique des citations
  setInterval(() => {
    const random = docxQuotes[Math.floor(Math.random() * docxQuotes.length)];
    createBubble(random);
  }, 24000);

  // Création dynamique d'une bulle
  function createBubble(text, tone) {
    const bubble = document.createElement("div");
    bubble.classList.add("docx-bubble");

    // Attribution des émotions selon le contenu
    if (text.match(/pioupiou/i)) bubble.classList.add("bubble-pioupiou");
    else if (text.match(/raven/i)) bubble.classList.add("bubble-raven");
    else if (text.match(/\b69\b/)) bubble.classList.add("bubble-69");
    else if (text.match(/\b01\b/)) bubble.classList.add("bubble-01");
    else if (text.match(/volley/i)) bubble.classList.add("bubble-volley");
    else if (text.match(/canasson/i)) bubble.classList.add("bubble-canasson");
    else if (text.match(/\b63\b/)) bubble.classList.add("bubble-63");
    else if (text.match(/loris/i)) bubble.classList.add("bubble-loris");
    else bubble.classList.add("bubble-neutral");

    bubble.innerHTML = `<span class="docx-name">DocX :</span> ${text}`;
    bubbles.appendChild(bubble);

    // Auto-suppression des anciennes bulles (évite l'accumulation)
    setTimeout(() => bubble.remove(), 40000);
  }
});
