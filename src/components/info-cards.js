const detailRows = [
  {
    icon: "25",
    title: "Льготный период",
    text: "до 55 дней на покупки и переводы внутри периода",
  },
  {
    icon: "%",
    title: "Ставка после периода",
    text: "от 18,9% годовых, рассчитывается индивидуально",
  },
  {
    icon: "₽",
    title: "Минимальный платеж",
    text: "5% от задолженности, не меньше 500 ₽",
  },
];

const steps = [
  "Следующий платеж 24 апреля",
  "Документы и история договора доступны онлайн",
  "Лимит можно увеличить после нескольких циклов",
];

const metricRows = [
  { label: "Ежемесячный платеж", value: "286 000 ₽" },
  { label: "Процентная ставка", value: "18,9%" },
  { label: "Свободный лимит", value: "13,6 млн ₽" },
];

const faqItems = [
  "Как работает льготный период",
  "Как увеличить лимит",
  "Что влияет на ставку",
  "Как получить документы",
];

export function renderInfoCards() {
  return `
    <section class="stack">
      <article class="sheet-card">
        <div class="sheet-card__heading">
          <div>
            <p class="sheet-card__eyebrow">Обзор</p>
            <h2>Основные условия</h2>
          </div>
          <button class="text-link" type="button">Подробнее</button>
        </div>

        <div class="details-grid">
          ${detailRows
            .map(
              ({ icon, title, text }) => `
                <article class="detail-row">
                  <span class="detail-row__icon">${icon}</span>
                  <div>
                    <h3>${title}</h3>
                    <p>${text}</p>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </article>

      <article class="sheet-card">
        <div class="sheet-card__heading">
          <div>
            <p class="sheet-card__eyebrow">Как пользоваться</p>
            <h2>Коротко по шагам</h2>
          </div>
        </div>

        <div class="steps-list">
          ${steps
            .map(
              (item, index) => `
                <article class="step-item">
                  <span class="step-item__dot">${index + 1}</span>
                  <p>${item}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </article>

      <article class="accent-panel">
        <div class="accent-panel__gauge">
          <span></span>
        </div>
        <div>
          <p class="sheet-card__eyebrow">Лимит и нагрузка</p>
          <h2>Платеж комфортен при текущем графике</h2>
          <p class="accent-panel__text">
            Следующий месяц проходит без критичной нагрузки. Можно держать текущий темп или внести платеж раньше срока.
          </p>
        </div>
      </article>

      <article class="sheet-card sheet-card--metrics">
        <div class="sheet-card__heading">
          <div>
            <p class="sheet-card__eyebrow">Финансовые параметры</p>
            <h2>Платежи и ставка</h2>
          </div>
        </div>

        <div class="metric-list">
          ${metricRows
            .map(
              ({ label, value }) => `
                <div class="metric-row">
                  <span>${label}</span>
                  <strong>${value}</strong>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>

      <article class="sheet-card">
        <div class="sheet-card__heading">
          <div>
            <p class="sheet-card__eyebrow">Вопросы</p>
            <h2>Что важно знать</h2>
          </div>
        </div>

        <div class="segmented-control">
          <button class="segmented-control__item segmented-control__item--active" type="button">Главное</button>
          <button class="segmented-control__item" type="button">Ставка</button>
          <button class="segmented-control__item" type="button">Документы</button>
        </div>

        <div class="faq-list">
          ${faqItems
            .map(
              (item) => `
                <button class="faq-item" type="button">
                  <span>${item}</span>
                  <span>›</span>
                </button>
              `,
            )
            .join("")}
        </div>
      </article>
    </section>
  `;
}
