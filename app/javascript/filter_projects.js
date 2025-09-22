var scheduleFrame = (typeof window !== 'undefined' && window.requestAnimationFrame)
  ? window.requestAnimationFrame.bind(window)
  : function(callback) {
      return setTimeout(callback, 16);
    };

function ensureFadeTarget(element) {
  if (element && !element.classList.contains('filter-fade-target')) {
    element.classList.add('filter-fade-target');
  }
}

function showWithFade(element) {
  if (!element) {
    return;
  }

  ensureFadeTarget(element);

  if (!element.classList.contains('project-hidden')) {
    element.classList.add('filter-fade-visible');
    return;
  }

  element.classList.remove('project-hidden');
  element.classList.remove('filter-fade-visible');

  scheduleFrame(function() {
    element.classList.add('filter-fade-visible');
  });
}

function hideWithFade(element) {
  if (!element) {
    return;
  }

  element.classList.remove('filter-fade-visible');

  if (!element.classList.contains('project-hidden')) {
    element.classList.add('project-hidden');
  }
}

// Function to filter projects based on category and highlight the active button
function filterProjects(category, element) {
  var projects = document.querySelectorAll('.project-card');
  var buttons = document.querySelectorAll('.filter-buttons .btn');
  var message = document.getElementById('project-filter-message');
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
    ensureFadeTarget(project);

    if (category && project.classList.contains(category)) {
      hasVisibleProject = true;
      showWithFade(project);
    } else {
      hideWithFade(project);
    }
  });

  if (category && hasVisibleProject) {
    filterDependents.forEach(function(dependent) {
      showWithFade(dependent);
    });
  } else {
    filterDependents.forEach(function(dependent) {
      hideWithFade(dependent);
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

document.addEventListener('DOMContentLoaded', function() {
  var projects = document.querySelectorAll('.project-card');
  projects.forEach(function(project) {
    project.classList.add('project-hidden');
    project.classList.remove('filter-fade-visible');
    ensureFadeTarget(project);
  });

  var filterDependents = document.querySelectorAll('.filter-dependent');
  filterDependents.forEach(function(element) {
    element.classList.add('project-hidden');
    element.classList.remove('filter-fade-visible');
    ensureFadeTarget(element);
  });

  var message = document.getElementById('project-filter-message');
  if (message) {
    message.style.display = '';
    message.textContent = 'Select Web or Game to explore featured work.';
  }
});
