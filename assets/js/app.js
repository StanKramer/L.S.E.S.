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
  bubble.setAttribute("data-tone", tone);
  bubble.textContent = `[DocX] ${quote}`;

  chat.prepend(bubble);

  // Nettoyage auto
  setTimeout(() => {
    bubble.remove();
  }, 15000);
}

// Première bulle au lancement
window.addEventListener("DOMContentLoaded", () => {
  spawnDocxBubble();
  setInterval(spawnDocxBubble, 10000);
});
