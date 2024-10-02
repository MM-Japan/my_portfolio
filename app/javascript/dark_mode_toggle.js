document.getElementById('dark-mode-toggle').addEventListener('click', function () {
  // Toggle dark mode class on the body
  document.body.classList.toggle('dark-mode');

  // Get image elements
  const darkImage = document.getElementById('dark-image');
  const lightImage = document.getElementById('light-image');
  const navbar = document.querySelector('.navbar');

  // Check if dark mode is active
  if (document.body.classList.contains('dark-mode')) {
    // Show dark image, hide light image
    darkImage.style.display = 'block';
    lightImage.style.display = 'none';
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');

    // Change text color in dark mode (white background)
    navbar.classList.add('text-dark');  // Add a class for dark text
    navbar.classList.remove('text-light'); // Remove light text class if exists
  } else {
    // Show light image, hide dark image
    darkImage.style.display = 'none';
    lightImage.style.display = 'block';
    navbar.classList.remove('navbar-light');
    navbar.classList.add('navbar-dark');

    // Change text color back to light in light mode (dark background)
    navbar.classList.add('text-light');
    navbar.classList.remove('text-dark');
  }
});
