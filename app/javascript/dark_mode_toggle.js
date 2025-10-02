const toggleButton = document.getElementById('dark-mode-toggle');

if (!toggleButton) return;

toggleButton.addEventListener('click', function () {
  // Toggle dark mode class on the body
  document.body.classList.toggle('dark-mode');

  // Get image elements
  const darkImage = document.getElementById('dark-image');
  const lightImage = document.getElementById('light-image');
  const navbar = document.querySelector('.navbar');
  const contact = document.querySelectorAll('.contact')

  // Check if dark mode is active
  if (document.body.classList.contains('dark-mode')) {
    // Show dark image, hide light image
    if (darkImage) darkImage.style.display = 'block';
    if (lightImage) lightImage.style.display = 'none';
    if (navbar) {
      navbar.classList.remove('navbar-dark');
      navbar.classList.add('navbar-light');
    }

    contact.forEach(link => {
      link.classList.remove('text-dark')
      link.classList.add('text-white')
    });


  } else {
    // Show light image, hide dark image
    if (darkImage) darkImage.style.display = 'none';
    if (lightImage) lightImage.style.display = 'block';
    if (navbar) {
      navbar.classList.remove('navbar-light');
      navbar.classList.add('navbar-dark');
    }

    contact.forEach(link => {
      link.classList.remove('text-white')
      link.classList.add('text-dark')
    });
  }
});
