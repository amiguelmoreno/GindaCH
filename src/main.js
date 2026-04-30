import "./style.css";

const translations = {
  de: {
    brandTagline: "Malerarbeiten mit Sorgfalt",
    navServices: "Leistungen",
    navWhy: "Warum wir",
    navProjects: "Projekte",
    navReviews: "Bewertungen",
    navAbout: "Über uns",
    navContact: "Kontakt",

    heroEyebrow: "Ginda | Luzern, Zürich, Zug, Aargau",
    heroTitle: "Professionelle Malerarbeiten für Innen- und Außenbereiche",
    heroText:
      "Saubere Arbeit, präzise Ausführung und persönliche Betreuung für Wohnungen, Häuser, Büros und Geschäftsräume.",
    heroCta1: "Offerte anfragen",
    heroCta2: "Projekte ansehen",
    heroPoint1: "19 Jahre Erfahrung",
    heroPoint2: "Innen, Außen, Dekoration und Restaurierung",
    heroPoint3: "Einsatzgebiet: Luzern, Zürich, Zug und Aargau",

    servicesEyebrow: "Leistungen",
    servicesTitle: "Was wir für Sie übernehmen",
    servicesText:
      "Professionelle Lösungen für Wohnräume, Fassaden, Büros und gewerbliche Objekte.",
    service1Title: "Innenanstrich",
    service1Text:
      "Wände, Decken, Türen, Fenster und Innenräume mit sauberem und langlebigem Finish.",
    service2Title: "Außenanstrich",
    service2Text:
      "Fassaden und Außenflächen mit widerstandsfähigen Materialien und sorgfältiger Vorbereitung.",
    service3Title: "Dekoration und Farbberatung",
    service3Text:
      "Unterstützung bei der Wahl von Farben, Stil und Gestaltung für ein harmonisches Ergebnis.",
    service4Title: "Restaurierung und Reparatur",
    service4Text:
      "Instandsetzung und Erneuerung gestrichener Flächen mit Fokus auf saubere Details.",
    service5Title: "Möbel, Türen und Fenster",
    service5Text:
      "Lackierung und Aufarbeitung von Oberflächen im Innen- und Außenbereich.",
    service6Title: "Saubere und präzise Ausführung",
    service6Text:
      "Schutz von Böden und Möbeln sowie ein ordentlicher Ablauf von Anfang bis Ende.",
    service7Title: "Gipserarbeiten und Untergrundvorbereitung",
    service7Text:
      "Ausgleich, Verputz und professionelle Vorbereitung von Wänden und Decken für ein optimales Malerendresultat.",

    whyEyebrow: "Warum Ginda",
    whyTitle: "Zuverlässigkeit, Erfahrung und Liebe zum Detail",
    whyText:
      "Unser Anspruch ist nicht nur Farbe aufzutragen, sondern Räume sichtbar aufzuwerten.",
    why1Title: "19 Jahre Erfahrung",
    why1Text:
      "Fundierte Praxis in Malerarbeiten, Dekoration und Restaurierung.",
    why2Title: "Direkte Kommunikation",
    why2Text: "Klare Absprachen, ehrliche Beratung und persönlicher Kontakt.",
    why3Title: "Saubere Arbeit",
    why3Text:
      "Schutz der Flächen und sorgfältige Ausführung mit professionellem Anspruch.",
    why4Title: "Regionale Nähe",
    why4Text:
      "Einsatz in Luzern, Zürich, Zug und Aargau mit flexibler Betreuung.",

    projectsEyebrow: "Projekte",
    projectsTitle: "Einblick in unsere Arbeiten",
    projectsText:
      "Hier kannst du später echte Fotos pro Projekt einfügen. Bis dahin sind Beispielbilder eingebaut.",
    project1Title: "Wohnung Innenanstrich",
    project1Text:
      "Beispielprojekt für Wände und Decken mit modernem, sauberem Finish.",
    project2Title: "Büro oder Geschäftsraum",
    project2Text:
      "Beispiel für professionelle Farbgestaltung in Arbeits- und Geschäftsräumen.",
    project3Title: "Fassade und Außenbereich",
    project3Text:
      "Beispiel für Außenarbeiten mit Vorbereitung, Schutz und widerstandsfähigem Ergebnis.",

    reviewsEyebrow: "Bewertungen",
    reviewsTitle: "Was Kunden über Ginda sagen",
    reviewsText:
      "Saubere Arbeit, klare Kommunikation und zuverlässige Ausführung stehen für uns im Mittelpunkt.",
    reviewsBtn: "Alle Bewertungen auf Google",
    review3Name: "Hausbesitzer",

    aboutEyebrow: "Über Petrica",
    aboutTitle: "Erfahrung, Leidenschaft und handwerkliche Präzision",
    aboutText1:
      "Hallo, ich bin Petrica, ausgebildeter Maler mit 19 Jahren Erfahrung in der Branche. Ich arbeite mit Leidenschaft daran, Räume und Oberflächen sichtbar aufzuwerten.",
    aboutText2:
      "Ich bin spezialisiert auf glatte und saubere Arbeiten an Wänden, Decken, Möbeln, Türen, Fenstern und Fassaden sowie auf dekorative und restaurative Lösungen.",
    aboutBadge1: "19 Jahre Erfahrung",
    aboutBadge2: "Innen und Außen",
    aboutBadge3: "Dekoration und Restaurierung",

    contactEyebrow: "Kontakt",
    contactTitle: "Fragen Sie unverbindlich eine Offerte an",
    contactText:
      "Schreiben Sie uns oder kontaktieren Sie uns direkt per Telefon oder WhatsApp.",
    contactInfoTitle: "Kontaktinformationen",
    contactPhoneLabel: "Telefon:",
    contactAreaLabel: "Einsatzgebiet:",
    contactAreaValue: "Luzern, Zürich, Zug und Aargau",
    contactName: "Name",
    contactEmail: "E-Mail",
    contactPhone: "Telefon",
    contactMessage: "Beschreiben Sie kurz Ihr Projekt",
    contactBtn: "Nachricht senden",

    navFaq: "FAQ",
    faqEyebrow: "Häufige Fragen",
    faqTitle: "Antworten auf Ihre Fragen",
    faqText: "Wir beantworten die wichtigsten Fragen rund um unsere Leistungen, Offerten und Arbeitsweise.",
    faq1Q: "Bieten Sie einen Komplettservice für Mieterwechsel an?",
    faq1A: "Ja, wir bieten einen Gesamtservice speziell für Mieterwechsel an. Dieser umfasst Malerarbeiten in der gesamten Wohnung, kleinere Ausbesserungsarbeiten mit Gips an den betroffenen Stellen sowie eine professionelle Endreinigung – damit die Wohnung vollständig vorbereitet für den nächsten Mieter übergeben werden kann. Der Preis wird individuell festgelegt und richtet sich nach dem Zustand und den Anforderungen der Wohnung.",
    faq2Q: "Wie erhalte ich eine Offerte? Gibt es einen Besichtigungstermin?",
    faq2A: "Wir erstellen Offerten grundsätzlich ohne jegliche Verpflichtung. Für ein genaues und realistisches Angebot bevorzugen wir jedoch einen kurzen Besichtigungstermin vor Ort – nur so können wir den tatsächlichen Aufwand richtig einschätzen und Ihnen einen verlässlichen Preis nennen. Kontaktieren Sie uns einfach und wir vereinbaren gemeinsam einen passenden Termin.",
    faq3Q: "Welche Leistungen bieten Sie genau an?",
    faq3A: "Unser Schwerpunkt liegt auf professionellen Malerarbeiten im Innen- und Außenbereich: Wände, Decken, Türen, Fenster und Fassaden sowie Dekorationsarbeiten und Restaurierungen. Auf Anfrage übernehmen wir ergänzend auch Endreinigungen, Fensterreinigung und kleinere Reparaturen im Haus – alles aus einer Hand.",
    faq4Q: "In welchen Regionen sind Sie tätig?",
    faq4A: "Wir sind hauptsächlich in den Kantonen Luzern, Zürich, Zug und Aargau tätig. Bei größeren Projekten sind wir auch in anderen Regionen tätig – sprechen Sie uns einfach an.",
    faq5Q: "Wie lange dauert ein typisches Malprojekt?",
    faq5A: "Das hängt vom Umfang der Arbeiten ab. Eine Wohnung dauert in der Regel einige Tage, größere Renovations- oder Fassadenarbeiten können mehr Zeit in Anspruch nehmen. Nach der Besichtigung geben wir Ihnen eine konkrete Einschätzung.",
    faq6Q: "Arbeiten Sie auch für Büros und Gewerbeobjekte?",
    faq6A: "Ja, wir übernehmen Projekte in Büros, Ladenlokalen, Showrooms und anderen gewerblichen Liegenschaften. Wir passen uns dem Zeitplan Ihres Unternehmens an und können bei Bedarf auch außerhalb der regulären Geschäftszeiten arbeiten.",

    baEyebrow: "Vorher · Nachher",
    baTitle: "Sehen Sie den Unterschied",
    baText: "Regler ziehen, um die Verwandlung zu entdecken.",
    baLabelBefore: "Vorher",
    baLabelAfter: "Nachher",
    baProject1: "Gelbes Wohnhaus",
    baProject2: "Große Hausfassade",
    baProject3: "Wohnungsfassade",
  },

  es: {
    brandTagline: "Pintura con cuidado y precisión",
    navServices: "Servicios",
    navWhy: "Por qué elegirnos",
    navProjects: "Proyectos",
    navReviews: "Opiniones",
    navAbout: "Sobre nosotros",
    navContact: "Contacto",

    heroEyebrow: "Ginda | Lucerna, Zúrich, Zug, Argovia",
    heroTitle: "Trabajos profesionales de pintura para interior y exterior",
    heroText:
      "Trabajo limpio, ejecución precisa y atención cercana para viviendas, casas, oficinas y espacios comerciales.",
    heroCta1: "Solicitar presupuesto",
    heroCta2: "Ver proyectos",
    heroPoint1: "19 años de experiencia",
    heroPoint2: "Interior, exterior, decoración y restauración",
    heroPoint3: "Zona de trabajo: Lucerna, Zúrich, Zug y Argovia",

    servicesEyebrow: "Servicios",
    servicesTitle: "Qué podemos hacer por ti",
    servicesText:
      "Soluciones profesionales para viviendas, fachadas, oficinas y espacios comerciales.",
    service1Title: "Pintura de interiores",
    service1Text:
      "Paredes, techos, puertas, ventanas y espacios interiores con acabados limpios y duraderos.",
    service2Title: "Pintura de exteriores",
    service2Text:
      "Fachadas y superficies exteriores con materiales resistentes y preparación cuidadosa.",
    service3Title: "Decoración y asesoramiento de color",
    service3Text:
      "Ayuda para elegir colores, estilo y diseño para conseguir un resultado equilibrado.",
    service4Title: "Restauración y reparación",
    service4Text:
      "Reparación y renovación de superficies pintadas con atención a los detalles.",
    service5Title: "Muebles, puertas y ventanas",
    service5Text:
      "Lacado y renovación de superficies tanto en interior como en exterior.",
    service6Title: "Trabajo limpio y preciso",
    service6Text:
      "Protección de suelos y muebles y una ejecución ordenada de principio a fin.",
    service7Title: "Trabajos de yeso y preparación de superficies",
    service7Text:
      "Nivelado, enlucido y preparación profesional de paredes y techos para un acabado de pintura óptimo.",

    whyEyebrow: "Por qué Ginda",
    whyTitle: "Fiabilidad, experiencia y atención al detalle",
    whyText:
      "Nuestro objetivo no es solo pintar, sino mejorar visualmente cada espacio.",
    why1Title: "19 años de experiencia",
    why1Text: "Experiencia sólida en pintura, decoración y restauración.",
    why2Title: "Comunicación directa",
    why2Text: "Trato cercano, asesoramiento honesto y comunicación clara.",
    why3Title: "Trabajo limpio",
    why3Text:
      "Protección del espacio y ejecución cuidada con nivel profesional.",
    why4Title: "Cercanía regional",
    why4Text:
      "Servicio en Lucerna, Zúrich, Zug y Argovia con atención flexible.",

    projectsEyebrow: "Proyectos",
    projectsTitle: "Una muestra de nuestros trabajos",
    projectsText:
      "Aquí podrás añadir fotos reales de cada proyecto más adelante. De momento hay imágenes de ejemplo.",
    project1Title: "Pintura interior de vivienda",
    project1Text:
      "Proyecto de ejemplo para paredes y techos con acabado moderno y limpio.",
    project2Title: "Oficina o local comercial",
    project2Text:
      "Ejemplo de diseño y pintura profesional para espacios de trabajo y negocio.",
    project3Title: "Fachada y exterior",
    project3Text:
      "Ejemplo de trabajo exterior con preparación, protección y resultado duradero.",

    reviewsEyebrow: "Opiniones",
    reviewsTitle: "Lo que dicen los clientes sobre Ginda",
    reviewsText:
      "Trabajo limpio, comunicación clara y ejecución de confianza en cada proyecto.",
    reviewsBtn: "Ver todas las opiniones en Google",

    aboutEyebrow: "Sobre Petrica",
    aboutTitle: "Experiencia, pasión y precisión artesanal",
    aboutText1:
      "Hola, soy Petrica, oficial de pintura con 19 años de experiencia en el sector. Trabajo con pasión para transformar y mejorar visualmente espacios y superficies.",
    aboutText2:
      "Estoy especializado en trabajos lisos y limpios en paredes, techos, muebles, puertas, ventanas y fachadas, además de soluciones decorativas y de restauración.",
    aboutBadge1: "19 años de experiencia",
    aboutBadge2: "Interior y exterior",
    aboutBadge3: "Decoración y restauración",

    contactEyebrow: "Contacto",
    contactTitle: "Solicita tu presupuesto sin compromiso",
    contactText: "Escríbenos o contacta directamente por teléfono o WhatsApp.",
    contactInfoTitle: "Información de contacto",
    contactPhoneLabel: "Teléfono:",
    contactAreaLabel: "Zona de trabajo:",
    contactAreaValue: "Lucerna, Zúrich, Zug y Argovia",
    contactName: "Nombre",
    contactEmail: "Email",
    contactPhone: "Teléfono",
    contactMessage: "Describe brevemente tu proyecto",
    contactBtn: "Enviar mensaje",

    navFaq: "FAQ",
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Respuestas a tus dudas",
    faqText: "Respondemos las preguntas más habituales sobre nuestros servicios, presupuestos y forma de trabajar.",
    faq1Q: "¿Ofrecéis un servicio completo para cambios de inquilino?",
    faq1A: "Sí, ofrecemos un servicio integral pensado especialmente para cambios de inquilino. Este incluye trabajos de pintura en toda la vivienda, pequeños arreglos con yeso en las zonas que lo necesiten y una limpieza final profesional, de modo que el piso quede completamente preparado para el siguiente inquilino. El presupuesto es personalizado y se determina según el estado y las necesidades concretas de la vivienda.",
    faq2Q: "¿Cómo funciona el presupuesto? ¿Hacéis una visita previa?",
    faq2A: "Ofrecemos presupuestos totalmente sin compromiso. Para poder darte un precio exacto y ajustado a tu situación, preferimos hacer una visita previa a la vivienda o local, ya que solo así podemos valorar bien el trabajo y darte una cifra realista. Contáctanos y acordamos una cita que te venga bien.",
    faq3Q: "¿Qué servicios ofrecéis exactamente?",
    faq3A: "Nos especializamos en trabajos de pintura tanto en interiores como en exteriores: paredes, techos, puertas, ventanas, fachadas, trabajos decorativos y restauraciones. Bajo solicitud, también realizamos limpiezas finales, limpieza de ventanas y pequeñas reparaciones en el hogar, todo en un mismo servicio.",
    faq4Q: "¿En qué zonas trabajáis?",
    faq4A: "Trabajamos principalmente en los cantones de Lucerna, Zúrich, Zug y Argovia. Para proyectos de mayor envergadura también podemos desplazarnos a otras zonas, consúltanos.",
    faq5Q: "¿Cuánto tiempo dura un trabajo de pintura habitual?",
    faq5A: "Depende del alcance de los trabajos. Una vivienda normalmente lleva unos pocos días; para renovaciones más amplias o trabajos en fachadas el tiempo puede ser mayor. Tras la visita te daremos una estimación concreta.",
    faq6Q: "¿Trabajáis también con oficinas y locales comerciales?",
    faq6A: "Sí, realizamos proyectos en oficinas, tiendas, showrooms y otras propiedades comerciales. Nos adaptamos al horario de tu empresa y, si es necesario, podemos trabajar fuera del horario habitual de negocio.",

    baEyebrow: "Antes · Después",
    baTitle: "Vea la diferencia",
    baText: "Deslice el control para descubrir la transformación.",
    baLabelBefore: "Antes",
    baLabelAfter: "Después",
    baProject1: "Casa Amarilla",
    baProject2: "Fachada Casa Grande",
    baProject3: "Fachada Piso",
  },

  en: {
    brandTagline: "Painting with care and precision",
    navServices: "Services",
    navWhy: "Why us",
    navProjects: "Projects",
    navReviews: "Reviews",
    navAbout: "About us",
    navContact: "Contact",

    heroEyebrow: "Ginda | Lucerne, Zurich, Zug, Aargau",
    heroTitle: "Professional interior and exterior painting services",
    heroText:
      "Clean work, precise execution and personal attention for homes, houses, offices and commercial spaces.",
    heroCta1: "Request a quote",
    heroCta2: "View projects",
    heroPoint1: "19 years of experience",
    heroPoint2: "Interior, exterior, decoration and restoration",
    heroPoint3: "Service area: Lucerne, Zurich, Zug and Aargau",

    servicesEyebrow: "Services",
    servicesTitle: "What we can do for you",
    servicesText:
      "Professional solutions for homes, facades, offices and commercial properties.",
    service1Title: "Interior painting",
    service1Text:
      "Walls, ceilings, doors, windows and indoor spaces with clean and durable finishes.",
    service2Title: "Exterior painting",
    service2Text:
      "Facades and outdoor surfaces with resistant materials and careful preparation.",
    service3Title: "Decoration and colour advice",
    service3Text:
      "Help choosing colours, style and design to achieve a balanced final result.",
    service4Title: "Restoration and repair",
    service4Text:
      "Repair and renewal of painted surfaces with attention to detail.",
    service5Title: "Furniture, doors and windows",
    service5Text:
      "Painting and restoration of surfaces for both interior and exterior areas.",
    service6Title: "Clean and precise work",
    service6Text:
      "Protection of floors and furniture and an organised process from start to finish.",
    service7Title: "Plastering and surface preparation",
    service7Text:
      "Levelling, plastering and professional preparation of walls and ceilings for an optimal painting result.",

    whyEyebrow: "Why Ginda",
    whyTitle: "Reliability, experience and attention to detail",
    whyText:
      "Our goal is not only to apply paint, but to visibly improve every space.",
    why1Title: "19 years of experience",
    why1Text:
      "Strong hands-on experience in painting, decoration and restoration.",
    why2Title: "Direct communication",
    why2Text: "Clear communication, honest advice and personal service.",
    why3Title: "Clean workmanship",
    why3Text:
      "Protection of surfaces and careful execution with a professional standard.",
    why4Title: "Regional coverage",
    why4Text:
      "Available in Lucerne, Zurich, Zug and Aargau with flexible support.",

    projectsEyebrow: "Projects",
    projectsTitle: "A look at our work",
    projectsText:
      "Here you can later add real photos for each project. For now, sample images are included.",
    project1Title: "Residential interior painting",
    project1Text:
      "Sample project for walls and ceilings with a modern and clean finish.",
    project2Title: "Office or commercial space",
    project2Text:
      "Example of professional design and painting for work and business spaces.",
    project3Title: "Facade and exterior work",
    project3Text:
      "Sample exterior project with preparation, protection and durable results.",

    reviewsEyebrow: "Reviews",
    reviewsTitle: "What clients say about Ginda",
    reviewsText:
      "Clean work, clear communication and reliable execution on every project.",
    reviewsBtn: "See all reviews on Google",

    aboutEyebrow: "About Petrica",
    aboutTitle: "Experience, passion and craftsmanship",
    aboutText1:
      "Hello, I am Petrica, a professional painter with 19 years of experience in the industry. I work with passion to transform and visually improve spaces and surfaces.",
    aboutText2:
      "I specialise in smooth and clean work on walls, ceilings, furniture, doors, windows and facades, as well as decorative and restoration solutions.",
    aboutBadge1: "19 years of experience",
    aboutBadge2: "Interior and exterior",
    aboutBadge3: "Decoration and restoration",

    contactEyebrow: "Contact",
    contactTitle: "Request your quote with no obligation",
    contactText: "Write to us or contact us directly by phone or WhatsApp.",
    contactInfoTitle: "Contact information",
    contactPhoneLabel: "Phone:",
    contactAreaLabel: "Service area:",
    contactAreaValue: "Lucerne, Zurich, Zug and Aargau",
    contactName: "Name",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactMessage: "Briefly describe your project",
    contactBtn: "Send message",

    navFaq: "FAQ",
    faqEyebrow: "Frequently Asked Questions",
    faqTitle: "Answers to your questions",
    faqText: "We answer the most common questions about our services, quotes and the way we work.",
    faq1Q: "Do you offer a complete service for tenant changes?",
    faq1A: "Yes, we offer a complete service designed specifically for tenant changes. This includes painting throughout the entire apartment, small plasterwork repairs where needed, and a professional end-of-tenancy clean, so that the property is fully ready for the next tenant. The price is personalised and depends on the condition and specific requirements of the property.",
    faq2Q: "How does the quote work? Is there a site visit?",
    faq2A: "We provide quotes with no obligation whatsoever. However, to give you an accurate and realistic price, we prefer to carry out a short visit on-site, as this is the only way we can properly assess the scope of work and give you a reliable figure. Just get in touch and we will arrange a convenient appointment.",
    faq3Q: "What services do you offer exactly?",
    faq3A: "Our core focus is professional painting for both interior and exterior spaces: walls, ceilings, doors, windows and facades, as well as decorative and restoration work. On request, we also provide end-of-tenancy cleaning, window cleaning and small household repairs, all from a single provider.",
    faq4Q: "Which regions do you cover?",
    faq4A: "We mainly operate in the cantons of Lucerne, Zurich, Zug and Aargau. For larger projects, we can also work in other regions; just ask us.",
    faq5Q: "How long does a typical painting project take?",
    faq5A: "It depends on the scope of the work. A typical apartment usually takes a few days; larger renovation or facade projects may take more time. After the site visit we will give you a concrete estimate.",
    faq6Q: "Do you also work for offices and commercial properties?",
    faq6A: "Yes, we take on projects in offices, shops, showrooms and other commercial properties. We adapt to your company's schedule and can work outside regular business hours if needed.",

    baEyebrow: "Before · After",
    baTitle: "See the difference",
    baText: "Drag the slider to discover the transformation.",
    baLabelBefore: "Before",
    baLabelAfter: "After",
    baProject1: "Yellow House",
    baProject2: "Large House Facade",
    baProject3: "Apartment Facade",
  },
};

const langButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");
const placeholderElements = document.querySelectorAll("[data-placeholder]");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

const setLanguage = (lang) => {
  const dictionary = translations[lang];
  if (!dictionary) return;

  document.documentElement.lang = lang;

  translatableElements.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  placeholderElements.forEach((element) => {
    const key = element.dataset.placeholder;
    if (dictionary[key]) {
      element.placeholder = dictionary[key];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  localStorage.setItem("ginda-language", lang);
};

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem("ginda-language") || "de";
setLanguage(savedLanguage);

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const thumbGroups = document.querySelectorAll(".project-thumbs");

thumbGroups.forEach((group) => {
  const thumbs = group.querySelectorAll(".thumb");
  const projectCard = group.closest(".project-card");
  const mainImage = projectCard.querySelector(".project-main-image");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const newImage = thumb.dataset.image;
      if (newImage && mainImage) {
        mainImage.src = newImage;
      }

      thumbs.forEach((item) => item.classList.remove("active"));
      thumb.classList.add("active");
    });
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

const openLightbox = (src, alt = "") => {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  if (!lightbox || !lightboxImage) return;
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.style.overflow = "";
};

document.querySelectorAll(".project-main-image").forEach((image) => {
  image.addEventListener("click", () => {
    openLightbox(image.src, image.alt);
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

// FAQ accordion animation
document.querySelectorAll(".faq-item").forEach((details) => {
  const summary = details.querySelector(".faq-question");
  const answer = details.querySelector(".faq-answer");

  summary.addEventListener("click", (e) => {
    e.preventDefault();

    if (details.open) {
      const cs = window.getComputedStyle(answer);
      const pt = parseFloat(cs.paddingTop);
      const pb = parseFloat(cs.paddingBottom);

      answer.style.height = answer.offsetHeight + "px";
      answer.style.paddingTop = pt + "px";
      answer.style.paddingBottom = pb + "px";

      requestAnimationFrame(() => {
        answer.style.height = "0";
        answer.style.paddingTop = "0";
        answer.style.paddingBottom = "0";

        const done = (ev) => {
          if (ev.propertyName !== "height") return;
          answer.removeEventListener("transitionend", done);
          details.removeAttribute("open");
          answer.style.cssText = "";
        };
        answer.addEventListener("transitionend", done);
      });
    } else {
      details.setAttribute("open", "");
      const cs = window.getComputedStyle(answer);
      const pt = parseFloat(cs.paddingTop);
      const pb = parseFloat(cs.paddingBottom);

      answer.style.paddingTop = "0";
      answer.style.paddingBottom = "0";
      answer.style.height = "0";

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          answer.style.height = answer.scrollHeight + pt + pb + "px";
          answer.style.paddingTop = pt + "px";
          answer.style.paddingBottom = pb + "px";

          const done = (ev) => {
            if (ev.propertyName !== "height") return;
            answer.removeEventListener("transitionend", done);
            answer.style.cssText = "";
          };
          answer.addEventListener("transitionend", done);
        });
      });
    }
  });
});

// Scroll animations
const animTargets = [
  ...document.querySelectorAll(".section-heading"),
  ...document.querySelectorAll(".service-card"),
  ...document.querySelectorAll(".why-card"),
  ...document.querySelectorAll(".project-card"),
  ...document.querySelectorAll(".faq-item"),
  ...document.querySelectorAll(".about-card"),
  ...document.querySelectorAll(".about-visual"),
  ...document.querySelectorAll(".contact-card"),
  ...document.querySelectorAll(".contact-form"),
  ...document.querySelectorAll(".services-addon"),
  ...document.querySelectorAll(".services-group__header"),
];

document
  .querySelectorAll(
    ".services-grid, .why-grid, .projects-grid, .faq-list, .services-addon__grid"
  )
  .forEach((container) => {
    Array.from(container.children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.09}s`;
    });
  });

animTargets.forEach((el) => el.classList.add("animate-fade-up"));

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        scrollObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);

animTargets.forEach((el) => scrollObserver.observe(el));

// Start marquee after first paint
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.querySelectorAll(".projects-marquee__track, .reviews-marquee__track")
      .forEach(el => el.classList.add("is-running"));
  });
});


const form = document.getElementById("contact-form");

const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch("https://formspree.io/f/xwvarvvd", {
    method: "POST",

    body: data,

    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    status.innerHTML = "✅ Danke! Ihre Nachricht wurde gesendet.";

    form.reset();
  } else {
    status.innerHTML = "❌ Fehler. Bitte versuchen Sie es erneut.";
  }
});

// Before / After sliders
document.querySelectorAll(".ba-slider").forEach((slider) => {
  let animId = null;
  let startTime = null;
  let idleTimeout = null;
  const AMPLITUDE = 12; // % de oscilación desde el centro
  const PERIOD = 7000;  // ms por ciclo completo

  function idleAnim(ts) {
    if (!startTime) startTime = ts;
    const pos = 50 + AMPLITUDE * Math.sin(((ts - startTime) / PERIOD) * 2 * Math.PI);
    slider.style.setProperty("--pos", pos + "%");
    animId = requestAnimationFrame(idleAnim);
  }

  function startIdle(delay = 0) {
    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(() => {
      if (animId) return;
      startTime = null;
      animId = requestAnimationFrame(idleAnim);
    }, delay);
  }

  function stopIdle() {
    clearTimeout(idleTimeout);
    if (animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
  }

  function setPos(clientX) {
    stopIdle();
    const rect = slider.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    slider.style.setProperty("--pos", (x / rect.width) * 100 + "%");
  }

  // Desktop: sigue el ratón sin necesidad de clicar
  slider.addEventListener("mousemove", (e) => setPos(e.clientX));
  slider.addEventListener("mouseleave", () => startIdle(600));

  // Móvil: arrastre táctil
  slider.addEventListener("touchstart", (e) => setPos(e.touches[0].clientX), { passive: true });
  slider.addEventListener("touchmove", (e) => setPos(e.touches[0].clientX), { passive: true });
  slider.addEventListener("touchend", () => startIdle(800));

  // Only animate while slider is visible – avoids 3 continuous RAFs during page load
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) startIdle();
      else stopIdle();
    });
  }, { threshold: 0.1 }).observe(slider);
});

