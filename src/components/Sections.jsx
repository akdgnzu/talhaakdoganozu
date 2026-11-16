import { useEffect, useState } from 'react';
import { profile } from '../data.js';
import { Reveal, SectionTitle, ArrowUpRight } from './ui.jsx';

/* ---------------- Header ---------------- */
export function Header({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="logo">
          <span className="logo-mark">{profile.initials}</span>
          <span className="logo-name">{profile.name}</span>
        </a>

        <nav className={`nav ${open ? 'is-open' : ''}`}>
          {t.navLinks.map((l, idx) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              <span className="nav-idx">0{idx + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <div className="lang-switch" role="group" aria-label="Language switch">
            <button
              type="button"
              className={`lang-btn ${lang === 'tr' ? 'is-active' : ''}`}
              onClick={() => setLang('tr')}
            >
              TR
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'is-active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>

          <button
            className={`menu-btn ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.menuAria.close : t.menuAria.open}
          >
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
export function Hero({ t }) {
  return (
    <section id="top" className="hero">
      <div className="container">
        <Reveal>
          <div className="hero-eyebrow">
            <span className="mono">{profile.location}, TR</span>
            <span className="divider">/</span>
            <span className="mono">{t.role}</span>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <h1 className="hero-title">
            {t.titleStart} <em>{t.titleEm}</em> {t.titleEnd}
          </h1>
        </Reveal>

        <div className="hero-grid">
          <Reveal delay={140} className="hero-lead">
            <p>{t.lead}</p>
            <div className="hero-actions">
              <a href="#works" className="btn btn-primary">
                {t.ctaPrimary} <ArrowUpRight />
              </a>
              <a href="#contact" className="btn btn-ghost">
                {t.ctaSecondary}
              </a>
            </div>
          </Reveal>

          <Reveal delay={200} className="hero-meta">
            <div className="meta-row">
              <span className="meta-label">{t.meta.focusLabel}</span>
              <span className="meta-val">{t.meta.focusVal}</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">{t.meta.platformLabel}</span>
              <span className="meta-val">{t.meta.platformVal}</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">{t.meta.contactLabel}</span>
              <a href={`mailto:${profile.email}`} className="meta-val meta-link">
                {profile.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Works ---------------- */
export function Works({ t }) {
  return (
    <section id="works" className="section">
      <div className="container">
        <SectionTitle index="01" kicker={t.kicker}>
          {t.title}
        </SectionTitle>

        <div className="projects">
          {t.items.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 2) * 80}
              as="a"
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <div className="project-frame">
                <div className="project-cover" style={{ background: p.color }}>
                  {p.image ? (
                    <img src={p.image} alt={p.title} loading="lazy" />
                  ) : (
                    <span className="project-cover-title">{p.title}</span>
                  )}
                </div>
                <span className="project-cta" aria-hidden="true">
                  {t.cta} <ArrowUpRight />
                </span>
              </div>

              <div className="project-body">
                <div className="project-header">
                  <div className="project-title-group">
                    <span className="project-num">0{i + 1}</span>
                    <h3>{p.title}</h3>
                  </div>
                  <span className="project-meta">
                    {p.type} · {p.year}
                  </span>
                </div>
                <p className="project-desc">{p.description}</p>
                <div className="tags">
                  {p.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services + Process ---------------- */
export function Services({ t }) {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionTitle index="02" kicker={t.kicker}>
          {t.title}
        </SectionTitle>

        <div className="services">
          {t.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="service-card">
              <div className="service-top">
                <span className="service-index">0{i + 1}</span>
                <h3>{s.title}</h3>
              </div>
              <p className="service-desc">{s.text}</p>
              <ul className="service-list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="process-block">
          <div className="process-head">
            <span className="mono">{t.processMono}</span>
            <h3>{t.processTitle}</h3>
          </div>
          <ol className="process-grid">
            {t.process.map((p, idx) => (
              <li key={p.title} className="process-step">
                <span className="step-num">0{idx + 1}</span>
                <strong>{p.title}</strong>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- About (sadece yazı) ---------------- */
export function About({ t }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-layout">
          <Reveal className="about-left">
            <div className="section-meta">
              <span className="section-index">03</span>
              <span className="section-kicker">{t.kicker}</span>
            </div>
            <h2 className="section-title">{t.heading}</h2>
          </Reveal>

          <div className="about-right">
            {t.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 70} className={i === 0 ? 'about-lead' : 'about-p'}>
                {p}
              </Reveal>
            ))}

            <Reveal as="dl" className="facts-grid">
              {t.facts.map((f) => (
                <div key={f.label} className="fact-item">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </Reveal>

            <Reveal className="edu-block">
              <span className="skills-label">{t.educationLabel}</span>
              <ul className="edu-list">
                {t.education.map((edu) => (
                  <li key={edu.school} className="edu-item">
                    <div className="edu-main">
                      <strong>{edu.school}</strong>
                      <span>{edu.department}</span>
                    </div>
                    <span className="edu-badge">{edu.degree}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="skills-block">
              <span className="skills-label">{t.skillsLabel}</span>
              <div className="tags tags-lg">
                {t.skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
export function Testimonials({ t }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = t.items.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % total), 7000);
    return () => clearInterval(id);
  }, [paused, total]);

  const item = t.items[i];

  return (
    <section className="section">
      <div className="container">
        <SectionTitle index="04" kicker={t.kicker}>
          {t.title}
        </SectionTitle>

        <Reveal
          className="testimonial-stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="testimonial-top">
            <span className="mono">{t.mono}</span>
            <span className="testimonial-counter">
              {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>

          <blockquote key={`${i}-${item.quote.slice(0, 10)}`} className="testimonial-quote">
            “{item.quote}”
          </blockquote>

          <div className="testimonial-bottom">
            <div className="testimonial-author">
              <span className="author-avatar">{item.name.charAt(0)}</span>
              <div>
                <strong>{item.name}</strong>
                <span>{item.title}</span>
              </div>
            </div>

            <div className="testimonial-controls">
              <button onClick={() => setI((i - 1 + total) % total)} aria-label={t.prevAria}>
                ←
              </button>
              <button onClick={() => setI((i + 1) % total)} aria-label={t.nextAria}>
                →
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
export function Faq({ t }) {
  return (
    <section className="section">
      <div className="container faq-layout">
        <SectionTitle index="05" kicker={t.kicker}>
          {t.title}
        </SectionTitle>

        <div className="faq-list">
          {t.items.map((f, i) => (
            <details key={f.q} className="faq-item" open={i === 0}>
              <summary>
                <span className="faq-q-text">{f.q}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
export function Contact({ t }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `${d.get('message')}\n\n— ${d.get('name')} (${d.get('email')})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      t.mailSubject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-layout">
        <Reveal className="contact-left">
          <div className="section-meta">
            <span className="section-index">06</span>
            <span className="section-kicker">{t.kicker}</span>
          </div>
          <h2 className="contact-heading">
            {t.headingStart} <em>{t.headingEm}</em>
          </h2>
          <p className="contact-sub">{t.sub}</p>

          <div className="contact-direct">
            <span className="mono">{t.directMono}</span>
            <a href={`mailto:${profile.email}`} className="contact-email">
              {profile.email} <ArrowUpRight />
            </a>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <form className="contact-form" onSubmit={onSubmit}>
            <label>
              <span>{t.form.nameLabel}</span>
              <input name="name" required placeholder={t.form.namePlaceholder} />
            </label>
            <label>
              <span>{t.form.emailLabel}</span>
              <input name="email" type="email" required placeholder={t.form.emailPlaceholder} />
            </label>
            <label>
              <span>{t.form.messageLabel}</span>
              <textarea name="message" rows="5" required placeholder={t.form.messagePlaceholder} />
            </label>
            <button type="submit" className="btn btn-primary">
              {sent ? t.form.sent : t.form.submit} <ArrowUpRight />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-copy">
          © {new Date().getFullYear()} {profile.name} — {t.role}
        </span>
        <div className="footer-links">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
