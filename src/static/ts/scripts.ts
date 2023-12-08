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

const translations = {
  'greetings': {
    en: 'Hi, I am ',
    es: 'Hola, soy ',
  },
  'myname': {
    en: 'Carlos Azócar',
    es: 'Carlos Azócar',
  },
  'specialty': {
    en: 'A Back end Developer.',
    es: 'Desarrollador Front end.',
  },
  'aboutme': {
    en: 'A Back end Developer.',
    es: 'Desarrollador Front end.',
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
  'footer': {
    en: 'Created by Carlos Azócar',
    es: 'Creado por Carlos Azócar',
  },
  'project1': {
    en: 'Project 1',
    es: 'Proyecto 1',
  },
  'project1desc': {
    en: 'Project 1',
    es: 'Proyecto 1',
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
};

let currentLanguage = 'en';

const btnLanguage = document.getElementById('btn-language');

const translateElement = (element) => {
  const key = element.getAttribute('data-translate-key');
  if (key && translations[key]) {
    if (element.tagName.toLowerCase() === 'h1' && element.querySelector('.about__name')) {
      element.innerHTML = `${translations[key][currentLanguage]}<span class="about__name">${translations['myname'][currentLanguage]}</span>`;
    } else {
      element.innerHTML = translations[key][currentLanguage];
    }
  }
};

const toggleLanguage = () => {
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';

  const elementsToTranslate = document.querySelectorAll('.translate');

  elementsToTranslate.forEach((element) => {
    translateElement(element);
  });
};

btnLanguage.addEventListener('click', toggleLanguage);