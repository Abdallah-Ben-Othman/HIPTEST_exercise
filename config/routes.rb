Rails.application.routes.draw do
	mount_ember_app :frontend, to: "/"
  	resources :tests
  	resources :test_states
  	resources :features
end
