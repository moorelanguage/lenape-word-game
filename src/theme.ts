// experimenting with shit
const savedTheme = localStorage.getItem('darkMode');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const darkModePreferred =
  savedTheme === 'true' || (savedTheme === null && prefersDark);

document.documentElement.classList.toggle('dark-mode', darkModePreferred);