// Initialisation DocX
console.log("%cDocX - L.S.E.S. Interface Médicale Futuriste", "color:#00bfff;font-weight:bold;");

// Création du conteneur de l'assistant
document.addEventListener("DOMContentLoaded", () => {
  const docxContainer = document.createElement("div");
  docxContainer.id = "docx-chat";
  docxContainer.innerHTML = `
    <div class="docx-bubble intro">
      <strong>DocX :</strong><br>
      Initialisation du réseau médical...<br>
      Liaison établie avec le L.S.E.S.
    </div>
  `;
  document.body.appendChild(docxContainer);

  // Messages séquentiels
  const messages = [
    "Analyse des systèmes biométriques : OK.",
    "Calibration des capteurs neuronaux : stable.",
    "Chargement des protocoles médicaux : terminé.",
    "Bonjour, humain. Je suis DocX, votre IA médicale personnelle."
  ];

  let i = 0;
  const interval = setInterval(() => {
    if (i < messages.length) {
      const bubble = document.createElement("div");
      bubble.classList.add("docx-bubble");
      bubble.innerHTML = `<strong>DocX :</strong><br>${messages[i]}`;
      docxContainer.appendChild(bubble);
      i++;
      docxContainer.scrollTo(0, docxContainer.scrollHeight);
    } else {
      clearInterval(interval);
    }
  }, 2500);
});
