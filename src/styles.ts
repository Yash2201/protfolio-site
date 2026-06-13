const css = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0D0D0D;--surface:#161616;--surface2:#1E1E1E;--border:#2A2A2A;
  --amber:#F5A623;--amber-dim:#C4841A;--amber-glow:rgba(245,166,35,0.10);
  --text:#F0EDE8;--muted:#9A9690;--dim:#5A5650;
}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:'Inter',sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}
::-webkit-scrollbar{width:3px}
::-webkit-scrollbar-thumb{background:var(--amber-dim);border-radius:2px}
canvas.particles-canvas{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:.45}
.portfolio-root{position:relative;z-index:1}
nav{position:fixed;top:0;left:0;right:0;z-index:200;background:rgba(13,13,13,.88);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);transition:box-shadow .3s}
nav.scrolled{box-shadow:0 4px 32px rgba(0,0,0,.4)}
.nav-inner{max-width:1100px;margin:0 auto;padding:0 32px;display:flex;align-items:center;justify-content:space-between;height:62px}
.nav-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:20px;color:var(--text);text-decoration:none;letter-spacing:-.03em;cursor:pointer}
.nav-logo span{color:var(--amber)}
.nav-links{display:flex;align-items:center;gap:32px;list-style:none}
.nav-links a{font-size:13.5px;font-weight:500;color:var(--muted);text-decoration:none;transition:color .2s;position:relative;cursor:pointer}
.nav-links a::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:var(--amber);transition:width .25s}
.nav-links a:hover,.nav-links a.active{color:var(--text)}
.nav-links a:hover::after,.nav-links a.active::after{width:100%}
.nav-cta{color:var(--amber)!important;border:1px solid rgba(245,166,35,.35)!important;padding:7px 18px;border-radius:6px;transition:background .2s!important}
.nav-cta:hover{background:var(--amber)!important;color:#0D0D0D!important}
.nav-cta::after{display:none!important}
.scroll-bar{position:fixed;top:0;left:0;height:2px;background:var(--amber);z-index:300;transition:width .1s linear}
section{padding:96px 0;position:relative}
.container{max-width:1100px;margin:0 auto;padding:0 32px}
.sec-label{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--amber);letter-spacing:.12em;text-transform:uppercase;margin-bottom:12px}
.sec-title{font-family:'Syne',sans-serif;font-weight:700;font-size:clamp(28px,3.5vw,44px);line-height:1.1;letter-spacing:-.025em;margin-bottom:14px}
.sec-sub{font-size:15.5px;color:var(--muted);line-height:1.75;max-width:480px}
.sec-divider{width:36px;height:3px;background:var(--amber);border-radius:2px;margin:18px 0 48px}
#hero{min-height:100vh;display:flex;align-items:center;padding-top:62px}
.hero-inner{max-width:1100px;margin:0 auto;padding:80px 32px;display:grid;grid-template-columns:1fr 320px;gap:64px;align-items:center;width:100%}
.eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:28px}
.eyebrow-dot{width:8px;height:8px;border-radius:50%;background:var(--amber);animation:glow 2s ease-in-out infinite}
@keyframes glow{0%,100%{box-shadow:0 0 0 0 rgba(245,166,35,.5)}50%{box-shadow:0 0 0 7px rgba(245,166,35,0)}}
.eyebrow-txt{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--amber);letter-spacing:.08em;text-transform:uppercase}
.hero-name{font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(50px,6.5vw,82px);line-height:1.0;letter-spacing:-.03em;margin-bottom:20px}
.hero-name .amber-line{color:var(--amber);display:block}
.hero-desc{font-size:17px;color:var(--muted);line-height:1.75;max-width:520px;margin-bottom:40px}
.hero-desc strong{color:var(--text);font-weight:500}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap}
.btn-primary{display:inline-flex;align-items:center;gap:8px;background:var(--amber);color:#0D0D0D;font-weight:600;font-size:14px;padding:13px 26px;border-radius:8px;text-decoration:none;transition:transform .15s,box-shadow .2s;cursor:pointer;border:none;font-family:'Inter',sans-serif}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(245,166,35,.3)}
.btn-secondary{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--muted);font-weight:500;font-size:14px;padding:12px 24px;border-radius:8px;border:1px solid var(--border);text-decoration:none;transition:border-color .2s,color .2s;cursor:pointer;font-family:'Inter',sans-serif}
.btn-secondary:hover{border-color:var(--muted);color:var(--text)}
.hero-stats{display:flex;gap:36px;margin-top:52px;padding-top:32px;border-top:1px solid var(--border)}
.stat-val{font-family:'Syne',sans-serif;font-weight:800;font-size:32px;color:var(--amber);letter-spacing:-.03em}
.stat-lbl{font-size:12px;color:var(--dim);margin-top:2px}
.cursor-blink{display:inline-block;width:3px;height:.85em;background:var(--amber);margin-left:2px;vertical-align:middle;animation:blink .75s step-end infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
.photo-frame{width:100%;aspect-ratio:3/4;max-height:400px;background:var(--surface);border:1px solid var(--border);border-radius:16px;overflow:hidden;position:relative}
.photo-frame::before{content:'';position:absolute;top:-1px;right:-1px;width:56px;height:56px;background:var(--amber);clip-path:polygon(100% 0,100% 100%,0 0);z-index:2}
.photo-placeholder{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:linear-gradient(145deg,var(--surface),var(--surface2))}
.photo-placeholder-ico{width:70px;height:70px;border-radius:50%;background:var(--border);display:flex;align-items:center;justify-content:center;font-size:28px;color:var(--dim)}
.photo-placeholder-txt{font-size:11px;color:var(--dim);font-family:'JetBrains Mono',monospace}
.hero-badge{margin-top:16px;display:inline-flex;align-items:center;gap:10px;background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:11px 15px}
.badge-dot{width:9px;height:9px;border-radius:50%;background:#4ADE80;box-shadow:0 0 0 3px rgba(74,222,128,.2);animation:glow2 2s ease-in-out infinite}
@keyframes glow2{0%,100%{box-shadow:0 0 0 3px rgba(74,222,128,.2)}50%{box-shadow:0 0 0 6px rgba(74,222,128,0)}}
.badge-txt{font-size:12px;color:var(--muted);font-weight:500}
.badge-txt strong{color:var(--text)}
#about{background:var(--surface)}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start}
.about-p{font-size:15.5px;color:var(--muted);line-height:1.8;margin-bottom:16px}
.about-p strong{color:var(--text);font-weight:500}
.highlights{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:28px}
.hi{background:var(--surface2);border:1px solid var(--border);border-radius:10px;padding:16px;transition:border-color .2s,transform .2s}
.hi:hover{border-color:rgba(245,166,35,.35);transform:translateY(-2px)}
.hi-ico{font-size:18px;margin-bottom:6px}
.hi-lbl{font-size:12.5px;color:var(--muted);line-height:1.45}
.hi-lbl strong{display:block;color:var(--text);font-size:14px;margin-bottom:1px}
.sk-group{margin-bottom:28px}
.sk-group-title{font-size:10.5px;color:var(--dim);letter-spacing:.1em;text-transform:uppercase;font-family:'JetBrains Mono',monospace;margin-bottom:10px}
.sk-row{display:flex;flex-wrap:wrap;gap:7px}
.chip{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--muted);background:var(--bg);border:1px solid var(--border);border-radius:5px;padding:4px 11px;transition:border-color .2s,color .2s,transform .15s;cursor:default}
.chip:hover{border-color:rgba(245,166,35,.4);color:var(--text);transform:translateY(-1px)}
.chip.primary{color:var(--amber);border-color:rgba(245,166,35,.3);background:var(--amber-glow)}
#experience{background:var(--bg)}
.exp-list{display:flex;flex-direction:column;gap:10px}
.exp-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;overflow:hidden;transition:border-color .25s}
.exp-card.open{border-color:rgba(245,166,35,.3)}
.exp-head{display:flex;align-items:center;justify-content:space-between;padding:24px 28px;cursor:pointer;gap:20px;user-select:none}
.exp-head-left{display:flex;align-items:center;gap:16px}
.exp-ico{width:44px;height:44px;border-radius:9px;background:var(--surface2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.exp-co{font-family:'Syne',sans-serif;font-weight:700;font-size:16px;color:var(--text)}
.exp-role-txt{font-size:13px;color:var(--muted);margin-top:1px}
.exp-meta{text-align:right;flex-shrink:0}
.exp-period{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--amber);letter-spacing:.04em}
.exp-loc{font-size:11.5px;color:var(--dim);margin-top:2px}
.exp-arrow{font-size:11px;color:var(--dim);transition:transform .25s,color .25s;flex-shrink:0}
.exp-card.open .exp-arrow{transform:rotate(90deg);color:var(--amber)}
.exp-body{overflow:hidden;transition:max-height .4s ease}
.exp-body-inner{border-top:1px solid var(--border);padding:18px 28px 22px}
.exp-body ul{list-style:none;display:flex;flex-direction:column;gap:9px}
.exp-body li{font-size:14px;color:var(--muted);padding-left:18px;position:relative;line-height:1.65}
.exp-body li::before{content:'→';position:absolute;left:0;color:var(--amber);font-size:12px;line-height:1.8}
#projects{background:var(--surface)}
.projects-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.p-card{background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:28px;display:flex;flex-direction:column;gap:14px;transition:border-color .25s,transform .2s;position:relative;overflow:hidden}
.p-card::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--amber),transparent);opacity:0;transition:opacity .25s}
.p-card:hover{border-color:rgba(245,166,35,.35);transform:translateY(-3px)}
.p-card:hover::after,.p-card.featured::after{opacity:1}
.p-card.featured{grid-column:span 2;display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:start;border-color:rgba(245,166,35,.18)}
.p-card.wide{grid-column:span 2}
.p-card.wide .wide-inner{display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:start}
.p-head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.p-ico{width:42px;height:42px;border-radius:9px;background:var(--amber-glow);border:1px solid rgba(245,166,35,.22);display:flex;align-items:center;justify-content:center;font-size:19px;flex-shrink:0}
.p-period{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--dim);letter-spacing:.04em;margin-top:3px}
.p-name{font-family:'Syne',sans-serif;font-weight:700;font-size:19px;color:var(--text);letter-spacing:-.02em;line-height:1.2}
.p-desc{font-size:13.5px;color:var(--muted);line-height:1.7}
.p-points{list-style:none;display:flex;flex-direction:column;gap:7px}
.p-points li{font-size:13px;color:var(--muted);padding-left:16px;position:relative;line-height:1.6}
.p-points li::before{content:'▸';position:absolute;left:0;color:var(--amber);font-size:10px;top:3px}
.p-tags{display:flex;flex-wrap:wrap;gap:6px}
.tag{display:inline-block;font-family:'JetBrains Mono',monospace;font-size:10.5px;color:var(--amber);background:var(--amber-glow);border:1px solid rgba(245,166,35,.22);border-radius:4px;padding:2px 8px;letter-spacing:.03em}
#contact{background:var(--bg)}
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:start}
.c-links{display:flex;flex-direction:column;gap:12px;margin-top:28px}
.c-link{display:flex;align-items:center;gap:14px;padding:16px 20px;background:var(--surface);border:1px solid var(--border);border-radius:11px;text-decoration:none;transition:border-color .2s,transform .15s}
.c-link:hover{border-color:rgba(245,166,35,.4);transform:translateX(4px)}
.c-link-ico{width:38px;height:38px;border-radius:8px;background:var(--amber-glow);border:1px solid rgba(245,166,35,.2);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.c-link-lbl{font-size:10.5px;color:var(--dim);text-transform:uppercase;letter-spacing:.08em;font-family:'JetBrains Mono',monospace}
.c-link-val{font-size:14px;color:var(--text);font-weight:500;margin-top:1px}
.c-card{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:32px}
.c-card-title{font-family:'Syne',sans-serif;font-weight:700;font-size:20px;color:var(--text);margin-bottom:6px}
.c-card-sub{font-size:13.5px;color:var(--muted);line-height:1.6;margin-bottom:24px}
.form{display:flex;flex-direction:column;gap:14px}
.form-row-2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.form-field{display:flex;flex-direction:column;gap:5px}
.form-label{font-size:11px;color:var(--dim);letter-spacing:.05em;font-family:'JetBrains Mono',monospace}
.form-input,.form-textarea{background:var(--bg);border:1px solid var(--border);border-radius:7px;padding:10px 14px;color:var(--text);font-family:'Inter',sans-serif;font-size:13.5px;outline:none;transition:border-color .2s;resize:none;width:100%}
.form-input:focus,.form-textarea:focus{border-color:var(--amber)}
.form-input::placeholder,.form-textarea::placeholder{color:var(--dim)}
.form-textarea{min-height:100px}
.form-btn{background:var(--amber);color:#0D0D0D;border:none;border-radius:7px;padding:12px 24px;font-weight:600;font-size:13.5px;cursor:pointer;transition:opacity .2s,transform .15s,background .3s;font-family:'Inter',sans-serif;align-self:flex-start}
.form-btn:hover{opacity:.9;transform:translateY(-1px)}
.form-btn.sent{background:#4ADE80}
footer{background:var(--surface);border-top:1px solid var(--border);padding:28px 0}
.foot-inner{max-width:1100px;margin:0 auto;padding:0 32px;display:flex;align-items:center;justify-content:space-between}
.foot-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:15px;color:var(--muted)}
.foot-logo span{color:var(--amber)}
.foot-copy{font-size:12.5px;color:var(--dim)}
.foot-top{font-size:12.5px;color:var(--dim);text-decoration:none;transition:color .2s;cursor:pointer}
.foot-top:hover{color:var(--amber)}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .6s ease,transform .6s ease}
.reveal.visible{opacity:1;transform:translateY(0)}
.reveal-d1{transition-delay:.1s}.reveal-d2{transition-delay:.2s}.reveal-d3{transition-delay:.3s}
@media(max-width:900px){
  .hero-inner{grid-template-columns:1fr;gap:40px}
  .about-grid,.projects-grid,.contact-grid{grid-template-columns:1fr}
  .p-card.featured,.p-card.wide{grid-column:span 1}
  .p-card.featured{grid-template-columns:1fr}
  .p-card.wide .wide-inner{grid-template-columns:1fr}
  .nav-links{display:none}
}
@media(max-width:580px){
  .container,.nav-inner,.foot-inner{padding-left:18px;padding-right:18px}
  section{padding:64px 0}
  .hero-name{font-size:40px}
  .highlights{grid-template-columns:1fr}
  .hero-actions{flex-direction:column;align-items:flex-start}
  .foot-inner{flex-direction:column;gap:10px;text-align:center}
  .form-row-2{grid-template-columns:1fr}
}
`;

export default css;
