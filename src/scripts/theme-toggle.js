(function () {
  // Theme toggle with localStorage persistence
  const STORAGE_KEY = 'nexoit-theme';
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;

  // Apply saved theme or respect OS preference
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else if (saved === 'light') document.documentElement.removeAttribute('data-theme');
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {}

  // Toggle logic
  btn.addEventListener('click', function () {
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark') {
      document.documentElement.removeAttribute('data-theme');
      try { localStorage.setItem(STORAGE_KEY, 'light'); } catch (e) {}
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      try { localStorage.setItem(STORAGE_KEY, 'dark'); } catch (e) {}
    }
  });
})();
