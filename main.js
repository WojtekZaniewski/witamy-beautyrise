document.addEventListener('DOMContentLoaded', () => {
  headerScroll();

  // Fade-in splash elements on load
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const splash = document.getElementById('hero');
      if (splash) splash.classList.add('is-loaded');
    });
  });
});

function headerScroll() {
  const header = document.getElementById('header');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 60);
  window.addEventListener('scroll', update, { passive: true });
  update();
}
