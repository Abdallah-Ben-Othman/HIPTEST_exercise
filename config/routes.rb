Rails.application.routes.draw do
  resources :tests
  resources :test_states
  resources :features
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
