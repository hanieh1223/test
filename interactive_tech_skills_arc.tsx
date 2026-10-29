import React, { useState } from 'react';
import {
  Code2,
  Database,
  Globe2,
  Layers3,
  Sparkles,
  ArrowUpRight,
  RotateCcw,
  Terminal,
  Braces,
  Cpu,
  Check,
  ChevronRight,
} from 'lucide-react';

const SKILLS_DATA = [
  {
    id: 'web-dev',
    title: 'Web Development',
    eyebrow: 'DIGITAL EXPERIENCES',
    category: 'Full-stack',
    mark: '</>',
    markStyle: 'mark-blue',
    accent: '#77a7ff',
    description: 'Fast, accessible digital products built to feel effortless—from the first interaction to the final pixel.',
    highlights: ['React & Next.js', 'TypeScript', 'API architecture'],
    metric: '01',
  },
  {
    id: 'python',
    title: 'Python',
    eyebrow: 'AUTOMATION & INTELLIGENCE',
    category: 'Backend & Data',
    mark: 'Py',
    markStyle: 'mark-python',
    accent: '#ffd36b',
    description: 'Turn repetitive work and complex data into clear, reliable systems with automation and intelligent tooling.',
    highlights: ['FastAPI & Django', 'Data workflows', 'Machine learning'],
    metric: '02',
  },
  {
    id: 'java',
    title: 'Java',
    eyebrow: 'SYSTEMS AT SCALE',
    category: 'Enterprise',
    mark: 'J',
    markStyle: 'mark-java',
    accent: '#ff8a80',
    description: 'Dependable application architecture for long-running services, business platforms, and cloud-native products.',
    highlights: ['Spring Boot', 'Domain-driven design', 'Microservices'],
    metric: '03',
  },
  {
    id: 'html',
    title: 'HTML & CSS',
    eyebrow: 'THE WEB FOUNDATION',
    category: 'Frontend',
    mark: '5',
    markStyle: 'mark-html',
    accent: '#ff9b63',
    description: 'Thoughtful structure, fluid layouts, and accessible interface details that work across every screen size.',
    highlights: ['Semantic HTML', 'Responsive layouts', 'Accessibility'],
    metric: '04',
  },
  {
    id: 'data',
    title: 'Excel & Data',
    eyebrow: 'CLARITY FROM DATA',
    category: 'Analytics',
    mark: 'X',
    markStyle: 'mark-excel',
    accent: '#75e0b0',
    description: 'Make information useful with cleaner data models, repeatable analysis, and dashboards people can act on.',
    highlights: ['Advanced formulas', 'Pivot analysis', 'Visual reporting'],
    metric: '05',
  },
];

function SkillMark({ skill, large = false }: { skill: (typeof SKILLS_DATA)[number]; large?: boolean }) {
  return (
    <span className={`skill-mark ${skill.markStyle} ${large ? 'skill-mark-large' : ''}`} aria-hidden="true">
      {skill.mark}
    </span>
  );
}

export default function App() {
  const [activeSkillId, setActiveSkillId] = useState(SKILLS_DATA[0].id);
  const [introKey, setIntroKey] = useState(0);
  const activeSkill = SKILLS_DATA.find((skill) => skill.id === activeSkillId) ?? SKILLS_DATA[0];

  return (
    <div className="skills-page" key={introKey}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');
        .skills-page{--ink:#f5f7ff;--muted:#929db7;--line:rgba(165,183,229,.15);min-height:100vh;position:relative;isolation:isolate;overflow:hidden;background:#080b14;color:var(--ink);font-family:'Manrope',Inter,ui-sans-serif,system-ui,sans-serif}
        .skills-page *{box-sizing:border-box}
        .skills-page:before{content:"";position:absolute;inset:0;z-index:-2;background:radial-gradient(ellipse at 50% 28%,rgba(39,76,154,.26),transparent 38%),radial-gradient(ellipse at 88% 78%,rgba(31,120,115,.12),transparent 30%),#080b14}
        .skills-grid-bg{position:absolute;inset:0;z-index:-1;pointer-events:none;opacity:.28;background-image:linear-gradient(rgba(155,178,225,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(155,178,225,.055) 1px,transparent 1px);background-size:52px 52px;mask-image:linear-gradient(to bottom,black,transparent 90%)}
        .skills-nav{width:min(1180px,calc(100% - 48px));margin:auto;min-height:82px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line)}
        .brand-lockup{display:flex;align-items:center;gap:12px}.brand-symbol{width:38px;height:38px;border:1px solid rgba(140,174,255,.38);border-radius:12px;display:grid;place-items:center;background:linear-gradient(145deg,rgba(103,148,255,.2),rgba(103,148,255,.04));color:#a9c6ff;box-shadow:inset 0 1px rgba(255,255,255,.12)}
        .brand-name{font-size:12px;letter-spacing:.17em;font-weight:800}.brand-sub{font-size:10px;color:#7886a6;margin-top:4px;letter-spacing:.06em}
        .nav-status{display:flex;align-items:center;gap:9px;color:#a6b2cd;font:10px 'DM Mono',monospace;letter-spacing:.1em;text-transform:uppercase}.status-dot{width:7px;height:7px;background:#74e0b0;border-radius:50%;box-shadow:0 0 14px #74e0b0}
        .skills-main{width:min(1180px,calc(100% - 48px));margin:auto;padding:76px 0 70px}
        .hero-heading{text-align:center;max-width:760px;margin:0 auto 30px;animation:rise-in .75s cubic-bezier(.2,.75,.25,1) both}
        .eyebrow{display:inline-flex;align-items:center;gap:9px;font:10px 'DM Mono',monospace;letter-spacing:.18em;color:#a9c6ff;text-transform:uppercase}.eyebrow-line{width:24px;height:1px;background:#6e9bff}
        .hero-title{font-size:clamp(38px,6.2vw,76px);line-height:1.03;letter-spacing:-.075em;font-weight:700;margin:22px 0 18px}.hero-title span{color:transparent;background:linear-gradient(105deg,#fff 10%,#a9c6ff 48%,#75e0d2 92%);background-clip:text;-webkit-background-clip:text}
        .hero-copy{max-width:550px;margin:auto;color:#9ba7c1;font-size:14px;line-height:1.9}
        .scene{position:relative;min-height:345px;margin:36px auto 24px;max-width:1000px;border:1px solid rgba(150,176,234,.17);border-radius:28px;overflow:hidden;background:linear-gradient(145deg,rgba(22,31,55,.8),rgba(10,15,28,.88));box-shadow:0 35px 100px rgba(0,0,0,.28),inset 0 1px rgba(255,255,255,.045);animation:rise-in .85s .08s cubic-bezier(.2,.75,.25,1) both}
        .scene:before{content:"";position:absolute;width:470px;height:260px;left:50%;top:46%;transform:translate(-50%,-50%);background:radial-gradient(ellipse,rgba(70,116,220,.17),transparent 68%);pointer-events:none}
        .scene-top{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:center;padding:21px 24px;color:#7584a5;font:10px 'DM Mono',monospace;letter-spacing:.12em;text-transform:uppercase}
        .scene-count{display:flex;align-items:center;gap:8px}.scene-count strong{color:#dce6ff;font-weight:500}
        .orbit-art{position:absolute;inset:35px 0 0;display:grid;place-items:center;pointer-events:none}
        .orbit-ring{position:absolute;width:min(58vw,520px);height:min(58vw,260px);border:1px solid rgba(133,166,239,.2);border-radius:50%;transform:rotate(-12deg);box-shadow:0 0 60px rgba(58,102,200,.05),inset 0 0 45px rgba(58,102,200,.035)}
        .orbit-ring.ring-two{width:min(73vw,680px);height:min(73vw,310px);transform:rotate(12deg);border-style:dashed;border-color:rgba(133,166,239,.12);animation:orbit-turn 55s linear infinite}
        .orbit-ring:after{content:"";position:absolute;width:6px;height:6px;left:13%;top:20%;background:#83aaff;border-radius:50%;box-shadow:0 0 18px #83aaff}
        .core-visual{position:relative;width:130px;height:130px;display:grid;place-items:center;border-radius:34px;border:1px solid rgba(156,186,255,.35);background:linear-gradient(145deg,rgba(43,66,116,.76),rgba(14,23,43,.94));box-shadow:0 0 0 12px rgba(101,142,239,.035),0 0 70px rgba(68,113,228,.2),inset 0 1px rgba(255,255,255,.16);animation:core-breathe 5s ease-in-out infinite}
        .core-visual:before,.core-visual:after{content:"";position:absolute;inset:-13px;border:1px solid rgba(124,163,255,.17);border-radius:40px;transform:rotate(12deg)}
        .core-visual:after{inset:-25px;border-radius:46px;transform:rotate(-11deg);border-color:rgba(124,163,255,.1)}
        .core-glyph{color:#c4d7ff;filter:drop-shadow(0 0 15px rgba(133,171,255,.55))}
        .core-caption{position:absolute;top:calc(50% + 91px);font:9px 'DM Mono',monospace;letter-spacing:.18em;color:#7f91b5;text-transform:uppercase;white-space:nowrap}
        .orbit-chip{position:absolute;z-index:2;display:flex;align-items:center;gap:10px;padding:9px 13px 9px 9px;border-radius:14px;border:1px solid rgba(162,185,239,.2);background:rgba(12,18,33,.9);box-shadow:0 12px 35px rgba(0,0,0,.22);color:#d9e3fa;font-size:11px;font-weight:700;backdrop-filter:blur(12px);animation:float-chip 5s ease-in-out infinite}
        .orbit-chip .skill-mark{width:31px;height:31px;border-radius:9px;font-size:13px}.orbit-chip small{display:block;color:#7f8dab;font-size:9px;font-weight:500;margin-top:3px}
        .chip-web{left:calc(50% - 260px);top:18%;animation-delay:-1.2s}.chip-python{right:calc(50% - 275px);top:20%;animation-delay:-2.4s}.chip-java{left:calc(50% - 315px);bottom:16%;animation-delay:-.7s}.chip-html{right:calc(50% - 310px);bottom:14%;animation-delay:-3s}.chip-data{left:calc(50% + 120px);bottom:5%;animation-delay:-1.7s}
        .skill-mark{display:grid;place-items:center;flex:none;width:34px;height:34px;border-radius:10px;font:800 14px 'DM Mono',monospace;border:1px solid rgba(255,255,255,.12)}
        .skill-mark-large{width:58px;height:58px;border-radius:17px;font-size:22px}
        .mark-blue{color:#a9c6ff;background:linear-gradient(145deg,rgba(88,135,255,.22),rgba(88,135,255,.07));border-color:rgba(121,163,255,.3)}
        .mark-python{color:#ffdb75;background:linear-gradient(145deg,rgba(255,201,73,.17),rgba(69,136,213,.12));border-color:rgba(255,211,107,.25)}
        .mark-java{color:#ff9b90;background:rgba(241,81,73,.1);border-color:rgba(255,138,128,.25)}
        .mark-html{color:#ffad7e;background:rgba(255,125,58,.1);border-color:rgba(255,155,99,.25)}
        .mark-excel{color:#8ee9be;background:rgba(52,190,125,.1);border-color:rgba(117,224,176,.25)}
        .scene-bottom{position:absolute;z-index:3;bottom:18px;left:24px;right:24px;display:flex;align-items:center;justify-content:space-between;color:#6f7d9d;font:9px 'DM Mono',monospace;letter-spacing:.1em;text-transform:uppercase}
        .scene-bottom span:last-child{display:flex;align-items:center;gap:7px}
        .skill-selector{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin:0 auto 24px;max-width:1000px}
        .skill-option{position:relative;display:flex;align-items:center;gap:12px;min-width:0;text-align:left;padding:15px 14px;border:1px solid rgba(150,176,234,.14);border-radius:16px;background:rgba(14,20,35,.7);color:#9da9c2;cursor:pointer;transition:transform .25s,border-color .25s,background .25s,color .25s;outline:none}
        .skill-option:hover{transform:translateY(-3px);border-color:rgba(150,183,255,.38);color:#eaf0ff}.skill-option:focus-visible{outline:2px solid #a9c6ff;outline-offset:3px}
        .skill-option[aria-pressed="true"]{border-color:rgba(130,168,255,.52);background:linear-gradient(145deg,rgba(42,65,113,.64),rgba(17,25,44,.94));color:#fff;box-shadow:inset 0 1px rgba(255,255,255,.07),0 12px 30px rgba(0,0,0,.15)}
        .skill-option[aria-pressed="true"]:after{content:"";position:absolute;left:14px;right:14px;bottom:-1px;height:2px;background:linear-gradient(90deg,transparent,#8eb3ff,transparent)}
        .option-text{min-width:0}.option-title{font-size:11px;font-weight:700;white-space:nowrap}.option-type{font-size:9px;color:#7584a3;margin-top:4px;white-space:nowrap}
        .detail-panel{position:relative;max-width:1000px;margin:auto;display:grid;grid-template-columns:1.1fr .9fr;gap:28px;padding:30px;border:1px solid rgba(150,176,234,.17);border-radius:22px;background:linear-gradient(120deg,rgba(17,25,44,.92),rgba(11,16,29,.88));overflow:hidden;animation:rise-in .65s cubic-bezier(.2,.75,.25,1) both}
        .detail-panel:before{content:"";position:absolute;top:0;left:30px;right:30px;height:1px;background:linear-gradient(90deg,transparent,var(--active-accent,#77a7ff),transparent);opacity:.85}
        .detail-main{min-width:0}.detail-eyebrow{font:10px 'DM Mono',monospace;color:var(--active-accent,#77a7ff);letter-spacing:.16em}.detail-heading{display:flex;align-items:center;gap:15px;margin:13px 0 12px}.detail-heading h2{font-size:clamp(23px,3vw,32px);letter-spacing:-.055em;margin:0;font-weight:700}.detail-description{font-size:13px;line-height:1.9;color:#9da9c2;max-width:470px;margin:0}
        .detail-cta{display:inline-flex;align-items:center;gap:9px;margin-top:22px;border:1px solid rgba(150,176,234,.22);background:rgba(119,167,255,.1);color:#d9e5ff;padding:11px 14px;border-radius:11px;font-size:11px;font-weight:700;text-decoration:none;transition:background .2s,border-color .2s,transform .2s}.detail-cta:hover{background:rgba(119,167,255,.18);border-color:rgba(150,176,234,.4);transform:translateY(-1px)}
        .detail-side{border-left:1px solid var(--line);padding-left:28px;display:flex;flex-direction:column;justify-content:center}.detail-side-label{font:9px 'DM Mono',monospace;color:#7785a4;letter-spacing:.16em;text-transform:uppercase;margin-bottom:15px}.highlight-list{display:grid;gap:10px}.highlight-item{display:flex;align-items:center;gap:10px;font-size:11px;color:#c0cbe2}.highlight-check{width:21px;height:21px;border-radius:7px;display:grid;place-items:center;background:rgba(117,224,176,.09);color:#75e0b0;border:1px solid rgba(117,224,176,.16);flex:none}
        .skills-footer{width:min(1180px,calc(100% - 48px));margin:auto;min-height:72px;display:flex;align-items:center;justify-content:space-between;gap:20px;border-top:1px solid var(--line);color:#687694;font:9px 'DM Mono',monospace;letter-spacing:.09em;text-transform:uppercase}.footer-note{display:flex;align-items:center;gap:9px}
        @keyframes rise-in{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}@keyframes float-chip{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}@keyframes core-breathe{0%,100%{box-shadow:0 0 0 12px rgba(101,142,239,.035),0 0 55px rgba(68,113,228,.16),inset 0 1px rgba(255,255,255,.16)}50%{box-shadow:0 0 0 17px rgba(101,142,239,.025),0 0 85px rgba(68,113,228,.28),inset 0 1px rgba(255,255,255,.2)}}@keyframes orbit-turn{to{transform:rotate(372deg)}}
        @media(max-width:900px){.skills-main{padding-top:58px}.skill-selector{grid-template-columns:repeat(3,minmax(0,1fr))}.chip-web{left:calc(50% - 220px)}.chip-python{right:calc(50% - 225px)}.chip-java{left:calc(50% - 240px)}.chip-html{right:calc(50% - 240px)}.chip-data{left:calc(50% + 80px)}.detail-panel{gap:20px;padding:25px}.detail-side{padding-left:20px}}
        @media(max-width:600px){.skills-nav,.skills-main,.skills-footer{width:calc(100% - 32px)}.skills-nav{min-height:70px}.brand-sub,.nav-status span:last-child{display:none}.skills-main{padding:48px 0 45px}.hero-title{font-size:43px}.hero-copy{font-size:12px;padding:0 8px}.scene{min-height:350px;border-radius:21px;margin-top:30px}.scene-top{padding:17px 16px}.orbit-ring{width:290px;height:170px}.orbit-ring.ring-two{width:340px;height:200px}.core-visual{width:92px;height:92px;border-radius:26px}.core-visual:before{inset:-9px;border-radius:31px}.core-visual:after{inset:-17px;border-radius:36px}.core-glyph svg{width:30px;height:30px}.core-caption{top:calc(50% + 68px);font-size:8px}.orbit-chip{gap:7px;padding:7px 9px 7px 7px;font-size:10px}.orbit-chip .skill-mark{width:25px;height:25px;border-radius:7px;font-size:11px}.orbit-chip small{font-size:8px}.chip-web{left:8%;top:20%}.chip-python{right:6%;top:21%}.chip-java{left:5%;bottom:20%}.chip-html{right:5%;bottom:21%}.chip-data{left:calc(50% - 40px);bottom:5%}.scene-bottom{left:16px;right:16px;bottom:14px;font-size:8px}.skill-selector{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.skill-option{padding:11px 10px;gap:9px}.skill-option .skill-mark{width:30px;height:30px}.option-title{font-size:10px}.option-type{font-size:8px}.detail-panel{grid-template-columns:1fr;padding:23px 20px;gap:23px;border-radius:19px}.detail-heading h2{font-size:26px}.detail-description{font-size:12px}.detail-side{border-left:0;border-top:1px solid var(--line);padding:20px 0 0}.skills-footer{font-size:8px;min-height:65px}.footer-note{gap:6px}.skills-footer .footer-note:last-child{display:none}}
        @media(prefers-reduced-motion:reduce){.skills-page *,.skills-page *:before,.skills-page *:after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important}}
      `}</style>
      <div className="skills-grid-bg" aria-hidden="true" />
      <header className="skills-nav">
        <div className="brand-lockup">
          <div className="brand-symbol"><Braces size={19} strokeWidth={1.8} /></div>
          <div><div className="brand-name">AS DIGITAL / LAB</div><div className="brand-sub">Technology, made tangible.</div></div>
        </div>
        <div className="nav-status"><span className="status-dot" /><span>Interactive technology map</span></div>
      </header>

      <main className="skills-main">
        <section className="hero-heading">
          <div className="eyebrow"><span className="eyebrow-line" /> THE SKILLS ECOSYSTEM <span className="eyebrow-line" /></div>
          <h1 className="hero-title">Ideas into <span>intelligent</span><br />digital experiences.</h1>
          <p className="hero-copy">Explore the tools behind thoughtful products, resilient systems, and better ways to work. Select a discipline to see what it makes possible.</p>
        </section>

        <section className="scene" aria-label="Animated technology ecosystem">
          <div className="scene-top"><span>Technology constellation</span><span className="scene-count"><strong>05</strong> disciplines / 01 ecosystem</span></div>
          <div className="orbit-art" aria-hidden="true">
            <div className="orbit-ring" />
            <div className="orbit-ring ring-two" />
            <div className="core-visual"><div className="core-glyph"><Cpu size={42} strokeWidth={1.2} /></div></div>
            <div className="core-caption">Connected by code</div>
          </div>
          {SKILLS_DATA.map((skill, index) => (
            <div key={skill.id} className={`orbit-chip chip-${['web','python','java','html','data'][index]}`}>
              <SkillMark skill={skill} />
              <div>{skill.title}<small>{skill.category}</small></div>
            </div>
          ))}
          <div className="scene-bottom"><span>Explore the disciplines below</span><span><Sparkles size={12} /> Built for curiosity</span></div>
        </section>

        <section className="skill-selector" aria-label="Choose a technology">
          {SKILLS_DATA.map((skill) => (
            <button
              key={skill.id}
              type="button"
              className="skill-option"
              aria-pressed={activeSkillId === skill.id}
              onClick={() => setActiveSkillId(skill.id)}
            >
              <SkillMark skill={skill} />
              <span className="option-text"><span className="option-title">{skill.title}</span><span className="option-type">{skill.category}</span></span>
            </button>
          ))}
        </section>

        <section className="detail-panel" key={activeSkill.id} style={{ '--active-accent': activeSkill.accent } as React.CSSProperties} aria-live="polite">
          <div className="detail-main">
            <div className="detail-eyebrow">{activeSkill.eyebrow} / {activeSkill.metric}</div>
            <div className="detail-heading"><SkillMark skill={activeSkill} large /><h2>{activeSkill.title}</h2></div>
            <p className="detail-description">{activeSkill.description}</p>
            <a className="detail-cta" href="#skill-highlights" onClick={(event) => event.preventDefault()}>
              Explore capabilities <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="detail-side" id="skill-highlights">
            <div className="detail-side-label">What you can build</div>
            <div className="highlight-list">
              {activeSkill.highlights.map((highlight) => (
                <div className="highlight-item" key={highlight}><span className="highlight-check"><Check size={12} /></span>{highlight}</div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="skills-footer">
        <div className="footer-note"><Terminal size={13} /> AS DIGITAL / LAB <span>—</span> Technology with intent</div>
        <button type="button" onClick={() => { setActiveSkillId(SKILLS_DATA[0].id); setIntroKey((key) => key + 1); }} className="footer-note" style={{ background: 'none', border: 0, color: 'inherit', cursor: 'pointer', font: 'inherit' }}><RotateCcw size={12} /> Replay motion <ChevronRight size={12} /></button>
      </footer>
    </div>
  );
}
