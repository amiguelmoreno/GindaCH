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
      "Platzhaltertexte, die du später durch echte Kundenmeinungen ersetzen kannst.",
    review1Text:
      "Sehr saubere Arbeit, pünktlich und professionell. Das Ergebnis hat uns wirklich überzeugt.",
    review1Name: "Privatkunde",
    review2Text:
      "Gute Beratung bei Farben und ein sehr ordentliches Finish. Würden wir wieder wählen.",
    review2Name: "Bürokunde",
    review3Text:
      "Freundlicher Kontakt, klare Kommunikation und ein hochwertiges Resultat.",
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
      "Textos de ejemplo que luego puedes sustituir por opiniones reales.",
    review1Text:
      "Trabajo muy limpio, puntual y profesional. El resultado nos convenció totalmente.",
    review1Name: "Cliente particular",
    review2Text:
      "Muy buena ayuda con los colores y un acabado muy cuidado. Lo volveríamos a elegir.",
    review2Name: "Cliente de oficina",
    review3Text:
      "Contacto amable, comunicación clara y un resultado de gran calidad.",
    review3Name: "Propietario de vivienda",

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
      "Sample texts that you can later replace with real customer reviews.",
    review1Text:
      "Very clean, punctual and professional work. We were really impressed with the result.",
    review1Name: "Private client",
    review2Text:
      "Great advice on colours and a very neat finish. We would definitely choose them again.",
    review2Name: "Office client",
    review3Text:
      "Friendly contact, clear communication and a high-quality final result.",
    review3Name: "Homeowner",

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
