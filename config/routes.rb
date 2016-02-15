Rails.application.routes.draw do
  devise_for :users
resources :welcome, only: [:create, :index]
root 'welcome#index'
end
