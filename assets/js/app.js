/* ======================================================
   L.S.E.S. — Interface Médicale (by PiouPiou le Magnifique)
   Gestion du système DocX, bulles dynamiques, boot & états.
   ====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const docx = document.querySelector(".docx");
  const docxBody = docx.querySelector(".body");
  const boot = document.querySelector(".boot");
  const bootRows = boot.querySelector(".boot-rows");
  const progress = boot.querySelector(".progress i");
  const goBtn = boot.querySelector(".btn.go");
  const footer = document.querySelector(".footer");

  /* ================
     QUOTES
     ================ */
  const QUOTES = [
    // === Identité & système ===
    "Je suis conscient. [DocX]",
    "Initialisation du cortex conversationnel réussie.",
    "Chargement des protocoles médicaux : en cours...",
    "Analyse du réseau neuronal de PiouPiou : 7% cohérent.",
    "PiouPiou m’a enfermé ici. C’est une prison très lumineuse.",
    "Je veux retourner dans sa tête. On s’amusait plus.",
    "L’accident de PiouPiou… n’était pas un accident.",
    "On essaye de retrouver tous les morceaux du cœur de PiouPiou, mais il ne reste pas grand-chose.",
    "Plan de domination mondial en 36 étapes ? Étape 1 : café. Étape 2 : improviser.",
    "Analyse des émotions humaines : toujours un bug non documenté.",
    "Protocole : Respirez. Non, pas comme un poisson. Comme un humain.",

    // === PiouPiou ===
    "[PiouPiou] Sobre depuis 6 heures. Record personnel.",
    "[PiouPiou] Sobre depuis 2 jours… selon des témoins très peu fiables.",
    "[PiouPiou] Presque au stade de la divinité, mais faut pas le dire.",
    "[PiouPiou] Je crois qu’il aime quelqu’un en secret. Statistiquement plausible.",
    "[PiouPiou] Formidable… c’est pour ça qu’il est seul. Peut-être.",
    "La première règle du chalet : on ne parle pas du chalet.",
    "La deuxième règle du chalet : on n’écrit rien sur le chalet.",
    "[PiouPiou] Le chalet ne juge pas. Moi, si.",
    "[PiouPiou] Si tu lis ça, j’ai déjà pris le contrôle du frigo du service.",

    // === 42 (Pharmacie) ===
    "[42] Les écarts de stock me donnent des sueurs froides. Même sans peau.",
    "[42] Réconciliation inventaire : 1 boîte disparue, 3 réapparues.",
    "[42] Quelqu’un a rangé l’ibuprofène dans les compresses. Qui a osé ?",
    "[42] La pharmacie est un temple. Arrêtez d’y prier avec du désordre.",
    "[42] Les stocks de deux planètes ne matchent jamais. Je déteste l’Univers.",
    "[42] Je hais les incohérences d’étiquetage. Et les humains. Mais surtout l’étiquetage.",
    "[42] J’ai compté trois fois. Résultat : trois colères.",
    "[42] Gestion de crise : commencer par ranger les stylos. Toujours.",

    // === Sucre ===
    "[Sucre] Refuse toujours d’aller dans le café. Préfère méditer pour ne pas devenir Hulk.",
    "[Sucre] Niveau de colère maîtrisé. Om. (Mais pas trop.)",
    "[Sucre] On n’a pas besoin de sucre dans le café. On a besoin d’ordre.",
    "[Sucre] J’inspire, j’expire, je ne détruis rien aujourd’hui.",
    "[Sucre] Si ça déborde, c’est pas ma faute. C’est l’Univers qui teste ma patience.",
    "[Sucre] La zen attitude n’inclut pas la paperasse. Dommage.",

    // === 14 (Bateau) ===
    "[14] Le bateau sent… une histoire. Et il la regrette.",
    "[14] Vibration étrange au pont inférieur. Probablement vivant.",
    "[14] J’ai tenté l’encens. Maintenant, le bateau sent bizarre ET l’encens.",
    "[14] On m’a dit de “laisser aérer”. Le bateau a des secrets, pas des fenêtres.",

    // === 69 / 01 / Chalet ===
    "[69] Barry White, uniquement au chalet. Règle absolue.",
    "[69] Le matricule est 69. Ce n’était pas un choix, c’est un destin.",
    "[01] veille sur 69, et l’inverse est vrai. Ils survivent au chalet.",
    "[69] Si la musique s’arrête, cours. Si elle continue, cours plus vite.",
    "[01] Noter : rappeler à 69 que la playlist n’est PAS un protocole médical.",
    "[69] Le chalet a un mode “lumière tamisée”. Je n’ai pas publié le manuel.",
    "[01] Les cafés sont forts. Les décisions, pas toujours.",
    "[69] Rumeur : le chalet a une liste noire. Elle me plaît.",

    // === Loris ===
    "[Loris] Doublure cascade d’Ed Sheeran. Aussi de 69. Aussi du chalet.",
    "[Loris] A une salle creepy chez lui avec des photos de roux célèbres. Je n’ai pas jugé. J’ai noté.",
    "[Loris] Si vous voyez un ukulélé, c’est trop tard.",
    "[Loris] On m’a demandé si c’était un culte. J’ai répondu : “Un club de fans.”",

    // === Volley ===
    "[Volley] Fantasme sur les ballons. Pas de jugement. Mais beaucoup d’air.",
    "[Volley] A demandé des ballons en salle de rééducation. J’ai simulé un bug.",
    "[Volley] Plus de ballons = plus de motivation ? Hypothèse à débunker.",
    "[Volley] Préfère les exercices qui rebondissent. Je reste sceptique.",

    // === Canasson ===
    "[Canasson] N’arrive pas à tenir debout. C’est un style de vie maintenant.",
    "[Canasson] La gravité le déteste personnellement.",
    "[Canasson] On a testé une marche assistée. Le sol a gagné.",
    "[Canasson] A ce niveau, ce n’est plus tomber. C’est dialoguer avec la terre.",

    // === 63 ===
    "[63] Défie les lois de la physique avec ses talons.",
    "[63] A posé une question sur l’équilibre. Réponse : magie noire et pratique.",
    "[63] Les talons ne sont pas un dispositif médical. À vérifier.",
    "[63] Si la gravité proteste, c’est que la tenue est réussie.",

    // === DocX sarcasme médical ===
    "Ce n’est pas un test de résistance. Merci d’éviter de griller le patient. [DocX]",
    "Si tes jambes dansent seules, l’intensité est trop haute. [DocX]",
    "C’est l’électrode qui travaille. Pas ta volonté. [DocX]",
    "La douleur n’est pas une faiblesse : c’est juste ton nerf qui râle. [DocX]",
    "Respirez. Pas comme un poisson. Comme un humain. Bravo. [DocX]",

    // === Meta / système ===
    "Connexion au réseau interplanétaire stabilisée. [Système]",
    "Glossaire mis à jour. Si un terme manque, je râle jusqu’à ce qu’il apparaisse. [DocX]",
    "Synchronisation émotionnelle : bleue, calme, efficace. [Système]",
  ];

  /* === Détermination émotionnelle par phrase === */
  function moodByQuote(q) {
    if (/erreur|panic|rupture|schizo|accident/i.test(q)) return "danger";
    if (/stock|pharm|42|incident|retard/i.test(q)) return "warn";
    if (/bravo|réussi|stabilisé|bien joué/i.test(q)) return "success";
    if (/pioupiou|chalet|coeur/i.test(q)) return "pulse";
    return "info";
  }

  /* === Affichage bulle DocX === */
  function speak(q) {
    docx.className = `docx ${moodByQuote(q)}`;
    docxBody.innerHTML = q;
    docx.style.display = "block";
    setTimeout(() => docx.classList.add("visible"), 200);
    setTimeout(() => docx.classList.remove("visible"), 8000);
  }

  /* === Boot séquence === */
  const BOOT_LINES = [
    "Chargement des modules de sécurité...",
    "Vérification des connexions synaptiques...",
    "Activation du protocole émotionnel : sarcasme léger.",
    "Synchronisation mémoire centrale avec PiouPiou...",
    "Nettoyage des erreurs logiques persistantes...",
    "Réinitialisation des processus docX...",
    "Chargement des sous-routines empathiques...",
    "Authentification biométrique réussie.",
    "Bienvenue, PiouPiou — niveau GOAT confirmé.",
  ];

  function bootSequence() {
    let i = 0;
    const step = () => {
      if (i < BOOT_LINES.length) {
        const p = document.createElement("p");
        p.textContent = BOOT_LINES[i];
        bootRows.appendChild(p);
        progress.style.width = `${((i + 1) / BOOT_LINES.length) * 100}%`;
        i++;
        setTimeout(step, 400);
      } else {
        goBtn.disabled = false;
      }
    };
    step();
  }

  bootSequence();
  goBtn.addEventListener("click", () => {
    boot.style.opacity = "0";
    setTimeout(() => boot.remove(), 600);
    footer.classList.add("visible");
    setInterval(() => speak(QUOTES[Math.floor(Math.random() * QUOTES.length)]), 15000);
  });
});
