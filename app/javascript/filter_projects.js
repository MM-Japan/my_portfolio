// Function to filter projects based on category and highlight the active button
function filterProjects(category, element) {
  var projects = document.querySelectorAll('.project-card');
  var buttons = document.querySelectorAll('.filter-buttons .btn');
  var message = document.getElementById('project-filter-message');

  buttons.forEach(function(btn) {
    btn.classList.remove('active');
  });

  if (element) {
    element.classList.add('active');
  }

  if (message) {
    message.style.display = 'none';
  }

  projects.forEach(function(project) {
    if (category && project.classList.contains(category)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

// Make the function globally accessible
window.filterProjects = filterProjects;

document.addEventListener('DOMContentLoaded', function() {
  var projects = document.querySelectorAll('.project-card');
  projects.forEach(function(project) {
    project.style.display = 'none';
  });
});
