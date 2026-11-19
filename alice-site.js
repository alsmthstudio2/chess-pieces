/* v68 test switches: add ?as-off=row,dots,arrows,tsa (or all) to the address to turn v67 phone changes off */
window.__asOff=(function(){var m=(location.search+'&'+location.hash).match(/as-off=([a-z,]+)/);var o={};if(m)m[1].split(',').forEach(function(k){o[k]=1;});if(o.all){o.row=o.dots=o.arrows=o.tsa=1;}return o;})();
/* v61: the page stays hidden (set by the page code) until this file has laid it out and the fonts are in, so nothing jumps; the 3D starts right after */
window.__asWhenShown=window.__asShown?function(f){setTimeout(f,0);}:function(f){(window.__asQ=window.__asQ||[]).push(f);};
window.__asT=function(fn){var b=false;return function(){if(b)return;b=true;setTimeout(function(){b=false;try{fn();}catch(e){}},200);};};
/* v60 settings ------------------------------------------------------------
   HEADLINE FONT: to change it, edit HF (the CSS font list) and HF_FACES (the font files). */
(function(){
/* v61: fonts and photos come from the same pinned version as this file, so browsers keep them cached */
var ME=(document.currentScript&&document.currentScript.src)||'';
var BASE=/alice-site\.js/.test(ME)?ME.replace(/alice-site\.js.*$/,'fonts/'):'https://cdn.jsdelivr.net/gh/alsmthstudio2/chess-pieces@main/fonts/';
window.__asBase=BASE;
var HF='"Garamondt",Georgia,serif';
var HF_FACES=[['Garamondt','Garamondt-Regular.woff2','normal'],['Garamondt','Garamondt-Italic.woff2','italic']];
/* BODY FONT: edit BF and BF_FACES (font, file, style, weight) */
var BF='"DM Sans","Helvetica Neue",Helvetica,Arial,sans-serif';
var BF_FACES=[['DM Sans','DMSans-400.woff2','normal',400],['DM Sans','DMSans-500.woff2','normal',500],['DM Sans','DMSans-700.woff2','normal',700],['DM Sans','DMSans-400-italic.woff2','italic',400]];
/* BODY TEXT SIZE: px added to every body text size (headlines unchanged) */
var BUMP=1;
if(!document.querySelector('style[data-as-hf]')){
var css=':root{--as-hf:'+HF+';--as-bf:'+BF+'}\nhtml body bodycopy,html body .ab-sheet{font-family:var(--as-bf)}\n';
BF_FACES.forEach(function(f){css+='@font-face{font-family:"'+f[0]+'";src:url('+BASE+f[1]+') format("woff2");font-style:'+f[2]+';font-weight:'+f[3]+';font-display:swap}\n';});
if(BUMP){var px=function(v){return (v+BUMP)+'px!important}\n';};
css+='html body .aal .aal-ag,html body .aal .aal-end{font-size:'+px(11)+
'html body .asc .asc-card div:not(.asc-h),html body .asc .asc-card .asc-who,html body .asc .asc-card .asc-piece{font-size:'+px(12.5)+
'html body .aal .aal-items{font-size:'+px(13)+
'html body .ab-sheet .ab-cta{font-size:'+px(15)+'html body .ab-sheet .ab-ed{font-size:'+px(13)+'html body .ab-sheet .ab-lbl{font-size:'+px(10.5)+
'html body .ab-sheet .ab-lead{font-size:'+px(15)+'html body .ab-sheet .ab-loc{font-size:'+px(12)+'html body .ab-sheet .ab-p{font-size:'+px(14)+
'html body .ab-sheet .ab-strip figcaption{font-size:'+px(12)+
'html body .as-index td:nth-child(1),html body .as-index td:nth-child(4){font-size:'+px(12)+
'html body .as-index td:nth-child(2),html body .as-index td:nth-child(3),html body .as-index th,html body .as-cap,html body .as-mono,html body .as-t,html body .as-blurb,html body .as-team,html body .as-detail p:not([class]){font-size:calc(1em + '+BUMP+'px)!important}\n';}
HF_FACES.forEach(function(f){css+='@font-face{font-family:"'+f[0]+'";src:url('+BASE+f[1]+') format("woff2");font-style:'+f[2]+';font-weight:400;font-display:swap}\n';});
var st=document.createElement('style'); st.setAttribute('data-as-hf','1'); st.textContent=css; document.head.appendChild(st);
var pl=document.createElement('link'); pl.rel='preload'; pl.as='font'; pl.type='font/woff2'; pl.crossOrigin='anonymous'; pl.href=BASE+HF_FACES[0][1]; document.head.appendChild(pl);
}
/* v60h: photos are web-sized copies in this repo. The table photo starts loading first; the About photos load when the page is idle, so About opens instantly */
var IMG=BASE.replace('/fonts/','/img/'); window.__asImg=IMG;
/* v61d: phones get a 1200px table photo (sharp at phone size, 30% smaller); 3D library downloads after the photo, so the photo shows first */
/* v69: the photo size follows the screen width (same rule as the preload in the page code, so it downloads once); the 3D library now loads only when the 3D starts */
window.__asTable=(window.matchMedia?matchMedia('(max-width: 759px)').matches:(window.innerWidth||9999)<760)?'table-1200.jpg':'table.jpg';
var tp=new Image(); tp.fetchPriority='high'; tp.src=IMG+window.__asTable;
window.__abLoad=function(){ var a=document.querySelectorAll('.ab-sheet img[data-ab-src]'); if(!a.length){ ['about-1-137.jpg','about-2.jpg'].forEach(function(f){ var i=new Image(); i.decoding='async'; i.src=IMG+f; }); return; } for(var k=0;k<a.length;k++){ if(!a[k].getAttribute('src')) a[k].setAttribute('src',a[k].getAttribute('data-ab-src')); } };
/* v65: About photos download only when someone heads for the About button (hover, touch or keyboard), not on every visit */
(function(){ var done=0; function pre(e){ if(done) return; var t=e&&e.target; if(!t||!t.closest||!t.closest('.ab-open')) return; done=1; window.__abLoad(); } ['pointerover','touchstart','focusin'].forEach(function(n){ document.addEventListener(n,pre,{passive:true,capture:true}); }); })();
/* window.__asThree() adds the 3D library (v69: called only when the 3D is about to start) */
window.__asThree=function(){var s=document.querySelector('script[data-three]'); if(s) return s;
s=document.createElement('script'); s.src='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'; s.async=true; s.setAttribute('data-three','1');
s.addEventListener('load',function(){s.setAttribute('data-loaded','1');}); document.head.appendChild(s); return s;};
})();
/* Creative strategy section: 3D chess pieces over the table photo, joined to the four services.
   
Pieces: faceted chess set by danielpaulse (Sketchfab), CC BY-SA 4.0. Uses three.js r128. */
(function(){
if(window.__asc2)return; window.__asc2=true;
/* v66: the chess piece data is in chess-data.js, loaded alongside this file, so the page can show before it arrives */
/* the section's styling travels with the script, so it works even where Cargo leaves out the page CSS */
function addStyle8(){const st=document.createElement('style');st.dataset.asc8='1';st.textContent="/* v8: photo full width as the opening screen, header over it, services in a row below */\nhtml .asc.asc{display:block!important;max-width:none!important;margin-bottom:60px!important;column-gap:0!important}\nhtml .asc .asc-stage{position:relative;aspect-ratio:16/10!important;width:100%!important;max-width:none!important;background-size:100% auto!important;background-position:center 33%!important;background-repeat:no-repeat!important}\nhtml .asc .asc-stage::before{content:\"\";position:absolute;left:0;right:0;top:0;height:180px;background:linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,0));pointer-events:none}\nhtml .asc .asc-cards{position:static!important}\nhtml .asc .asc-title{position:absolute!important;top:34px;left:40px;margin:0!important;z-index:6;font-size:34px!important;line-height:1!important;letter-spacing:.01em}\nhtml .asc::after{content:none;position:absolute;top:34px;right:40px;z-index:6;font-family:var(--as-hf);font-size:34px;line-height:1;text-transform:uppercase;letter-spacing:.01em;color:#f2f2f2}\n";document.head.appendChild(st);}
function addStyle(){const st=document.createElement('style');st.dataset.asc='1';st.textContent="/* Creative strategy section (chess) */\n.asc{--asc-ink:#0d0d0d;--asc-soft:rgba(13,13,13,.55);--asc-head:\"JetBrains Mono\",ui-monospace,Menlo,monospace;--asc-text:var(--as-bf);position:relative;display:grid;grid-template-columns:minmax(0,3.2fr) minmax(0,1.1fr);column-gap:clamp(24px,5vw,90px);max-width:1500px;margin:80px auto 40px;color:var(--asc-ink)}\n.asc-stage{position:relative;aspect-ratio:4/3;max-width:100%;background:url("+window.__asImg+window.__asTable+") center/cover no-repeat}\n.asc-stage img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;margin:0;max-width:none}\n.asc-gl,.asc-lines{position:absolute;left:0;top:-80px;width:100%;height:calc(100% + 120px);pointer-events:none}\n.asc-gl{z-index:2}\n.asc-lines{z-index:1;overflow:visible}\n.asc-lines path{fill:none;stroke:var(--asc-ink);stroke-width:1}\n.asc-lines path.head{display:none}\n.asc-lines .ring,.asc-lines .dot{fill:var(--asc-ink);stroke:none}\n.asc-cards{position:relative;z-index:4;display:flex;flex-direction:column;justify-content:space-between;padding:4% 0 8%;gap:28px;min-width:0;font-family:var(--asc-text);font-size:13.5px;line-height:1.4}\n.asc-title{font-family:var(--asc-head);font-weight:700;font-size:20px;line-height:1.2;margin:0 0 8px}\n.asc-card{display:grid;gap:12px;max-width:34ch;outline:none}\n.asc-h{font-family:var(--asc-head);font-weight:700;font-size:15px;line-height:1.3}\n.asc-who{color:var(--asc-soft)}\n.asc-piece{display:none}\n@media (max-width:760px){\n  .asc{grid-template-columns:minmax(0,1fr);row-gap:40px;margin-top:40px}\n  .asc-lines{display:none}\n  .asc-cards{padding:0;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:28px 20px}\n  .asc-title{grid-column:1/-1}\n}\n@media (max-width:420px){ .asc-cards{grid-template-columns:minmax(0,1fr)} }\n\n/* dark theme + type (option 1) */\nhtml,body,.page,.page-layout,.page-content,.content{background-color:#0d0d0d!important}\nbody,bodycopy,.page-content{color:#f2f2f2!important}\n.asc{--asc-ink:#f2f2f2!important;--asc-soft:rgba(242,242,242,.55)!important;--asc-head:var(--as-hf)!important;--asc-text:var(--as-bf)!important;color:#f2f2f2!important}\n.asc-title{font-weight:400!important;font-size:52px!important;line-height:1!important;text-transform:uppercase}\n.asc-h{font-weight:500!important;font-size:26px!important;line-height:1.05!important}\n.asc-cards{font-size:12.5px!important}\n.aal{color:#f2f2f2!important}\n.aal-line,.aal-line::before,.aal-line::after,.aal-dot{background:#f2f2f2!important}\n.aal-items{display:none!important}\n.aal-label,.as-index-toggle{font-family:var(--as-hf)!important;font-weight:400!important;font-size:44px!important;letter-spacing:0!important;line-height:1!important;color:#f2f2f2!important}\n.aal-ag,.aal-end{font-family:var(--as-bf)!important;font-weight:400!important;font-size:11px!important;text-transform:uppercase;letter-spacing:.06em}\n.as-wk .as-cap,.as-facts .as-mono,.as-facts .as-blurb,.as-body .as-team{color:rgba(242,242,242,.55)!important}\n.as-wk:hover .as-cap,.as-wk.as-on .as-cap{color:#f2f2f2!important}\n.as-wk.as-on .as-img,.as-wk:focus-visible{outline-color:#f2f2f2!important}\n.as-detail{border-top-color:rgba(242,242,242,.2)!important}\n@media (max-width:760px){.aal-label,.as-index-toggle{font-size:32px!important}}\n";document.head.appendChild(st);}
addStyle();addStyle8();
/* phone layout follows the section's own width (Cargo's phone preview is not a narrow window, so media queries miss it) */
let nst=null,tst=null,wasN=null,wst8=null,nst8=null;
function narrow(w,svg){
  
if(!nst||!nst.isConnected){nst=document.createElement('style');nst.dataset.ascN='1';nst.textContent=".asc.asc{grid-template-columns:minmax(0,1fr);row-gap:40px;margin-top:40px}\n.asc .asc-cards{padding:0;display:grid;grid-template-columns:minmax(0,1fr)!important;gap:36px}\n.asc .asc-title{grid-column:1/-1;font-size:36px!important}\nhtml .aal .aal-top{padding-top:24px!important}\nhtml .aal .aal-ag{position:absolute!important;top:0;transform:translateX(-50%)!important;display:block;margin:0;font-size:9.5px!important;letter-spacing:.03em!important}\nhtml .aal .aal-line{display:block!important}\nhtml .aal .aal-ag:first-child{transform:translateX(-40%)!important}\nhtml .aal-label,html .as-index-toggle{font-size:32px!important}\nhtml .asc .asc-card{width:auto!important;max-width:none!important;grid-column:1/-1!important}\nhtml .ab-open{top:18px!important;right:16px!important;font-size:20px!important}\nhtml .ab-sheet{display:block!important;overflow-y:auto!important;-webkit-overflow-scrolling:touch;width:100vw!important}\nhtml .ab-photos{width:100%!important;border-right:0!important}\nhtml .ab-strip img{height:320px}\nhtml .ab-text{display:block!important;overflow:visible!important;padding:28px 20px 48px!important}\nhtml .as-index thead{display:none!important}\nhtml .as-index table,html .as-index tbody,html .as-index tr,html .as-index td{display:block!important;width:auto!important}\nhtml .as-index tbody tr{padding:14px 0!important;border-bottom:1px solid rgba(255,255,255,.12)}\nhtml .as-index td{padding:0!important;white-space:normal!important}\nhtml .as-index td:nth-child(1){font-size:12px!important;opacity:.55;margin-bottom:4px}\nhtml .as-index td:nth-child(3){margin:4px 0}\nhtml .as-index td:nth-child(4){font-size:12px!important;opacity:.55}\nhtml .as-index tr.as-yr{border-bottom:0}\nhtml .as-index tr.as-yr td{font-weight:700;opacity:1;font-size:inherit!important;padding-top:24px!important}\nhtml .as-scroll{overflow-x:auto!important;padding:24px 16px 8px!important}"+(window.__asOff.row?"\nhtml .as-scroll>column-set{display:flex!important;flex-direction:column!important;flex-wrap:nowrap!important;align-items:flex-start!important;gap:32px!important;width:auto!important;min-width:0!important}\nhtml .as-scroll column-unit{flex:none!important;width:60vw!important;max-width:60vw!important;margin:0!important}\nhtml .as-scroll column-unit[span='4']{width:85vw!important;max-width:85vw!important}":"\nhtml .as-scroll>column-set{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;align-items:flex-end!important;gap:16px!important;width:auto!important;min-width:0!important}\nhtml .as-scroll column-unit{flex:none!important;width:76vw!important;max-width:76vw!important;margin:0!important}\nhtml .as-scroll column-unit[span='4']{width:76vw!important;max-width:76vw!important}\nhtml .as-row .as-cap{min-height:2.8em!important}")+"\nhtml .as-index td.as-none{display:none!important}"+(window.__asOff.arrows?"":"\nhtml body .asc .asc-h::before{content:'\\2192';font-family:'DM Sans',Arial,sans-serif;font-size:.55em;color:rgba(242,242,242,.55);margin-right:.45em;position:relative;top:-.18em}")+"";document.head.appendChild(nst);}
  
if(!tst||!tst.isConnected){tst=document.createElement('style');tst.dataset.ascT='1';tst.textContent='.asc .asc-cards{grid-template-columns:minmax(0,1fr)}';document.head.appendChild(tst);}
  
if(!wst8||!wst8.isConnected){wst8=document.createElement('style');wst8.dataset.ascW8='1';wst8.textContent="html .asc .asc-cards{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:40px!important;padding:70px 40px 0!important}\nhtml body .asc .asc-stage.asc-stage{aspect-ratio:auto!important;height:min(calc(100vh - 125px),75vw)!important;min-height:360px}";document.head.appendChild(wst8);}
  
if(!nst8||!nst8.isConnected){nst8=document.createElement('style');nst8.dataset.ascN8='1';nst8.textContent="html .asc .asc-title,html .asc .asc-title.asc-title{top:18px;left:16px;font-size:20px!important}\nhtml .asc::after{top:18px;right:16px;font-size:20px}\nhtml .asc .asc-cards{padding:36px 16px 0!important}";document.head.appendChild(nst8);}
  
const n=w<760; nst.media=n?'all':'not all'; tst.media=w<420?'all':'not all'; wst8.media=n?'not all':'all'; nst8.media=n?'all':'not all';
  
if(n!==wasN){wasN=n; svg.style.display=n?'none':'';}
}
/* v66: page layout for the section (phone styles, full width, pulled to the top) runs on its own, so it is right even while the 3D waits */
let preOn=true, preHost=null;
function preFind(el){let e=el.parentElement;while(e&&e!==document.body&&e!==document.documentElement){const s=getComputedStyle(e);if(/(auto|scroll)/.test(s.overflowY)&&e.scrollHeight>e.clientHeight+1)return e;e=e.parentElement;}return document.body;}
const preSvg={style:{}};
function prePlace(){if(!preOn)return; const cs=document.querySelector('.asc'); if(!cs)return;
if(!document.querySelector('style[data-asc]'))addStyle(); if(!document.querySelector('style[data-asc8]'))addStyle8();
let r=cs.getBoundingClientRect(); if(!r.width)return; narrow(r.width,preSvg); r=cs.getBoundingClientRect();
if(!preHost||!preHost.isConnected)preHost=preFind(cs);
const host=preHost, hb=host===document.body; let T;
if(hb&&getComputedStyle(document.body).position==='static'){T=r.top+window.scrollY;} else {const h=host.getBoundingClientRect();T=r.top-h.top-host.clientTop+host.scrollTop;}
const cm=getComputedStyle(cs), hl=hb?0:host.getBoundingClientRect().left+host.clientLeft, hw=hb?document.documentElement.clientWidth:host.clientWidth, dl=r.left-hl;
if(Math.abs(dl)>0.5||Math.abs(r.width-hw)>0.5){cs.style.setProperty('margin-left',(parseFloat(cm.marginLeft)-dl)+'px','important');cs.style.setProperty('width',hw+'px','important');cs.style.setProperty('max-width','none','important');}
if(Math.abs(T)>0.5){cs.style.setProperty('margin-top',(parseFloat(cm.marginTop)-T)+'px','important');}}
/* v69c: while the 3D waits, the section is re-placed before every frame for the first 10 seconds (as the 3D used to do), so a late change above it is corrected before it is drawn and nothing visibly jumps; after that, 4 times a second */
prePlace(); {const t0=Date.now(); (function loop(){ if(!preOn) return; prePlace(); if(Date.now()-t0<10000) requestAnimationFrame(loop); else setTimeout(loop,250); })();} addEventListener('resize',function(){prePlace();});
/* v60: Google Fonts removed; headline font is set at the top of this file */
async function start(){
preOn=false; wasN=null;
const T=THREE;
/* Cargo redraws its page and removes anything added to it, so the 3D canvas and the lines live in their own layer
   
outside Cargo's page, laid exactly over the section on every frame. */
let cs=null, stage=null, cards=[];
/* v8: which piece each service joins (left to right, so the lines never cross) */
const PMAP={king:'rook',knight:'king',rook:'queen',queen:'knight'}; function PM(c){return PMAP[c.dataset.piece]||c.dataset.piece;}
function refresh(){cs=document.querySelector('.asc'); stage=cs&&cs.querySelector('.asc-stage'); cards=cs?[...cs.querySelectorAll('.asc-card')]:[];}
refresh();
const ov=document.createElement('div'); ov.setAttribute('aria-hidden','true');
ov.style.cssText='position:absolute;left:0;top:0;width:10px;height:10px;pointer-events:none;z-index:5;display:none';
const canvas=document.createElement('canvas'); canvas.className='asc-gl';
canvas.style.cssText='position:absolute;left:0;top:0;width:100%;height:100%;z-index:2;pointer-events:none';
const svg=document.createElementNS('http://www.w3.org/2000/svg','svg'); svg.setAttribute('class','asc-lines');
svg.style.cssText='position:absolute;left:0;top:0;width:100%;height:100%;z-index:1;overflow:visible;pointer-events:none;--asc-ink:#9a9a9a';
ov.appendChild(svg); ov.appendChild(canvas); document.body.appendChild(ov);
let lastKey='';
/* the overlay lives inside whatever scrolls the page, so the browser moves it with the photo (no lag) */
let host=null, hostN=0;
function findHost(el){let e=el.parentElement;while(e&&e!==document.body&&e!==document.documentElement){const s=getComputedStyle(e);if(/(auto|scroll)/.test(s.overflowY)&&e.scrollHeight>e.clientHeight+1)return e;e=e.parentElement;}return document.body;}
function place(){
  
if(!document.querySelector('style[data-asc]'))addStyle();
  
if(!document.querySelector('style[data-asc8]'))addStyle8();
  
if(!cs||!cs.isConnected||!stage){ov.style.display='none';return false;}
  
const r=cs.getBoundingClientRect(), s=stage.getBoundingClientRect();
  
if(!r.width||!s.width||s.height<40){ov.style.display='none';return false;}   // no room yet (styles not loaded): draw nothing
  
narrow(r.width,svg);
  
if(!host||!host.isConnected||(++hostN%90)===0){host=findHost(cs);}
  
if(ov.parentNode!==host){if(host!==document.body&&getComputedStyle(host).position==='static')host.style.position='relative';host.appendChild(ov);}
  
let L,T;
  
if(host===document.body&&getComputedStyle(document.body).position==='static'){L=r.left+window.scrollX;T=r.top+window.scrollY;}
  
else{const h=host.getBoundingClientRect();L=r.left-h.left-host.clientLeft+host.scrollLeft;T=r.top-h.top-host.clientTop+host.scrollTop;}
  
/* v8: stretch the section to the full page width and pull it up to the very top */
  
{const cm=getComputedStyle(cs), hb=host===document.body, hl=hb?0:host.getBoundingClientRect().left+host.clientLeft, hw=hb?document.documentElement.clientWidth:host.clientWidth, dl=r.left-hl;
   
if(Math.abs(dl)>0.5||Math.abs(r.width-hw)>0.5){cs.style.setProperty('margin-left',(parseFloat(cm.marginLeft)-dl)+'px','important');cs.style.setProperty('width',hw+'px','important');cs.style.setProperty('max-width','none','important');}
   
if(Math.abs(T)>0.5){cs.style.setProperty('margin-top',(parseFloat(cm.marginTop)-T)+'px','important');}}
  
ov.style.display=''; ov.style.left=Math.round(L)+'px'; ov.style.top=Math.round(T-80)+'px'; ov.style.width=r.width+'px'; ov.style.height=(r.height+120)+'px';
  
const key=[Math.round(r.width),Math.round(r.height),Math.round(s.left-r.left),Math.round(s.top-r.top),Math.round(s.width),Math.round(s.height)].join();
  
if(key!==lastKey){lastKey=key; layout();}
  
return true;
}
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
/* v66: phones get a lighter 3D shadow (smaller, simpler), so it starts and runs faster */
const PHONE=window.innerWidth<760;
const renderer=new T.WebGLRenderer({canvas,alpha:true,antialias:true});
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,window.innerWidth<760?1.5:2));
renderer.outputEncoding=T.sRGBEncoding;
renderer.toneMapping=T.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.05;
renderer.shadowMap.enabled=true;
/* v69: on computers without a graphics card (software drawing) the 3D uses the lighter phone shadow and 1x pixels, so it can't freeze the page */
const SOFT=(function(){try{const gl=renderer.getContext(),ex=gl.getExtension('WEBGL_debug_renderer_info');return /swiftshader|llvmpipe|software|softpipe/i.test(ex?String(gl.getParameter(ex.UNMASKED_RENDERER_WEBGL)):'');}catch(e){return false;}})();
if(SOFT)renderer.setPixelRatio(1);
renderer.shadowMap.type=(PHONE||SOFT)?T.PCFShadowMap:T.PCFSoftShadowMap;
/* v69: shaders are built in the background (the browser's parallel compile), so the page never freezes while the 3D gets ready. glReady waits until they are done */
renderer.debug.checkShaderErrors=false;
function glReady(){return new Promise(function(res){const gl=renderer.getContext(),ext=gl.getExtension('KHR_parallel_shader_compile'),t0=Date.now(); if(!ext){res();return;}
(function poll(){const ps=renderer.info.programs||[]; let ok=Date.now()-t0>8000; if(!ok){ok=true; for(let i=0;i<ps.length;i++){if(!gl.getProgramParameter(ps[i].program,ext.COMPLETION_STATUS_KHR)){ok=false;break;}}} if(ok)res(); else setTimeout(poll,25);})();});}
const tick=()=>new Promise(r=>setTimeout(r,0));
const scene=new T.Scene();
/* v68b: phones only. PHONE_SIZE makes all pieces bigger; PHONE_SZ gives each piece its own size on top (1 = same). Desktop is unchanged */
const PHONE_SIZE=1.4, PHONE_SZ={king:1.12,queen:1.05,knight:1,rook:0.95,rookB:0.88,pawnB:0.8};
const camera=new T.PerspectiveCamera(26,1,0.1,200);
camera.position.set(0,15,9.5);
camera.lookAt(0,0,0);
/* studio reflections: a small scene of bright panels baked into an environment map */
(function(){
  
const env=new T.Scene();
  
env.background=new T.Color(0x030303);
  
const panel=(w,h,x,y,z,i)=>{const m=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({color:new T.Color(i,i,i),side:T.DoubleSide}));m.position.set(x,y,z);m.lookAt(0,0,0);env.add(m);};
  
panel(8,5,-6,9,4,1.4); panel(4,8,8,6,-2,0.6); panel(4,4,0,12,-6,0.8);
  
const pm=new T.PMREMGenerator(renderer);
  
scene.environment=pm.fromScene(env,0).texture;   // v61: extra blur 0.04 -> 0: same look (checked pixel by pixel), about 3x faster to set up
})();
scene.add(new T.HemisphereLight(0xffffff,0x888888,0.35));
const sun=new T.DirectionalLight(0xffffff,1.25);
sun.position.set(-5,14,6);
sun.castShadow=true;
sun.shadow.mapSize.set((PHONE||SOFT)?512:2048,(PHONE||SOFT)?512:2048);
sun.shadow.radius=6;
sun.shadow.bias=-0.0004;
scene.add(sun);
const ground=new T.Mesh(new T.PlaneGeometry(80,80),new T.ShadowMaterial({opacity:0.07}));
ground.rotation.x=-Math.PI/2; ground.receiveShadow=true; scene.add(ground);
const mat=new T.MeshPhysicalMaterial({color:new T.Color(0x111113).convertSRGBToLinear(),roughness:0.3,metalness:0.0,envMapIntensity:0.55,reflectivity:0.12,side:T.DoubleSide});
/* finishes to compare */
const FIN={gloss:{c:0x141416,r:0.3,m:0.0,e:0.55,rf:0.12},satin:{c:0x1c1c1e,r:0.55,m:0.0,e:0.6,rf:0.08},matte:{c:0x202022,r:0.68,m:0.0,e:0.75,rf:0.07}};
function setFinish(k){const f=FIN[k];mat.color.set(f.c).convertSRGBToLinear();mat.roughness=f.r;mat.metalness=f.m;mat.envMapIntensity=f.e;mat.reflectivity=f.rf;mat.needsUpdate=true;
}
/* ---- pieces: king, knight, rook and queen from "Chess set" by Brendan Wood (CC BY 4.0), shapes only ---- */
const PIECES=window.__ascPieces;
function b64(s,Type){if(typeof s!=='string')return new Type(s.slice().buffer);const bin=atob(s),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return new Type(u.buffer);}
function model(name){const d=PIECES[name],g=new T.BufferGeometry();
  
const q=b64(d.p,Int16Array), f=new Float32Array(q.length); for(let i=0;i<q.length;i++)f[i]=q[i]*d.s;
  
g.setAttribute('position',new T.BufferAttribute(f,3));
  
g.setAttribute('normal',new T.BufferAttribute(b64(d.n,Int8Array),3,true));
  
g.setIndex(new T.BufferAttribute(b64(d.i,d.i32?Uint32Array:Uint16Array),1));
  
const grp=new T.Group(), m=new T.Mesh(g,mat); m.castShadow=true; grp.add(m); grp.userData.h=d.h; return grp;}
/* placement over the photo: u,v are 0..1 across the photo; lift = height above the table; tilt like the mock-up */
function pair(a,b,ry){const g=new T.Group(),y=model(b);y.rotation.y=ry||0;g.add(y);g.userData.h=y.userData.h;return g;}
const P=[
  
{id:'king',  a0:0.0, make:()=>pair('king','f_king'),    u:0.50,v:0.23,lift:0.65,sz:1.00,tx:-0.15,tz:0.08},
  
{id:'knight',a0:1.6, make:()=>pair('knight','f_knight',-1.6),u:0.82,v:0.30,lift:0.50,sz:1.00,tx:-0.30,tz:-0.40},
  
{id:'rook',  a0:0.0, make:()=>pair('rook','f_bishop'),  u:0.31,v:0.49,lift:0.35,sz:1.00,tx:0.35,tz:0.50},
  
{id:'queen', a0:0.0, make:()=>pair('queen','f_queen'),  u:0.73,v:0.65,lift:0.50,sz:1.00,tx:0.25,tz:-0.80},
  
{id:'rookB', a0:0.0, make:()=>pair('rook','f_rook'),    u:0.66,v:0.18,lift:0.45,sz:1.00,tx:0.55,tz:0.60},
  
{id:'pawnB', a0:0.0, make:()=>pair('pawn','f_pawn'),    u:0.48,v:0.73,lift:0.20,sz:1.00,tx:-0.40,tz:-0.65}
];
const holders=[];
P.forEach((p,i)=>{
  
const tilt=new T.Group(), spin=p.make();
  
const c=spin.userData.h/2;
  
spin.children.forEach(ch=>ch.position.y-=c);   // pivot at the middle of the piece
  
tilt.add(spin); scene.add(tilt);
  
tilt.userData={p,spin,hover:0,ang:p.a0,vel:0};
  
holders.push(tilt);
});
/* ---- playbook layer drawn in 3D on and above the table ---- */
const ink=new T.Color(0x111111);
const playG=new T.Group(); scene.add(playG);
const solidM=new T.LineBasicMaterial({color:ink,toneMapped:false,transparent:true,opacity:1});
const dashM=new T.LineDashedMaterial({color:ink,toneMapped:false,dashSize:1,gapSize:1,transparent:true,opacity:1});
const headM=new T.MeshBasicMaterial({color:ink,toneMapped:false,side:T.DoubleSide,transparent:true,opacity:1});
const drops=[];
/* moves, all straight: [from, to, height above the table at the start (0 = flat on the table), dashed] */
const MOVES=[['king','knight',0,false],['rook','pawnB',0,false],['rookB','queen',0,false],['king','rook',0,false],['knight','queen',0,false],['pawnB','queen',0,false]];
function foot(id){const h=holders.find(o=>o.userData.p.id===id); return h&&h.userData.home?new T.Vector3(h.userData.home.x,0.01,h.userData.home.z):null;}
function addLine(pts,dashed){const g=new T.BufferGeometry().setFromPoints(pts); const l=new T.Line(g,dashed?dashM:solidM); if(dashed)l.computeLineDistances(); playG.add(l); return l;}
/* closed arrowhead: a flat, slim filled triangle lying in the line's plane, like a pen-drawn arrow */
function addHead(p,dir,size){const d=dir.clone().normalize(), side=new T.Vector3().crossVectors(d,new T.Vector3(0,1,0)); if(side.lengthSq()<1e-6)side.set(1,0,0); side.normalize();
  
const back=p.clone().addScaledVector(d,-size), a=back.clone().addScaledVector(side,size*0.28), b=back.clone().addScaledVector(side,-size*0.28);
  
const g=new T.BufferGeometry().setFromPoints([p,a,b]); const m=new T.Mesh(g,headM); playG.add(m);}
function ring(c,r,dashed){const pts=[];for(let i=0;i<=64;i++){const a=i/64*Math.PI*2;pts.push(new T.Vector3(c.x+Math.cos(a)*r,0.01,c.z+Math.sin(a)*r));} addLine(pts,dashed);}
function cross(c,r){addLine([new T.Vector3(c.x-r,0.01,c.z-r),new T.Vector3(c.x+r,0.01,c.z+r)]); addLine([new T.Vector3(c.x-r,0.01,c.z+r),new T.Vector3(c.x+r,0.01,c.z-r)]);}
function buildPlay(){
  
while(playG.children.length){const o=playG.children.pop(); o.geometry&&o.geometry.dispose();}
  
drops.length=0;
  
const u=scale; dashM.dashSize=0.09*u; dashM.gapSize=0.07*u;
  
holders.forEach(h=>{const f=foot(h.userData.p.id); if(!f)return;
    
ring(f,0.42*u,false);                                   // the piece's square, as a circle on the table
    
const l=addLine([f.clone(),f.clone()],false); drops.push({h,l});   // drop line from the floating piece to its spot
  
});
  
MOVES.forEach(([a,b,arc,dashed])=>{const p=foot(a),q=foot(b); if(!p||!q)return;
    
const dir=q.clone().sub(p), len=dir.length(); dir.normalize();
    
const s=p.clone().addScaledVector(dir,0.5*u), e=q.clone().addScaledVector(dir,-0.55*u);
    
if(arc>0){ s.y=arc*u; e.y=arc*0.6*u; }            // some moves run straight through the air, between heights
    
addLine([s,e],dashed);
    
addHead(e,e.clone().sub(s),0.2*u);
  
});
  
/* a few loose marks, like an annotated playbook */
  
const k=foot('king'), n=foot('knight'), q=foot('queen'), r=foot('rook');
  
if(k&&n) cross(k.clone().lerp(n,0.5).add(new T.Vector3(0,0,1.1*u)),0.16*u);
  
if(r&&q) cross(r.clone().lerp(q,0.45).add(new T.Vector3(0,0,-0.9*u)),0.16*u);
  
if(k&&r) ring(k.clone().lerp(r,0.5).add(new T.Vector3(-1.2*u,0,0)),0.2*u,false);
}
function updateDrops(){drops.forEach(({h,l})=>{const a=l.geometry.attributes.position; h.getWorldPosition(tmp);
  
a.setXYZ(0,tmp.x,tmp.y-h.userData.spin.userData.h*0.5*h.scale.x,tmp.z); a.setXYZ(1,tmp.x,0.01,tmp.z); a.needsUpdate=true; l.computeLineDistances();});}
let scale=1, W=1, H=1;
const ray=new T.Raycaster(), plane=new T.Plane(new T.Vector3(0,1,0),0), tmp=new T.Vector3();
function layout(){
  
const r=canvas.getBoundingClientRect(); W=Math.max(1,r.width); H=Math.max(1,r.height);
  
renderer.setSize(W,H,false); camera.aspect=W/H; camera.updateProjectionMatrix(); camera.updateMatrixWorld();
  
const sr=stage.getBoundingClientRect();
  
const d=camera.position.length(), visH=2*d*Math.tan(T.MathUtils.degToRad(camera.fov/2));
  
const wpp=visH/H;                       // world units per pixel near the table centre
  
scale=(sr.width*0.75*0.36*0.85*wpp)/1.98*(W<760?(window.__asPS||PHONE_SIZE):1);   // v10: pieces 15% smaller        // king about a third of the photo tall
  
holders.forEach(h=>{
    
const p=h.userData.p;
    
const ph=sr.width*0.75, off=Math.max(0,ph-sr.height)*0.33, x=sr.left-r.left+p.u*sr.width, y=sr.top-r.top+p.v*ph-off;   // v8: spots are on the photo, which is cropped to fit the screen
    
ray.setFromCamera({x:x/W*2-1,y:-(y/H*2-1)},camera);
    
const lift=(p.lift+0.6)*scale;
    
plane.constant=-lift; ray.ray.intersectPlane(plane,tmp);
    
h.userData.home=tmp.clone();
  
});
  
const ext=visH*W/H*0.75;
  
Object.assign(sun.shadow.camera,{left:-ext,right:ext,top:ext,bottom:-ext,near:1,far:60}); sun.shadow.camera.updateProjectionMatrix();
  
buildPlay(); startCache={};
}
/* pointer: find which piece is under the mouse */
let hoverId=null;
window.addEventListener('pointermove',e=>{
  
const cr=canvas.getBoundingClientRect();
  
ray.setFromCamera({x:(e.clientX-cr.left)/W*2-1,y:-((e.clientY-cr.top)/H*2-1)},camera);
  
const hit=ray.intersectObjects(holders,true)[0];
  
let id=null; if(hit){let o=hit.object;while(o&&!holders.includes(o))o=o.parent; id=o&&o.userData.p.id;}
  
setHover(id,'gl');
},{passive:true});
/* hovering a service turns its piece (listening on the whole page, since Cargo may redraw the cards) */
document.addEventListener('pointerover',e=>{const c=e.target.closest&&e.target.closest('.asc-card'); if(c)setHover(PM(c),'card');},{passive:true});
document.addEventListener('pointerout',e=>{const c=e.target.closest&&e.target.closest('.asc-card'); if(c&&!(e.relatedTarget&&c.contains(e.relatedTarget)))setHover(null,'card');},{passive:true});
let hoverSrc=null;
function setHover(id,src){
  
if(src==='gl'&&hoverSrc==='card'&&id===null)return;
  
hoverId=id; hoverSrc=id?src:null;
  
cards.forEach(c=>c.classList.toggle('on',PM(c)===id));
  
svg.querySelectorAll('path').forEach(p=>p.classList.toggle('on',p.dataset.piece===id));
  
canvas.style.cursor=id?'pointer':'';
}
/* lines: thin straight technical-drawing lines. Each service piece runs to its card (open ring at the piece, dot along the way, arrowhead at the card);
   
dashed lines tie the pieces to one another. */
const NS='http://www.w3.org/2000/svg';
function el(tag,attrs,parent){const e=document.createElementNS(NS,tag);for(const k in attrs)e.setAttribute(k,attrs[k]);(parent||svg).appendChild(e);return e;}
const svc={};
['king','knight','rook','queen'].forEach(id=>{const g=el('g',{class:'ln','data-piece':id});
  
svc[id]={g,line:el('path',{'data-piece':id},g),ring:el('circle',{r:3.5,class:'ring'},g),dot:el('circle',{r:3.5,class:'dot'},g),head:el('path',{class:'head'},g)};});
const LINKS=[];
const links=LINKS.map(()=>{const g=el('g',{class:'lk'});return {line:el('path',{},g),head:el('path',{class:'head'},g)};});
function scr(id){const h=holders.find(o=>o.userData.p.id===id); if(!h)return null; h.getWorldPosition(tmp); tmp.project(camera); return [(tmp.x+1)/2*W,(1-tmp.y)/2*H];}
function arrow(x0,y0,x1,y1,len){const a=Math.atan2(y1-y0,x1-x0),w=len*0.42;
  
return `M${x1},${y1} L${(x1-len*Math.cos(a)+w*Math.sin(a)).toFixed(1)},${(y1-len*Math.sin(a)-w*Math.cos(a)).toFixed(1)} L${(x1-len*Math.cos(a)-w*Math.sin(a)).toFixed(1)},${(y1-len*Math.sin(a)+w*Math.cos(a)).toFixed(1)}Z`;}
/* where each service line starts: a fixed dot just past the right edge of the piece, level with its middle.
   
Worked out once per layout from the piece's resting spot, so it stays put while the piece spins or moves on scroll. */
let startCache={}; let startTick=0;
const box=new T.Box3(), bv=new T.Vector3();
function startPt(id){
  
if(startCache[id])return startCache[id];
  
const h=holders.find(o=>o.userData.p.id===id); if(!h||!h.userData.home)return null;
  
const p=scr(id); if(!p)return null;
  
let x=p[0], hit=true, n=0;
  
while(hit&&n<120){x+=3;n++; ray.setFromCamera({x:x/W*2-1,y:-(p[1]/H*2-1)},camera); hit=ray.intersectObjects(holders,true).length>0;}
  
return startCache[id]=[x+12,p[1]];
}
function drawLines(){
  
startTick++;
  
const sr=svg.getBoundingClientRect(), cvr=canvas.getBoundingClientRect(), ox=cvr.left-sr.left, oy=cvr.top-sr.top;
  
cards.forEach(c=>{
    
const id=PM(c), p=scr(id), o=svc[id]; if(!p||!o)return; const hd=c.querySelector('.asc-h'); if(!hd)return;
    
const sp=startPt(id); if(!sp)return;
    
const x0=sp[0]+ox, y0=sp[1]+oy;
    
const cr=c.querySelector('.asc-h').getBoundingClientRect();
    
o.ring.setAttribute('cx',x0.toFixed(1)); o.ring.setAttribute('cy',y0.toFixed(1));
    
if(true){
      
/* services in a row under the photo: down from the piece, across, then down into the heading */
      
const st=stage.getBoundingClientRect(), i=[...cards].sort((a,b)=>a.getBoundingClientRect().left-b.getBoundingClientRect().left).indexOf(c);
      
const cb=c.getBoundingClientRect(), yb=st.bottom-sr.top-64+i*14, xc=cb.left-sr.left+cb.width/2, y1=cr.top-sr.top-12;
      
o.line.setAttribute('d',`M${x0.toFixed(1)},${y0.toFixed(1)} L${x0.toFixed(1)},${yb.toFixed(1)} L${xc.toFixed(1)},${yb.toFixed(1)} L${xc.toFixed(1)},${y1.toFixed(1)}`);
      
o.head.setAttribute('d',arrow(xc,yb,xc,y1,9)); o.dot.setAttribute('cx',xc.toFixed(1)); o.dot.setAttribute('cy',y1.toFixed(1));
    
} else {
      
const x1=cr.left-sr.left-12, y1=cr.top-sr.top+cr.height/2, st=stage.getBoundingClientRect();
      
/* out to the right of the piece, one step up or down beside it, then straight across to the heading */
      
const xv=Math.min(x1-24, x0+22);   // the step sits right next to the piece, so the long run into the heading is straight
      
o.line.setAttribute('d',`M${x0.toFixed(1)},${y0.toFixed(1)} L${xv.toFixed(1)},${y0.toFixed(1)} L${xv.toFixed(1)},${y1.toFixed(1)} L${x1.toFixed(1)},${y1.toFixed(1)}`);
      
o.head.setAttribute('d',arrow(xv,y1,x1,y1,9)); o.dot.setAttribute('cx',x1.toFixed(1)); o.dot.setAttribute('cy',y1.toFixed(1));
    
}
  
});
  
LINKS.forEach(([a,b],i)=>{const p=scr(a),q=scr(b),o=links[i]; if(!p||!q)return;
    
const x0=p[0]+ox,y0=p[1]+oy,x1=q[0]+ox,y1=q[1]+oy, d=Math.hypot(x1-x0,y1-y0)||1, k=Math.min(28,d*0.25)/d;
    
const ex=x1-(x1-x0)*k, ey=y1-(y1-y0)*k, sx=x0+(x1-x0)*k, sy=y0+(y1-y0)*k;
    
o.line.setAttribute('d',`M${sx.toFixed(1)},${sy.toFixed(1)} L${ex.toFixed(1)},${ey.toFixed(1)}`);
    
o.head.setAttribute('d',arrow(sx,sy,ex,ey,7));
  
});
}
const clock=new T.Clock(), eul=new T.Euler(), qt=new T.Quaternion();
/* scroll: each piece turns, rises and tips by its own amount as the section passes through the screen */
let scrollT=0, scrollNow=0;
function readScroll(){if(!cs)return; const r=cs.getBoundingClientRect(), vh=window.innerHeight||1;
  
scrollT=Math.max(-1,Math.min(1,((r.top+r.height/2)-vh/2)/vh));}
const K=[ // per piece: tip (sideways), tumble (toward/away), drift x, rise
  
[ 0.9, 0.6,-0.35,0.5],[-1.3,-0.8,0.45,0.9],[ 1.1, 0.7,0.30,-0.4],[-0.8,0.9,-0.40,0.6],
  
[ 1.4,-0.6,0.25,0.8],[-1.0,0.8,0.35,-0.5],[ 1.2,-0.9,-0.30,0.7]];
const AX=[[1,0.3,0],[0.2,0,1],[1,0,0.4],[0.4,0,1],[1,0.2,0.2],[0,0.3,1],[1,0,-0.5]].map(v=>new T.Vector3(...v).normalize());
const qf=new T.Quaternion();
/* tap on phones gives the piece a spin */
window.addEventListener('pointerdown',e=>{
  
const cr=canvas.getBoundingClientRect();
  
ray.setFromCamera({x:(e.clientX-cr.left)/W*2-1,y:-((e.clientY-cr.top)/H*2-1)},camera);
  
const hit=ray.intersectObjects(holders,true)[0]; if(!hit)return;
  
let o=hit.object;while(o&&!holders.includes(o))o=o.parent; if(o){o.userData.vel=0.5;}
},{passive:true});
function flip(h){}
/* v60: idle spin. SPIN = radians per second (0.1 = one turn in about a minute); SPIN_MS = ms between frames while only idling (66 = 15 fps) */
const SPIN=0.1, SPIN_MS=66, SPIN_HOVER=0.3;
/* v61: if this device draws the 3D slowly (software graphics, weak phones), the idle spin turns off so the page never freezes; hover still turns the pieces */
let SPINV=SPIN, rN=0, rT=0;
{try{const gl=renderer.getContext(),ex=gl.getExtension('WEBGL_debug_renderer_info'),nm=ex?String(gl.getParameter(ex.UNMASKED_RENDERER_WEBGL)):''; if(/swiftshader|llvmpipe|software|softpipe/i.test(nm))SPINV=0;}catch(e){}}   // SPIN_HOVER: speed while the mouse is on a piece or its card (was 0.5)
function frame(){
  
refresh(); if(!place()){requestAnimationFrame(frame);return;}
{const vr=canvas.getBoundingClientRect(); if(vr.bottom<0||vr.top>(window.innerHeight||0)){clock.getDelta(); requestAnimationFrame(frame); return;}}
  
readScroll();
  
const dt=Math.min(clock.getDelta(),0.05);
  
scrollNow+=(scrollT-scrollNow)*(reduce?1:0.04);
  
holders.forEach((h,i)=>{
    
const u=h.userData, p=u.p, home=u.home; if(!home)return;
    
const k=K[i%K.length], sc=0;   // pieces stay still on scroll
    
/* scroll: the whole piece rises a little and turns, all in the same direction */
    
h.position.set(home.x, home.y+sc*Math.abs(k[3])*0.6*scale, home.z);
    
eul.set(p.tx, 0, p.tz); h.quaternion.copy(camera.quaternion).multiply(qt.setFromEuler(eul));
    
/* hover: the piece turns slowly in one direction (about one turn every 12 seconds), easing in and out */
    
const on=hoverId===p.id;
    
u.vel+=(((on&&!reduce)?SPIN_HOVER:(reduce?0:SPINV))-u.vel)*Math.min(1,dt*1.5);
    
u.ang+=u.vel*dt;
    
u.spin.rotation.y=u.ang+sc*0.8;
    
u.hover+=((on?1:0)-u.hover)*0.08;
    
h.scale.setScalar(scale*p.sz*(W<760&&PHONE_SZ[p.id]||1));
  
});
  
const nowMs=Date.now(), busy=holders.some(h=>Math.abs(h.userData.vel-(reduce?0:SPINV))>1e-3||Math.abs(h.userData.hover-(hoverId===h.userData.p.id?1:0))>1e-3), mv=busy||(SPINV>0&&!reduce&&nowMs-(window.__ascLast||0)>=SPIN_MS), sig=lastKey+'|'+scale;
if(mv||sig!==window.__ascSig||nowMs-(window.__ascLast||0)>(SPINV?1000:8000)){window.__ascSig=sig; window.__ascLast=nowMs;
const t0=performance.now();
updateDrops();
renderer.render(scene,camera);
drawLines();
if(SPINV&&rN<12){const d=performance.now()-t0; if(rN>=2)rT+=d; rN++; if(rN===12&&rT/10>28){SPINV=0; holders.forEach(h=>{if(hoverId!==h.userData.p.id)h.userData.vel=0;});}}}
requestAnimationFrame(frame);
}
setFinish('satin');
[solidM,dashM,headM].forEach(m=>m.opacity=0.45);   // faint table lines
/* v69: build every shader the first picture needs (pieces, shadows, table lines) in the background, then draw */
await tick();
{const tmp=[new T.Line(new T.BufferGeometry().setFromPoints([new T.Vector3(),new T.Vector3(1,0,0)]),solidM),new T.Line(new T.BufferGeometry().setFromPoints([new T.Vector3(),new T.Vector3(1,0,0)]),dashM),new T.Mesh(new T.BufferGeometry().setFromPoints([new T.Vector3(),new T.Vector3(1,0,0),new T.Vector3(0,0,1)]),headM)];
tmp[1].computeLineDistances(); tmp.forEach(o=>scene.add(o));
try{renderer.compile(scene,camera);}catch(e){}
tmp.forEach(o=>{scene.remove(o);o.geometry.dispose();});}
await glReady();
frame();
}
/* v66: WAIT3D = when the 3D starts. 'none' = straight away, 'phone' = phones wait for the first touch or scroll, 'all' = every device waits for the first scroll, touch, mouse move or key */
const WAIT3D='phone';
let waited=false;
/* v69: computers that draw 3D without a graphics card (software drawing, e.g. PageSpeed's test machine) also wait for the first mouse move, scroll or key: there the 3D setup froze the page for about 2 seconds */
let softV=null;
function soft(){if(softV===null){softV=false; try{const c=document.createElement('canvas'),g=c.getContext('webgl',{failIfMajorPerformanceCaveat:true}); if(!g)softV=true; else {const ex=g.getExtension('WEBGL_debug_renderer_info'); softV=/swiftshader|llvmpipe|software|softpipe/i.test(ex?String(g.getParameter(ex.UNMASKED_RENDERER_WEBGL)):''); const l=g.getExtension('WEBGL_lose_context'); if(l)l.loseContext();}}catch(e){}} return softV;}
function isPhone(){return Math.min(window.innerWidth||9999,(window.screen&&screen.width)||9999)<760||(window.matchMedia&&matchMedia('(pointer:coarse)').matches&&!matchMedia('(pointer:fine)').matches);}
function needWait(){if(waited||WAIT3D==='none')return false; if(WAIT3D==='all')return true; return isPhone()||soft();}
function whenActive(f){const ev=['scroll','wheel','touchstart','pointerdown','pointermove','keydown'];let done=false;function go(){if(done)return;done=true;ev.forEach(n=>removeEventListener(n,go,true));waited=true;setTimeout(f,0);}ev.forEach(n=>addEventListener(n,go,{capture:true,passive:true}));}
/* v69: the 3D library and the chess piece data download only once the 3D is about to start (after the page is shown), so they never hold up the first picture */
function boot(){if(!window.__asShown){window.__asWhenShown(boot);return;} if(needWait()){whenActive(boot);return;} go();}
let going=false;
function go(){if(going)return; going=true; let n=2; const done=function(){if(--n===0)start();};
if(window.__ascPieces)done(); else {window.__ascZready=function(){unpack(done);}; if(window.__ascZ)unpack(done); else if(!document.querySelector('script[data-ascz]')){const s=document.createElement('script'); s.src=(window.__asBase||'https://cdn.jsdelivr.net/gh/alsmthstudio2/chess-pieces@main/fonts/').replace(/fonts\/$/,'chess-data.js'); s.async=true; s.setAttribute('data-ascz','1'); document.head.appendChild(s);}}
if(window.THREE)done(); else {const s=window.__asThree(); if(s.getAttribute('data-loaded'))done(); else s.addEventListener('load',done,{once:true});}}
/* v31: chess piece data is stored compressed (same pieces, smaller page code); unpack it */
let unpacked=false; function unpack(cb){if(unpacked)return; unpacked=true; const Z=window.__ascZ,bin=atob(Z.d),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);
new Response(new Blob([u]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer().then(function(buf){const P={};let o=0;Object.keys(Z.m).forEach(function(k){const m=Z.m[k],e={s:m.s,h:m.h,i32:m.i32};['p','n','i'].forEach(function(f){e[f]=new Uint8Array(buf,o,m[f]);o+=m[f];});P[k]=e;});window.__ascPieces=P;cb();});}
boot();
})();
/* v32: ABOUT side sheet (opens when ABOUT is clicked) */
(function(){
  
if(!document.querySelector('style[data-ab]')){var st=document.createElement('style');st.setAttribute('data-ab','1');st.textContent=".ab-open{position:absolute;top:34px;right:40px;z-index:7;font-family:var(--as-hf);font-size:34px;line-height:1;text-transform:uppercase;letter-spacing:.01em;color:#f2f2f2;cursor:pointer;background:none;border:0;padding:0}\n.ab-bg{position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,.45);opacity:0;pointer-events:none;transition:opacity .35s ease}\n.ab-sheet{position:fixed;top:0;right:0;bottom:0;z-index:9999;width:min(980px,100vw);display:flex;background:#0a0a0a;color:#fff;transform:translateX(100%);transition:transform .45s cubic-bezier(.2,.7,.2,1);font-family:var(--as-bf);-webkit-font-smoothing:antialiased}\nhtml.ab-on .ab-bg{opacity:1;pointer-events:auto}\nhtml.ab-on .ab-sheet{transform:none}\nhtml.ab-on body{overflow:hidden}\n.ab-photos{flex:none;width:400px;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-right:1px solid rgba(255,255,255,.08)}\n.ab-photos::-webkit-scrollbar{display:none}\n.ab-strip{display:flex;align-items:flex-start;gap:8px;width:max-content}\n.ab-photos{scroll-snap-type:none}\n.ab-strip figure{scroll-snap-align:start}\n.ab-strip figcaption{transition:opacity .25s ease}\n.ab-strip figure{margin:0}\n.ab-strip img{height:400px;width:auto;display:block;max-width:none}\n.ab-strip figcaption{width:0;min-width:100%;margin-top:12px;font-size:12px;line-height:1.5;color:rgba(255,255,255,.5)}\n.ab-strip figcaption span{white-space:nowrap}\n.ab-text{flex:1;min-width:0;display:flex;flex-direction:column;padding:38px 40px;overflow-y:auto}\n.ab-top{display:flex;justify-content:space-between;align-items:center}\n.ab-title{font-family:var(--as-hf);font-size:40px;line-height:1;text-transform:uppercase;letter-spacing:.02em}\n.ab-x{background:none;border:0;padding:0;cursor:pointer;display:block}\n.ab-loc{font-size:12px;letter-spacing:.04em;color:rgba(255,255,255,.55);margin-top:10px}\n.ab-lead{font-size:15px;line-height:1.45;margin:22px 0 0}\n.ab-p{font-size:14px;line-height:1.5;color:rgba(255,255,255,.85);margin:12px 0 0}\n.ab-blk{border-top:1px solid rgba(255,255,255,.18);padding-top:10px;margin-top:30px}\n.ab-lbl{font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.5)}\n.ab-ed{display:grid;grid-template-columns:110px 1fr;gap:10px;font-size:13px;line-height:1.6;margin-top:5px}\n.ab-ed:first-of-type{margin-top:10px}\n.ab-ed span:first-child{color:rgba(255,255,255,.5)}\n.ab-cta{margin-top:auto;padding-top:40px;font-size:15px;line-height:1.5;color:rgba(255,255,255,.85)}\n.ab-sheet a{color:#fff;text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px}\n@media (max-width:760px){\n  .ab-open{top:18px;right:16px;font-size:20px}\n  .ab-sheet{flex-direction:column;overflow-y:auto}\n  .ab-photos{width:100%;border-right:0}\n  .ab-strip img{height:320px}\n  .ab-strip figcaption{padding:0 2px}\n  .ab-text{overflow:visible;padding:28px 20px 40px}\n}\n.ab-photos{transition:width .5s cubic-bezier(.2,.7,.2,1)}\n.ab-strip img{transition:height .5s cubic-bezier(.2,.7,.2,1),width .5s cubic-bezier(.2,.7,.2,1)}\n.ab-strip figure{cursor:zoom-in}\n.ab-sheet.big .ab-strip figure{cursor:zoom-out}\n.ab-text{transition:opacity .4s ease}\n.ab-sheet.big .ab-text{opacity:.25;cursor:pointer}\n.ab-sheet.big .ab-text a,.ab-sheet.big .ab-text button{pointer-events:none}\n@media (prefers-reduced-motion:reduce){.ab-photos,.ab-strip img,.ab-text{transition:none}}";document.head.appendChild(st);}
  
var EMAIL='alsmth.studio@gmail.com';
  
var LINKEDIN='https://www.linkedin.com/in/alice-smith-/';
  
var IG='https://www.instagram.com/aesmth/';
  
var PHOTO1=window.__asImg+'about-1-137.jpg';
  
var PHOTO2=window.__asImg+'about-2.jpg';
  
var X='\x3csvg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">\x3cpath d="M2 2L20 20M20 2L2 20" stroke="#fff" stroke-width="1.2" fill="none"/>\x3c/svg>';
  
function build(){
    
if(document.querySelector('.ab-sheet')) return;
    
var bg=document.createElement('div'); bg.className='ab-bg';
    
var s=document.createElement('aside'); s.className='ab-sheet'; s.setAttribute('aria-label','About');
    
s.innerHTML=
      
'\x3cdiv class="ab-photos">\x3cdiv class="ab-strip">'+
        
'\x3cfigure>\x3cimg data-ab-src="'+PHOTO1+'" alt="">\x3cfigcaption>Wearing Spiritual Technologies 2026 | \x3cspan>© Joe Westley\x3c/span>\x3c/figcaption>\x3c/figure>'+
        
'\x3cfigure>\x3cimg data-ab-src="'+PHOTO2+'" alt="">\x3cfigcaption>co\u2014matter 2024 | \x3cspan>© Camille Blake\x3c/span>\x3c/figcaption>\x3c/figure>'+
      
'\x3c/div>\x3c/div>'+
      
'\x3cdiv class="ab-text">'+
        
'\x3cdiv class="ab-top">\x3cspan class="ab-title">About\x3c/span>\x3cbutton class="ab-x" aria-label="Close">'+X+'\x3c/button>\x3c/div>'+
        
'\x3cdiv class="ab-loc">London / Berlin\x3c/div>'+
        
'\x3cp class="ab-lead">A strategist and conceptual thinker currently exploring how emerging technology reshapes culture, identity, and society in the 21st century. Curious about using speculation and design research to help brands and communities understand their role in society beyond trends.\x3c/p>'+
        
'\x3cp class="ab-p">I’ve spent the past four years working across large-scale commercial agencies and small-scale studios to grasp the reality of the creative industry and how it’s developing. The overlaps and differences taught me the importance of reputation, cult brands, and the ever-present desire for authenticity among marketing-savvy consumers. Now, my time is focused on applying strategic skills and speculative thinking to projects beyond advertising that go deeper, recontextualising philosophical ideas to make sense of today’s world.\x3c/p>'+
        
'\x3cdiv class="ab-blk">\x3cdiv class="ab-lbl">Education / awards\x3c/div>'+
          
'\x3cdiv class="ab-ed">\x3cspan>Present\x3c/span>\x3cspan>MA Philosophy, Birkbeck University London\x3c/span>\x3c/div>'+
          
'\x3cdiv class="ab-ed">\x3cspan>2024\x3c/span>\x3cspan>UAL Fast Futures Cohort\x3c/span>\x3c/div>'+
          
'\x3cdiv class="ab-ed">\x3cspan>2023\x3c/span>\x3cspan>D&amp;AD New Blood Award\x3c/span>\x3c/div>'+
          
'\x3cdiv class="ab-ed">\x3cspan>2023\x3c/span>\x3cspan>BA Creative &amp; Cultural Industries, Kingston University London\x3c/span>\x3c/div>'+
        
'\x3c/div>'+
        
'\x3cdiv class="ab-cta">Open to projects, ideas and new connections. \x3ca href="mailto:'+EMAIL+'">Email me\x3c/a>, or find me on \x3ca href="'+LINKEDIN+'" target="_blank" rel="noopener">LinkedIn\x3c/a> and \x3ca href="'+IG+'" target="_blank" rel="noopener">IG\x3c/a>.\x3c/div>'+
      
'\x3c/div>';
    
document.body.appendChild(bg); document.body.appendChild(s);
    
/* photo column fits your photo with the same 24px margin each side; click a photo to see it bigger, click again (or the text) to go back */
    
var ph=s.querySelector('.ab-photos'), st=s.querySelector('.ab-strip'), tx=s.querySelector('.ab-text');
    
var figs=[].slice.call(st.querySelectorAll('figure')), imgs=figs.map(function(f){return f.querySelector('img')}), caps=figs.map(function(f){return f.querySelector('figcaption')});
    
var big=false;
    
function mob(){ return 760>=window.innerWidth; }
    
function M(){ return mob()?20:24; }
    
function ratio(i){ var im=imgs[i]; return im.naturalWidth?im.naturalWidth/im.naturalHeight:0; }
    
function H(){ if(mob()) return big?Math.round(window.innerHeight*.62):320; return big?Math.min(820,window.innerHeight-130):400; }
    
function capVis(){ var r=ph.getBoundingClientRect(); caps.forEach(function(c){ var f=c.parentNode.getBoundingClientRect(); c.style.opacity=(f.left>=r.left-2&&f.right<=r.right+2)?'1':'0'; }); }
    
function fit(){
      
var r0=ratio(0), r1=ratio(1); if(!r0||!r1) return;
      
var m=M(), h=H(), w=Math.round(h*r0), w1=mob()?Math.round(h*r1):w;
      
imgs[0].style.height=h+'px'; imgs[0].style.width=w+'px';
      
imgs[1].style.width=w1+'px'; imgs[1].style.height=Math.round(w1/r1)+'px';
      
ph.style.width=mob()?'':(m+w+m)+'px';
      
st.style.paddingLeft=m+'px'; ph.style.scrollPaddingLeft=m+'px';
      
var colW=mob()?ph.clientWidth:(m+w+m);
      
st.style.paddingRight=Math.max(m,colW-m-w1)+'px';
      
capVis(); setTimeout(capVis,520);
    
}
    
function current(){ var r=ph.getBoundingClientRect(), best=0, d=1e9; figs.forEach(function(f,i){ var x=Math.abs(f.getBoundingClientRect().left-r.left-M()); if(x<d){d=x;best=i;} }); return best; }
    
function setBig(on){
      
var i=current(); at=i; gid++; auto=true; big=on; s.classList.toggle('big',on); fit();
      
var t0=Date.now(); (function keep(){ ph.scrollLeft=target(i); if(Date.now()-t0<540) requestAnimationFrame(keep); else auto=false; })();
    
}
    
s.setBig=setBig; s.isBig=function(){ return big; };
    
ph.addEventListener('scroll',capVis,{passive:true});
    
/* sliding: a small swipe in either direction is enough to move to the next or previous photo, at any size */
    
var at=0, tmr=0, touching=false, auto=false;
    
function target(i){ return Math.max(0,figs[i].offsetLeft-M()); }
    
function settle(){
      
if(touching||auto) return;
      
var d=ph.scrollLeft-target(at);
      
if(d>30&&at<figs.length-1) at++; else if(-30>d&&at>0) at--;
      
glide(target(at));
    
}
    
var gid=0;
    
function glide(to){
      
var from=ph.scrollLeft, t0=0, id=++gid; if(Math.abs(to-from)<=1){ auto=false; return; }
      
auto=true;
      
requestAnimationFrame(function step(t){ if(id!==gid) return; if(!t0) t0=t; var k=Math.min(1,(t-t0)/380), e=1-Math.pow(1-k,3);
        
ph.scrollLeft=from+(to-from)*e; if(k<1) requestAnimationFrame(step); else setTimeout(function(){ if(id===gid) auto=false; },60); });
    
}
    
ph.addEventListener('wheel',function(){ if(auto){ gid++; auto=false; } },{passive:true});
    
ph.addEventListener('scroll',function(){ clearTimeout(tmr); tmr=setTimeout(settle,140); },{passive:true});
    
ph.addEventListener('touchstart',function(){ touching=true; gid++; auto=false; },{passive:true});
    
ph.addEventListener('touchend',function(){ touching=false; clearTimeout(tmr); tmr=setTimeout(settle,140); },{passive:true});
    
imgs.forEach(function(im){ if(im.complete) fit(); im.addEventListener('load',fit); });
    
window.addEventListener('resize',fit);
    
figs.forEach(function(f){ f.addEventListener('click',function(){ setBig(!big); }); });
    
tx.addEventListener('click',function(e){ if(big){ e.preventDefault(); e.stopPropagation(); setBig(false); } },true);
    
s.fit=fit;
    
bg.addEventListener('click',close);
    
s.querySelector('.ab-x').addEventListener('click',close);
  
}
  
function open(){ build(); window.__abLoad(); document.documentElement.classList.add('ab-on'); var sh=document.querySelector('.ab-sheet'); if(sh&&sh.fit) setTimeout(sh.fit,50); }
  
function close(){ document.documentElement.classList.remove('ab-on'); var sh=document.querySelector('.ab-sheet'); if(sh&&sh.isBig&&sh.isBig()) setTimeout(function(){ sh.setBig(false); },460); }
  
document.addEventListener('keydown',function(e){ if(e.key!=='Escape') return; var sh=document.querySelector('.ab-sheet'); if(sh&&sh.isBig&&sh.isBig()) sh.setBig(false); else close(); });
  
function hit(e){
    
var h=document.querySelector('.asc'); if(!h) return false;
    
var r=h.getBoundingClientRect(), x=e.clientX, y=e.clientY;
    
return x>r.right-260 && x<r.right && y>r.top && y<r.top+100;
  
}
  
window.addEventListener('click',function(e){
    
if(document.documentElement.classList.contains('ab-on')) return;
    
if(hit(e)){ e.preventDefault(); e.stopPropagation(); open(); }
  
},true);
  
window.addEventListener('mousemove',function(e){
    
if(document.documentElement.classList.contains('ab-on')) return;
    
document.documentElement.style.cursor=hit(e)?'pointer':'';
  
},{passive:true});
})();
/* v22: small page fixes (Kemmler Kemmler removed from the line, studios evenly spaced, Non-sweat above Lotte in the index, service card text, project details) */
(function(){
  
/* page loads with every project closed, even if Cargo saved one as open while editing */
  
var t0=Date.now(), touched=false;
  
window.addEventListener('pointerdown',function(){ touched=true; },true);
  
window.addEventListener('keydown',function(){ touched=true; },true);
  
/* click anywhere outside the open project, its text or the INDEX to close it (runs before Cargo can swallow the click) */
  
window.addEventListener('click',function(e){
    
var t=e.target; if(!t||!t.closest) return;
    
if(document.documentElement.classList.contains('ab-on')) return;
    
if(t.closest('.as-wk, .as-go, .as-index-toggle, .as-index-body table, .as-detail p, .as-detail a, .ab-sheet, .ab-bg')) return;
    
document.querySelectorAll('.as-wk.as-on, .as-detail.as-on').forEach(function(el){ el.classList.remove('as-on'); });
  
},true);
  
function closeSaved(){
    
if(touched||Date.now()-t0>6000) return;
    
document.querySelectorAll('.as-wk.as-on, .as-detail.as-on, .as-index.as-on').forEach(function(el){ el.classList.remove('as-on'); });
  
}
  
function fixPage(){
    
closeSaved();
    
document.querySelectorAll('.aal-ag, .aal-dot').forEach(function(el){
      
var l=(el.style.left||'').replace(/\s/g,'');
      
if(l==='70%') el.style.display='none';
      
else if(l==='28%') el.style.left='36%';
      
else if(l==='48%') el.style.left='64%';
    
});
    
var rows=[].slice.call(document.querySelectorAll('.as-index tbody tr'));
    
var ns=rows.filter(function(r){ var c=r.cells[0]; return c&&/^non-sweat$/i.test(c.textContent.trim()); })[0];
    
var lo=rows.filter(function(r){ var c=r.cells[1]; return c&&c.textContent.trim()==='Lotte'; })[0];
    
if(ns&&lo&&lo.nextElementSibling===ns) lo.parentNode.insertBefore(ns,lo);
    
/* service card text (edit the words between the quotes to change them) */
    
var CARDS={
      
king:['Qual research and speculative thinking for trend reports, whitepapers or public-facing memos.','L’Or\u00e9al Groupe, NikeSKIMS, Converse, Igloo Inc., Hinge'],
      
rook:['Developing a brand’s world, from positioning to campaigns and visual identity support.',null],
      
queen:['End-to-end production, translating research into narratives and media objects that people can engage with.','Vienna Business Agency, Mozilla Foundation']
    
};
    
Object.keys(CARDS).forEach(function(k){
      
var c=document.querySelector('.asc-card[data-piece="'+k+'"]'); if(!c) return;
      
var who=c.querySelector('.asc-who'), d=who?who.previousElementSibling:null;
      
if(d&&d.textContent!==CARDS[k][0]) d.textContent=CARDS[k][0];
      
if(who&&CARDS[k][1]&&who.textContent!==CARDS[k][1]) who.textContent=CARDS[k][1];
    
});
    
/* v30: index rows (Hinge role, Gen Z, Plugged role, Kingston University FMP, AKQA first ever project at the bottom of 2021 - 2024) */
    
var tb=document.querySelector('.as-index tbody');
    
if(tb){
      
[].forEach.call(tb.rows,function(r){
        
var c=r.cells; if(c.length<4) return;
        
var client=c[1].textContent.trim(), desc=c[2].textContent.trim();
        
if(client==='Hinge'&&c[3].textContent!=='Research & synthesis') c[3].textContent='Research & synthesis';
        
if(/\bgen z\b/.test(c[2].textContent)) c[2].textContent=c[2].textContent.replace(/\bgen z\b/g,'Gen Z');
        
if(/^Plugged/.test(desc)&&c[3].textContent!=='End-to-end production') c[3].textContent='End-to-end production';
        
if(/^Impact DAO/.test(desc)&&c[0].textContent!=='Kingston University FMP') c[0].textContent='Kingston University FMP';
      
});
      
var hasAKQA=[].some.call(tb.rows,function(r){ return r.cells[0]&&r.cells[0].textContent.trim()==='AKQA'; });
      
if(!hasAKQA){ var tr=document.createElement('tr'); ['AKQA','Bacardi, EA, HSBC, Choose Love','Integrated brand campaigns across content and PR.','Creative strategy'].forEach(function(v){ var td=document.createElement('td'); td.textContent=v; tr.appendChild(td); }); tb.appendChild(tr); }
    
}
    
/* co\u2014matter always with the long dash */
    
document.querySelectorAll('.aal-ag, .as-index, .as-projects, .as-detail').forEach(function(root){
      
var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null,false), n;
      
while((n=w.nextNode())){ if(n.nodeValue.indexOf('co\u2013matter')>-1) n.nodeValue=n.nodeValue.split('co\u2013matter').join('co\u2014matter'); }
    
});
    
/* project details: studio line (grey) sits above the client name; role/deliverables and link text */
    
var DET={
      
'p-disintegrator':['Creative strategy, visual brand identity\x3cbr>Brand communication\x3cbr>2x Pitch decks\x3cbr>Website',null],
      
'p-mozilla':['Production\x3cbr>LDN / BER / NY / LA',null],
      
'p-podcast':['End-to-end production\x3cbr>18 episodes\x3cbr>BER / VIE / LDN',null],
      
'p-nwo':['Research &amp; synthesis support\x3cbr>Available on Metalabel',null],
      
'p-explorers':['Creative strategy, art direction, production\x3cbr>Facilitated on Discord\x3cbr>IRL workshops','Request full project'],
      
'p-plugged':['End-to-end production\x3cbr>35+ issues',null]
    
};
    
document.querySelectorAll('.as-detail').forEach(function(d){
      
var f=d.querySelector('.as-facts'); if(!f) return;
      
var t=f.querySelector('.as-t'), studio=t&&t.nextElementSibling;
      
if(t&&studio&&studio.classList.contains('as-mono')) f.insertBefore(studio,t);
      
var x=DET[d.getAttribute('data-id')]; if(!x) return;
      
var b=f.querySelector('.as-blurb'), monos=[].slice.call(f.querySelectorAll('.as-mono')).filter(function(m){ return b&&(b.compareDocumentPosition(m)&4); });
      
if(monos[0]){ var tmp=document.createElement('p'); tmp.innerHTML=x[0]; if(monos[0].innerHTML!==tmp.innerHTML) monos[0].innerHTML=x[0]; }
      
monos.slice(1).forEach(function(m){ m.remove(); });
      
var a=f.querySelector('.as-lnk'); if(a&&x[1]&&a.textContent!==x[1]) a.textContent=x[1];
    
});
  
}
  
fixPage();
  
new MutationObserver(window.__asT(function(){ fixPage(); })).observe(document.documentElement,{childList:true,subtree:true});
})();
/* v22: clicking CREATIVE STRATEGY (top left) scrolls down just enough to show all four services */
(function(){
  
function title(){ return document.querySelector('.asc .asc-title'); }
  
function hitT(e){ var t=title(); if(!t) return false; var r=t.getBoundingClientRect(); return e.clientX>=r.left-6&&e.clientX<=r.right+6&&e.clientY>=r.top-6&&e.clientY<=r.bottom+6; }
  
function go(){
    
var cards=document.querySelectorAll('.asc .asc-card'); if(!cards.length) return;
    
var top=1e9, bot=-1e9;
    
[].forEach.call(cards,function(c){ var r=c.getBoundingClientRect(); if(r.height){ top=Math.min(top,r.top); bot=Math.max(bot,r.bottom); } });
    
var pad=window.innerWidth>760?40:24, dy=bot+pad-window.innerHeight;
    
if(dy>top-pad) dy=top-pad;
    
if(dy>1) window.scrollTo({top:window.scrollY+dy,behavior:'smooth'});
  
}
  
window.addEventListener('click',function(e){
    
if(document.documentElement.classList.contains('ab-on')) return;
    
if(hitT(e)){ e.preventDefault(); e.stopPropagation(); go(); }
  
},true);
  
window.addEventListener('mousemove',function(e){
    
if(document.documentElement.classList.contains('ab-on')) return;
    
if(hitT(e)) document.documentElement.style.cursor='pointer';
  
},{passive:true});
})();
/* v30: Cargo can save the section with width 0, which stops the chess drawing; clear it */
(function(){
  
function clr(){ var c=document.querySelector('.asc'); if(c&&c.style.width&&parseFloat(c.style.width)<1){ ['margin-left','width','max-width','margin-top'].forEach(function(p){ c.style.removeProperty(p); }); } }
  
clr(); setInterval(clr,250);
})();
/* v37: About text */
(function(){
var A='A conceptual thinker interested in how strategy and storytelling can shape the systems, cultures, and communities that we move through.';
var B='I \x3c3 creative strategy and want to push its utility beyond the traditional advertising model, toward projects that serve culture. My approach combines a healthy balance of human experience, investigative journalism, systems thinking and philosophical ideas. Operating in this framework feels exciting and creates room for new ideas to surface.';
function f(){var a=document.querySelector('.ab-sheet .ab-lead'),b=document.querySelector('.ab-sheet .ab-p');if(a&&a.textContent!==A)a.textContent=A;if(b&&b.textContent!==B)b.textContent=B;}
f(); new MutationObserver(window.__asT(f)).observe(document.documentElement,{childList:true,subtree:true});
})();
/* v38: footer line at the very bottom of the page */
(function(){
function ft(){var x=document.querySelector('.as-index'); if(!x||!x.parentNode) return; var f=document.querySelector('.as-credit');
if(!f){ f=document.createElement('p'); f.className='as-credit'; }
var H='\u00a9 2026 Alice Smith \u00b7 3D chess pieces by danielpaulse (Sketchfab), \x3ca href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline">CC BY-SA 4.0\x3c/a>';
if(f.getAttribute('data-v')!=='1'){ f.innerHTML=H; f.setAttribute('data-v','1'); }
if(f.getAttribute('data-s')!=='1'){ f.style.cssText='font-family:Inter,"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:9px;line-height:1.4;letter-spacing:.02em;color:rgba(255,255,255,.35);margin:120px 0 16px;padding:0'; f.setAttribute('data-s','1'); }
if(f.previousElementSibling!==x) x.parentNode.insertBefore(f,x.nextSibling); }
ft(); new MutationObserver(window.__asT(ft)).observe(document.documentElement,{childList:true,subtree:true});
})();
/* v47: Disintegrator slideshow: picture 10s (v64, was 5s), then the whole video, then repeat */
(function(){
/* v74: Cargo runs this file twice; two copies of this part kept removing each other's picture+video box (Safari never finished loading). Only the first copy runs now */
if(window.__asDzOn) return; window.__asDzOn=1;
var IMG=(window.__asImg||'https://cdn.jsdelivr.net/gh/alsmthstudio2/chess-pieces@main/img/')+'disintegrator-800.jpg';   // v62: 800px JPG (was the 3.4 MB PNG); otherwise unchanged from v60
var VID='https://freight.cargo.site/t/original/i/X3236772765742577142339671205448/disintegrator2-800.mp4';   // v65: 800px copy, 0.8 MB (was 7.4 MB)
var PIC_MS=10000, t=null, box=null, im=null, vd=null;
function show(which){
if(!box) return; clearTimeout(t);
im.style.opacity=which==='img'?'1':'0'; vd.style.opacity=which==='vid'?'1':'0';
if(which==='img'){ try{vd.pause();}catch(e){} t=setTimeout(function(){show('vid');},PIC_MS); return; }
try{vd.currentTime=0;}catch(e){}
var p=vd.play(); if(p&&p.catch) p.catch(function(){});
t=setTimeout(function(){ show('img'); },(vd.duration>0&&isFinite(vd.duration))?vd.duration*1000+1500:15000);
}
function build(){
var wk=document.querySelector('.as-wk[data-id="p-disintegrator"]'); if(!wk) return;
var g=wk.querySelector('gallery-slideshow'); if(g&&g.style.display!=='none') g.style.display='none';
if(box&&box.isConnected&&box.parentNode===wk) return;
[].forEach.call(wk.querySelectorAll('.as-dz'),function(o){o.remove();});
box=document.createElement('div'); box.className='as-dz';
box.style.cssText='display:grid;width:100%;align-items:end';
im=document.createElement('img'); im.src=IMG; im.alt='Disintegrator';   // v69b: not lazy (lazy made the poster glitch)
vd=document.createElement('video'); vd.src=VID; vd.muted=true; vd.playsInline=true; vd.preload='metadata';
vd.setAttribute('muted',''); vd.setAttribute('playsinline','');
[im,vd].forEach(function(el){ el.style.cssText='grid-area:1/1;width:100%;height:auto;display:block;transition:none'; box.appendChild(el); });
vd.addEventListener('ended',function(){ show('img'); });
wk.insertBefore(box,wk.firstChild);
show('img');
}
build(); new MutationObserver(window.__asT(build)).observe(document.documentElement,{childList:true,subtree:true});
})();
/* v57: podcast video loads only when tapped (YouTube player is heavy) */
(function(){
function play(d){var f=document.createElement('iframe'); f.className='as-video'; f.src='https://www.youtube.com/embed/'+d.getAttribute('data-yt')+'?autoplay=1';
f.setAttribute('allow','autoplay; encrypted-media; picture-in-picture; fullscreen'); f.setAttribute('allowfullscreen',''); f.title=d.title||'';
f.style.cssText='width:100%;aspect-ratio:16/9;border:0;display:block'; d.parentNode.replaceChild(f,d);}
function deco(){[].forEach.call(document.querySelectorAll('.as-yt'),function(d){ if(d.querySelector('.as-yt-b')) return; var b=document.createElement('span'); b.className='as-yt-b';
b.style.cssText='display:block;width:0;height:0;position:relative;left:50%;top:50%;margin:-18px 0 0 -12px;border-style:solid;border-width:18px 0 18px 30px;border-color:transparent transparent transparent rgba(255,255,255,.9);pointer-events:none'; d.appendChild(b); });}
document.addEventListener('click',function(e){var d=e.target.closest&&e.target.closest('.as-yt'); if(d){ e.preventDefault(); play(d); }},true);
deco(); new MutationObserver(window.__asT(deco)).observe(document.documentElement,{childList:true,subtree:true});
})();
 
/* v67c: no scroll snapping on the phone row (Safari can keep re-snapping while Cargo resizes slideshows); the row keeps Cargo's own width, as in v66 */
/* v66: on narrow phones (under 420px) "Creative strategy" and "Alice Smith" shrink a little so they don't overlap. v67: iPhones no longer enlarge some text on their own (that made the index lines different sizes) */
(function(){ var st=document.createElement('style'); st.setAttribute('data-as-narrow','1'); st.textContent=(window.__asOff.tsa?'':'html,html body,html bodycopy,html .as-index,html .as-index *{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}@media (max-width:760px){html .as-index td,html .as-index td *{line-height:1.4!important}html .as-index tbody tr:not(.as-yr) td:nth-child(2),html .as-index tbody tr:not(.as-yr) td:nth-child(3){font-size:14px!important}html .as-index td *{font-size:inherit!important}}')+'@media (max-width:420px){html body .asc .asc-title.asc-title{font-size:min(20px,4.4vw)!important}html body .ab-open.ab-open{font-size:min(20px,4.4vw)!important}}'; document.head.appendChild(st); })();
/* v60: one left and right edge for the whole page, taken from "Creative strategy" and "Alice Smith" */
(function(){
var st=null, last='';
function edge(){
var t=document.querySelector('.asc-title'), o=document.querySelector('.ab-open'), pr=document.querySelector('.as-projects');
if(!t||!pr) return;
var tr=t.getBoundingClientRect(), br=pr.getBoundingClientRect(); if(!tr.width||!br.width) return;
var vw=document.documentElement.clientWidth;
var L=Math.round(tr.left-br.left), R=o&&o.getBoundingClientRect().width?Math.round((vw-o.getBoundingClientRect().right)-(vw-br.right)):L;
if(L<0||L>200) return; if(R<0||R>200) R=L;
var key=L+'|'+R; if(key===last&&st&&st.isConnected) return; last=key;
if(!st||!st.isConnected){ st=document.createElement('style'); st.setAttribute('data-as-edge','1'); document.head.appendChild(st); }
st.textContent=
'html body .aal.aal{margin-left:'+L+'px!important;margin-right:'+R+'px!important}\n'+
'html body .aal ~ .aal-label{padding-left:'+L+'px!important;padding-right:'+R+'px!important}\n'+
'html body .as-scroll.as-scroll{padding-left:'+L+'px!important;padding-right:'+R+'px!important;scroll-padding-left:'+L+'px}\n'+
'html body .as-panel,html body .as-index{margin-left:'+L+'px!important;margin-right:'+R+'px!important}\n'+
'html body p.as-credit.as-credit{margin-left:'+L+'px!important;margin-right:'+R+'px!important}';
}
edge(); window.addEventListener('resize',window.__asT(edge)); new MutationObserver(window.__asT(edge)).observe(document.documentElement,{childList:true,subtree:true});
})();
/* v67c: phones show the projects as a sideways row. The dots under it are drawn by CSS only (nothing is added inside Cargo's page,
   because Cargo redraws whenever something it did not make appears there). 6 dots = 6 projects; change N_DOTS if projects are added or removed */
(function(){
if(window.__asOff.dots||window.__asOff.row)return; var N_DOTS=6, STEP=17, R=3;
var layers=[], pos=[]; for(var k=0;k<N_DOTS;k++){ layers.push('radial-gradient(circle,rgba(242,242,242,.3) '+R+'px,transparent '+(R+0.6)+'px)'); pos.push('calc(50% + '+((k-(N_DOTS-1)/2)*STEP)+'px) 50%'); }
var first='calc(50% + '+(-(N_DOTS-1)/2*STEP)+'px + var(--as-dot,0) * '+STEP+'px) 50%';
var st=document.createElement('style'); st.setAttribute('data-as-dots','1');
st.textContent='@media (max-width:760px){html .as-scroll::after{content:"";display:block;position:sticky;left:16px;width:calc(100vw - 32px);height:8px;margin-top:14px;'+
'background-image:radial-gradient(circle,#f2f2f2 '+R+'px,transparent '+(R+0.6)+'px),'+layers.join(',')+';background-size:8px 8px;background-repeat:no-repeat;background-position:'+first+','+pos.join(',')+'}}';
document.head.appendChild(st);
var bound=null;
function mark(){ var sc=document.querySelector('.as-scroll'); if(!sc) return; var u=sc.querySelectorAll('column-set > column-unit'); if(!u.length) return;
var l=sc.getBoundingClientRect().left+(parseFloat(getComputedStyle(sc).paddingLeft)||0), b=0, bd=1e9;
for(var i=0;i<u.length;i++){ var d=Math.abs(u[i].getBoundingClientRect().left-l); if(d<bd){bd=d;b=i;} }
var v=String(Math.min(b,N_DOTS-1)); if(document.documentElement.style.getPropertyValue('--as-dot')!==v) document.documentElement.style.setProperty('--as-dot',v); }
function bind(){ var sc=document.querySelector('.as-scroll'); if(sc&&sc!==bound){ bound=sc; sc.addEventListener('scroll',window.__asT(mark),{passive:true}); mark(); } }
bind(); setInterval(bind,1000);
})();
/* v68b: on phones, touches in the project row go to the row only (Cargo's slideshows were catching the swipe, so the row could not scroll) */
(function(){
if(window.__asOff.row) return;
var st=document.createElement('style'); st.setAttribute('data-as-swipe','1');
st.textContent='@media (max-width:760px){html .as-scroll,html .as-scroll *{touch-action:pan-x pan-y!important}}';
document.head.appendChild(st);
function stop(e){ if(e.type.indexOf('pointer')===0&&e.pointerType==='mouse') return; if(Math.min(innerWidth,screen.width||9999)>=760) return;
var t=e.target; if(t&&t.closest&&t.closest('.as-scroll')) e.stopPropagation(); }
['touchstart','touchmove','touchend','pointerdown','pointermove','pointerup'].forEach(function(n){ document.addEventListener(n,stop,{capture:true,passive:true}); });
})();
/* v68e: phone project row moves with the finger (the row slides; it does not rely on scrolling, which iPhone Safari would not do here).
   A see-through layer over each picture sends touches to the project, never to Cargo's slideshow; a tap still opens the project.
   On release the row settles on the nearest project. The dots follow. */
(function(){
if(window.__asOff.row) return;
var st=document.createElement('style'); st.setAttribute('data-as-row3','1');
st.textContent='@media (max-width:760px){html .as-wk{position:relative!important}html .as-wk:not(:has(iframe))::after{content:"";position:absolute;left:0;top:0;right:0;bottom:0;z-index:20;background:transparent}'+
'html .as-scroll{overflow:hidden!important;touch-action:pan-y!important}html .as-scroll *{touch-action:pan-y!important}'+
'html .as-scroll>column-set{transform:translate3d(var(--as-tx,0px),0,0)!important;will-change:transform}html.as-glide .as-scroll>column-set{transition:transform .35s cubic-bezier(.2,.7,.2,1)!important}'+
'html .as-scroll::after{position:relative!important;left:0!important;width:100%!important}}';
document.head.appendChild(st);
var H=document.documentElement, tx=0, sc=null, x0=0, y0=0, t0=0, dir=0, lastX=0, lastT=0, v=0;
function ph(){ return Math.min(innerWidth,screen.width||9999)<760; }
function parts(){ var s=document.querySelector('.as-scroll'); if(!s) return null; var cs=s.querySelector('column-set'); if(!cs) return null;
var u=[].slice.call(cs.querySelectorAll(':scope > column-unit')); return {s:s,cs:cs,u:u}; }
function off(P,i){ return P.u[i].offsetLeft-P.u[0].offsetLeft; }
function maxT(P){ var n=P.u.length; if(!n) return 0; var c=getComputedStyle(P.s), inner=P.s.clientWidth-(parseFloat(c.paddingLeft)||0)-(parseFloat(c.paddingRight)||0);
return Math.max(0,off(P,n-1)+P.u[n-1].offsetWidth-inner); }
function setT(x){ tx=x; H.style.setProperty('--as-tx',(-x)+'px'); }
function dots(P){ var b=0,bd=1e9; for(var i=0;i<P.u.length;i++){ var d=Math.abs(Math.min(off(P,i),maxT(P))-tx); if(d<bd){bd=d;b=i;} }
var vv=String(Math.min(b,5)); if(H.style.getPropertyValue('--as-dot')!==vv) H.style.setProperty('--as-dot',vv); }
window.addEventListener('touchstart',function(e){ if(!ph()||e.touches.length!==1){sc=null;return;} var t=e.target; if(!t||!t.closest||!t.closest('.as-scroll')){sc=null;return;}
var P=parts(); if(!P){sc=null;return;} sc=P; H.classList.remove('as-glide'); x0=lastX=e.touches[0].clientX; y0=e.touches[0].clientY; t0=tx; dir=0; v=0; lastT=Date.now(); },{capture:true,passive:true});
window.addEventListener('touchmove',function(e){ if(!sc) return; var t=e.touches[0], dx=t.clientX-x0, dy=t.clientY-y0;
if(!dir){ if(Math.abs(dx)<6&&Math.abs(dy)<6) return; dir=Math.abs(dx)>Math.abs(dy)?1:2; }
if(dir!==1) return; if(e.cancelable) e.preventDefault();
var now=Date.now(); v=(t.clientX-lastX)/Math.max(1,now-lastT); lastX=t.clientX; lastT=now;
var m=maxT(sc), x=t0-dx; if(x<0) x=x/3; if(x>m) x=m+(x-m)/3; setT(x); dots(sc); },{capture:true,passive:false});
function end(){ if(!sc) return; var P=sc; sc=null; if(dir!==1) return; var m=maxT(P), aim=tx-v*250, best=0, bd=1e9;
for(var i=0;i<P.u.length;i++){ var o=Math.min(off(P,i),m); var d=Math.abs(o-aim); if(d<bd){bd=d;best=o;} }
if(aim>=m-4) best=m; H.classList.add('as-glide'); setT(Math.max(0,Math.min(m,best))); dots(P);
var stopClick=function(ev){ ev.preventDefault(); ev.stopPropagation(); }; window.addEventListener('click',stopClick,{capture:true,once:true}); setTimeout(function(){ window.removeEventListener('click',stopClick,true); },400); }
window.addEventListener('touchend',end,{capture:true,passive:true}); window.addEventListener('touchcancel',end,{capture:true,passive:true});
function hold(){ var s=document.querySelector('.as-scroll'); if(!s) return;
if(!ph()){ if(tx) setT(0); if(s.style.getPropertyValue('width')){ s.style.removeProperty('width'); s.style.removeProperty('max-width'); s.style.removeProperty('margin-left'); } return; }
var vw=Math.min(document.documentElement.clientWidth,innerWidth,screen.width||9999), r=s.getBoundingClientRect();
if(Math.abs(r.width-vw)>1||Math.abs(r.left)>1){ var ml=parseFloat(getComputedStyle(s).marginLeft)||0;
s.style.setProperty('width',vw+'px','important'); s.style.setProperty('max-width',vw+'px','important'); s.style.setProperty('margin-left',(ml-r.left)+'px','important'); }
var P=parts(); if(P){ var m=maxT(P); if(tx>m) setT(m); } }
hold(); setInterval(hold,500); addEventListener('resize',hold);
})();
/* v60: drag the project row sideways with the mouse (hand cursor) */
(function(){
if(!document.querySelector('style[data-as-drag]')){var s=document.createElement('style'); s.setAttribute('data-as-drag','1');
s.textContent='@media (hover:hover) and (pointer:fine){html body .as-scroll,html body .as-scroll *{cursor:grab!important}}\nhtml.as-dragging,html.as-dragging *{cursor:grabbing!important;user-select:none!important;-webkit-user-select:none!important}';
document.head.appendChild(s);}
var sc=null, x0=0, l0=0, moved=false, id=null;
document.addEventListener('pointerdown',function(e){
if(e.pointerType!=='mouse'||e.button!==0) return;
var el=e.target.closest&&e.target.closest('.as-scroll'); if(!el||el.scrollWidth<=el.clientWidth) return;
if(e.target.closest('a,iframe,video[controls]')) return;
sc=el; x0=e.clientX; l0=el.scrollLeft; moved=false; id=e.pointerId;
},true);
document.addEventListener('pointermove',function(e){
if(!sc||e.pointerId!==id) return;
var dx=e.clientX-x0;
if(!moved&&Math.abs(dx)>5){ moved=true; document.documentElement.classList.add('as-dragging'); }
if(moved){ sc.scrollLeft=l0-dx; e.preventDefault(); }
},{capture:true,passive:false});
function up(e){ if(!sc||(e&&e.pointerId!==id)) return; var m=moved; sc=null; id=null; document.documentElement.classList.remove('as-dragging');
if(m){ var stop=function(ev){ ev.preventDefault(); ev.stopPropagation(); ev.stopImmediatePropagation(); }; window.addEventListener('click',stop,{capture:true,once:true}); setTimeout(function(){ window.removeEventListener('click',stop,true); },0); } }
document.addEventListener('pointerup',up,true); document.addEventListener('pointercancel',up,true);
document.addEventListener('dragstart',function(e){ if(e.target.closest&&e.target.closest('.as-scroll')) e.preventDefault(); },true);
})();

/* v61: show the page once it is laid out and the fonts are in (at most 1.5 s), then start the 3D */
(function(){
var t0=Date.now(), fontsIn=false;
try{ Promise.all(['400 16px "DM Sans"','400 20px "Garamondt"'].map(function(f){return document.fonts.load(f);})).then(function(){fontsIn=true;},function(){fontsIn=true;}); }catch(e){ fontsIn=true; }
function show(){
if(window.__asShown) return; window.__asShown=1;
document.documentElement.classList.remove('as-wait');
window.__asWhenShown=function(f){setTimeout(f,0);};
requestAnimationFrame(function(){ setTimeout(function(){ (window.__asQ||[]).splice(0).forEach(function(f){ try{f();}catch(e){} }); },80); });
}
(function wait(){ if(window.__asShown) return; if(fontsIn||Date.now()-t0>600){ requestAnimationFrame(show); return; } setTimeout(wait,30); })();
})();
/* v61f: page language and main region, for screen readers and search engines */
(function(){
function a11y(){ var d=document.documentElement; if(!d.getAttribute('lang')) d.setAttribute('lang','en'); var b=document.querySelector('bodycopy'); if(b&&!b.getAttribute('role')) b.setAttribute('role','main'); }
a11y(); new MutationObserver(window.__asT(a11y)).observe(document.documentElement,{childList:true,subtree:true});
})();
