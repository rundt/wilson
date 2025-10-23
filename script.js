(function(){
  const $$ = s => Array.from(document.querySelectorAll(s));
  $$('.excerpt').forEach(p=>{
    p.innerHTML = p.innerHTML
      .replace(/^&gt;(.*)$/gm, '<span class="greentext">&gt;$1</span>')
      .replace(/\[spoiler\](.*?)\[\/spoiler\]/g,'<span class="spoiler">$1</span>');
  });
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
})();