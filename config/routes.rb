Rails.application.routes.draw do
  resources :test_states
  resources :features
  resources :tests
	mount_ember_app :frontend, to: "/"
  	resources :tests
  	resources :test_states, :path => "test-states"
  	resources :features
end
