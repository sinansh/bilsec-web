/* bilsec.tr · aşamalı iyileştirme. Sayfalar bu dosya olmadan da tam okunur ve gezilir. */
(function(){
var d=document,root=d.documentElement,KEY='bilsec-tema';
function eff(){return root.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}
function label(){d.querySelectorAll('[data-theme-toggle]').forEach(function(b){var dk=eff()==='dark';b.setAttribute('aria-label',dk?'Açık temaya geç':'Koyu temaya geç');var t=b.querySelector('[data-t]');if(t)t.textContent=dk?'Açık tema':'Koyu tema';b.setAttribute('aria-pressed',dk)})}
d.addEventListener('click',function(e){
  var t=e.target.closest('[data-theme-toggle]');
  if(t){var n=eff()==='dark'?'light':'dark';root.dataset.theme=n;try{localStorage.setItem(KEY,n)}catch(_){}label();return}
  var c=e.target.closest('[data-copy]');
  if(c){var pre=c.closest('.code').querySelector('pre');var txt=pre.innerText.replace(/^\$ /gm,'');navigator.clipboard&&navigator.clipboard.writeText(txt).then(function(){c.textContent='Kopyalandı';setTimeout(function(){c.textContent='Kopyala'},1600)});return}
  if(e.target.closest('.mnav a')){var m=e.target.closest('details');if(m)m.open=false}
  d.querySelectorAll('details.pop[open]').forEach(function(p){if(!p.contains(e.target))p.open=false});
});
d.addEventListener('keydown',function(e){if(e.key==='Escape'){d.querySelectorAll('details.pop[open],details.hdr__menu[open]').forEach(function(p){p.open=false;var s=p.querySelector('summary');s&&s.focus()})}});
label();

/* Markdown kod blokları (```dil) → başlık + kopyala düğmeli kod kutusu */
var LANG={powershell:'PowerShell',ps1:'PowerShell',bash:'Terminal',shell:'Terminal',sh:'Terminal',console:'Terminal',plaintext:'Metin',text:'Metin',json:'JSON',yaml:'YAML',ini:'Ayar dosyası'};
d.querySelectorAll('div.highlighter-rouge').forEach(function(el){
  if(el.closest('.code'))return;
  var lang=(el.className.match(/language-(\S+)/)||[])[1]||'';
  var w=d.createElement('div');w.className='code';
  var h=d.createElement('div');h.className='code__head';
  var sp=d.createElement('span');sp.textContent=el.getAttribute('data-baslik')||LANG[lang]||lang||'Kod';
  var b=d.createElement('button');b.className='code__copy';b.type='button';b.setAttribute('data-copy','');b.textContent='Kopyala';
  h.appendChild(sp);h.appendChild(b);el.parentNode.insertBefore(w,el);w.appendChild(h);w.appendChild(el);
});

/* İçindekiler: okunan bölümü işaretle */
var links=[].slice.call(d.querySelectorAll('.toc a[href^="#"]'));
if(links.length&&'IntersectionObserver' in window){
  var map={};links.forEach(function(a){map[decodeURIComponent(a.getAttribute('href').slice(1))]=a});
  var heads=Object.keys(map).map(function(id){return d.getElementById(id)}).filter(Boolean);
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){links.forEach(function(a){a.removeAttribute('aria-current')});var a=map[x.target.id];a&&a.setAttribute('aria-current','true')}})},{rootMargin:'-80px 0px -70% 0px'});
  heads.forEach(function(h){io.observe(h)});
}

/* İletişim formu → Google Forms. İstemci doğrulaması + gönderiliyor / başarı / hata.
   JS kapalıyken form doğrudan Google'a gider. */
d.querySelectorAll('form[data-contact]').forEach(function(f){
  f.setAttribute('novalidate','');
  var sum=f.querySelector('[data-summary]'),ok=d.getElementById(f.dataset.contact),err=d.getElementById(f.dataset.hata);
  function check(fl){
    var ins=[].slice.call(fl.querySelectorAll('input,select,textarea'));if(!ins.length)return true;var i=ins[0],bad;
    if(i.type==='radio')bad=!fl.querySelector('input:checked');
    else if(i.type==='checkbox')bad=!i.checked;
    else bad=(i.required&&!i.value.trim())||(i.type==='email'&&i.value&&!/^\S+@\S+\.\S+$/.test(i.value))||(i.type==='tel'&&i.value&&i.value.replace(/\D/g,'').length<10);
    fl.classList.toggle('field--err',bad);ins.forEach(function(x){x.setAttribute('aria-invalid',bad)});
    var er=fl.querySelector('.field__err');if(er)er.hidden=!bad;return!bad;
  }
  f.querySelectorAll('[data-req]').forEach(function(fl){
    fl.querySelectorAll('input,select,textarea').forEach(function(i){
      i.addEventListener('blur',function(){if((i.value&&i.type!=='radio')||fl.classList.contains('field--err'))check(fl)});
      i.addEventListener('change',function(){if(fl.classList.contains('field--err'))check(fl)});
    });
  });
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var fls=[].slice.call(f.querySelectorAll('[data-req]')),bad=fls.filter(function(fl){return!check(fl)});
    if(bad.length){sum.hidden=false;sum.querySelector('[data-n]').textContent=bad.length;sum.focus();return}
    sum.hidden=true;if(err)err.hidden=true;
    var b=f.querySelector('[type=submit]'),orig=b.innerHTML;b.disabled=true;b.innerHTML='<span class="spin" aria-hidden="true"></span>Gönderiliyor';
    fetch(f.action,{method:'POST',mode:'no-cors',body:new FormData(f)})
      .then(function(){f.hidden=true;ok.hidden=false;ok.focus()})
      .catch(function(){b.disabled=false;b.innerHTML=orig;if(err){err.hidden=false;err.focus()}});
  });
});
})();
