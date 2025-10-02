function initializeDarkModeToggle() {
  const toggleButton = document.getElementById('dark-mode-toggle');

  if (!toggleButton) return;
  if (toggleButton.dataset.darkModeInitialized === 'true') return;

  toggleButton.dataset.darkModeInitialized = 'true';

  toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    const darkImage = document.getElementById('dark-image');
    const lightImage = document.getElementById('light-image');
    const navbar = document.querySelector('.navbar');
    const contactLinks = document.querySelectorAll('.contact');

    if (document.body.classList.contains('dark-mode')) {
      if (darkImage) darkImage.style.display = 'block';
      if (lightImage) lightImage.style.display = 'none';
      if (navbar) {
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
      }

      contactLinks.forEach((link) => {
        link.classList.remove('text-dark');
        link.classList.add('text-white');
      });
    } else {
      if (darkImage) darkImage.style.display = 'none';
      if (lightImage) lightImage.style.display = 'block';
      if (navbar) {
        navbar.classList.remove('navbar-light');
        navbar.classList.add('navbar-dark');
      }

      contactLinks.forEach((link) => {
        link.classList.remove('text-white');
        link.classList.add('text-dark');
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', initializeDarkModeToggle);
document.addEventListener('turbo:load', initializeDarkModeToggle);
