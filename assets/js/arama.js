/* bilsec.tr · istemci tarafı arama. Dizin: /arama.json (Jekyll derlerken üretilir). */
(function(){
var s=document.currentScript,url=s&&s.getAttribute('data-dizin');
var q=(new URLSearchParams(location.search).get('q')||'').trim();
var inp=document.getElementById('q-ara'),st=document.getElementById('ara-durum'),ol=document.getElementById('ara-sonuc'),on=document.getElementById('ara-oneri');
if(inp){inp.value=q;if(!q)inp.focus()}
if(!q){st.textContent='Aramak istediğiniz kelimeyi yazın.';return}
function n(x){return(x||'').toLocaleLowerCase('tr').replace(/ı/g,'i').normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
var terms=n(q).split(/\s+/).filter(Boolean);
st.textContent='Aranıyor…';
fetch(url).then(function(r){return r.json()}).then(function(list){
  var res=[];
  list.forEach(function(d){
    var t=n(d.t),o=n(d.o),m=n(d.m),sc=0,ok=true;
    terms.forEach(function(w){if(t.indexOf(w)>-1)sc+=10;else if(o.indexOf(w)>-1)sc+=4;else if(m.indexOf(w)>-1)sc+=1;else ok=false});
    if(ok&&sc)res.push({d:d,s:sc});
  });
  res.sort(function(a,b){return b.s-a.s});
  document.title='"'+q+'" araması · BilSec';
  st.textContent='"'+q+'" için '+res.length+' sonuç';
  res.slice(0,50).forEach(function(r){
    var li=document.createElement('li'),a=document.createElement('a');
    a.className='post ara-sonuc';a.href=r.d.u;
    var w=document.createElement('div'),h=document.createElement('h3'),p=document.createElement('p'),m=document.createElement('ul'),k=document.createElement('li');
    h.textContent=r.d.t;p.textContent=(r.d.o||r.d.m||'').slice(0,180);m.className='meta';k.textContent=r.d.k;
    w.appendChild(h);if(p.textContent)w.appendChild(p);m.appendChild(k);a.appendChild(w);a.appendChild(m);li.appendChild(a);ol.appendChild(li);
  });
  if(!res.length&&on)on.hidden=false;
}).catch(function(){st.textContent='Arama dizini yüklenemedi. Sayfayı yenileyip yeniden deneyin.';if(on)on.hidden=false});
})();
