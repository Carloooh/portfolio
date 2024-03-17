const body = document.body;

const btnTheme = document.querySelector('.fa-moon') as HTMLElement;
const btnHamburger = document.querySelector('.fa-bars') as HTMLElement;

const addThemeClass = (bodyClass: string, btnClass: string) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

const getBodyTheme = localStorage.getItem('portfolio-theme');
const getBtnTheme = localStorage.getItem('portfolio-btn-theme');

addThemeClass(getBodyTheme!, getBtnTheme!);

const isDark = () => body.classList.contains('dark');

const setTheme = (bodyClass: string, btnClass: string) => {
  body.classList.remove(localStorage.getItem('portfolio-theme')!);
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme')!);

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
};

const toggleTheme = () =>
  isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun');

btnTheme.addEventListener('click', toggleTheme);

const displayList = () => {
  const navUl = document.querySelector('.nav__list') as HTMLElement;

  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars');
    btnHamburger.classList.add('fa-times');
    navUl.classList.add('display-nav-list');
  } else {
    btnHamburger.classList.remove('fa-times');
    btnHamburger.classList.add('fa-bars');
    navUl.classList.remove('display-nav-list');
  }
};

btnHamburger.addEventListener('click', displayList);

const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top') as HTMLElement;

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
};

document.addEventListener('scroll', scrollUp);

// Language Switch

const translations: Record<string, Record<string, string>> = {
  'greetings': {
    en: 'Hi, I am ',
    es: 'Hola, soy ',
  },
  'myname': {
    en: 'Carlos Azócar',
    es: 'Carlos Azócar',
  },
  'specialty': {
    en: 'A Web Developer.',
    es: 'Desarrollador Web.',
  },
  'aboutme': {
    en: 'Independent and proactive, I feel at home in the backend universe. I develop with dedication, breathing life into each line of code with care, commitment, and enthusiasm.',
    es: 'Autónomo y proactivo, me siento en casa en el universo del backend. Desarrollo con dedicación, dando vida a cada línea de código con cariño, compromiso y entusiasmo.',
  },
  'experience': {
    en: 'Experience',
    es: 'Experiencia',
  },
  'expertise': {
    en: 'Expertise',
    es: 'Conocimientos',
  },
  'projects': {
    en: 'Projects',
    es: 'Proyectos',
  },
  'contact': {
    en: 'Contact',
    es: 'Contacto',
  },
  'emailme': {
    en: 'Email me',
    es: 'Enviar email',
  },
  'project1': {
    en: 'YouTube Media Downloader',
    es: 'YouTube Media Downloader',
  },
  'project1desc': {
    en: 'YouTube media downloader created with Next.js and ytdl-core.',
    es: 'Descargador de contenido de YouTube creado con Next.js y ytdl-core.',
  },
  'project2': {
    en: 'Project 2',
    es: 'Proyecto 2',
  },
  'project2desc': {
    en: 'Project 2',
    es: 'Proyecto 2',
  },
  'project3': {
    en: 'Project 3',
    es: 'Proyecto 3',
  },
  'project3desc': {
    en: 'Project 3',
    es: 'Proyecto 3',
  },
  'cv': {
    en: 'Download CV',
    es: 'Descargar CV',
  },
  'footer': {
    en: 'Made with love &lt;3',
    es: 'Hecho con amor &lt;3',
  },
  'formemail': {
    en: 'Your email:',
    es: 'Tu email:',
  },
  'formmessage': {
    en: 'Your message:',
    es: 'Tu mensaje:',
  },
  'formbutton': {
    en: 'Send',
    es: 'Enviar',
  },
  'expduoctitle': {
    en: 'Professional Internship: Developer',
    es: 'Práctica Profesional: Desarrollador',
  },
  'expduocdate': {
    en: 'October 2023 - December 2023',
    es: 'Octubre 2023 - Diciembre 2023',
  },
  'expduocabout': {
    en: 'Development of a web management system for documents and resources.',
    es: 'Desarrollo de un sistema de gestión web para documentos y recursos.',
  },
  'expduocdesc': {
    en: 'The implementation of the web system brought the following benefits to the company: efficient task automation, remote access to information, centralization and organization of resources, data security, and improvement in data-driven decision-making.',
    es: 'La implementación del sistema web aportó los siguientes beneficios a la empresa: automatización eficiente de tareas, acceso remoto a la información, centralización y organización de recursos, seguridad de datos y mejora en la toma de decisiones basada en datos.',
  },
  'exptvtitle': {
    en: 'Work Placement: Developer',
    es: 'Práctica Profesional: Desarrollador',
  },
  'exptvdate': {
    en: 'February 2023 - March 2023',
    es: 'Febrero 2023 - Marzo 2023',
  },
  'exptvabout': {
    en: 'Maintenance, error correction, and implementation of new functionalities for the company\'s website.',
    es: 'Mantenimiento, corrección de errores e implementación de nuevas funcionalidades para el sitio web de la empresa.',
  },
  'exptvdesc': {
    en: 'Website maintenance, error fixes, and enhancements yielded notable improvements for the company, ensuring a secure, efficient, and feature-rich online environment.',
    es: 'El mantenimiento del sitio web, las correcciones de errores y las mejoras proporcionaron mejoras notables para la empresa, garantizando un entorno en línea seguro, eficiente y rico en funciones.',
  },
  'toastSuccess': {
    en: 'Message Sent',
    es: 'Mensaje enviado',
  },
  'toastError': {
    en: 'Error',
    es: 'Error',
  },
};

export default translations;

let currentLanguage: 'en' | 'es' = 'en';

const btnLanguage = document.getElementById('btn-language');

const translateElement = (element: HTMLElement) => {
  const key = element.getAttribute('data-translate-key');
  if (key && translations[key]) {
    if (element.tagName.toLowerCase() === 'h1' && element.querySelector('.about__name')) {
      element.innerHTML = `${translations[key][currentLanguage]}<span class="about__name">${translations['myname'][currentLanguage]}</span>.`;
    } else {
      element.innerHTML = translations[key][currentLanguage];
    }
  }
};

const toggleLanguage = () => {
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';

  const elementsToTranslate = document.querySelectorAll('.translate');

  elementsToTranslate.forEach((element) => {
    translateElement(element as HTMLElement);
  });
};

if (btnLanguage) {
  btnLanguage.addEventListener('click', toggleLanguage);
}


// cv download

const downloadCvButton = document.querySelector('.btn--download-cv') as HTMLElement;

const downloadCv = () => {
  const cvFileName = currentLanguage === 'en' ? 'CV_CarlosAzocar_ENG.pdf' : 'CV_CarlosAzocar_ESP.pdf';
  const cvFilePath = `/${cvFileName}`;

  const link = document.createElement('a');
  link.href = cvFilePath;
  link.download = cvFileName;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

if (downloadCvButton) {
  downloadCvButton.addEventListener('click', downloadCv);
}
