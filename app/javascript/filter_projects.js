// Function to filter projects based on category and highlight the active button
function filterProjects(category, element) {
  var projects = document.querySelectorAll('.project-card');
  var buttons = document.querySelectorAll('.filter-buttons .btn');
  var message = document.getElementById('project-filter-message');
  var hasVisibleProject = false;

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
      hasVisibleProject = true;
      project.style.display = project.dataset.defaultDisplay || '';
    } else {
      project.style.display = 'none';
    }
  });

  if (message) {
    if (hasVisibleProject) {
      message.style.display = 'none';
    } else {
      message.style.display = '';
      message.textContent = 'No projects available for this category yet. Check back soon!';
    }
  }
}

// Make the function globally accessible
window.filterProjects = filterProjects;

document.addEventListener('DOMContentLoaded', function() {
  var projects = document.querySelectorAll('.project-card');
  projects.forEach(function(project) {
    if (!project.dataset.defaultDisplay) {
      project.dataset.defaultDisplay = window.getComputedStyle(project).display;
    }
    project.style.display = 'none';
  });

  var message = document.getElementById('project-filter-message');
  if (message) {
    message.style.display = '';
    message.textContent = 'Select Web or Game to explore featured work.';
  }
});
