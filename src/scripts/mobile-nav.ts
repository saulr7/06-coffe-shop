const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const panel = document.querySelector<HTMLElement>('[data-nav-panel]');

function setOpen(open: boolean) {
  toggle?.setAttribute('aria-expanded', String(open));
  panel?.toggleAttribute('data-open', open);
}

toggle?.addEventListener('click', () => {
  setOpen(toggle.getAttribute('aria-expanded') !== 'true');
});

panel?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    setOpen(false);
    toggle.focus();
  }
});
