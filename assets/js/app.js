// Boot DocX uniquement au premier chargement (localStorage)
(function(){
  const lines = [
    "> Initialisation du réseau médical holographique...",
    "> Connexion au serveur principal : STABLE",
    "> Authentification de l’utilisateur : PiouPiou [niveau GOAT]",
    "> Synchronisation du module DocX... OK",
    "> Chargement des sous-systèmes : Chirurgie | Gynécologie | Kinésithérapie",
    "> Diagnostic du système : OPÉRATIONNEL",
    "> Bienvenue dans l’interface médicale L.S.E.S._"
  ];

  const overlay = document.getElementById('boot-overlay');
  const pre = document.getElementById('boot-lines');
  const cursor = document.getElementById('boot-cursor');
  const alreadyBooted = localStorage.getItem('docxBooted') === '1';

  function revealSite(){
    overlay.style.display = 'none';
    document.querySelectorAll('.hidden-until-boot').forEach(el=>{
      el.classList.add('show-after-boot');
      el.classList.remove('hidden-until-boot');
    });
  }

  if (alreadyBooted) {
    // Pas de boot → afficher direct
    revealSite();
    return;
  }

  // Boot animé (une fois)
  let i = 0;
  function typeNext(){
    if(i < lines.length){
      pre.textContent += (i ? "\n" : "") + lines[i];
      i++;
      setTimeout(typeNext, 400);
    } else {
      cursor.style.opacity = 1; // clignote 3 fois via CSS
      setTimeout(()=>{
        localStorage.setItem('docxBooted','1');
        revealSite();
      }, 1500);
    }
  }
  typeNext();
})();
