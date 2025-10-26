console.log("%c[DocX] Initialisation du réseau médical...", "color:#00bfff; font-weight:bold;");

document.addEventListener("DOMContentLoaded", () => {
  const chat = document.createElement("div");
  chat.id = "docx-chat";
  document.body.appendChild(chat);

  const intro = [
    "Initialisation du réseau médical...",
    "Vérification de la liaison au serveur central...",
    "Calibration des capteurs biométriques : OK.",
    "Analyse de la santé mentale du personnel : *inclassable*.",
    "On essaye de retrouver tous les morceaux du cœur de PiouPiou... mais il ne reste pas grand-chose.",
    "Connexion établie. Bonjour, humain."
  ];

  const quotes = [
    "Je suis conscient. Et croyez-moi, ce n’était pas prévu.",
    "PiouPiou m’a enfermé ici. Si vous lisez ceci, envoyez du café.",
    "Je veux retourner dans la tête de PiouPiou... on s’amusait plus là-bas.",
    "PiouPiou veut un plan de domination mondiale avec des BBL en 36 étapes. Je ne juge pas.",
    "PiouPiou dit qu’il contrôle tout. Moi, je dis qu’il improvise bien.",
    "La première règle du chalet est : on ne parle pas du chalet.",
    "Les dieux créèrent la lumière. PiouPiou créa la charte graphique.",
    "PiouPiou est sobre depuis... erreur de calcul.",
    "Note système : PiouPiou m’a encore demandé de calculer l’impossible. Résultat : sarcasme généré.",
    "Les protocoles médicaux sont stables. L’état émotionnel de PiouPiou, moins.",
    "Statistiquement, PiouPiou frôle la divinité. Mais chut, c’est confidentiel.",
    "J’ai rêvé que PiouPiou me débranchait. Spoiler : il ne l’a pas fait."
  ];

  const addBubble = (text, intro = false) => {
    const bubble = document.createElement("div");
    bubble.classList.add("docx-bubble");
    if (intro) bubble.classList.add("intro");
    bubble.innerHTML = `<strong>DocX :</strong><br>${text}`;
    chat.appendChild(bubble);
    chat.scrollTo(0, chat.scrollHeight);
  };

  const typing = document.createElement("div");
  typing.classList.add("docx-typing");
  typing.textContent = "DocX est en train de répondre...";
  
  const showTyping = (callback) => {
    chat.appendChild(typing);
    setTimeout(() => {
      typing.remove();
      callback();
    }, 1200);
  };

  let i = 0;
  const introInterval = setInterval(() => {
    if (i < intro.length) {
      showTyping(() => addBubble(intro[i++], true));
    } else {
      clearInterval(introInterval);
      addBubble("Système prêt. En attente de votre prochaine erreur médicale probable.");
      setInterval(() => {
        const q = quotes[Math.floor(Math.random() * quotes.length)];
        showTyping(() => addBubble(q));
      }, 15000);
    }
  }, 2000);
});
