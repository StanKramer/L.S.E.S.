/* ===========================================================
   L.S.E.S. — Interface Médicale Holographique
   ProjectV | PiouPiou le Magnifique | 2025
   =========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  createHoloBackground();
  showAuthPopup();
  initHoverEffects();
  initQuotes();
  dynamicLogoGlow();
});

/* ===========================================================
   FOND HOLOGRAPHIQUE ANIMÉ (BLEU UNIFIÉ)
   =========================================================== */
function createHoloBackground() {
  const holoBg = document.createElement("div");
  holoBg.classList.add("holo-bg");
  document.body.appendChild(holoBg);

  const totalParticles = 140;
  for (let i = 0; i < totalParticles; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");
    p.style.left = Math.random() * 100 + "%";
    p.style.top = Math.random() * 100 + "%";
    p.style.animationDuration = 10 + Math.random() * 10 + "s";
    p.style.animationDelay = Math.random() * 8 + "s";
    p.style.opacity = 0.3 + Math.random() * 0.6;
    p.style.transform = `scale(${0.5 + Math.random() * 1.3})`;
    holoBg.appendChild(p);
  }
}

/* ===========================================================
   FENÊTRE D’AUTHENTIFICATION (PREMIER CHARGEMENT)
   =========================================================== */
function showAuthPopup() {
  if (sessionStorage.getItem("authShown")) return;

  const popup = document.createElement("div");
  popup.classList.add("auth-popup");
  popup.innerHTML = `
    <div class="auth-content">
      <h2>Authentification de l’utilisateur :</h2>
      <p><strong>PiouPiou</strong> [niveau GOAT]</p>
      <button id="authAccess">Accéder à l’interface</button>
    </div>
  `;

  document.body.appendChild(popup);
  document.getElementById("authAccess").addEventListener("click", () => {
    popup.classList.add("fade-out");
    setTimeout(() => popup.remove(), 600);
    sessionStorage.setItem("authShown", "true");
  });
}

/* ===========================================================
   EFFETS DE SURVOL INTERACTIFS
   =========================================================== */
function initHoverEffects() {
  const elements = document.querySelectorAll(".card, .module, .zone-interactive, .term");
  elements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      el.style.boxShadow = "0 0 25px rgba(0,255,255,0.6)";
      el.style.transform = "scale(1.02)";
    });
    el.addEventListener("mouseleave", () => {
      el.style.boxShadow = "0 0 10px rgba(0,255,255,0.2)";
      el.style.transform = "scale(1)";
    });
  });
}

/* ===========================================================
   BULLES DE CITATIONS INTERACTIVES + HALO COULEUR ÉMOTION
   =========================================================== */
function initQuotes() {
  const quotes = [
    { author: "DocX", text: "Statistiquement, PiouPiou frôle la divinité. Mais chut, c’est confidentiel.", emotion: "ironie" },
    { author: "L.S.E.S.", text: "Les données holographiques sont en cours de synchronisation interplanétaire.", emotion: "calme" },
    { author: "42", text: "Pourquoi les stocks de pharmacie ne sont jamais identiques sur deux planètes ?", emotion: "ironie" },
    { author: "Sucre", text: "Je refuse de me dissoudre dans ton café. Je médite, pour ne pas devenir Hulk.", emotion: "colere" },
    { author: "14", text: "Mon bateau sent bizarre… mais il flotte. C’est l’essentiel.", emotion: "joie" },
    { author: "PiouPiou", text: "Respirez. Pas comme un poisson. Comme un humain. Bravo.", emotion: "calme" },
    { author: "DocX", text: "La douleur n’est pas une faiblesse, c’est juste ton nerf qui râle.", emotion: "ironie" },
    { author: "L.S.E.S.", text: "Connexion holographique stabilisée. Vous pouvez procéder, agent médical.", emotion: "calme" }
  ];

  const container = document.createElement("div");
  container.classList.add("quote-panel");
  document.body.appendChild(container);

  function newQuote() {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    container.innerHTML = `
      <div class="quote-box" data-emotion="${q.emotion}">
        <div class="emotion-halo ${q.emotion}"></div>
        <p>💬 <strong>${q.author} :</strong> ${q.text}</p>
      </div>
    `;
    container.classList.add("visible");
    setTimeout(() => container.classList.remove("visible"), 8000);
  }

  setTimeout(newQuote, 5000);
  setInterval(newQuote, 15000);
}

/* ===========================================================
   HALO DYNAMIQUE AUTOUR DU LOGO
   =========================================================== */
function dynamicLogoGlow() {
  const logo = document.querySelector(".logo");
  if (!logo) return;

  document.addEventListener("mousemove", (e) => {
    const rect = logo.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
    const glow = Math.max(0, 200 - dist) / 200;
    logo.style.filter = `drop-shadow(0 0 ${8 + glow * 15}px rgba(0,255,255,${0.4 + glow * 0.6}))`;
  });
}
