document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';

  const linkMap = {
    'index.html': null,
    'work.html': 'work.html',
    'not-work.html': 'not-work.html',
    'writing.html': 'writing.html',
    'about.html': 'about.html'
  };

  const target = linkMap[file];
  if (target !== undefined) {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.endsWith(target)) {
        link.classList.add('active');
      }
    });
  }
});

