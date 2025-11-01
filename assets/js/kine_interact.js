(function () {
  // Onglets
  document.querySelectorAll("[data-tabs]").forEach(box => {
    const btns = box.querySelectorAll(".tab-buttons button");
    const panels = box.querySelectorAll(".tab-panel");
    const show = id => {
      panels.forEach(p => p.classList.toggle("active", p.id === id));
      btns.forEach(b => b.classList.toggle("active", b.dataset.tab === id));
    };
    btns.forEach(b => b.addEventListener("click", () => show(b.dataset.tab)));
  });

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
  const projFallback = document.getElementById("projectionFallback");

  async function fileExists(url){
    try {
      const res = await fetch(url, { method: 'HEAD', cache: 'no-store' });
      return res.ok;
    } catch { return false; }
  }

  function positionProjection(hotspotEl){
    const rectSchema = schema.getBoundingClientRect();
    const rectHot = hotspotEl.getBoundingClientRect();
    const relX = rectHot.left - rectSchema.left + rectHot.width / 2;
    const relY = rectHot.top - rectSchema.top + rectHot.height / 2;
    projection.style.left = `${relX}px`;
    projection.style.top  = `${relY}px`;
  }

  async function play(zone, hotspotEl){
    positionProjection(hotspotEl);
    const src = VIDEO_MAP[zone];
    projection.classList.add("active");

    // latence DocX 0.3s (analyse)
    await new Promise(r=>setTimeout(r,300));

    if (src && await fileExists(src)){
      projFallback.hidden = true;
      projVideo.src = src;
      projVideo.style.display = 'block';
      try { projVideo.currentTime = 0; } catch(e){}
    } else {
      // fallback holographique
      projVideo.style.display = 'none';
      projVideo.removeAttribute('src');
      projFallback.hidden = false;
    }

    // Auto-hide après 10s
    setTimeout(()=>{ projection.classList.remove("active"); }, 10000);
  }

  // hotspots
  document.querySelectorAll(".hotspot").forEach(h => {
    const zone = h.getAttribute("data-zone");
    const targetSel = h.getAttribute("data-target");

    h.setAttribute("tabindex", "0");
    h.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); h.click(); }
    });

    h.addEventListener("click", async () => {
      await play(zone, h);
      const card = document.querySelector(targetSel);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "start" });
        card.classList.add("hi");
        setTimeout(()=>card.classList.remove("hi"), 1400);
      }
    });
  });

})();
