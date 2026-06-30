export const translations = {
  tr: {
    bio: 'Garanti BBVA\'da 12 kişilik bir ekiple legacy COBOL bankacılık sistemlerini modern Spring Boot + React mimarisine taşıyorum.',
    cvButton: 'CV indir (PDF)',
    cvFile: '/cv-tr.pdf',
    aboutLabel: 'hakkımda',
    aboutText:
      '6+ yıllık deneyime sahip, kurumsal ölçekli ve regülasyona tabi bankacılık sistemleri geliştiren bir Senior Full-Stack Developer ve Team Lead\'im. Şu an Garanti BBVA\'da 12 kişilik bir ekibin team lead\'lerinden biri olarak para çekme/yatırma modernizasyon projesini yürütüyorum; legacy COBOL/mainframe akışlarını dayanıklı mikroservislere dönüştürüyorum. Dağıtık mimari, gRPC, event-driven tasarım ve legacy reverse engineering ana uzmanlık alanlarım.',
    expLabel: 'deneyim',
    experience: [
      {
        role: 'Senior Full-Stack Developer — Team Lead',
        company: 'Garanti BBVA Teknoloji',
        date: 'Nis 2025 – Günümüz',
        desc: '12 kişilik ekibin team lead\'lerinden biri olarak yüksek hacimli, ülke geneli teller para çekme/yatırma platformunu geliştiriyorum. Para çekme tarafındaki neredeyse tüm COBOL programlarını reverse-engineer edip Java 17–21 / Spring Boot mikroservislerine taşıdım. 10+ servis, 30+ entegrasyon, RabbitMQ tabanlı asenkron event mimarisi; işlem performansını backend\'de ~2sn, frontend\'de ~1sn iyileştirdim. Mimari kararların ve code-review sürecinin sahibiyim.',
      },
      {
        role: 'Software Developer',
        company: 'Garanti BBVA Teknoloji',
        date: 'Eki 2023 – Nis 2025',
        desc: 'Garanti Gelişmiş İmza Projesi (BDDK uyumu). Mobile Login ve Security Server için gRPC/REST servisleri geliştirdim, mainframe sunucularını modern Java servislerine dönüştürdüm, Oracle/IBM DB2 entegrasyonlarını yönettim.',
      },
      {
        role: 'Software Developer',
        company: 'Fonet Bilgi Teknolojileri',
        date: 'Oca 2022 – Eki 2023',
        desc: 'API servisleri geliştirdim; tekrarlanabilir geliştirme metodolojisiyle hataları ~%27 azalttım ve code-review pratikleriyle ürün çıkış süresini %15+ hızlandırdım.',
      },
      {
        role: 'Software Developer',
        company: 'Sisoft & Erciyes Anadolu Holding',
        date: '2018 – 2020',
        desc: 'Yazılım özellikleri geliştirdim, SAP geçiş projelerini (Bellona, İstikbal, Mondi) ve e-Fatura/e-Arşiv entegrasyonlarını destekledim.',
      },
      {
        role: 'Teğmen',
        company: 'Vatani Görev — NATO Birimi',
        date: '2020 – 2021',
        desc: 'Vatani görev kapsamında bir NATO biriminde görev yaptım.',
      },
    ],
    skillsLabel: 'yetenekler',
    projectsLabel: 'projeler',
    ocrDesc:
      'Google ML Kit ile gerçek zamanlı fiyat okuma, SQLite sepet yönetimi ve harcama analizi yapan Flutter prototipi.',
    passgenDesc: 'Güvenli şifre üretici uygulaması.',
    contactLabel: 'iletişim',
    contactText: 'Benimle iletişime geçebilir, projelerime göz atabilirsiniz.',
    footer: 'React + TypeScript ile geliştirildi.',
  },
  en: {
    bio: 'At Garanti BBVA, I lead a 12-person team migrating legacy COBOL banking systems to modern Spring Boot + React architecture.',
    cvButton: 'Download CV (PDF)',
    cvFile: '/cv-en.pdf',
    aboutLabel: 'about',
    aboutText:
      'Senior Full-Stack Developer and Team Lead with 6+ years of experience delivering enterprise-scale, regulatory-compliant banking systems. Currently co-leading a 12-person squad at Garanti BBVA on a teller withdrawal & deposit modernization program, transforming legacy COBOL/mainframe flows into resilient microservices. Core expertise in distributed architecture, gRPC, event-driven design, and legacy reverse engineering.',
    expLabel: 'experience',
    experience: [
      {
        role: 'Senior Full-Stack Developer — Team Lead',
        company: 'Garanti BBVA Teknoloji',
        date: 'Apr 2025 – Present',
        desc: 'Co-leading a 12-person squad delivering a high-volume, nationwide teller withdrawal & deposit platform. Reverse-engineered virtually all COBOL programs on the withdrawal side into Java 17–21 / Spring Boot microservices. 10+ services, 30+ integrations, RabbitMQ-based async event architecture; cut transaction latency by ~2s (backend) and ~1s (frontend). Own architectural decisions and the code-review gate.',
      },
      {
        role: 'Software Developer',
        company: 'Garanti BBVA Teknoloji',
        date: 'Oct 2023 – Apr 2025',
        desc: 'Garanti Advanced Signature Project (BDDK compliance). Built gRPC/REST services for Mobile Login and Security Server, transformed mainframe servers into modern Java services, and managed Oracle/IBM DB2 integrations.',
      },
      {
        role: 'Software Developer',
        company: 'Fonet Bilgi Teknolojileri',
        date: 'Jan 2022 – Oct 2023',
        desc: 'Developed API services; reduced defects by ~27% with a reproducible development methodology and accelerated go-to-market by 15%+ through code-review practices.',
      },
      {
        role: 'Software Developer',
        company: 'Sisoft & Erciyes Anadolu Holding',
        date: '2018 – 2020',
        desc: 'Built software features and supported SAP transition projects (Bellona, İstikbal, Mondi) and e-Invoice/e-Archive integrations.',
      },
      {
        role: 'Lieutenant',
        company: 'Compulsory Military Service — NATO Unit',
        date: '2020 – 2021',
        desc: 'Served in a NATO unit as part of compulsory military service.',
      },
    ],
    skillsLabel: 'skills',
    projectsLabel: 'projects',
    ocrDesc:
      'Flutter prototype that reads prices in real time with Google ML Kit, manages baskets with SQLite, and provides spending analysis.',
    passgenDesc: 'Secure password generator application.',
    contactLabel: 'contact',
    contactText: 'Feel free to reach out and check my projects.',
    footer: 'Built with React + TypeScript.',
  },
};

export type Lang = keyof typeof translations;