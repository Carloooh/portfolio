Web portfolio created with astro

Web -> https://portfolio-three-blush-56.vercel.app

To do list:
    - Fill With My Info
    - Functional Contact Form
    - Add Projects
    - Add Clients

Upgrades:
    - Quitar hover de elementos no clicables
    - habilidades en un carousel?
    - habilidades blancas y técnicas
    - menú flotante o mantener header en el scroll
    - custom cursor

progress bar ->

.progress {
  height: 0.1875rem;

  .progress-bar {
    height: 0.2rem;
    transform-origin: left;
    will-change: transform;
    transform: scaleX(0);
    @apply w-full bg-white;
  }
}



<div class="progress w-full fixed top-0 z-50">
	<div class="progress-bar" style="transform: scaleX(0);"></div>
</div>

custom cursor -->> library kursor with js