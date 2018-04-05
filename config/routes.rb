Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :projects, except: [:edit, :new]
  end

  get "/api/homepage/:category", to: "api/projects#fetch_index", defaults: {format: :json}
  get "/api/header", to: "api/projects#fetch_header", defaults: {format: :json}
  get "/api/search", to: "api/projects#search_projects", defaults: {format: :json}

  root "static_pages#root"
end
