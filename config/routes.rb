Rails.application.routes.draw do
  resources :welcome, only: [:create, :index]
  root 'welcome#index'
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
    resources :listings, only: [:index, :show]
    resources :savedlistings, only: [:index, :create]
    resources :users, only: [:update, :index, :new, :create]
  end
  delete 'api/savedlistings/delete', :to => 'api/savedlistings#destroy'

end
