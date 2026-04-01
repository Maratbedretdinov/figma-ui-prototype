const app = document.querySelector("#app");

app.innerHTML = `
  <main class="page-shell">
    <section class="phone-frame" aria-label="SVG макет экрана">
      <img
        class="fixed-ui fixed-ui--top"
        src="./assets/template-navigation-bar.svg?v=2"
        alt=""
        aria-hidden="true"
      />

      <img
        class="fixed-ui fixed-ui--top fixed-ui--top-scroll"
        src="./assets/template-navigation-bar-scroll.svg?v=2"
        alt=""
        aria-hidden="true"
      />

      <div class="fixed-nav-blur" aria-hidden="true">
        ${Array.from({ length: 20 }, (_, i) =>
          `<span class="fixed-nav-controls__blur-step" style="--step:${i}"></span>`,
        ).join("")}
      </div>

      <div class="fixed-nav-controls" aria-hidden="true">
        <button class="fixed-nav-controls__button" type="button" tabindex="-1">
          <svg viewBox="0 0 12 20" aria-hidden="true">
            <path d="M3.44034 10L10.9826 2.43869C11.5391 1.88077 11.5391 0.976258 10.9826 0.41834C10.4261 -0.13958 9.52395 -0.13958 8.96746 0.41834L0.417367 8.9898C-0.139122 9.54772 -0.139122 10.4523 0.417367 11.0102L8.96746 19.5817C9.52395 20.1396 10.4261 20.1396 10.9826 19.5817C11.5391 19.0237 11.5391 18.1192 10.9826 17.5613L3.44034 10Z" fill="currentColor"/>
          </svg>
        </button>

        <button class="fixed-nav-controls__button" type="button" tabindex="-1">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M16 9H20C20 10.6569 18.6569 12 17 12H16V9Z" fill="currentColor" opacity="0.5"/>
            <path d="M10.0498 9C10.2816 7.85887 11.2905 7 12.5 7H16V12L12 12L10 12L0 12C0 10.3431 1.34315 9 3 9H10.0498Z" fill="currentColor"/>
            <path d="M10 16H20C20 17.6569 18.6569 19 17 19H10V16Z" fill="currentColor" opacity="0.35"/>
            <path d="M4.0498 16C4.28159 14.8589 5.29052 14 6.5 14H10V19L6 19L4 19L0 19C0 17.3431 1.34315 16 3 16H4.0498Z" fill="currentColor"/>
            <path d="M10 2H20C20 3.65685 18.6569 5 17 5H10V2Z" fill="currentColor" opacity="0.35"/>
            <path d="M4.0498 2C4.28159 0.858867 5.29052 0 6.5 0H10V5H4L0 5C0 3.34315 1.34315 2 3 2H4.0498Z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      <div class="phone-frame__content">
        <img
          class="phone-frame__hero"
          src="./assets/hero.svg"
          alt="Заголовок и главный блок"
        />

        <img
          class="phone-frame__body"
          src="./assets/content.svg"
          alt="Основной контент экрана"
        />
      </div>

      <div class="fixed-tabbar-glass" aria-hidden="true">
        <span class="fixed-tabbar-glass__main"></span>
        <span class="fixed-tabbar-glass__side"></span>
      </div>

      <img
        class="fixed-ui fixed-ui--bottom"
        src="./assets/tabbar.svg?v=4"
        alt=""
        aria-hidden="true"
      />
    </section>
  </main>
`;

const toggleScrolledHeader = () => {
  const heroTitleOffset = 96;
  const isScrolled = window.scrollY >= heroTitleOffset;
  document.body.classList.toggle("is-header-scrolled", isScrolled);
};

toggleScrolledHeader();
window.addEventListener("scroll", toggleScrolledHeader, { passive: true });
