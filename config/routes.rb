Rails.application.routes.draw do
  get 'pages/home'
  get 'pages/secrets'
  get 'chronocrow', to: 'pages#chrono_crow', as: :chrono_crow
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  # Set the root route to the home action of PagesController
  root 'pages#home'

  resources :secrets, only: [:show]

  resources :games, only: [:new, :score] do
    collection do
      post :score
      post :reset_score
      post :play_again
    end
  end


end
