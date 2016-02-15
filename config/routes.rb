Rails.application.routes.draw do
resources :welcome, only: [:create, :index]
root 'welcome#index'
end
