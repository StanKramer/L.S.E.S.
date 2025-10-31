/* Hologramme kiné — interactivité schema + cartes
   - click hotspot => scroll vers carte liée
   - surbrillance temporaire
   - onglets simple/expert
*/

(function () {
  // Smooth scroll + highlight
  function goToCard(sel) {
    const el = document.querySelector(sel);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("hi");
    setTimeout(() => el.classList.remove("hi"), 1400);
  }

  // Hotspots
  document.querySelectorAll(".hotspot").forEach(h => {
    const target = h.getAttribute("data-target");
    h.addEventListener("click", () => goToCard(target));
    // Accessibilité : ENTER/SPACE
    h.setAttribute("tabindex", "0");
    h.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goToCard(target); }
    });
  });

  // Tabs (simple/expert)
  document.querySelectorAll("[data-tabs]").forEach(box => {
    const buttons = box.querySelectorAll(".tab-buttons button");
    const panels = box.querySelectorAll(".tab-panel");
    function show(id) {
      panels.forEach(p => p.classList.toggle("active", p.id === id));
      buttons.forEach(b => b.classList.toggle("active", b.getAttribute("data-tab") === id));
    }
    buttons.forEach(btn => btn.addEventListener("click", () => show(btn.getAttribute("data-tab"))));
  });

})();
