Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :projects, except: [:edit, :new]
  end

  get "/api/root_view/:category", to: "api/projects/#fetch_by_category"

  root "static_pages#root"
end
