Rails.application.routes.draw do
  resources :welcome, only: [:create, :index]
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  root 'welcome#index'
  namespace :api, defaults: {format: :json} do
    resources :clrequest, only: [:index]
  end

end
