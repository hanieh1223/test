import { useState } from "react";

const navigation = [
  ["سامانه پلتفرم", "#platform"],
  ["راهکارها", "#solutions"],
  ["توسعه‌دهندگان", "#developers"],
  ["مستندات", "#docs"],
  ["درباره ما", "#about"],
] as const;

const partners = ["لومنیکس", "ولورا", "نیمبوس", "کوانتا", "سولستیس"];

function BrandMark() {
  return (
    <svg aria-hidden="true" width="25" height="25" viewBox="0 0 16 18" fill="currentColor">
      <path d="M2 0h4v18H2zM7 9c3-1 5-4 6-9h3c-1 5-3 8-6 9 3 1 5 4 6 9h-3c-1-5-3-8-6-9z" />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata">
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-connections-31948-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay" />
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="راد مدرن، صفحه اصلی">
          <BrandMark />
          <span>راد مدرن</span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>

        <nav
          className={`nav-links${menuOpen ? " nav-links-open" : ""}`}
          id="primary-navigation"
          aria-label="ناوبری اصلی"
        >
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">ورود / ثبت‌نام</a>
      </header>

      <section className="hero-content" aria-labelledby="hero-title">
        <span className="eyebrow"><span className="eyebrow-dot" /> فناوری در خدمت ایده‌های بزرگ</span>
        <h1 id="hero-title">
          <span className="title-muted">مهندسی و توسعه</span>
          <span className="title-strong">راهکارهای دیجیتال تمام‌عیار.</span>
        </h1>
        <p>
          ما صرفاً یک وب‌سایت نمی‌سازیم؛ بلکه زیرساختی امن، مقیاس‌پذیر و پویا
          برای رشد کسب‌وکار شما خلق می‌کنیم.
        </p>
        <a className="primary-cta" href="#contact">
          <span>شروع همکاری</span>
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
            <path d="M16 10H4m0 0 5-5m-5 5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      <footer className="partners" aria-label="همراهان ما">
        <span className="partners-label">همراهان مسیر ما</span>
        <div className="partners-list">
          {partners.map((name) => <span key={name}>{name}</span>)}
        </div>
      </footer>
    </main>
  );
}