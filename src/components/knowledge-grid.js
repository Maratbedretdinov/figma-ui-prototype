const cards = [
  {
    title: "Как снизить стоимость кредита",
    subtitle: "Практика",
    accent: "yellow",
  },
  {
    title: "Когда повышают лимит автоматически",
    subtitle: "Разбор",
    accent: "blue",
  },
  {
    title: "Что влияет на одобрение новых условий",
    subtitle: "Подсказки",
    accent: "sand",
  },
  {
    title: "Как закрыть долг без лишних процентов",
    subtitle: "Пошагово",
    accent: "graphite",
  },
];

export function renderKnowledgeGrid() {
  return `
    <section class="knowledge">
      <div class="knowledge__heading">
        <div>
          <p class="sheet-card__eyebrow">Полезно знать</p>
          <h2>Материалы и рекомендации</h2>
        </div>
      </div>

      <div class="knowledge-grid">
        ${cards
          .map(
            ({ title, subtitle, accent }) => `
              <article class="knowledge-card">
                <p class="knowledge-card__subtitle">${subtitle}</p>
                <h3>${title}</h3>
                <div class="knowledge-card__visual knowledge-card__visual--${accent}"></div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}
