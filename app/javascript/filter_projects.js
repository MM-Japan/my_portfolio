// Function to filter projects based on category and highlight the active button
function filterProjects(category, element) {
  var filterButtons = document.querySelector('.filter-buttons');
  var message = document.getElementById('project-filter-message');
  if (!filterButtons && !message) {
    return;
  }

  var projectsSection = document.querySelector('#projects');
  if (!projectsSection) {
    return;
  }

  var projects = projectsSection.querySelectorAll('.project-card');
  var buttons = filterButtons ? filterButtons.querySelectorAll('.btn') : [];
  var filterDependents = document.querySelectorAll('.filter-dependent');
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
      project.classList.remove('project-hidden');
    } else {
      project.classList.add('project-hidden');
    }
  });

  if (category) {
    filterDependents.forEach(function(element) {
      element.classList.remove('project-hidden');
    });
  } else {
    filterDependents.forEach(function(element) {
      element.classList.add('project-hidden');
    });
  }

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
