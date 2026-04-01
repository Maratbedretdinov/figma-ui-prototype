export function renderLimitHero() {
  return `
    <section class="limit-hero">
      <p class="limit-hero__eyebrow">Кредитный лимит</p>
      <h1 class="limit-hero__amount">14 582 731 ₽</h1>

      <button class="progress-pill" type="button">
        <span class="progress-pill__ring"></span>
        <span class="progress-pill__text">
          <strong>Взяли 6,4 млн ₽</strong>
          <span>из 20 млн ₽</span>
        </span>
        <span class="progress-pill__arrow">›</span>
      </button>
    </section>
  `;
}
