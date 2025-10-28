// assets/js/gyn_form.js
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
    document.getElementById(target).style.display = 'block';
  });
});

// TODO: importer ici le code de gestion du formulaire (sauvegarde, impression, etc.)
// → Même logique que dans ton fichier source "LSES_gyn_sheet_interactive.html"
