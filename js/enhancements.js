(() => {
  const key = 'theatrical-world-theme';
  const applyTheme = theme => {
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.innerHTML = theme === 'dark' ? '<i class="bi bi-sun-fill"></i> Светлая тема' : '<i class="bi bi-moon-stars-fill"></i> Тёмная тема';
      button.setAttribute('aria-label', theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему');
    });
  };
  let saved = 'light';
  try { saved = localStorage.getItem(key) === 'dark' ? 'dark' : 'light'; } catch (_) {}
  applyTheme(saved);
  document.addEventListener('DOMContentLoaded', () => applyTheme(saved));
  document.addEventListener('click', event => {
    const toggle = event.target.closest('[data-theme-toggle]');
    if (!toggle) return;
    saved = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(key, saved); } catch (_) {}
    applyTheme(saved);
    toggle.classList.remove('theme-switch--animate');
    void toggle.offsetWidth;
    toggle.classList.add('theme-switch--animate');
  });
  window.showTheaterToast = (message, type = 'success') => {
    let host = document.getElementById('theater-toast-host');
    if (!host) {
      host = document.createElement('div');
      host.id = 'theater-toast-host';
      host.setAttribute('aria-live', 'polite');
      host.className = 'theater-toast-host';
      document.body.append(host);
    }
    const toast = document.createElement('div');
    toast.className = 'theater-toast ' + (type === 'warning' ? 'theater-toast-warning' : '');
    const label = document.createElement('span'); label.textContent = message;
    const close = document.createElement('button'); close.type = 'button'; close.textContent = '×'; close.setAttribute('aria-label', 'Закрыть уведомление');
    close.addEventListener('click', () => toast.remove());
    toast.append(label, close); host.append(toast);
    setTimeout(() => toast.remove(), 3500);
  };
})();
