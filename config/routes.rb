Rails.application.routes.draw do
  resources :welcome, only: [:create, :index]
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  root 'welcome#index'
  namespace :api, defaults: {format: :json} do
    resources :listings, only: [:index, :show]
    resources :savedlistings, only: [:index, :create]
    resources :users, only: [:update, :index]
  end
  delete 'api/savedlistings/delete', :to => 'api/savedlistings#destroy'

end
