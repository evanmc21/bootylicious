Rails.application.routes.draw do
  namespace :api do
    resources :workouts, except: [:new]
      resources :comments
  end
end
