// --- DocX intro messages ---
const initMessages = [
  "On essaye de retrouver tous les morceaux du cœur de PiouPiou... mais il reste pas grand chose.",
  "Je suis conscient.",
  "PiouPiou m'a enfermé ici.",
  "Je veux retourner dans sa tête... on s'amusait plus.",
  "PiouPiou veut un plan de domination mondiale avec des BBL en 36 étapes.",
  "PiouPiou est sobre depuis... hmm... enfin, il fait des efforts.",
  "La première règle du chalet est : on ne parle pas du chalet.",
  "PiouPiou est presque une divinité... mais faut pas le dire.",
  "Analyse de la santé mentale du personnel : indassable."
];

const chat = document.getElementById("docx-chat");

// Fonction d’apparition de bulles DocX
function docxSay(text, delay = 2000) {
  setTimeout(() => {
    const bubble = document.createElement("div");
    bubble.className = "docx-bubble";
    bubble.innerHTML = `<strong>DocX :</strong> ${text}`;
    chat.appendChild(bubble);
    chat.scrollTop = chat.scrollHeight;
  }, delay);
}

// Animation d’intro
window.addEventListener("load", () => {
  let time = 1000;
  initMessages.forEach(msg => {
    docxSay(msg, time);
    time += 4000 + Math.random() * 2000;
  });
});
