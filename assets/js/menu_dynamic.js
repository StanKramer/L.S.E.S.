/* =======================================================
   L.S.E.S. - MENU DYNAMIQUE DOCX SYSTEM
   Génération automatique du bandeau depuis GitHub
   ======================================================= */

document.addEventListener("DOMContentLoaded", async () => {
  const nav = document.querySelector("nav ul");
  const username = "TonNomUtilisateurGitHub"; // <-- À modifier
  const repo = "PiouPiouPedia";               // <-- Nom de ton dépôt
  const branch = "main";                      // ou "master" selon ton dépôt

  const categories = [
    { name: "Accueil", path: "accueil" },
    { name: "Médecine Générale", path: "medecine" },
    { name: "Chirurgie", path: "chirurgie" },
    { name: "Gynécologie", path: "gynecologie" },
    { name: "Médecine Légale", path: "medecine-legale" }
  ];

  // Fonction pour créer un sous-menu
  function createDropdown(title, files) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.className = "navlink";
    a.textContent = `${title} ▾`;

    const ul = document.createElement("ul");
    files.forEach(file => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = `${file.html_url}`;
      link.textContent = file.name.replace(".html", "");
      item.appendChild(link);
      ul.appendChild(item);
    });

    li.appendChild(a);
    li.appendChild(ul);
    nav.appendChild(li);
  }

  // Fonction pour charger les fichiers d'une catégorie
  async function fetchCategory(cat) {
    const url = `https://api.github.com/repos/${username}/${repo}/contents/${cat.path}?ref=${branch}`;
    try {
      const response = await fetch(url);
      if (!response.ok) return [];
      const data = await response.json();
      return data.filter(f => f.name.endsWith(".html"));
    } catch (e) {
      console.error("Erreur chargement catégorie :", cat.name, e);
      return [];
    }
  }

  // Charger toutes les catégories en parallèle
  for (const cat of categories) {
    const files = await fetchCategory(cat);
    createDropdown(cat.name, files);
  }
});
