
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

document.body.classList.toggle('light-theme', {
  backgroundColor: '#f5f5f5',
  color: '#121212'
});
