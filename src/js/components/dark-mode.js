document.addEventListener('DOMContentLoaded', () => {

  const html = document.querySelector('html');
  const darkModeToggle = document.querySelector('.js-darkmodeToggle');
  const darkMode = localStorage.getItem('darkMode');

  const enableDarkMode = () => {
    html.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enable');
  };

  const disableDarkMode = () => {
    html.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
  };

  if (darkMode === 'enable') {
    enableDarkMode();
  }

  darkModeToggle.addEventListener('click', () => {
    if (localStorage.getItem('darkMode') !== 'enable') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
});
