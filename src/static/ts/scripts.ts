const body = document.body;

const btnTheme = document.querySelector(".fa-moon") as HTMLElement;
const btnHamburger = document.querySelector(".fa-bars") as HTMLElement;

const addThemeClass = (bodyClass: string, btnClass: string) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

const getBodyTheme = localStorage.getItem("portfolio-theme");
const getBtnTheme = localStorage.getItem("portfolio-btn-theme");

addThemeClass(getBodyTheme!, getBtnTheme!);

const isDark = () => body.classList.contains("dark");

const setTheme = (bodyClass: string, btnClass: string) => {
  body.classList.remove(localStorage.getItem("portfolio-theme")!);
  btnTheme.classList.remove(localStorage.getItem("portfolio-btn-theme")!);

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem("portfolio-theme", bodyClass);
  localStorage.setItem("portfolio-btn-theme", btnClass);
};

const toggleTheme = () =>
  isDark() ? setTheme("light", "fa-moon") : setTheme("dark", "fa-sun");

btnTheme.addEventListener("click", toggleTheme);

const displayList = () => {
  const navUl = document.querySelector(".nav__list") as HTMLElement;

  if (btnHamburger.classList.contains("fa-bars")) {
    btnHamburger.classList.remove("fa-bars");
    btnHamburger.classList.add("fa-times");
    navUl.classList.add("display-nav-list");
  } else {
    btnHamburger.classList.remove("fa-times");
    btnHamburger.classList.add("fa-bars");
    navUl.classList.remove("display-nav-list");
  }
};

btnHamburger.addEventListener("click", displayList);

const scrollUp = () => {
  const btnScrollTop = document.querySelector(".scroll-top") as HTMLElement;

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
};

document.addEventListener("scroll", scrollUp);

// Language Switch

const translations: Record<string, Record<string, string>> = {
  greetings: {
    en: "Hi, I am ",
    es: "Hola, soy ",
  },
  myname: {
    en: "Carlos Azócar",
    es: "Carlos Azócar",
  },
  specialty: {
    en: "Full-Stack Developer.",
    es: "Desarrollador Full-Stack.",
  },
  aboutme: {
    en: "Independent and proactive Full Stack Developer with a strong interest in software development, technology, and continuous learning. I enjoy building web applications with care, commitment, and attention to detail, turning ideas into functional and reliable products that create real value through problem solving.",
    es: "Desarrollador Full Stack independiente y proactivo con un fuerte interés en el desarrollo de software, la tecnología y el aprendizaje continuo. Disfruto construyendo aplicaciones web con cuidado, compromiso y atención al detalle, transformando ideas en productos funcionales y confiables que crean valor real a través de la resolución de problemas.",
  },
  experience: {
    en: "Experience",
    es: "Experiencia",
  },
  expertise: {
    en: "Expertise",
    es: "Conocimientos",
  },
  projects: {
    en: "Projects",
    es: "Proyectos",
  },
  contact: {
    en: "Contact",
    es: "Contacto",
  },
  emailme: {
    en: "Email me",
    es: "Enviar email",
  },
  project1: {
    en: "YouTube Media Downloader",
    es: "YouTube Media Downloader",
  },
  project1desc: {
    en: "YT media downloader created with Next.js and ytdl-core.",
    es: "Descargador de contenido de YT creado con Next.js y ytdl-core.",
  },
  project2: {
    en: "Tetris",
    es: "Tetris",
  },
  project2desc: {
    en: "Classic Tetris game created with Canvas, vanilla JavaScript and CSS.",
    es: "Clásico juego de Tetris desarrollado con Canvas, JavaScript nativo y CSS.",
  },
  project3: {
    en: "URL Shortener",
    es: "Acortador de URL",
  },
  project4: {
    en: "Echo AI assistant",
    es: "Asistente Echo IA",
  },
  project5: {
    en: "Screen Recorder",
    es: "Grabador de Pantalla",
  },
  project3desc: {
    en: "URL Shortener that uses my own API created with Express and MongoDB.",
    es: "Acortador de URL que utiliza mi propia API creada con Express y MongoDB",
  },
  project4desc: {
    en: "An AI voice assistant created with Next.js, Groq and Elevenlabs.",
    es: "Asistente IA con voz creado con Next.js, Groq y Elevenlabs.",
  },
  project5desc: {
    en: "A screen recorder developed with JS, Astro and Tailwind CSS.",
    es: "Grabador de pantalla desarrollado con JS, Astro y Tailwind CSS.",
  },
  cv: {
    en: "Download CV",
    es: "Descargar CV",
  },
  footer: {
    en: "Made with love &lt;3",
    es: "Hecho con amor &lt;3",
  },
  formemail: {
    en: "Your email:",
    es: "Tu email:",
  },
  formmessage: {
    en: "Your message:",
    es: "Tu mensaje:",
  },
  formbutton: {
    en: "Send",
    es: "Enviar",
  },
  expmunicipalidadtitle: {
    en: "Lead Software Developer",
    es: "Desarrollador Líder de Software",
  },
  expmunicipalidaddate: {
    en: "August 2024 - Present",
    es: "Agosto 2024 - Actualidad",
  },
  expmunicipalidaddesc: {
    en: "Designed, developed, and automated various custom web platforms and critical administrative processes through self-managed solutions, reducing manual operation times.<br /><br />Led the migration of legacy systems to modern technologies, optimizing maintainability and ensuring service continuity.<br /><br />Independently managed the infrastructure, handling servers, databases, application deployments, and implementing strict cybersecurity, access control, and backup policies.<br /><br />Managed the full lifecycle of IT projects, covering technical planning, development, end-user training, and post-implementation support.<br /><br />Led development efforts and coordinated the assigned technical team to ensure the successful execution of the institution’s internal projects.",
    es: "Diseñé, desarrollé y automaticé diversas plataformas web a medida y procesos administrativos críticos mediante soluciones autogestionables, reduciendo tiempos de operación manual.<br /><br />Lideré la migración de sistemas legacy hacia tecnologías modernas, optimizando la mantenibilidad y garantizando la continuidad operativa de los servicios.<br /><br />Administré de forma autónoma la infraestructura, gestionando servidores, bases de datos, despliegues de aplicaciones y ejecutando políticas estrictas de ciberseguridad, control de accesos y respaldos.<br /><br />Gestioné el ciclo completo de proyectos TI, abarcando desde la planificación técnica y desarrollo hasta la capacitación de usuarios finales y soporte postimplementación.<br /><br />Lideré el desarrollo y coordiné al equipo técnico asignado para la correcta ejecución de los distintos proyectos internos de la institución.",
  },

  expduoctitle: {
    en: "Professional Internship: Full Stack Developer",
    es: "Práctica Profesional: Desarrollador Full Stack",
  },
  expduocdate: {
    en: "September 2023 - December 2023",
    es: "Septiembre 2023 - Diciembre 2023",
  },
  expduocdesc: {
    en: "Managed a software development project using the Scrum methodology.<br /><br />Developed a full-stack web application with relational database design and implementation.<br /><br />Implemented automations that reduced operational times by up to 99%, improving the security, consistency, and availability of information.",
    es: "Gestioné un proyecto de desarrollo de software bajo metodología Scrum.<br /><br />Desarrollé una aplicación web full-stack con diseño e implementación de base de datos relacional.<br /><br />Implementé automatizaciones que redujeron tiempos operativos hasta en un 99%, mejorando la seguridad, consistencia y disponibilidad de la información.",
  },
  exptvtitle: {
    en: "Work Internship: Web Developer",
    es: "Práctica Laboral: Desarrollador Web",
  },
  exptvdate: {
    en: "February 2023 - March 2023",
    es: "Febrero 2023 - Marzo 2023",
  },
  exptvdesc: {
    en: "Performed maintenance, bug fixing, and implementation of new features for the institutional website, improving the user experience.<br /><br />Developed an Android mobile application to strengthen the company’s digital presence.<br /><br />Managed the creation of website backups, ensuring service continuity and efficient error resolution.",
    es: "Realicé mantenimiento, corrección de errores e implementación de nuevas funcionalidades al sitio web institucional, mejorando la experiencia de usuario.<br /><br />Desarrollé una aplicación móvil para Android para fortalecer la presencia digital de la empresa.<br /><br />Administré la creación de copias de seguridad de la pagina web, asegurando la continuidad operativa del servicio y la resolución eficiente de errores.",
  },
  toastSuccess: {
    en: "Message Sent",
    es: "Mensaje enviado",
  },
  toastError: {
    en: "Error",
    es: "Error",
  },
  extra: {
    en: "Extra",
    es: "Extra",
  },
  extra1: {
    en: "Full Stack Open Course",
    es: "Curso Full Stack Open",
  },
  extra1desc: {
    en: "I am certified in the Full Stack Open online course, which is based on JavaScript and offered by the University of Helsinki.",
    es: "Estoy certificado en el curso en línea Full Stack Open, el cual se basa en JavaScript y es ofrecido por la Universidad de Helsinki.",
  },
  extra2: {
    en: "Real-Time Chat Course",
    es: "Curso de Chat en Tiempo Real",
  },
  extra2desc: {
    en: "I completed a Full Stack project following a real-time chat course akin to Messenger, which enabled me to delve into Front-End, Back-End, Authentication with other platforms, as well as real-time features such as user status and messaging.",
    es: "Completé un proyecto Full Stack siguiendo un curso de chat en tiempo real similar a Messenger, lo que me permitió adentrarme en el Front-End, Back-End, autenticación con otras plataformas y características en tiempo real como el estado del usuario y la mensajería.",
  },
};

export default translations;

let currentLanguage: "en" | "es" = "en";

const btnLanguage = document.getElementById("btn-language");

const translateElement = (element: HTMLElement) => {
  const key = element.getAttribute("data-translate-key");
  if (key && translations[key]) {
    if (
      element.tagName.toLowerCase() === "h1" &&
      element.querySelector(".about__name")
    ) {
      element.innerHTML = `${translations[key][currentLanguage]}<span class="about__name">${translations["myname"][currentLanguage]}</span>.`;
    } else {
      element.innerHTML = translations[key][currentLanguage];
    }
  }
};

const toggleLanguage = () => {
  currentLanguage = currentLanguage === "en" ? "es" : "en";

  const elementsToTranslate = document.querySelectorAll(".translate");

  elementsToTranslate.forEach((element) => {
    translateElement(element as HTMLElement);
  });
};

if (btnLanguage) {
  btnLanguage.addEventListener("click", toggleLanguage);
}

// cv download

const downloadCvButton = document.querySelector(
  ".btn--download-cv"
) as HTMLElement;

const downloadCv = () => {
  const cvFileName =
    currentLanguage === "en"
      ? "Carlos Azocar - Full Stack Developer RESUME.pdf"
      : "Carlos Azocar - Desarrollador Full Stack CV.pdf";
  const cvFilePath = `/${cvFileName}`;

  const link = document.createElement("a");
  link.href = cvFilePath;
  link.download = cvFileName;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

if (downloadCvButton) {
  downloadCvButton.addEventListener("click", downloadCv);
}
