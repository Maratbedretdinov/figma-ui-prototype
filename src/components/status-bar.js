export function renderStatusBar() {
  return `
    <section class="statusbar" aria-label="Статус устройства">
      <span class="statusbar__time">9:41</span>
      <div class="statusbar__dynamic-island" aria-hidden="true"></div>
      <div class="statusbar__icons" aria-hidden="true">
        <span class="statusbar__signal"></span>
        <span class="statusbar__wifi"></span>
        <span class="statusbar__battery"></span>
      </div>
    </section>
  `;
}
