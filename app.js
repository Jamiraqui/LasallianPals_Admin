const video=document.querySelector('video');
const toggle=document.querySelector('#video-toggle');
toggle.addEventListener('click',async()=>{if(video.paused){try{await video.play();toggle.textContent='Pause Ⅱ';toggle.setAttribute('aria-label','Pause program video')}catch{toggle.textContent='Retry ↗';}}else{video.pause();toggle.textContent='Play ↗';toggle.setAttribute('aria-label','Play program video')}});
const links=[...document.querySelectorAll('nav a')];
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(link=>{const active=link.hash==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')})}}},{rootMargin:'-10% 0px -65% 0px',threshold:0});
document.querySelectorAll('main section').forEach(section=>observer.observe(section));
let expanded=[];window.addEventListener('beforeprint',()=>{expanded=[...document.querySelectorAll('details')].map(x=>x.open);document.querySelectorAll('details').forEach(x=>x.open=true)});window.addEventListener('afterprint',()=>document.querySelectorAll('details').forEach((x,i)=>x.open=expanded[i]));
