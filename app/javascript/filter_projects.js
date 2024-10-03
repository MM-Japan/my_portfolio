// Function to filter projects based on category and highlight the active button
function filterProjects(category, element) {
  // Get all project cards
  var projects = document.querySelectorAll('.project-card');
  // Get all filter buttons
  var buttons = document.querySelectorAll('.filter-buttons .btn');

  // Remove the active class from all buttons
  buttons.forEach(function(btn) {
    btn.classList.remove('active');
  });

  // Add the active class to the clicked button
  element.classList.add('active');

  // Show or hide projects based on the selected category
  projects.forEach(function(project) {
    if (category === 'all') {
      project.style.display = 'block'; // Show all projects
    } else {
      // Show the project if it matches the selected category, otherwise hide it
      if (project.classList.contains(category)) {
        project.style.display = 'block'; // Show matching project
      } else {
        project.style.display = 'none'; // Hide non-matching project
      }
    }
  });
}

// Make the function globally accessible
window.filterProjects = filterProjects;
