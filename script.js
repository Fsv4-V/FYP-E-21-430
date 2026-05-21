// ── NAVIGATION ──
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const page = document.getElementById(id);
  if (page) page.classList.add('active');
  const link = document.querySelector(`.nav-links a[data-page="${id}"]`);
  if (link) link.classList.add('active');
  window.scrollTo(0, 0);
  // close mobile nav
  document.getElementById('navLinks').classList.remove('open');
}

// ── HAMBURGER ──
document.getElementById('hamburger')?.addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ── WEEK ACCORDION ──
function toggleWeek(el) {
  const content = el.closest('.week-content');
  const isExpanded = content.classList.contains('expanded');
  // Close all
  document.querySelectorAll('.week-content').forEach(w => w.classList.remove('expanded'));
  // Open clicked if was closed
  if (!isExpanded) content.classList.add('expanded');
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
  // Animate progress bars
  setTimeout(() => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
      bar.style.width = bar.getAttribute('data-w') + '%';
    });
  }, 300);

  // Inject images from FYP_IMAGES
  if (typeof FYP_IMAGES !== 'undefined') {
    document.querySelectorAll('[data-fyp-img]').forEach(el => {
      const key = el.getAttribute('data-fyp-img');
      if (FYP_IMAGES[key]) {
        if (el.tagName === 'IMG') {
          el.src = FYP_IMAGES[key];
        } else {
          el.style.backgroundImage = `url(${FYP_IMAGES[key]})`;
        }
      }
    });
  }
});
