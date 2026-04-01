const navItems = [
  { label: "Обзор", active: true, icon: "◉" },
  { label: "График", active: false, icon: "◌" },
  { label: "Еще", active: false, icon: "◎" },
];

export function renderGlassNav() {
  return `
    <nav class="glass-nav" aria-label="Навигация страницы">
      <div class="glass-nav__pill">
        ${navItems
          .map(
            ({ label, active, icon }) => `
              <button class="glass-nav__item${active ? " glass-nav__item--active" : ""}" type="button">
                <span class="glass-nav__icon">${icon}</span>
                <span>${label}</span>
              </button>
            `,
          )
          .join("")}
      </div>

      <button class="glass-nav__fab" type="button" aria-label="Помощник">
        ✦
      </button>
    </nav>
  `;
}
