// Auth popup
const popup = document.getElementById('auth-popup');
const enterBtn = document.getElementById('enter-btn');
if (popup && enterBtn) {
  enterBtn.addEventListener('click', () => popup.style.display = 'none');
}

// Holo interaction
const holoPoints = document.querySelectorAll('.holo-point');
const infoZone = document.getElementById('info-zone');

const zoneData = {
  cervical: {
    title: "Relaxation cervicale",
    electro: "Électrodes sur les trapèzes supérieurs. Respiration lente et profonde. Durée : 10 minutes.",
    exercice: "Inclinaisons latérales, rotations lentes, étirement du cou assis.",
    video: "../assets/videos/cervical.webm"
  },
  bras: {
    title: "Stimulation des bras",
    electro: "Électrodes sur biceps/triceps alternés. Intensité faible à modérée.",
    exercice: "Flexions alternées, extensions lentes. 3 séries de 10 répétitions.",
    video: "../assets/videos/bras.webm"
  },
  lombaire: {
    title: "Stimulation lombaire",
    electro: "Deux électrodes de part et d’autre de la colonne. Durée : 15 minutes.",
    exercice: "Ponts lombaires, gainage doux, inclinaisons de buste.",
    video: "../assets/videos/lombaire.webm"
  },
  sciatique: {
    title: "Stimulation sciatique",
    electro: "Électrodes sur le trajet nerveux sciatique. Durée : 20 minutes.",
    exercice: "Montées de genoux, fentes légères, relâchement allongé.",
    video: "../assets/videos/sciatique.webm"
  },
  jambe: {
    title: "Renforcement jambier",
    electro: "Électrodes sur quadriceps et ischios. Durée : 12 minutes.",
    exercice: "Squats légers, extension de genou assis.",
    video: "../assets/videos/jambe.webm"
  },
  cheville: {
    title: "Rééducation cheville",
    electro: "Petites électrodes sur le mollet et tendon d’Achille.",
    exercice: "Cercles de cheville, montée sur la pointe des pieds.",
    video: "../assets/videos/cheville.webm"
  }
};

holoPoints.forEach(pt => {
  pt.addEventListener('click', () => {
    const zone = pt.dataset.zone;
    const data = zoneData[zone];
    if (!data) return;

    infoZone.classList.remove('hidden');
    infoZone.innerHTML = `
      <h3>${data.title}</h3>
      <p><strong>Électrostimulation :</strong> ${data.electro}</p>
      <p><strong>Exercices physiques :</strong> ${data.exercice}</p>
      <video src="${data.video}" autoplay loop muted playsinline style="max-width:100%; border-radius:8px;"></video>
    `;
  });
});
