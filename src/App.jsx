import { useEffect, useState } from 'react';
import { Header, Hero, Works, Services, About, Testimonials, Faq, Contact, Footer } from './components/Sections.jsx';
import { translations } from './data.js';

export default function App() {
  const [lang, setLang] = useState('tr');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t.hero} />
        <Works t={t.works} />
        <Services t={t.services} />
        <About t={t.about} />
        <Testimonials t={t.testimonials} />
        <Faq t={t.faq} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
