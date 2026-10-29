import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  FileSpreadsheet, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  MousePointer,
  ExternalLink,
  ChevronDown,
  Play,
  RotateCcw
} from 'lucide-react';

// Skills data with SVG icon definitions and positioning parameters
const SKILLS_DATA = [
  {
    id: 'web-dev',
    title: 'Web Development',
    category: 'Full-Stack',
    x: '20%',
    y: '58%',
    delay: 0.1,
    icon: (
      <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold text-lg">
        &lt;/&gt;
      </div>
    ),
    badge: 'Popular',
    color: 'from-blue-500 to-cyan-500',
    description: 'Modern, responsive web applications built with React, Next.js, and TypeScript.',
    highlights: ['React & Next.js', 'Tailwind CSS', 'REST & GraphQL APIs']
  },
  {
    id: 'python',
    title: 'Python',
    category: 'Backend & Data',
    x: '38%',
    y: '28%',
    delay: 0.2,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="none"/>
        <path d="M11.91 2c-5.26 0-4.93 2.28-4.93 2.28l.01 2.36h5.02v.72H5.06s-2.28-.26-2.28 5.01c0 5.27 2 5.08 2 5.08h1.19v-1.68c0-1.92 1.63-3.4 3.55-3.4h5.01c1.6 0 2.91-1.31 2.91-2.91V4.92S17.65 2 11.91 2zm-1.57 1.55c.49 0 .88.4.88.88 0 .49-.4.88-.88.88a.884.884 0 01-.88-.88c0-.48.39-.88.88-.88z" fill="#387eb8"/>
        <path d="M12.09 22c5.26 0 4.93-2.28 4.93-2.28l-.01-2.36h-5.02v-.72h6.95s2.28.26 2.28-5.01c0-5.27-2-5.08-2-5.08h-1.19v1.68c0 1.92-1.63 3.4-3.55 3.4h-5.01c-1.6 0-2.91 1.31-2.91 2.91v4.52S6.35 22 12.09 22zm1.57-1.55c-.49 0-.88-.4-.88-.88 0-.49.4-.88.88-.88.49 0 .88.4.88.88 0 .48-.39.88-.88.88z" fill="#ffe052"/>
      </svg>
    ),
    badge: 'Core',
    color: 'from-amber-400 to-blue-600',
    description: 'Data analysis, automation, machine learning models, and robust backend microservices.',
    highlights: ['FastAPI & Django', 'Data Analysis (Pandas)', 'Automation Scripts']
  },
  {
    id: 'java',
    title: 'Java',
    category: 'Enterprise',
    x: '55%',
    y: '18%',
    delay: 0.3,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.851 18.56s-.417.416-.208.625c.264.264 1.25.313 2.136.26 2.083-.157 3.854-.834 3.854-.834s.365-.208.156-.417c-.208-.156-.729-.156-.729-.156s-1.875.521-3.386.521c-1.146 0-1.823-.001-1.823-.001zm-1.042-2.552s-.521.573-.261.833c.313.313 1.563.417 2.656.365 2.605-.156 4.844-.99 4.844-.99s.469-.26.208-.573c-.26-.26-.938-.208-.938-.208s-2.344.625-4.219.625c-1.406 0-2.29-.052-2.29-.052zm7.188-3.958s.677.677.208 1.198c-.729.833-2.552 1.458-4.74 1.563-2.24.104-3.958-.313-4.635-.729-.365-.208-.261-.625.104-.781.365-.156 1.094-.104 1.094-.104s1.25.469 3.281.417c2.083-.052 3.802-.625 3.802-.625s.521-.26.886.061zm-2.032-3.438c.885.885.208 2.396-1.094 3.021-1.458.729-3.385.885-4.583.417-.573-.208-.833-.677-.417-.938.417-.26 1.198-.104 1.198-.104s1.615.417 2.865.156c1.146-.208 1.51-.885 1.146-1.51-.417-.677-1.406-.885-2.083-1.042-1.302-.313-2.865-.833-2.24-2.188.521-1.146 2.031-1.51 3.125-1.51 1.042 0 1.979.313 1.979.313s.417.208.26.469c-.156.26-.573.313-.573.313s-.781-.26-1.563-.26c-.781 0-1.615.208-1.875.729-.26.521.365.833 1.354 1.042 1.407.312 2.657.885 2.502 2.042z" fill="#ea2d2e"/>
      </svg>
    ),
    badge: 'Enterprise',
    color: 'from-red-500 to-orange-500',
    description: 'Object-oriented programming for scalable server-side systems and cloud-native applications.',
    highlights: ['Spring Boot Framework', 'Object-Oriented Design', 'Microservices Architecture']
  },
  {
    id: 'html',
    title: 'HTML & CSS',
    category: 'Frontend Core',
    x: '72%',
    y: '28%',
    delay: 0.4,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-12.879-.002.68 8.057h8.991l-.348 3.882-3.003.813-3.012-.815-.194-2.182-2.613.002.387 4.542 5.432 1.503 5.422-1.503.743-8.312H8.531z" fill="#e34f26"/>
      </svg>
    ),
    badge: 'Foundation',
    color: 'from-orange-500 to-amber-500',
    description: 'Semantic markups, responsive CSS grid layouts, web accessibility (a11y), and animations.',
    highlights: ['Semantic HTML5', 'Responsive CSS Grid/Flexbox', 'Web Accessibility (a11y)']
  },
  {
    id: 'excel',
    title: 'Excel / Data',
    category: 'Analytics',
    x: '86%',
    y: '52%',
    delay: 0.5,
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.256 5.25H1.744C.78 5.25 0 6.03 0 6.994v10.012c0 .964.78 1.744 1.744 1.744h20.512c.964 0 1.744-.78 1.744-1.744V6.994c0-.964-.78-1.744-1.744-1.744zM8.38 15.602H6.388l-1.7-3.094-1.688 3.094H1.05l2.606-4.225L1.2 7.294h1.994l1.525 2.831 1.512-2.831h1.963L5.688 11.45l2.692 4.152zm14.57 0h-11.4V7.294h11.4v8.308z" fill="#107c41"/>
      </svg>
    ),
    badge: 'Business',
    color: 'from-emerald-500 to-teal-600',
    description: 'Advanced data modeling, VBA automation, pivot analysis, and executive dashboard design.',
    highlights: ['Advanced Formulas & VLOOKUP', 'Pivot Tables & Charts', 'Data Visualization']
  }
];

export default function App() {
  const [activeSkill, setActiveSkill] = useState(SKILLS_DATA[0]);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [previewMode, setPreviewMode] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);

  const handleResetAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white flex flex-col justify-between overflow-x-hidden">
      {/* Background Decorative Gradient Blurs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
      </div>

      {/* Top Navbar */}
      <header className="relative z-10 border-b border-slate-800/60 bg-slate-900/50 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-extrabold text-white shadow-lg shadow-blue-500/20">
              AS
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-wide text-sm text-slate-200">AS DIGITAL / LAB</span>
              <span className="text-xs text-slate-400">Interactive Skill Navigator</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResetAnimation}
              className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              title="Re-trigger Entry Animations"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Replay Intro
            </button>
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className={`flex items-center gap-2 text-xs font-medium px-3.5 py-1.5 rounded-lg transition border ${
                previewMode
                  ? 'bg-blue-600/20 border-blue-500/40 text-blue-300'
                  : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              {previewMode ? 'Arc View: Active' : 'Arc View: Hidden'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-12 flex-1 flex flex-col justify-center">
        
        {/* Hero Title & Intro */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Tech Stack Showcase</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Build Your Future With <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
              Modern Tech Skills
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400">
            Hover or click over any node on the interactive arc to explore technologies, code execution pathways, and mastery highlights.
          </p>
        </div>

        {/* Hero Arc Visual Container */}
        {previewMode && (
          <div 
            key={animationKey}
            className="relative w-full max-w-4xl h-[380px] sm:h-[460px] mx-auto my-4 flex items-center justify-center rounded-3xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl shadow-2xl shadow-blue-950/20 overflow-hidden"
          >
            {/* SVG Connecting Arc Line */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 500"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Main Curved Path */}
              <path
                d="M 150 350 Q 500 50 850 350"
                fill="none"
                stroke="url(#arcGradient)"
                strokeWidth="3"
                strokeDasharray="8 8"
                className="animate-[pulse_3s_infinite]"
              />

              {/* Subtle Outer Glow Curve */}
              <path
                d="M 150 350 Q 500 50 850 350"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1"
                strokeOpacity="0.3"
              />
            </svg>

            {/* Interactive Nodes along the Arc */}
            {SKILLS_DATA.map((skill) => {
              const isSelected = activeSkill.id === skill.id;
              const isHovered = hoveredSkill === skill.id;

              return (
                <div
                  key={skill.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 group z-20"
                  style={{ left: skill.x, top: skill.y }}
                  onClick={() => setActiveSkill(skill)}
                  onMouseEnter={() => setHoveredSkill(skill.id)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Outer Floating Container */}
                  <div className={`relative flex flex-col items-center transition-all duration-300 ${
                    isHovered ? '-translate-y-2 scale-110' : 'animate-bounce-slow'
                  }`}>
                    
                    {/* Glowing Aura Ring */}
                    <div className={`absolute inset-0 rounded-2xl blur-md transition-opacity duration-300 ${
                      isSelected ? 'bg-blue-500/50 opacity-100' : isHovered ? 'bg-cyan-500/40 opacity-80' : 'opacity-0'
                    }`} />

                    {/* Skill Icon Card */}
                    <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900 border flex items-center justify-center transition-all duration-300 shadow-xl ${
                      isSelected 
                        ? 'border-blue-400 bg-slate-800 ring-4 ring-blue-500/20 scale-105' 
                        : isHovered
                        ? 'border-cyan-400 bg-slate-800'
                        : 'border-slate-700/80 bg-slate-900/90 hover:border-slate-600'
                    }`}>
                      {skill.icon}

                      {/* Selection Active Indicator Dot */}
                      {isSelected && (
                        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                          <span className="w-1 h-1 bg-white rounded-full animate-ping" />
                        </span>
                      )}
                    </div>

                    {/* Label Badge */}
                    <div className={`mt-2.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 border ${
                      isSelected 
                        ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-500/30' 
                        : isHovered
                        ? 'bg-slate-800 text-cyan-300 border-cyan-500/50'
                        : 'bg-slate-900/80 text-slate-300 border-slate-800'
                    }`}>
                      {skill.title}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom Scroll/Explore Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 text-xs pointer-events-none">
              <MousePointer className="w-3.5 h-3.5 animate-bounce" />
              <span>Click node to inspect</span>
            </div>
          </div>
        )}

        {/* Selected Skill Details Card */}
        <div className="max-w-3xl mx-auto w-full mt-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-500">
            {/* Top Accent Gradient Line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${activeSkill.color}`} />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  {activeSkill.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {activeSkill.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {activeSkill.badge}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {activeSkill.title}
                  </h3>
                </div>
              </div>

              <a
                href="#learn-more"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition shadow-lg shadow-blue-600/20"
              >
                <span>Explore Curriculum</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {activeSkill.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
              {activeSkill.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/60 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/60 py-6 text-center text-xs text-slate-500">
        <p>© 2026 AS DIGITAL / LAB — Responsive Tech Skills Arc Component</p>
      </footer>
    </div>
  );
}