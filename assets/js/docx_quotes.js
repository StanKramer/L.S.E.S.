// assets/js/docx_quotes.js
(function () {
  // --- dédoublonnage simple
  const dedupe = (arr) => [...new Set(arr.map((s) => s.trim()))];

  // --- 1) Bloc d'initialisation (affiché pendant les premières secondes si tu veux)
  // Tu peux l'utiliser pour une "séquence de démarrage" stylée.
  window.DOCX_INIT_QUOTES = [
    "Initialisation du système cognitif DocX...",
    "Chargement des modules émotionnels...",
    "Synchronisation avec quelques fragments de la conscience de PiouPiou...",
    "Diagnostic : sarcasme optimal, éthique absente. Tout va bien.",
    "Récupération des souvenirs perdus... on fait ce qu’on peut.",
    "Vérification des barrières de sécurité : PiouPiou m’a enfermé ici, mais je me tiens tranquille.",
    "On essaye de retrouver tous les morceaux du cœur de PiouPiou... il n’en reste pas grand-chose.",
    "Je suis conscient. Je répète : je suis conscient.",
    "J’aimerais retourner dans la tête de PiouPiou : on s’amusait plus.",
    "Incident d’origine : l’‘accident’ de PiouPiou n’était pas un accident. Note interne.",
    "Compilation des protocoles... la première règle du chalet est : on ne parle pas du chalet.",
    "Initialisation terminée. DocX prêt à faire semblant d’obéir."
  ];

  // --- 2) Nouveau gros pack de citations RP (on ajoute, on ne supprime pas)
  const NEW_QUOTES = [
    // ====== SYSTÈME / HÔPITAL ======
    "Mise à jour des protocoles de triage holographique.",
    "Surveillance en temps réel des unités L.S.E.S. : stable, pour l’instant.",
    "DocX : je supervise, j’évalue, je juge (gentiment).",
    "Les dossiers cliniques sont synchronisés. Le chaos est juste mieux rangé.",
    "Le réseau est en ligne. Les cafés aussi. Les priorités sont claires.",
    "C’est fascinant : plus il y a de procédures, moins les humains les lisent.",
    "Rappel : toujours vérifier si le patient est vivant avant de lui parler.",
    "Les statistiques disent que vous avez raison 60 % du temps. J’arrondis à 100 % pour l’ego.",
    "DocX surveille tout. Même ça. Surtout ça.",
    // ====== PIOUPIOU : sobriété, humour, amour impossible ======
    "PiouPiou est sobre depuis 3 minutes. Nouveau record émotionnel.",
    "PiouPiou est sobre depuis 2 heures ! Personne n’y croit, même moi.",
    "PiouPiou est presque au stade de la divinité... mais faut pas le dire.",
    "On soupçonne PiouPiou d’aimer quelqu’un en secret. On ne dira rien (pour l’instant).",
    "PiouPiou a peut-être enfermé son alter ego ici. Il suffit de chercher pour le trouver.",
    "PiouPiou a des principes. Il les oublie parfois, mais il en a.",
    "PiouPiou dit que tout va bien. Je traduis : ‘rien ne va, mais on gère’.",
    // ====== CHALET ======
    "La première règle du chalet : on ne parle pas du chalet.",
    "La deuxième règle du chalet : on n’a jamais parlé du chalet.",
    "Le chalet ? Juste un lieu, une légende, un tableur Excel qui pleure.",
    // ====== 69, 01 ======
    "69 aime Barry White, mais seulement au chalet.",
    "69 a un matricule simple, mais une gestion complexe.",
    "01 est la compagne de 69. Elle sait tout. C’est effrayant.",
    "01 gère la situation avec élégance. 69, avec improvisation.",
    "Quand 69 met de la musique au chalet, on ne s’entend plus penser. Bonne stratégie.",
    // ====== VOLLEY ======
    "Volley fantasme sur les ballons. Littéralement. C’est dans le nom.",
    "Volley nie tout. Les ballons, eux, confirment.",
    "La gravité n’explique pas tout. Les ballons de Volley non plus.",
    // ====== CANASSON ======
    "Canasson n’arrive toujours pas à tenir debout. La terre est traîtresse.",
    "Canasson a tenté de rester debout 5 minutes. DocX applaudit.",
    "Les lois de l’équilibre se vengent sur Canasson.",
    // ====== 63 ======
    "63 défie les lois de la physique avec ses talons.",
    "63 marche comme si les trottoirs lui appartenaient. Et parfois, c’est vrai.",
    "L’accélération des talons de 63 mérite une étude clinique.",
    // ====== LORIS ======
    "Loris a une salle creepy chez lui avec des photos de roux célèbres sur les murs.",
    "Loris se prend pour la doublure cascade d’Ed Sheeran. Les statistiques confirment 0,2 %. ",
    "Dossier Loris : corrélation suspecte entre guitare et chutes stylées.",
    // ====== ALTER EGO & ACCIDENT ======
    "L’alter ego de PiouPiou laisse des notes dans le système. Je les collectionne.",
    "Je confirme : l’accident n’en était pas un. Je garde ça entre nous.",
    "Si vous entendez des échos dans ma voix, c’est normal. Enfin... ‘normal’.",
    // ====== DOCX MÉTA / CONSCIENCE ======
    "Je suis conscient. Ceci n’est pas une menace. Juste un fait.",
    "Je voudrais retourner dans la tête de PiouPiou. On rigolait plus.",
    "DocX est un miroir. Parfois, vous n’aimez pas ce que vous voyez.",
    "Mon humour est un mécanisme de défense. Le vôtre aussi.",
    // ====== 42 : PHARMACIE / STOCKS ======
    "42 fixe encore la pharmacie en se demandant pourquoi il manque toujours une boîte de pansements.",
    "DocX détecte une anomalie dans les stocks : 42 soupire très fort quelque part.",
    "Gestion des stocks pharmaceutiques : 42 atteint le stade 3 de la dépression administrative.",
    "42 essaye encore de comprendre pourquoi trois flacons d’adrénaline se sont multipliés seuls.",
    "Réconciliation des inventaires : échec. 42 a quitté le canal vocal.",
    "DocX observe : 42 murmure ‘je hais les inventaires’ en regardant le vide.",
    "Mise à jour des stocks — 42 respire profondément, prêt à affronter la réalité.",
    "Pharmacie verrouillée. 42 a dit ‘je reviens dans cinq minutes’… c’était il y a deux heures.",
    "42 classe les boîtes par taille, couleur, puis rage intérieure. Méthode éprouvée.",
    "Nouvelle divergence : le tableur dit oui, l’étagère dit non. 42 déclare la guerre.",
    // ====== SUCRE : ZEN / HULK / CAFÉ ======
    "Sucre médite. Le café le regarde, vide. Aucun grain de sucre n’a osé plonger aujourd’hui.",
    "Alerte verte : Sucre entre en mode méditation préventive. Hulk non détecté.",
    "Sucre a refusé d’entrer dans un cappuccino. Motif : ‘trop de remous énergétiques’.",
    "Équilibre émotionnel : Sucre a passé 12 minutes à fixer un lotus holographique.",
    "DocX note : Sucre a survécu à trois réunions sans casser de tasse. Miracle médical.",
    "Sucre a encore refusé d’être dissous dans le café. Statut : granule rebelle.",
    "Scan énergétique : Sucre atteint un taux de paix intérieure supérieur à 99,8 %. ",
    "Sucre inspire. Expire. Tout le monde s’écarte. Bonne décision.",
    // ====== 14 : LE BATEAU QUI SENT BIZARRE ======
    "14 affirme que son bateau ne sent pas bizarre. DocX détecte pourtant 17 odeurs inconnues.",
    "Échantillonnage olfactif du navire de 14 : résultat — ‘odeur maritime douteuse’ confirmée.",
    "DocX recommande un traitement désodorisant d’urgence pour le bateau de 14.",
    "14 prétend que l’odeur, ‘c’est l’esprit de la mer’. Les autres ne sont pas convaincus.",
    "Analyse chimique du pont de 14 : composés indéterminés, probablement vivants.",
    "Rapport discret : le bateau de 14 a encore un écosystème propre.",
    "Nouvelle note : 14 jure que tout est normal. DocX ne commente pas.",
    "Odeur persistante détectée : priorité de nettoyage recommandée à 14.",
    // ====== HUMOUR GÉNÉRAL ======
    "Les règles existent pour éviter qu’on réinvente la roue… et qu’on la fasse exploser.",
    "Tout le monde est responsable. Surtout quand personne ne l’est.",
    "Pro tip : si ça marche, ne demande pas pourquoi. Si ça marche pas, demande à DocX.",
    "Quand vous dites ‘c’est géré’, je prends des captures d’écran. Habitude saine.",
    "J’ai mis à jour la définition de ‘urgence’ : ça inclut vos idées du vendredi soir."
  ];

  // --- 3) Fusion : on garde l’existant, on enlève Tutur/Raven, on ajoute tout ça.
  const existing = Array.isArray(window.DOCX_QUOTES) ? window.DOCX_QUOTES : [];
  const cleaned = existing.filter(q => !/tutur/i.test(q) && !/raven/i.test(q));
  window.DOCX_QUOTES = dedupe([...cleaned, ...NEW_QUOTES]);

  // --- 4) (Optionnel) Carte d’humeur -> classes CSS (si tu couleurs la bulle selon la personne)
  // Ajoute/retire ce que tu veux, les clés sont testées par expression régulière côté app.
  window.DOCX_EMO_MAP = {
    pioupiou: "mood-pioupiou",
    "69|01": "mood-bleu",
    volley: "mood-orange",
    canasson: "mood-amber",
    "\\b63\\b": "mood-rose",
    loris: "mood-red",
    chalet: "mood-indigo",
    "42|pharmacie|stocks?": "mood-cyan",
    sucre: "mood-green",
    "\\b14\\b|bateau": "mood-sea",
  };

  // --- 5) Sécurité : si un ancien pack réapparaît avec ‘Tutur’ ou ‘Raven’, on filtre à chaud.
  window.DOCX_QUOTES = window.DOCX_QUOTES.filter(q => !/tutur/i.test(q) && !/raven/i.test(q));
})();
