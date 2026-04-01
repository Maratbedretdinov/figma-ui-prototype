const actions = [
  {
    icon: "↓",
    title: "Погасить",
    caption: "Оплата по графику и досрочно",
  },
  {
    icon: "☰",
    title: "Условия",
    caption: "Ставка, лимит и документы",
  },
];

export function renderActionPair() {
  return `
    <section class="action-pair">
      ${actions
        .map(
          ({ icon, title, caption }) => `
            <article class="circle-action">
              <button class="circle-action__button" type="button" aria-label="${title}">
                <span>${icon}</span>
              </button>
              <h2>${title}</h2>
              <p>${caption}</p>
            </article>
          `,
        )
        .join("")}
    </section>
  `;
}
