const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const panel = document.querySelector<HTMLElement>('[data-nav-panel]');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  panel?.classList.toggle('hidden', open);
});

panel?.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    panel.classList.add('hidden');
  }),
);
