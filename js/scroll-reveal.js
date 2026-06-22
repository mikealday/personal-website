/**
 * scroll-reveal.js — IntersectionObserver-based scroll reveal
 *
 * Call initScrollReveal() after the DOM is ready. Elements with the
 * .reveal class will receive .visible when they enter the viewport.
 */

function initScrollReveal() {
  const observed = new WeakSet();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const siblings = Array.from(
        entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')
      );
      const idx = siblings.indexOf(entry.target);

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);

      io.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  });

  function observeAll() {
    document.querySelectorAll('.reveal').forEach((el) => {
      if (!observed.has(el)) {
        observed.add(el);
        io.observe(el);
      }
    });
  }

  observeAll();

  const mo = new MutationObserver(observeAll);
  mo.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}
