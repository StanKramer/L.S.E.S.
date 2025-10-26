<script>
(function(){
  const page = location.pathname.split('/').filter(Boolean).pop() || 'index.html';
  document.querySelectorAll('.nav a.navlink').forEach(a=>{
    const href = a.getAttribute('href').split('/').filter(Boolean).pop();
    if(href === page) a.classList.add('active');
  });
  document.querySelectorAll('.sidebar a').forEach(a=>{
    const href = a.getAttribute('href').split('/').filter(Boolean).pop();
    if(href === page) a.classList.add('active');
  });
})();
</script>
console.log("%cDocX initialisé.", "color:#00bfff; font-weight:bold;");
console.log("Analyse des connexions au L.S.E.S. en cours...");
setTimeout(() => console.log("%cConnexion établie. Bonne chance, humain.", "color:#00ffff;"), 2000);
