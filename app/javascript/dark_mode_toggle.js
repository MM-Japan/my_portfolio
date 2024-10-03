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


  } else {
    // Show light image, hide dark image
    darkImage.style.display = 'none';
    lightImage.style.display = 'block';
    navbar.classList.remove('navbar-light');
    navbar.classList.add('navbar-dark');

   
  }
});
