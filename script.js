AOS.init();

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  let darkMode = document.body.classList.contains("dark-mode");
  document.querySelector(".theme-toggle").textContent = darkMode ? "🌞" : "🌙";
}

// Smooth scroll to section
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
