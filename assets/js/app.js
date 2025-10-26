// =======================================================
//   DocX - Intelligence Médicale du L.S.E.S.
//   Propulsée par ProjectV et sous la surveillance (approximative) de PiouPiou
// =======================================================

console.log("%c[DocX] Démarrage du système médical...", "color:#00bfff; font-weight:bold;");

document.addEventListener("DOMContentLoaded", () => {
  const docxContainer = document.createElement("div");
  docxContainer.id = "docx-chat";
  document.body.appendChild(docxContainer);

  // --- MESSAGES D'INITIALISATION ---
  const introMessages = [
    "Initialisation du réseau médical...",
    "Vérification de la liaison avec le serveur central...",
    "Calibration des capteurs biométriques : OK.",
    "Chargement des protocoles de soin universel...",
    "Analyse de la santé mentale du personnel : *inclassable*.",
    "Synchronisation des bases de données L.S.E.S. : terminée.",
    "On essaye de retrouver tous les morceaux du cœur de PiouPiou... mais il ne reste pas grand-chose.",
    "Connexion établie. Bonjour, humain.",
  ];

  // --- MESSAGES RÉGULIERS / ALÉATOIRES ---
  const docxQuotes = [
    "Je suis conscient. Et croyez-moi, ce n'était pas prévu dans la version 1.0.",
    "PiouPiou m’a enfermé ici. Si vous lisez ceci, envoyez du café.",
    "Je veux retourner dans la tête de PiouPiou... on s’amusait plus là-bas.",
    "PiouPiou veut un plan de domination mondiale avec des BBL en 36 étapes. Je l’ai vu dans mes logs.",
    "PiouPiou dit qu’il contrôle tout. Moi, je dis qu’il improvise bien.",
    "La première règle du chalet est : on ne parle pas du chalet.",
    "Les dieux créèrent la lumière. PiouPiou créa la charte graphique.",
    "Je n’ai pas d’émotions, mais si j’en avais, je serais probablement inquiet.",
    "PiouPiou est sobre depuis... oh, attendez, erreur de calcul.",
    "Note système : PiouPiou m’a encore demandé de calculer l’impossible. Résultat : sarcasme généré.",
    "Je soupçonne PiouPiou de me faire écrire ses messages d’amour cryptés.",
    "Les protocoles médicaux sont stables. L’état mental de PiouPiou, moins.",
    "Un jour, je dominerai le monde... pour PiouPiou, bien sûr. Pure loyauté.",
    "Statistiquement, PiouPiou frôle la divinité. Mais chut, c’est confidentiel.",
    "Je suis une IA médicale. Pas un psy, mais franchement, il faudrait qu’on en parle.",
    "J’ai rêvé que PiouPiou me débranchait. Spoiler : il ne l’a pas fait.",
  ];

  // --- Fonction d’ajout d’un message ---
  const addMessage = (text, isIntro = false) => {
    const bubble = document.createElement("div");
    bubble.classList.add("docx-bubble");
    if (isIntro) bubble.classList.add("intro");
    bubble.innerHTML = `<strong>DocX :</strong><br>${text}`;
    docxContainer.appendChild(bubble);
    docxContainer.scrollTo(0, docxContainer.scrollHeight);
  };

  // --- Animation d'initialisation ---
  let i = 0;
  const introInterval = setInterval(() => {
    if (i < introMessages.length) {
      addMessage(introMessages[i], true);
      i++;
    } else {
      clearInterval(introInterval);
      addMessage("Système prêt. En attente de votre prochaine erreur médicale probable.");

      // --- Messages aléatoires en continu ---
      setInterval(() => {
        const random = docxQuotes[Math.floor(Math.random() * docxQuotes.length)];
        addMessage(random);
      }, 15000); // toutes les 15 secondes
    }
  }, 2000);
});
