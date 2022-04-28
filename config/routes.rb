Rails.application.routes.draw do
  resources :users
  resources :rooms
  resources :messages

  # get '/signup' => 'users#new'
  # post '/users' => 'users#create'

  # route to stay logged in 
  get "/auth", to: "users#show"

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # route to test your configuration
  get '/hello', to: 'application#hello_world'


  #fallback controller
  # get '*path',
  # to: 'fallback#index',
  # constraints: ->(req) { !req.xhr? && req.format.html? }

  

end
