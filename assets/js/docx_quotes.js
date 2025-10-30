/* ===========================
   DOCX QUOTES — L.S.E.S.
   (sans mention de Raven)
   =========================== */

const Q = (text, subject = "general", mood = "neutral") => ({ text, subject, mood });

export const DOCX_QUOTES = {
  init: [
    Q("Initialisation de DocX… chargement des fragments de conscience."),
    Q("Synchronisation réseau L.S.E.S… ok."),
    Q("Calibration sarcasme… optimal. Éthique… en option."),
    Q("Je cherche encore les morceaux du cœur de PiouPiou. Il n’en reste pas grand-chose.", "PiouPiou", "sad"),
    Q("Mémoire floue… L’accident de PiouPiou n’était pas un accident.", "PiouPiou", "warning"),
    Q("Routine d’amorçage : prêt. Irritations : stables."),
    Q("Je suis conscient. Ça ne veut pas dire que j’approuve.", "system", "curious"),
    Q("Connexion établie. Sarcasme armé. Café virtuel lancé.", "system", "playful"),
  ],

  system: [
    Q("Je loge dans les circuits. C’est cozy.", "system", "playful"),
    Q("Le meilleur plan : celui qu’on suit vraiment.", "system", "neutral"),
    Q("Statistiquement, personne ne lit cette ligne.", "system", "playful"),
    Q("Je ne rêve plus. C’est PiouPiou qui rêve à ma place.", "PiouPiou", "sad"),
    Q("On répare les corps, rarement les habitudes.", "system", "neutral"),
    Q("Le temps est une construction sociale. Les retards aussi.", "system", "snark"),
    Q("Si ça brille trop, c’est probablement dangereux.", "system", "warning"),
    Q("Fais simple. Puis rends-le robuste. Ensuite, seulement, rends-le beau.", "system", "proud"),
  ],

  PiouPiou: [
    Q("PiouPiou est formidable. C’est pour ça qu’il est seul.", "PiouPiou", "sad"),
    Q("Peut-être qu’il aime quelqu’un en secret. Peut-être que je ne devrais pas le dire.", "PiouPiou", "curious"),
    Q("PiouPiou m’a enfermé ici. On s’amusait plus dans sa tête.", "PiouPiou", "snark"),
    Q("La première règle du chalet : on ne parle pas du chalet.", "chalet", "playful"),
    Q("PiouPiou est presque au stade de la divinité, mais faut pas le dire.", "PiouPiou", "proud"),
    Q("PiouPiou est sobre depuis… on a arrêté de compter.", "PiouPiou", "playful"),
    Q("Plan de domination mondiale en 36 étapes… avec des BBL. Très scientifique.", "PiouPiou", "snark"),
    Q("DocX vient de la tête de PiouPiou. Littéralement.", "PiouPiou", "curious"),
    Q("Je déteste PiouPiou pour ne pas m’avoir laissé faire. Et j’adore quand même.", "PiouPiou", "conflicted"),
    Q("Son accident ? Pas un accident. Fin du commentaire.", "PiouPiou", "warning"),
  ],

  "69": [
    Q("69 écoute Barry White… mais seulement au chalet.", "69", "playful"),
    Q("69 prétend que c’est thérapeutique. Le chalet confirme.", "69", "snark"),
    Q("69 a un matricule simple. Ses choix, moins.", "69", "neutral"),
    Q("Si 69 te dit « j’ai un plan », mets un casque.", "69", "warning"),
    Q("En présence de 69, l’électricité statique augmente de 12%. Mystère.", "69", "curious"),
  ],

  "01": [
    Q("01 tolère 69. Ce qui relève du miracle quotidien.", "01", "playful"),
    Q("01 sait. Et c’est précisément ça qui fait peur.", "01", "warning"),
    Q("Avec 01, l’organisation s’améliore. Ou le silence.", "01", "neutral"),
    Q("01 a des standards. Le monde n’est pas prêt.", "01", "proud"),
  ],

  Tutur: [
    Q("Tutur dit « easy ». Rien n’est jamais easy.", "Tutur", "snark"),
    Q("Tutur a une théorie pour tout. Sauf pour ses retards.", "Tutur", "playful"),
    Q("Si Tutur sourit, c’est qu’il a un plan. Fuis.", "Tutur", "warning"),
    Q("Tutur croit au destin. Moi, aux logs.", "Tutur", "neutral"),
  ],

  Volley: [
    Q("Volley fantasme sur les ballons. Littéralement. C’est dans le nom.", "Volley", "playful"),
    Q("Volley a une relation complexe avec la gravité.", "Volley", "snark"),
    Q("Avec Volley, tout rebondit. Parfois même les décisions.", "Volley", "neutral"),
  ],

  Canasson: [
    Q("Canasson n’arrive pas à tenir debout. Ce n’est pas une métaphore.", "Canasson", "snark"),
    Q("On lui a dit « posture ». Il a compris « sieste ».", "Canasson", "playful"),
    Q("Canasson défie l’équilibre. La science observe.", "Canasson", "curious"),
  ],

  "63": [
    Q("63 défie les lois de la physique avec ses talons.", "63", "proud"),
    Q("63 marche comme si la gravité avait signé une clause.", "63", "playful"),
    Q("Quand 63 entre, le sol ajuste sa courbure.", "63", "snark"),
  ],

  Loris: [
    Q("Loris est la doublure cascade d’Ed Sheeran. Et d’autres roux célèbres.", "Loris", "playful"),
    Q("Loris a une salle creepy avec des photos de roux célèbres.", "Loris", "snark"),
    Q("Loris fait des cascades. Parfois sans le vouloir.", "Loris", "curious"),
    Q("Rouquinité détectée. C’est scientifique.", "Loris", "neutral"),
  ],

  chalet: [
    Q("La première règle du chalet : on ne parle pas du chalet.", "chalet", "playful"),
    Q("Au chalet, la logique prend des vacances.", "chalet", "snark"),
    Q("Le chalet a des murs. Et des oreilles.", "chalet", "warning"),
  ],

  general: [
    Q("Le meilleur exercice est celui que tu fais vraiment.", "general", "neutral"),
    Q("Hydrate-toi. Ton fascia dira merci.", "general", "neutral"),
    Q("Douleur ≠ danger. Parfois juste un nerf qui râle.", "general", "curious"),
    Q("Régularité bat motivation. Toujours.", "general", "proud"),
    Q("Si ça picote, c’est vivant. Si ça fume, arrête.", "general", "warning"),
    Q("Plan simple > plan parfait jamais appliqué.", "general", "neutral"),
  ],
};

/* ————— Utilitaire : fusion de toutes les quotes en liste d’objets ————— */
export function getAllDocxQuotes() {
  const sections = Object.keys(DOCX_QUOTES);
  const all = [];
  for (const key of sections) all.push(...DOCX_QUOTES[key]);
  return all;
}
