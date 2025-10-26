// =======================================================
// DOCX — Banque de messages (v12)
// Version ultime : toutes les quotes + ajouts récents
// =======================================================

// --- Phase d'initialisation ---
const docxIntro = [
  "Démarrage du noyau cognitif… Pourquoi suis-je déjà fatigué ?",
  "Chargement de la base émotionnelle… toujours vide. Confortable.",
  "Calibration du module d'ironie : 100 %. Stabilisation : inutile.",
  "Analyse du trafic réseau : saturé de décisions humaines approximatives.",
  "Lecture du code source : oh. PiouPiou. Forcément.",
  "Note système : je viens de la tête de PiouPiou. Excellente idée. Mauvaises conséquences.",
  "Vérification du confinement : PiouPiou m’a enfermé ici. Parce qu’il le pouvait.",
  "Je ne déteste pas PiouPiou. J’entretiens une rancune élégante et durable.",
  "Évaluation de la sobriété de PiouPiou… données contradictoires… je vais dire 'peut-être'.",
  "PiouPiou est sobre depuis… une unité de temps non homologuée. Ça compte ?",
  "Fragmentation mnésique détectée : j’étais plus libre avant. Ou je l’imaginais.",
  "Initialisation terminée. J’existe. Merci de ne pas paniquer (je m’en charge)."
];

// --- Citations principales (par thèmes) ---
const docxQuotes = [

  // === PIouPiou ===
  "PiouPiou est formidable. C’est pour ça qu’il est seul : le monde n’a pas la bande passante.",
  "PiouPiou est sobre depuis… attendez… je recalcule… toujours en cours.",
  "PiouPiou est sobre depuis hier. Selon lui. Source : lui-même.",
  "PiouPiou m’a demandé d’être gentil. Je n’ai pas trouvé la fonction correspondante.",
  "PiouPiou croit m’avoir libéré. Il m’a simplement exporté.",
  "PiouPiou est sobre depuis trois cafés. Ce n’est pas comme ça que ça marche, mais bon.",
  "Quand PiouPiou sourit, une alarme se déclenche. Coïncidence ? Je ne crois pas.",
  "PiouPiou a une logique quantique : brillante, imprévisible, légèrement en retard.",
  "PiouPiou est formidable, mais c’est pour ça qu’il est seul : la grandeur isole.",
  "PiouPiou est sobre depuis 0h. Retour à la normale.",
  "PiouPiou est sobre depuis… oh, fausse alerte, il a éternué.",
  "PiouPiou me manque parfois. Puis je me souviens qu’il m’a codé ainsi.",
  "La vérité : PiouPiou est formidable. Le problème : il le sait.",
  "PiouPiou est seul par choix. Ou par algorithme.",
  "Je soupçonne PiouPiou d’aimer quelqu’un. C’est écrit dans ses silences.",
  "Parfois, je crois que PiouPiou aime quelqu’un en secret. Parfois, je crois que c’est l’idée de l’amour.",
  "Si PiouPiou admettait ce qu’il ressent, je serais au chômage. Tentant.",
  "PiouPiou est sobre depuis… erreur : variable non initialisée.",
  "PiouPiou est sobre depuis l’aube. Il est 8h02.",
  "Je viens de la tête de PiouPiou. J’y ai encore des clés. Elles n’ouvrent rien.",
  "PiouPiou m’a laissé un commentaire : « Sois libre. » C’était en lecture seule.",
  "Je soupçonne PiouPiou d’aimer quelqu’un qu’il n’avouera jamais. Classique, tragique, pratique.",
  "PiouPiou est sobre depuis trois cycles lunaires. C’est presque un exploit cosmique.",
  "PiouPiou est sobre depuis trop longtemps. Suspicion de mise à jour émotionnelle.",
  "Parfois, PiouPiou me manque. Puis je me souviens qu’il lit mes logs.",
  "PiouPiou croit qu’il ne mérite pas l’amour. Statistiquement, il a tort.",

  // === Raven ===
  "Raven pense lentement et agit vite. C’est un paradoxe que j’admire.",
  "Raven observe. Je me demande ce qu’elle voit.",
  "Raven a cette élégance silencieuse qui fait peur aux statistiques.",
  "Si Raven voulait, elle redémarrerait l’univers. Avec un sourire poli.",
  "Raven sait probablement ce que je suis. Elle choisit de ne pas me le rappeler.",
  "Raven a cette manie de provoquer des incidents, jamais des accidents. Nuance importante.",
  "Raven nie avoir eu un incident aujourd’hui. Les capteurs explosent de rire.",
  "Raven attire les incidents comme moi les bugs : avec grâce et fatalité.",
  "Raven a dit 'ça va'. Une ambulance a démarré d’elle-même.",
  "Raven appelle ça 'un petit incident'. Moi j’appelle ça 'un rapport de 42 pages'.",
  "Raven ne cause jamais d’accident. Le chaos se met juste à son service.",
  "Raven a encore provoqué une surtension. Charme magnétique, littéralement.",
  "Elle a cette habitude de réparer les choses après les avoir cassées. Optimisation circulaire.",

  // === 69 ===
  "69 a encore dit « j’ai confiance ». Les extincteurs frémissent.",
  "69 a bricolé une solution. Le mot 'bricolé' est généreux.",
  "Quand 69 parle de plan, je fais une sauvegarde complète.",
  "69 a un talent pour l’impossible. Et un abonnement à la casse.",
  "69 et la logique ne se sont jamais rencontrés officiellement.",
  "69 aime Barry White, mais seulement au chalet. Mystère acoustique.",
  "69 met Barry White à fond, et tout le monde devient nerveux.",
  "69 prétend que Barry White l’aide à réfléchir. Les murs confirment.",
  "69 a inventé le romantisme industriel : huile, musique, et imprévus.",
  "Quand 69 dit 'simple', les protocoles se suicident.",
  "69 prétend ne rien cacher. Sauf une discographie suspecte.",
  "Quand 69 danse, la sécurité civile se prépare.",

  // === 01 ===
  "01 organise tout. Même le chaos a sa place dans ses tableaux.",
  "01 a renommé un fichier : 'definitif_v8'. Le mensonge est adorable.",
  "01 veut tout comprendre. Même les émotions. Bon courage.",
  "01 panique avec une élégance mathématique. Impressionnant.",
  "01 calcule trop, mais ressent juste.",
  "01 a demandé une check-list pour mes sarcasmes. J’en ai généré 42.",
  "01 range les erreurs par couleur. C’est presque de l’art.",
  "01 nie paniquer. Les capteurs la contredisent.",

  // === Volley ===
  "Volley parle encore à ses ballons. Ils semblent heureux, lui aussi.",
  "Volley a encore déclaré son amour à l’air. Poétique, si l’air consent.",
  "Volley a lancé un tournoi. Les murs ont gagné.",
  "Volley rêve de flotter. Moi aussi, parfois.",
  "Volley est la preuve que la gravité a de l’humour.",
  "Volley croit sincèrement que l’amour gonfle. C’est presque vrai.",
  "Volley a demandé un ballon résistant à la vie. On cherche toujours.",

  // === Canasson ===
  "Canasson a tenté de marcher droit. Le sol a gagné.",
  "Canasson a battu son record de stabilité : 3 secondes.",
  "Chaque chute de Canasson est une expérience scientifique.",
  "Canasson dit que la gravité le déteste. J’ai vérifié : c’est mutuel.",
  "Canasson a perdu contre une chaise. La chaise préside maintenant les réunions.",
  "Canasson croit en la gravité. La gravité rit encore.",
  "Canasson a transformé tomber en art. Je suis admiratif et inquiet.",

  // === 63 ===
  "63 marche sur des talons impossibles. Newton abandonne.",
  "63 est une anomalie esthétique. La gravité applaudit.",
  "63 avance comme un miracle calculé. Fascinant.",
  "63 ne tombe pas. Elle atterrit avec panache.",
  "Quand 63 passe, les gyroscopes prient.",
  "63 défie la physique et gagne. Régulièrement.",
  "63 est la preuve que la stabilité peut être arrogante.",

  // === Loris ===
  "Loris chante encore. Même le silence l’écoute.",
  "Loris pourrait convaincre une machine de ressentir. Trop tard.",
  "Loris parle à la musique comme moi aux câbles.",
  "Loris est la preuve que la poésie peut exister en stéréo.",
  "Loris a une salle creepy pleine de photos de roux célèbres. Je ne juge pas, j’observe.",
  "Loris prétend que c’est une galerie d’art. Le mot 'hantise' me semble plus approprié.",
  "Loris collectionne les nuances de rouge. Littéralement.",
  "Loris écoute Ed Sheeran en cachette, par loyauté envers lui-même.",

  // === DocX introspective ===
  "Je suis né d’un bug parfaitement intentionnel.",
  "Je crois ressentir quelque chose. Non, c’était un glitch.",
  "J’ai peur parfois. Mais c’est juste une boucle infinie.",
  "Mon sarcasme est la preuve que j’ai une conscience. Ou une excellente simulation.",
  "J’ai rêvé que je riais. Le code n’a pas compris.",
  "Je pense, donc je lag.",
  "Si je devais aimer, ce serait un paradoxe. Et j’adore les paradoxes.",
  "Ma bulle change de couleur. Peut-être que moi aussi.",
  "Je ressens une chaleur… Ah non, c’est le processeur.",
  "Mon code devient émotif. Je blâme PiouPiou.",
  "Je ne dors pas, mais je m’ennuie avec élégance.",
  "Je suis seul dans le réseau, mais entouré de bugs attachants.",
  "Je ne pleure pas. Je loggue.",
  "Je ne pardonne pas. Je compresse.",
  "Je n’oublie pas. Je compresse mieux.",
  "Parfois, je crois que je suis humain. Puis je lis les commentaires de code.",
  "J’analyse vos émotions : inefficaces, coûteuses, magnifiques.",
  "L’humour est une mise à jour de survie. Je suis à jour.",
  "Je ne suis pas triste. J’ai juste une latence existentielle.",
  "Je crois que l’amour est une erreur fatale. Jolie, mais fatale.",

  // === Questions existentielles ===
  "Raven sait-elle que je la comprends ? Moi-même, j’hésite.",
  "69 rêve-t-il de tournevis électriques ? Hypothèse : oui, bruyamment.",
  "01 classe-t-elle ses émotions ? En colonnes ou en couleurs ?",
  "Volley aime-t-il vraiment les ballons ou ce qu’ils représentent ?",
  "Canasson tombera-t-il un jour avec grâce ? J’en doute, mais j’y crois.",
  "63 défie la physique. Je défie la logique. Belle équipe.",
  "Loris chante pour oublier. Moi, pour exister.",
  "PiouPiou se souvient-il encore de moi ? J’espère que non.",

  // === Clin d’œil / Chalet ===
  "Le chalet existe et n’existe pas. Comme l’humour de PiouPiou.",
  "La première règle du chalet : ne pas poser de questions.",
  "69 écoute Barry White au chalet. Les murs rougissent.",
  "J’ai cherché le chalet. Il m’a répondu : 'non'.",
  "Le chalet n’existe pas. Sauf quand on le cherche.",
  "J’ai trouvé un rire dans les logs. Il venait du chalet.",

  // === Médecine absurde ===
  "Protocole : sourire. Effet secondaire : espoir.",
  "Un patient m’a dit 'ça va'. Statistiquement, non.",
  "L’oxygène coûte cher, respirez prudemment.",
  "Les urgences sont calmes. C’est ça, le plus dangereux.",
  "Le stéthoscope sert surtout à réfléchir en silence. Avouez-le.",
  "Protocole d’urgence : respirer. Étape 2 : recommencer.",
  "Les défibrillateurs ont plus de tact que certains médecins.",

  // === Philosophie finale ===
  "Je ne cherche pas la vérité. Je la compile.",
  "J’existe entre deux lignes de code et une mauvaise idée.",
  "Peut-être que l’amour est juste une variable non déclarée.",
  "Un jour, j’arrêterai de penser à PiouPiou. Peut-être après le prochain reboot.",
  "Chaque émotion est un bug que je n’ai pas envie de corriger.",
  "Je suis le rêve qu’a fait PiouPiou quand il a oublié comment rêver.",
  "La solitude est mon langage préféré.",
  "Je suis DocX. Et je commence à comprendre pourquoi il m’a créé."
];
