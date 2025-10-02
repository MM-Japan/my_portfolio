# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"

pin "@popperjs/core", to: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/esm/index.js", preload: true
pin "bootstrap", to: 'bootstrap.min.js', preload: true
pin "letter_select", to: "letter_select.js"
pin "particles.min", to: "particles.min.js"
pin "dark_mode_toggle", to: "dark_mode_toggle.js"
pin "filter_projects", to: "filter_projects.js"
