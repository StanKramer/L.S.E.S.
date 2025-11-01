/* ===========================================================
   L.S.E.S. — Interface Médicale Holographique
   ProjectV | PiouPiou le Magnifique | 2025
   =========================================================== */

/* === CONFIG GÉNÉRALE === */
document.addEventListener("DOMContentLoaded", () => {
  createHoloBackground();
  showAuthPopup();
  initHoverEffects();
  initQuotes();
});

/* ===========================================================
   FOND HOLOGRAPHIQUE ANIMÉ
   =========================================================== */
function createHoloBackground() {
  const holoBg = document.createElement("div");
  holoBg.classList.add("holo-bg");
  document.body.appendChild(holoBg);

  const totalParticles = 120;
  for (let i = 0; i < totalParticles; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");
    p.style.left = Math.random() * 100 + "%";
    p.style.top = Math.random() * 100 + "%";
    p.style.animationDuration = 8 + Math.random() * 12 + "s";
    p.style.animationDelay = Math.random() * 8 + "s";
    p.style.opacity = 0.3 + Math.random() * 0.7;
    p.style.transform = `scale(${0.4 + Math.random() * 1.5})`;
    holoBg.appendChild(p);
  }
}

/* ===========================================================
   FENÊTRE D’AUTHENTIFICATION
   =========================================================== */
function showAuthPopup() {
  if (sessionStorage.getItem("authShown")) return;

  const popup = document.createElement("div");
  popup.classList.add("auth-popup");
  popup.innerHTML = `
    <div class="auth-content">
      <h2>Authentification utilisateur</h2>
      <p><strong>PiouPiou</strong> [niveau GOAT]</p>
      <button id="authAccess">Accéder à l’interface</button>
    </div>
  `;

  document.body.appendChild(popup);

  const btn = document.getElementById("authAccess");
  btn.addEventListener("click", () => {
    popup.classList.add("fade-out");
    setTimeout(() => popup.remove(), 600);
    sessionStorage.setItem("authShown", "true");
  });
}

/* ===========================================================
   EFFETS DE SURVOL INTERACTIFS
   =========================================================== */
function initHoverEffects() {
  const cards = document.querySelectorAll(".card, .module, .zone-interactive");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 0 25px rgba(0,255,255,0.6)";
      card.style.transform = "scale(1.02)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 0 10px rgba(0,255,255,0.2)";
      card.style.transform = "scale(1)";
    });
  });
}

/* ===========================================================
   BULLES DE CITATIONS INTERACTIVES (DocX / PiouPiou / L.S.E.S.)
   =========================================================== */
function initQuotes() {
  const quotes = [
    { author: "DocX", text: "Statistiquement, PiouPiou frôle la divinité. Mais chut, c’est confidentiel." },
    { author: "L.S.E.S.", text: "Les données holographiques sont en cours de synchronisation interplanétaire." },
    { author: "42", text: "Pourquoi les stocks de pharmacie ne sont jamais identiques sur deux planètes ?" },
    { author: "Sucre", text: "Je refuse de me dissoudre dans ton café. Je médite, pour ne pas devenir Hulk." },
    { author: "14", text: "Mon bateau sent bizarre… mais il flotte. C’est l’essentiel." },
    { author: "PiouPiou", text: "Respirez. Pas comme un poisson. Comme un humain. Bravo." }
  ];

  const container = document.createElement("div");
  container.classList.add("quote-panel");
  document.body.appendChild(container);

  function newQuote() {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    container.innerHTML = `
      <div class="quote-box">
        <p>💬 <strong>${q.author} :</strong> ${q.text}</p>
      </div>
    `;
    container.classList.add("visible");
    setTimeout(() => container.classList.remove("visible"), 8000);
  }

  setInterval(newQuote, 15000);
}

/* ===========================================================
   UTILITAIRES (Effets divers / visuels)
   =========================================================== */
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.body.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
});

/* ===========================================================
   FIN DU SCRIPT
   =========================================================== */
