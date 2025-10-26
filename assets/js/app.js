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
