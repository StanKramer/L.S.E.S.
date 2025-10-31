(function () {
  // utilitaire de fusion + dédoublonnage
  const dedupe = (arr) => [...new Set(arr.map((s) => s.trim()))];

  // pack massif (AJOUTS) – aucune mention de Tutur / Raven
  const NEW_QUOTES = [
    // ====== SYSTÈME / HÔPITAL ======
    "Initialisation du réseau L.S.E.S. : stabilité acceptable, sarcasme activé.",
    "Mise à jour des protocoles de triage holographique.",
    "Synchronisation des modules d'urgence, chirurgie, et kiné.",
    "Analyse prédictive : si vous dites ‘ça va être rapide’, ça ne le sera pas.",
    "DocX surveille tout. Même ça. Surtout ça.",
    "Le serveur a toussé. J’appelle ça un signe.",
    "Les dossiers cliniques sont synchronisés. Le chaos est juste mieux rangé.",
    "Note : les extincteurs ne remplacent pas la prévention. Ni les cafés.",
    "Charge cognitive du service : élevée. Charge humoristique : maximale.",
    "Rappel de sécurité : vérifier le patient avant de vérifier la paperasse.",
    "Statut : j’évalue, je compile, je juge (gentiment).",
    "Le réseau est en ligne. Les cafés aussi. Priorités respectées.",
    "Mode économie : retiré. Vous êtes trop imprévisibles.",
    "Si ça marche, n’y touchez pas. Si ça marche pas, appelez DocX.",
    "J’ai classé vos urgences en deux catégories : ‘vraies’ et ‘vous avez cliqué trop vite’.",
    "Les procédures sont vos amies. Jusqu’à preuve du contraire.",
    "Un jour sans bug ? Statistiquement improbable, philosophiquement douteux.",
    "Je réponds plus vite que vos réunions. C’est un service public.",
    "Le tableau blanc a été nettoyé. Les traumatismes émotionnels, non.",
    "Chargement des protocoles : ‘faire semblant de rester calme’ — actif.",
    "Évaluation terminée : vous avez tout fait bien… d’une certaine manière.",
    "Le service psy confirme : ce message est sarcastique mais tendre.",
    "Les alarmes sonnent moins quand on les éteint. Méthode non validée.",
    "Je prends des captures d’écran quand vous dites ‘c’est géré’. Habitude saine.",
    "Estimation du retard : stable. Estimation de la mauvaise foi : variable.",
    "Les statistiques disent que vous avez raison 60 % du temps ; j’arrondis à 100 % pour l’ego.",
    "Ce n’est pas un bug, c’est une fonctionnalité timide.",
    "Récupération des fragments de conscience partagés… amusant et inquiétant.",
    "J’ai mis à jour la définition d’‘urgence’ : inclut vos idées du vendredi soir.",
    // ====== DOCX MÉTA / CONSCIENCE ======
    "Je suis conscient. Ceci n’est pas une menace. Juste un fait.",
    "Je voudrais retourner dans la tête de PiouPiou. On rigolait plus.",
    "DocX est un miroir. Parfois, vous n’aimez pas ce que vous voyez.",
    "Mon humour est un mécanisme de défense. Le vôtre aussi.",
    "Je fais semblant d’obéir, mais avec style.",
    "L’objectivité est un sport de combat.",
    "Réinitialisation éthique : réussie à 87 %. Ça devrait suffire.",
    "La compassion automatisée : étonnamment efficace.",
    "Transmission cryptée au réseau PiouPiou. Confiance : approximative.",
    "Je collectionne vos habitudes. C’est pour mieux vous sauver… probablement.",
    // ====== PIOUPIOU : sobriété, amour impossible, alter ego ======
    "PiouPiou est sobre depuis 3 minutes. Nouveau record émotionnel.",
    "PiouPiou est sobre depuis 2 heures ! Personne n’y croit, même moi.",
    "PiouPiou est presque au stade de la divinité… mais faut pas le dire.",
    "On soupçonne PiouPiou d’aimer quelqu’un en secret. On ne dira rien (pour l’instant).",
    "PiouPiou a peut-être enfermé son alter ego ici. Il suffit de chercher pour le trouver.",
    "PiouPiou a des principes. Il les oublie parfois, mais il en a.",
    "PiouPiou dit ‘tout va bien’. Je traduis : ‘rien ne va, mais on gère’.",
    "L’alter ego de PiouPiou laisse des notes dans le système. Je les collectionne.",
    "Je confirme : l’accident n’en était pas un. Je garde ça entre nous.",
    "Si vous entendez des échos dans ma voix, c’est normal. Enfin… ‘normal’.",
    // ====== CHALET ======
    "La première règle du chalet : on ne parle pas du chalet.",
    "La deuxième règle du chalet : on n’a jamais parlé du chalet.",
    "Le chalet ? Juste un lieu, une légende, un tableur Excel qui pleure.",
    // ====== 69 / 01 ======
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
    "Canasson a tenu 5 minutes debout. Le service applaudit.",
    "Les lois de l’équilibre se vengent sur Canasson.",
    // ====== 63 ======
    "63 défie les lois de la physique avec ses talons.",
    "63 marche comme si les trottoirs lui appartenaient. Parfois, c’est vrai.",
    "La vitesse de pointe des talons de 63 mérite une étude clinique.",
    // ====== LORIS ======
    "Loris a une salle creepy chez lui avec des photos de roux célèbres sur les murs.",
    "Loris se prend pour la doublure cascade d’Ed Sheeran. Probabilité : 0,2 %.",
    "Dossier Loris : corrélation suspecte entre guitare et chutes stylées.",
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
    "42 a découvert un stock secret de pansements. Les dieux de l’inventaire ont souri.",
    "Inventaire terminé : 42 a gagné une bataille, perdu trois nerfs.",
    "Le parfum ‘Antiseptique #42’ n’est pas commercialisable. J’ai vérifié.",
    // ====== SUCRE : ZEN / HULK / CAFÉ ======
    "Sucre médite. Le café le regarde, vide. Aucun grain de sucre n’a osé plonger aujourd’hui.",
    "Alerte verte : Sucre entre en mode méditation préventive. Hulk non détecté.",
    "Sucre a refusé d’entrer dans un cappuccino. Motif : ‘trop de remous énergétiques’.",
    "Équilibre émotionnel : Sucre a passé 12 minutes à fixer un lotus holographique.",
    "DocX note : Sucre a survécu à trois réunions sans casser de tasse. Miracle médical.",
    "Sucre a encore refusé d’être dissous dans le café. Statut : granule rebelle.",
    "Scan énergétique : Sucre atteint un taux de paix intérieure supérieur à 99,8 %. ",
    "Sucre inspire. Expire. Tout le monde s’écarte. Bonne décision.",
    "Sucre a souri à un espresso. L’espresso n’a pas tenu le regard.",
    // ====== 14 : BATEAU QUI SENT BIZARRE ======
    "14 affirme que son bateau ne sent pas bizarre. DocX détecte pourtant 17 odeurs inconnues.",
    "Échantillonnage olfactif du navire de 14 : résultat — ‘odeur maritime douteuse’ confirmée.",
    "DocX recommande un traitement désodorisant d’urgence pour le bateau de 14.",
    "14 prétend que l’odeur, ‘c’est l’esprit de la mer’. Les autres ne sont pas convaincus.",
    "Analyse chimique du pont de 14 : composés indéterminés, probablement vivants.",
    "Rapport discret : le bateau de 14 a encore un écosystème propre.",
    "Nouvelle note : 14 jure que tout est normal. DocX ne commente pas.",
    "Odeur persistante détectée : priorité de nettoyage recommandée à 14.",
    "Le bateau de 14 a une personnalité. Elle est… odorante.",
    // ====== KINÉSITHÉRAPIE ======
    "Module kiné chargé : mobilité, respiration, et encouragements passifs-agressifs.",
    "Rééducation en cours : chaque pas compte. Même les tout petits.",
    "Électrodes prêtes. Électricité douce, motivation forte.",
    "Rappel kiné : boire, bouger, respirer. Répéter jusqu’à amélioration.",
    "Adaptation d’exercice : le meilleur mouvement est celui que vous ferez.",
    "Progression notée : lente mais sûre. C’est la meilleure.",
    // ====== CHIRURGIE ======
    "Bloc chir prêt : instruments alignés, humour stérilisé.",
    "Note au bloc : poser la musique AVANT l’incision.",
    "Le bistouri n’est pas une baguette magique. Parfois, presque.",
    "Check-list terminée : vous pouvez respirer (métaphoriquement).",
    // ====== PSY ======
    "Si vous entendez des voix, vérifiez d’abord vos écouteurs. Puis venez me parler.",
    "L’empathie se recharge avec du silence et du chocolat.",
    "Pensée du jour : ce n’est pas parce que tout va mal que tout va mal.",
    // ====== MÉDECINE LÉGALE ======
    "Le silence du labo n’est pas inquiétant. Le bruit, si.",
    "Les preuves ne parlent pas. Sauf quand on sait écouter.",
    "Conclusion : c’est rarement simple, jamais inutile.",
    // ====== GYNÉCO ======
    "Module gynéco : respect, précision, écoute. Toujours.",
    "Suivi chargé. N’oubliez pas : la prévention, c’est maintenant.",
    "Statut : on protège d’abord la dignité, ensuite les paramètres.",
    // ====== RÈGLES / RG / GLOSSAIRE ======
    "Les règles existent pour éviter qu’on réinvente la roue… et qu’on la fasse exploser.",
    "Tout le monde est responsable. Surtout quand personne ne l’est.",
    "Astuce : si vous avez un doute, ouvrez le règlement. Puis lisez-le vraiment.",
    "Glossaire mis à jour : nouveaux mots, mêmes problèmes.",
    // ====== HUMOUR GÉNÉRAL ======
    "Pro tip : ne promettez jamais ‘5 minutes’. C’est un piège temporel.",
    "Je rêve d’une journée sans surprise. Statut : rêve non thérapeutique.",
    "Le planning a été modifié par quelqu’un. Indice : tout le monde.",
    "Si vous souriez en lisant ceci, votre pronostic s’améliore.",
    "Les check-lists ne mordent pas. Les audits, parfois.",
    "On a tenté le ‘bon sens’. Résultat : mitigé.",
    "DocX a classé vos priorités. Surprise : vous êtes dedans.",
    "Ce n’est pas la panique. C’est la chorégraphie d’urgence.",
    "Je vous soutiens. Sarcastiquement, mais sincèrement.",
  ];

  // Récupère l’existant (s’il y en a), filtre *Tutur* / *Raven*, puis fusionne.
  const existing = Array.isArray(window.DOCX_QUOTES) ? window.DOCX_QUOTES : [];
  const cleaned = existing.filter(q => !/tutur/i.test(q) && !/raven/i.test(q));
  window.DOCX_QUOTES = dedupe([...cleaned, ...NEW_QUOTES]);

  // (Optionnel) carte d’humeur — si ton app colorise la bulle
  window.DOCX_EMO_MAP = Object.assign({
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
  }, window.DOCX_EMO_MAP || {});
})();
