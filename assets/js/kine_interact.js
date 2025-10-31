/* KINÉ — interactions schéma + projection locale + onglets + scroll */
(function () {
  // Onglets simple/expert/physique
  document.querySelectorAll("[data-tabs]").forEach(box => {
    const btns = box.querySelectorAll(".tab-buttons button");
    const panels = box.querySelectorAll(".tab-panel");
    const show = (id) => {
      panels.forEach(p => p.classList.toggle("active", p.id === id));
      btns.forEach(b => b.classList.toggle("active", b.dataset.tab === id));
    };
    btns.forEach(b => b.addEventListener("click", () => show(b.dataset.tab)));
  });

  // Mapping zone -> vidéo
  const VIDEO_MAP = {
    cervical: "../assets/anims/cervical.webm",
    lombaire: "../assets/anims/lombaire.webm",
    sciatique: "../assets/anims/sciatique.webm",
    bras: "../assets/anims/bras.webm",
    jambe: "../assets/anims/jambe.webm",
    cheville: "../assets/anims/cheville.webm"
  };

  const schema = document.getElementById("schema");
  const projection = document.getElementById("projection");
  const projVideo = document.getElementById("projectionVideo");
  const projLabel = document.getElementById("projectionLabel");

  function playProjectionAt(hotspotEl, zone) {
    // positionner la projection au niveau du hotspot (dans le conteneur du schéma)
    const rectSchema = schema.getBoundingClientRect();
    const rectHot = hotspotEl.getBoundingClientRect();

    const relX = rectHot.left - rectSchema.left + rectHot.width / 2;
    const relY = rectHot.top - rectSchema.top + rectHot.height / 2;

    projection.style.left = `${relX}px`;
    projection.style.top  = `${relY}px`;

    // charger & afficher
    projVideo.src = VIDEO_MAP[zone] || "";
    projLabel.textContent = `Zone : ${zone.charAt(0).toUpperCase() + zone.slice(1)} — Simulation en cours…`;

    // (re)jouer
    try { projVideo.currentTime = 0; } catch(e){}
    projection.classList.add("active");

    // masquer après 10 s
    setTimeout(() => projection.classList.remove("active"), 10000);
  }

  // hotspots
  document.querySelectorAll(".hotspot").forEach(h => {
    const zone = h.getAttribute("data-zone");
    const targetSel = h.getAttribute("data-target");

    // accessibilité clavier
    h.setAttribute("tabindex", "0");
    h.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (VIDEO_MAP[zone]) playProjectionAt(h, zone);
        const card = document.querySelector(targetSel);
        if (card) {
          card.scrollIntoView({ behavior: "smooth", block: "start" });
          card.classList.add("hi");
          setTimeout(() => card.classList.remove("hi"), 1400);
        }
      }
    });

    // clic
    h.addEventListener("click", () => {
      if (VIDEO_MAP[zone]) playProjectionAt(h, zone);
      const card = document.querySelector(targetSel);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "start" });
        card.classList.add("hi");
        setTimeout(() => card.classList.remove("hi"), 1400);
      }
    });
  });

})();
