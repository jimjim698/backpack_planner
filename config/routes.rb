Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users
  resources :sessions

  root 'sessions#new'

  get '/login' => 'sessions#new'
  post 'login' => 'sessions#create'

end
