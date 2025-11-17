const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const setYear = () => {
  const yearTarget = document.getElementById('year');
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }
};
setYear();

const filterButtons = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.project-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.filter;
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    cards.forEach((card) => {
      card.style.display = category === 'all' || card.dataset.category === category ? 'flex' : 'none';
    });
  });
});

const themeToggle = document.getElementById('themeToggle');

const setTheme = (theme) => {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';
  document.body.dataset.theme = nextTheme;
  themeToggle.textContent = nextTheme === 'dark' ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-pressed', nextTheme === 'dark');
  localStorage.setItem('mynd-theme', nextTheme);
};

themeToggle.addEventListener('click', () => {
  const newTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

const translations = {
  tr: {
    'nav.studio': 'Stüdyo',
    'nav.services': 'Hizmetler',
    'nav.projects': 'Projeler',
    'nav.process': 'Metodoloji',
    'nav.contact': 'İletişim',
    'hero.tag1': 'BICP kurucu stüdyosu',
    'hero.tag2': 'IDEArc × LXIR Tech ortaklığı',
    'hero.tag3': 'Mimarlık & masterplan',
    'hero.title': 'Malzeme araştırması, yapım teknolojileri ve kullanıcı deneyimini tek çatı altında yöneten mimarlık kolektifi.',
    'hero.body': 'MYND Architecture; IDEArc ve LXIR Tech ile birlikte BICP platformunu inşa eden üç ofisten biridir. İstanbul ve Londra ekipleri, masterplan, karma kullanımlı yapılar ve iç mimariyi dijital üretim ve sarı tonlu sıcak materyallerle buluşturur.',
    'hero.primary': 'Portföyü keşfet',
    'hero.secondary': 'Stüdyo ile konuş',
    'hero.meta1': 'BIM native',
    'hero.meta2': 'LEED / WELL danışmanlığı',
    'hero.meta3': 'Malzeme laboratuvarı',
    'hero.control': 'BICP Kurucu Kolektifi',
    'stats.yearsLabel': 'Yıl',
    'stats.yearsDesc': 'Disiplinlerarası tasarım deneyimi',
    'stats.projectsLabel': 'Proje',
    'stats.projectsDesc': 'Karma kullanımlı yapı ve iç mimari',
    'stats.countriesLabel': 'Ülke',
    'stats.countriesDesc': 'Avrupa & MEA işbirlikleri',
    'studio.title': "Stüdyo DNA'sı",
    'studio.desc': 'MYND Architecture, veri odaklı analizleri duyusal malzeme araştırmalarıyla eşleştirerek kullanıcı deneyimini bütün mimari ölçeklerde kurgular.',
    'studio.approach.tag': 'Yaklaşım',
    'studio.approach.title': 'Bağlama duyarlı modernizm',
    'studio.approach.body': 'Kıyı bantlarından şehir içi dönüşümlere kadar her proje için ışık, topoğrafya ve sosyal davranışlar yeniden okunur, kararlar sahaya çıkmadan simülasyonlarla doğrulanır.',
    'studio.focus.tag': 'Odak alanları',
    'studio.focus.item1': 'Konut ve rezidans deneyimi',
    'studio.focus.item2': 'Hospitality & yaşam merkezleri',
    'studio.focus.item3': 'Kültür yapıları ve yaratıcı kampüsler',
    'studio.focus.item4': 'Kurumsal iç mekân ve ürün tasarımı',
    'studio.focus.item5': 'Masterplan & kıyı stratejileri',
    'studio.tech.tag': 'Teknoloji',
    'studio.tech.body': 'Revit + Rhino.Inside, dijital ikizler, parametrik performans analizleri ve sarı tonlu malzeme kütüphanemiz sayesinde tasarım ile uygulama arasında köprü kurarız.',
    'services.title': 'Hizmet katmanları',
    'services.desc': 'Kavramsal tasarımdan şantiye koordinasyonuna kadar tek stüdyo içinde yönetilen süreçler.',
    'services.1.title': 'Mimari tasarım',
    'services.1.body': 'Şehir ölçeğinden yapı kabuğuna uzanan bütünsel çözümler, iklim senaryoları ve malzeme testleriyle desteklenir.',
    'services.2.title': 'İç mimari & mekânsal deneyim',
    'services.2.body': 'Marka hikâyesini mekâna taşıyan iç mekân kurguları, özel üretim mobilya ve sanat entegrasyonları.',
    'services.3.title': 'Tasarım yönetimi',
    'services.3.body': 'BIM koordinasyonu, disiplin entegrasyonu, sahadaki kalite süreçleri ve kullanıcı devreye alma planları.',
    'projects.title': 'Seçili projeler',
    'projects.desc': 'BICP kolektifinin paylaştığı zamansız tasarım dilini yansıtan konut, hospitality ve kültür projeleri.',
    'projects.filter.all': 'Tümü',
    'projects.filter.residential': 'Konut',
    'projects.filter.hospitality': 'Hospitality',
    'projects.filter.culture': 'Kültür & Sanat',
    'project1.meta': 'İstanbul • Konut & rekreasyon',
    'project2.meta': 'İstanbul • Boutique hospitality',
    'project3.meta': 'Londra • Kültür & eğitim',
    'project4.meta': 'Muğla • Sahil konutları',
    'project5.meta': 'Kars • Wellness resort',
    'project6.meta': 'Ankara • Tasarım müzesi',
    'process.title': 'Metodoloji',
    'process.desc': 'Dijital ve fiziksel katmanlar tek süreçte buluşur.',
    'process.step1.title': 'İçgörü & araştırma',
    'process.step1.body': 'Yer analizi, veri haritaları ve kullanıcı çalıştaylarıyla tasarım parametreleri belirlenir.',
    'process.step2.title': 'Kavramsal tasarım',
    'process.step2.body': "Simülasyonlar, deneyim storyboard'ları ve malzeme pasaportları yatırım kararlarını hızlandırır.",
    'process.step3.title': 'Detay & yapım',
    'process.step3.body': 'BIM tabanlı koordinasyon, dijital ikizler ve yerinde kalite güvence süreçleri.',
    'testimonial.quote': '“MYND, marka deneyim merkezimizde ziyaretçiyi aktif kullanıcıya çeviren cesur bir senaryo yarattı.”',
    'testimonial.author': 'Zeynep Kardeş • Experience Director',
    'award.tag': 'Ödüller',
    'award.title': 'ArchDaily Building of the Year 2024 Adayı',
    'award.body': 'Kıyı Villaları projesi sürdürülebilir malzeme kurgusu ve biyofilik tasarımıyla kısa listeye kaldı.',
    'newsletter.tag': 'Bülten',
    'newsletter.title': 'MYND Signals',
    'newsletter.body': 'Yeni projeler, malzeme araştırmaları ve teknoloji notları için aylık update alın.',
    'newsletter.cta': 'Bültene katıl',
    'contact.title': 'İletişim',
    'contact.desc': 'İki kıtadaki ekiplerimizle keşif toplantısı planlayın.',
    'contact.istanbul': 'İstanbul',
    'contact.address1': 'Kemeraltı Cad. No.24 Karaköy',
    'contact.london': 'Londra',
    'contact.address2': '27 Old Street EC1V, London',
    'contact.share': 'Proje paylaş',
    'contact.emailDesc': 'Dosyalarınızı gönderin, 48 saat içinde dönüş yapalım.',
    'contact.emailCta': 'E-posta gönder',
    'footer.rights': '© <span id="year"></span> MYND Architecture. Tüm hakları saklıdır.'
  },
  en: {
    'nav.studio': 'Studio',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.process': 'Methodology',
    'nav.contact': 'Contact',
    'hero.tag1': 'BICP founding studio',
    'hero.tag2': 'IDEArc × LXIR Tech alliance',
    'hero.tag3': 'Architecture & masterplanning',
    'hero.title': 'An architecture collective uniting material research, construction tech, and user experience.',
    'hero.body': 'MYND Architecture co-founded the BICP platform with IDEArc and LXIR Tech. From Istanbul and London we deliver masterplans, mixed-use buildings, and interiors with digital fabrication and warm material palettes.',
    'hero.primary': 'View portfolio',
    'hero.secondary': 'Talk to the studio',
    'hero.meta1': 'BIM native',
    'hero.meta2': 'LEED / WELL advisory',
    'hero.meta3': 'Material lab',
    'hero.control': 'BICP Founding Collective',
    'stats.yearsLabel': 'Years',
    'stats.yearsDesc': 'Interdisciplinary design practice',
    'stats.projectsLabel': 'Projects',
    'stats.projectsDesc': 'Mixed-use buildings & interiors',
    'stats.countriesLabel': 'Countries',
    'stats.countriesDesc': 'Europe & MEA collaborations',
    'studio.title': 'Studio DNA',
    'studio.desc': 'We pair data-driven insight with tactile material research to choreograph experiences across every architectural scale.',
    'studio.approach.tag': 'Approach',
    'studio.approach.title': 'Context-conscious modernism',
    'studio.approach.body': 'From waterfronts to inner-city renewals we re-read light, topography, and social behavior, validating decisions via simulations before site.',
    'studio.focus.tag': 'Focus areas',
    'studio.focus.item1': 'Residential and housing experience',
    'studio.focus.item2': 'Hospitality & lifestyle hubs',
    'studio.focus.item3': 'Cultural buildings & creative campuses',
    'studio.focus.item4': 'Workplace interiors & product design',
    'studio.focus.item5': 'Masterplans & coastal strategies',
    'studio.tech.tag': 'Technology',
    'studio.tech.body': 'Revit + Rhino.Inside, digital twins, performance analysis, and our yellow-toned material library bridge design and delivery.',
    'services.title': 'Service layers',
    'services.desc': 'From concept to site coordination under a single studio umbrella.',
    'services.1.title': 'Architectural design',
    'services.1.body': 'Holistic solutions from urban scale to envelope, informed by climate scenarios and material testing.',
    'services.2.title': 'Interior & spatial experience',
    'services.2.body': 'Brand-led interiors with custom furniture, art integration, and experiential storytelling.',
    'services.3.title': 'Design management',
    'services.3.body': 'BIM coordination, interdisciplinary integration, site quality flows, and user commissioning plans.',
    'projects.title': 'Selected projects',
    'projects.desc': 'Residential, hospitality, and cultural work expressing the timeless BICP aesthetic.',
    'projects.filter.all': 'All',
    'projects.filter.residential': 'Residential',
    'projects.filter.hospitality': 'Hospitality',
    'projects.filter.culture': 'Culture & Arts',
    'project1.meta': 'Istanbul • Residential & recreation',
    'project2.meta': 'Istanbul • Boutique hospitality',
    'project3.meta': 'London • Culture & education',
    'project4.meta': 'Muğla • Coastal residences',
    'project5.meta': 'Kars • Wellness resort',
    'project6.meta': 'Ankara • Design museum',
    'process.title': 'Methodology',
    'process.desc': 'Digital and physical layers converge in one workflow.',
    'process.step1.title': 'Insight & research',
    'process.step1.body': 'Site studies, data maps, and user labs frame the design parameters.',
    'process.step2.title': 'Concept design',
    'process.step2.body': 'Simulations, experience storyboards, and material passports accelerate investment decisions.',
    'process.step3.title': 'Detail & delivery',
    'process.step3.body': 'BIM coordination, digital twins, and on-site quality assurance protect intent.',
    'testimonial.quote': '“MYND crafted a bold scenario that turned our visitors into active participants.”',
    'testimonial.author': 'Zeynep Kardes • Experience Director',
    'award.tag': 'Awards',
    'award.title': 'ArchDaily Building of the Year 2024 finalist',
    'award.body': 'Coastal Villas stood out with its sustainable materials and biophilic narrative.',
    'newsletter.tag': 'Newsletter',
    'newsletter.title': 'MYND Signals',
    'newsletter.body': 'Get monthly updates on projects, material research, and technology notes.',
    'newsletter.cta': 'Join the list',
    'contact.title': 'Contact',
    'contact.desc': 'Schedule a discovery session with our teams across two continents.',
    'contact.istanbul': 'Istanbul',
    'contact.address1': 'Kemeraltı Cad. No.24 Karaköy',
    'contact.london': 'London',
    'contact.address2': '27 Old Street EC1V, London',
    'contact.share': 'Share your brief',
    'contact.emailDesc': 'Send us your files and we will reply within 48 hours.',
    'contact.emailCta': 'Send email',
    'footer.rights': '© <span id="year"></span> MYND Architecture. All rights reserved.'
  },
  ar: {
    'nav.studio': 'الاستوديو',
    'nav.services': 'الخدمات',
    'nav.projects': 'المشاريع',
    'nav.process': 'المنهجية',
    'nav.contact': 'التواصل',
    'hero.tag1': 'استوديو مؤسس لـ BICP',
    'hero.tag2': 'شراكة IDEArc × LXIR Tech',
    'hero.tag3': 'العمارة والتخطيط الشامل',
    'hero.title': 'مجموعة معمارية توحّد أبحاث المواد وتقنيات البناء وتجربة المستخدم تحت سقف واحد.',
    'hero.body': 'تشارك MYND Architecture مع IDEArc و LXIR Tech في تأسيس منصة BICP. من إسطنبول ولندن ندير المخططات العامة والمباني متعددة الاستخدامات والتصاميم الداخلية مع التصنيع الرقمي ولوحة مواد دافئة.',
    'hero.primary': 'استعرض الأعمال',
    'hero.secondary': 'تحدث مع الاستوديو',
    'hero.meta1': 'BIM أصيل',
    'hero.meta2': 'استشارات LEED / WELL',
    'hero.meta3': 'مختبر مواد',
    'hero.control': 'مجموعة BICP المؤسسة',
    'stats.yearsLabel': 'سنوات',
    'stats.yearsDesc': 'خبرة تصميم متعددة التخصصات',
    'stats.projectsLabel': 'مشاريع',
    'stats.projectsDesc': 'مبانٍ متعددة الاستخدامات وتصاميم داخلية',
    'stats.countriesLabel': 'دول',
    'stats.countriesDesc': 'شراكات في أوروبا والشرق الأوسط وأفريقيا',
    'studio.title': 'بصمة الاستوديو',
    'studio.desc': 'نمزج التحليل المبني على البيانات مع أبحاث المواد الحسية لصياغة التجربة في جميع المقاييس المعمارية.',
    'studio.approach.tag': 'المنهج',
    'studio.approach.title': 'حداثة تراعي السياق',
    'studio.approach.body': 'من الواجهات البحرية إلى تجديد المراكز الحضرية نعيد قراءة الضوء والطبوغرافيا والسلوك الاجتماعي ونثبت القرارات قبل الموقع عبر المحاكاة.',
    'studio.focus.tag': 'مجالات التركيز',
    'studio.focus.item1': 'السكن وتجربة الإقامة',
    'studio.focus.item2': 'الضيافة ومراكز الحياة',
    'studio.focus.item3': 'المباني الثقافية والحرم الإبداعي',
    'studio.focus.item4': 'الداخلية المؤسسية وتصميم المنتجات',
    'studio.focus.item5': 'المخططات العامة واستراتيجيات السواحل',
    'studio.tech.tag': 'التقنية',
    'studio.tech.body': 'من خلال Revit و Rhino.Inside والتوائم الرقمية والتحليل البرامتري ومكتبة المواد نصِل التصميم بالتنفيذ.',
    'services.title': 'طبقات الخدمة',
    'services.desc': 'من الفكرة إلى التنسيق الموقعي ضمن استوديو واحد.',
    'services.1.title': 'التصميم المعماري',
    'services.1.body': 'حلول شمولية من المقياس الحضري إلى الغلاف بدعم سيناريوهات المناخ واختبارات المواد.',
    'services.2.title': 'التصميم الداخلي وتجربة الفضاء',
    'services.2.body': 'مساحات تسرد قصة العلامة مع أثاث خاص وفن مدمج.',
    'services.3.title': 'إدارة التصميم',
    'services.3.body': 'تنسيق BIM ودمج التخصصات وضمان الجودة في الموقع وخطط تشغيل المستخدم.',
    'projects.title': 'مشاريع مختارة',
    'projects.desc': 'أعمال سكنية وضيافة وثقافة تعكس جمالية BICP الخالدة.',
    'projects.filter.all': 'الكل',
    'projects.filter.residential': 'سكني',
    'projects.filter.hospitality': 'ضيافة',
    'projects.filter.culture': 'ثقافة وفنون',
    'project1.meta': 'إسطنبول • سكن وترفيه',
    'project2.meta': 'إسطنبول • ضيافة بوتيكية',
    'project3.meta': 'لندن • ثقافة وتعليم',
    'project4.meta': 'موغلا • مساكن ساحلية',
    'project5.meta': 'قارص • منتجع عافية',
    'project6.meta': 'أنقرة • متحف تصميم',
    'process.title': 'المنهجية',
    'process.desc': 'الطبقات الرقمية والمادية تتقاطع في سير عمل واحد.',
    'process.step1.title': 'الرؤية والبحث',
    'process.step1.body': 'تحليل الموقع وخرائط البيانات وورش المستخدم تحدد معايير التصميم.',
    'process.step2.title': 'التصميم المفاهيمي',
    'process.step2.body': 'المحاكاة ولوحات التجربة وجوازات المواد تسرّع قرارات الاستثمار.',
    'process.step3.title': 'التفاصيل والتنفيذ',
    'process.step3.body': 'تنسيق BIM والتوائم الرقمية وضبط الجودة في الموقع يحافظ على جوهر التصميم.',
    'testimonial.quote': '"طورت MYND سيناريو جريئًا يحول الزائر إلى مشارك نشط."',
    'testimonial.author': 'زينب قرداش • مديرة التجربة',
    'award.tag': 'جوائز',
    'award.title': 'قائمة ArchDaily لعام 2024',
    'award.body': 'دخل مشروع فيلات الساحل القائمة القصيرة بفضل مواد مستدامة وسرد بيوفيلي.',
    'newsletter.tag': 'النشرة',
    'newsletter.title': 'MYND Signals',
    'newsletter.body': 'استلم تحديثًا شهريًا حول المشاريع وبحوث المواد وملاحظات التقنية.',
    'newsletter.cta': 'اشترك الآن',
    'contact.title': 'تواصل معنا',
    'contact.desc': 'احجز جلسة تعريف مع فرقنا في القارتين.',
    'contact.istanbul': 'إسطنبول',
    'contact.address1': 'شارع كمر ألطي رقم 24، قره كوي',
    'contact.london': 'لندن',
    'contact.address2': '27 أولد ستريت EC1V، لندن',
    'contact.share': 'شارك مشروعك',
    'contact.emailDesc': 'أرسل الملفات وسنعود إليك خلال 48 ساعة.',
    'contact.emailCta': 'إرسال بريد',
    'footer.rights': '© <span id="year"></span> MYND Architecture. جميع الحقوق محفوظة.'
  }
};

const setLanguage = (lang) => {
  const activeLang = translations[lang] ? lang : 'tr';
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[activeLang][key]) {
      el.innerHTML = translations[activeLang][key];
    }
  });
  document.documentElement.lang = activeLang === 'ar' ? 'ar' : activeLang;
  document.documentElement.dir = activeLang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === activeLang);
  });
  localStorage.setItem('mynd-lang', activeLang);
  setYear();
};

document.querySelectorAll('[data-lang]').forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

const savedTheme = localStorage.getItem('mynd-theme') || 'light';
setTheme(savedTheme);

const savedLang = localStorage.getItem('mynd-lang') || 'tr';
setLanguage(savedLang);
