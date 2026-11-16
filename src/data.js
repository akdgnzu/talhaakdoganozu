export const profile = {
  name: 'Talha',
  firstName: 'Talha',
  initials: 'TA',
  location: 'Kocaeli',
  email: 'talhaakdoganozu854@gmail.com',
  available: true,
  socials: [
    { label: 'GitHub', url: 'https://github.com/' },
    { label: 'LinkedIn', url: 'https://linkedin.com/' },
    { label: 'Bionluk', url: 'https://bionluk.com/' },
    { label: 'Dribbble', url: 'https://dribbble.com/' },
  ],
};

export const translations = {
  tr: {
    navLinks: [
      { id: 'works', label: 'İşlerim' },
      { id: 'services', label: 'Neler yapıyorum' },
      { id: 'about', label: 'Hakkımda' },
      { id: 'contact', label: 'İletişim' },
    ],
    menuAria: {
      open: 'Menüyü aç',
      close: 'Menüyü kapat',
    },
    hero: {
      role: 'UI/UX & Front-end',
      titleStart: 'Sade, hızlı ve',
      titleEm: 'kullanması keyifli',
      titleEnd: 'dijital ürünler tasarlıyor ve kodluyorum.',
      lead: 'Merhaba, ben Talha. Bionluk üzerinden freelance olarak çalışıyor; fikirleri karmaşadan uzak, temiz arayüzlere ve özenli front-end koduna dönüştürüyorum.',
      ctaPrimary: 'Seçili işlerim',
      ctaSecondary: 'İletişime geç',
      meta: {
        focusLabel: 'Odak',
        focusVal: 'UI/UX Tasarım, Front-end',
        platformLabel: 'Platform',
        platformVal: 'Bionluk & Bağımsız',
        contactLabel: 'İletişim',
      },
    },
    works: {
      kicker: 'Seçili projeler',
      title: 'Son dönemde ürettiğim işler',
      cta: 'Siteyi incele',
      items: [
        {
          title: 'Hega Sigorta',
          type: 'UI Tasarımı',
          year: '2026',
          description: 'Bir sigorta şirketi için sade ve anlaşılır bir web arayüzü tasarımı.',
          tags: ['Figma'],
          color: '#e9dcc6',
          image: 'photos/photo_1.png',
          url: 'https://hegasigorta.com',
        },
        {
          title: 'Dr. Selçuk',
          type: 'UI Tasarımı',
          year: '2026',
          description: 'Bir kadın doğum hekimi için sade ve anlaşılır bir web arayüzü tasarımı.',
          tags: ['Figma'],
          color: '#d5e0d0',
          image: 'photos/photo_2.png',
          url: 'https://drselcukselcuk.com',
        },
      ],
    },
    services: {
      kicker: 'Neler yapıyorum',
      title: 'Tasarım ve kodu tek elde buluşturuyorum',
      items: [
        {
          title: 'UI / UX Tasarım',
          text: 'Projeye önce kullanıcının gözünden bakıyorum. Ne arıyor, nerede takılıyor? Sonra bunu Figma’da sade ve anlaşılır ekranlara döküyorum.',
          items: ['Wireframe ve prototip', 'Mobil uyumlu arayüz tasarımı', 'Mevcut tasarımı iyileştirme'],
        },
        {
          title: 'Front-end Geliştirme',
          text: 'Tasarımı piksel piksel koda çeviriyorum. Hızlı açılan, her ekranda düzgün görünen ve kolay güncellenebilen siteler yazıyorum.',
          items: ['React ile web uygulamaları', 'HTML / CSS / JavaScript', 'Figma’dan koda aktarım'],
        },
      ],
      processMono: 'Çalışma süreci',
      processTitle: 'Bir proje baştan sona nasıl ilerliyor?',
      process: [
        { title: 'Tanışma', text: 'Ne istediğinizi ve kimin için yaptığımızı konuşuyoruz.' },
        { title: 'Taslak', text: 'İlk eskizleri ve ekran tasarımlarını paylaşıyorum.' },
        { title: 'Kodlama', text: 'Onaylanan tasarımı çalışan bir siteye dönüştürüyorum.' },
        { title: 'Teslim', text: 'Son kontrolleri yapıp siteyi yayına alıyoruz.' },
      ],
    },
    about: {
      kicker: 'Hakkımda',
      heading: 'Biraz kendimden bahsedeyim.',
      paragraphs: [
        'Merhaba, ben Talha. 20 yaşında genç bir UI/UX tasarımcı ve Front-end geliştiricisiyim.',
        'Web sitelerinin hem güzel görünmesi hem de rahat kullanılması gerektiğine inanıyorum; bu yüzden işin hem tasarım hem de kod tarafıyla ilgileniyorum.',
        'Bir süredir Bionluk üzerinden freelance çalışıyorum. Küçük işletmelerden bireysel girişimcilere kadar farklı insanlarla, farklı projelerde çalıştım. Her projede en çok önem verdiğim şey açık iletişim ve sözünü tuttuğun tarihte teslim etmek.',
      ],
      educationLabel: 'Eğitim',
      education: [
        {
          school: 'Sakarya Uygulamalı Bilimler Üniversitesi',
          department: 'Ön-Yüz Yazılım Geliştirme',
          degree: 'Üniversite · Mezun',
        },
        {
          school: 'İzmit Mesleki ve Teknik Anadolu Lisesi',
          department: 'Yazılım Bölümü',
          degree: 'Lise · Mezun',
        },
      ],
      facts: [
        { label: 'Konum', value: 'Kocaeli' },
        { label: 'Çalışma şekli', value: 'Freelance (Bionluk)' },
        { label: 'Odak', value: 'UI/UX Tasarım & Front-end' },
        { label: 'Araçlar', value: 'Figma, React, VS Code' },
      ],
      skillsLabel: 'Kullandığım araçlar & teknolojiler',
      skills: ['React', 'JavaScript', 'HTML', 'CSS / Sass', 'Figma', 'Responsive tasarım', 'Git', 'Vite', 'Tailwind'],
    },
    testimonials: {
      kicker: 'Referanslar',
      title: 'Birlikte çalıştığım insanların yorumları',
      mono: 'Müşteri değerlendirmesi',
      prevAria: 'Önceki yorum',
      nextAria: 'Sonraki yorum',
      items: [
        {
          quote:
            'İşi tam konuştuğumuz tarihte teslim etti, üstüne bir de aklımıza gelmeyen birkaç güzel öneri getirdi. Süreç boyunca her sorumuza hızlıca dönüş yaptı.',
          name: 'Elif Y.',
          title: 'Bionluk müşterisi',
        },
        {
          quote:
            'Elimizde sadece kabaca bir fikir vardı. Bunu dinleyip hem tasarımını yaptı hem de kodladı. Sonuç beklediğimizden çok daha iyi oldu.',
          name: 'Mert K.',
          title: 'Bionluk müşterisi',
        },
        {
          quote:
            'Sitemiz artık telefonda da çok düzgün görünüyor. Revizyon isteklerimize hiç üşenmeden yardımcı oldu, tekrar çalışacağız.',
          name: 'Zeynep D.',
          title: 'Bionluk müşterisi',
        },
      ],
    },
    faq: {
      kicker: 'Merak edilenler',
      title: 'Sık sorulan sorular',
      items: [
        {
          q: 'Bir proje ne kadar sürüyor?',
          a: 'Tek sayfalık bir site genelde 1–2 hafta sürüyor. Daha kapsamlı projelerde süreyi en başta birlikte belirliyoruz.',
        },
        {
          q: 'Sadece tasarım ya da sadece kodlama yaptırabilir miyim?',
          a: 'Tabii. Elinizde hazır bir Figma tasarımı varsa onu kodlayabilirim, ya da sadece tasarım kısmını üstlenebilirim.',
        },
        {
          q: 'Teslimden sonra destek veriyor musun?',
          a: 'Evet, teslimden sonraki ilk birkaç hafta küçük düzeltmeleri ücretsiz yapıyorum.',
        },
        {
          q: 'Nasıl iletişime geçebilirim?',
          a: 'Aşağıdaki formu doldurabilir, doğrudan e-posta atabilir ya da Bionluk üzerinden yazabilirsiniz.',
        },
      ],
    },
    contact: {
      kicker: 'İletişim',
      headingStart: 'Yeni bir proje için',
      headingEm: 'konuşalım.',
      sub: 'Aklınızda bir fikir varsa formu doldurabilir ya da doğrudan e-posta gönderebilirsiniz. Genelde aynı gün içinde dönüş yapıyorum.',
      directMono: 'Doğrudan e-posta',
      mailSubject: 'Portfolyo üzerinden mesaj',
      form: {
        nameLabel: 'Adınız',
        namePlaceholder: 'Ad Soyad',
        emailLabel: 'E-posta adresiniz',
        emailPlaceholder: 'ornek@mail.com',
        messageLabel: 'Mesajınız',
        messagePlaceholder: 'Projenizden kısaca bahsedin...',
        submit: 'Mesaj gönder',
        sent: 'Teşekkürler, yönlendiriliyor...',
      },
    },
    footer: {
      role: 'Tasarım & Front-end',
    },
  },

  en: {
    navLinks: [
      { id: 'works', label: 'Works' },
      { id: 'services', label: 'Services' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ],
    menuAria: {
      open: 'Open menu',
      close: 'Close menu',
    },
    hero: {
      role: 'UI/UX & Front-end',
      titleStart: 'I design and build clean, fast, and',
      titleEm: 'enjoyable',
      titleEnd: 'digital products.',
      lead: 'Hi, I’m Talha. I work as a freelancer on Bionluk, turning ideas into clutter-free interfaces and carefully crafted front-end code.',
      ctaPrimary: 'Selected works',
      ctaSecondary: 'Get in touch',
      meta: {
        focusLabel: 'Focus',
        focusVal: 'UI/UX Design, Front-end',
        platformLabel: 'Platform',
        platformVal: 'Bionluk & Independent',
        contactLabel: 'Contact',
      },
    },
    works: {
      kicker: 'Selected projects',
      title: 'Recent work I’ve crafted',
      cta: 'Visit website',
      items: [
        {
          title: 'Hega Sigorta',
          type: 'UI Design',
          year: '2026',
          description: 'A clean and intuitive web interface design for an insurance company.',
          tags: ['Figma'],
          color: '#e9dcc6',
          image: 'photos/photo_1.png',
          url: 'https://hegasigorta.com',
        },
        {
          title: 'Dr. Selçuk',
          type: 'UI Design',
          year: '2026',
          description: 'A clean and user-friendly web interface design for an OB/GYN specialist.',
          tags: ['Figma'],
          color: '#d5e0d0',
          image: 'photos/photo_2.png',
          url: 'https://drselcukselcuk.com',
        },
      ],
    },
    services: {
      kicker: 'What I do',
      title: 'Bringing design and code together under one roof',
      items: [
        {
          title: 'UI / UX Design',
          text: 'I start by looking at the project through the user’s eyes—what are they looking for, where do they get stuck? Then I turn that into clean, intuitive screens in Figma.',
          items: ['Wireframing & prototyping', 'Responsive interface design', 'Redesign & UI improvements'],
        },
        {
          title: 'Front-end Development',
          text: 'I translate designs into pixel-accurate code. I build fast-loading websites that look great on every screen and are easy to maintain.',
          items: ['Web apps with React', 'HTML / CSS / JavaScript', 'Figma to code implementation'],
        },
      ],
      processMono: 'Workflow',
      processTitle: 'How does a project progress from start to finish?',
      process: [
        { title: 'Discovery', text: 'We discuss your goals, needs, and target audience.' },
        { title: 'Draft & UI', text: 'I share initial wireframes and high-fidelity screen designs.' },
        { title: 'Development', text: 'I turn the approved design into a live, responsive website.' },
        { title: 'Delivery', text: 'We run final checks and launch the project.' },
      ],
    },
    about: {
      kicker: 'About me',
      heading: 'A little bit about myself.',
      paragraphs: [
        'Hi, I’m Talha—a 20-year-old UI/UX designer and Front-end developer.',
        'I believe websites should both look great and feel effortless to use; that’s why I focus on both the design and code sides of the craft.',
        'I’ve been working as a freelancer on Bionluk, collaborating with everyone from small businesses to solo founders. Clear communication and delivering on the promised date are what matter most to me in every project.',
      ],
      educationLabel: 'Education',
      education: [
        {
          school: 'Sakarya University of Applied Sciences',
          department: 'Front-End Software Development',
          degree: 'University · Graduate',
        },
        {
          school: 'İzmit Vocational and Technical Anatolian High School',
          department: 'Software Development',
          degree: 'High School · Graduate',
        },
      ],
      facts: [
        { label: 'Location', value: 'Kocaeli, TR' },
        { label: 'Work style', value: 'Freelance (Bionluk)' },
        { label: 'Focus', value: 'UI/UX Design & Front-end' },
        { label: 'Tools', value: 'Figma, React, VS Code' },
      ],
      skillsLabel: 'Tools & technologies I use',
      skills: ['React', 'JavaScript', 'HTML', 'CSS / Sass', 'Figma', 'Responsive design', 'Git', 'Vite', 'Tailwind'],
    },
    testimonials: {
      kicker: 'Testimonials',
      title: 'Kind words from people I’ve worked with',
      mono: 'Client review',
      prevAria: 'Previous review',
      nextAria: 'Next review',
      items: [
        {
          quote:
            'He delivered the project right on the date we agreed on and even suggested great improvements we hadn’t thought of. He replied quickly to every question throughout the process.',
          name: 'Elif Y.',
          title: 'Bionluk client',
        },
        {
          quote:
            'We only had a rough idea in mind. He listened carefully, designed the interface, and coded the whole thing. The result turned out far better than we expected.',
          name: 'Mert K.',
          title: 'Bionluk client',
        },
        {
          quote:
            'Our website finally looks great on mobile too. He helped with all our revision requests without hesitation—we’ll definitely work together again.',
          name: 'Zeynep D.',
          title: 'Bionluk client',
        },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        {
          q: 'How long does a typical project take?',
          a: 'A single-page website usually takes 1–2 weeks. For larger projects, we define the timeline together right at the start.',
        },
        {
          q: 'Can I hire you for just design or just development?',
          a: 'Of course. If you already have a Figma design, I can code it—or I can handle only the UI/UX design part.',
        },
        {
          q: 'Do you provide support after delivery?',
          a: 'Yes, I handle minor tweaks and fixes free of charge for the first few weeks after launch.',
        },
        {
          q: 'How can I get in touch?',
          a: 'You can fill out the form below, send me a direct email, or message me on Bionluk.',
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      headingStart: 'Let’s talk about your',
      headingEm: 'next project.',
      sub: 'Have an idea in mind? Fill out the form or send me a direct email. I usually reply within the same day.',
      directMono: 'Direct email',
      mailSubject: 'Message from portfolio',
      form: {
        nameLabel: 'Your name',
        namePlaceholder: 'Full Name',
        emailLabel: 'Your email',
        emailPlaceholder: 'you@example.com',
        messageLabel: 'Your message',
        messagePlaceholder: 'Tell me briefly about your project...',
        submit: 'Send message',
        sent: 'Thank you, redirecting...',
      },
    },
    footer: {
      role: 'Design & Front-end',
    },
  },
};
