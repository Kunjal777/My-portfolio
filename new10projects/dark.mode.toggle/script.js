const toggle = document.getElementById('toggle-theme');
const body = document.body;

// Load saved mode from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggle.checked = true;
}

// Toggle theme on switch
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark'); // save preference
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});
