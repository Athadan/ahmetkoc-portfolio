export const translations = {
  tr: {
    bio: 'Garanti BBVA\'da 12 kişilik bir ekiple legacy COBOL bankacılık sistemlerini modern Spring Boot + React mimarisine taşıyorum.',
    cvButton: 'CV indir (PDF)',
    cvFile: '/cv-tr.pdf',
    aboutLabel: 'hakkımda',
    aboutText:
      '6+ yıllık deneyime sahip, kurumsal ölçekli ve regülasyona tabi bankacılık sistemleri geliştiren bir Senior Full-Stack Developer ve Team Lead\'im. Şu an Garanti BBVA\'da 12 kişilik bir ekibin team lead\'lerinden biri olarak para çekme/yatırma modernizasyon projesini yürütüyorum; legacy COBOL/mainframe akışlarını dayanıklı mikroservislere dönüştürüyorum. Dağıtık mimari, gRPC, event-driven tasarım ve legacy reverse engineering ana uzmanlık alanlarım.',
    expLabel: 'deneyim',
    expRole: 'Senior Full-Stack Developer — Team Lead · 2023 – günümüz',
    expDesc:
      '12 kişilik ekibin team lead\'lerinden biri olarak yüksek hacimli, ülke geneli teller para çekme/yatırma platformunu geliştiriyorum. Para çekme tarafındaki neredeyse tüm COBOL programlarını reverse-engineer edip Java 17–21 / Spring Boot mikroservislerine taşıdım. 10+ servis ve 30+ entegrasyon kurdum; RabbitMQ tabanlı asenkron event mimarisi tasarladım; işlem tamamlama performansını backend\'de ~2sn, frontend\'de ~1sn iyileştirdim. Mimari kararların ve code-review sürecinin sahibiyim; ekibin takıldığı işlerin %30\'unu açıyor, junior ve analistleri eğitiyorum.',
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
    expRole: 'Senior Full-Stack Developer — Team Lead · 2023 – present',
    expDesc:
      'Co-leading a 12-person squad delivering a high-volume, nationwide teller withdrawal & deposit platform. Reverse-engineered virtually all COBOL programs on the withdrawal side into Java 17–21 / Spring Boot microservices. Built 10+ services with 30+ integrations, designed a RabbitMQ-based asynchronous event architecture, and cut transaction-completion latency by ~2s (backend) and ~1s (frontend). Own architectural decisions and the code-review gate; unblock ~30% of the team\'s stalled work and mentor juniors and analysts.',
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