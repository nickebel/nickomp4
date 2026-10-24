const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Reveal content gently as each section enters view. Falls back naturally when unsupported.
const revealTargets = document.querySelectorAll('.section-grid, .interlude, .fragments, .soundtrack');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('has-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((target) => observer.observe(target));
}
