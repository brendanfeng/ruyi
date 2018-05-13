Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create show]
    resource :session, only: %i[create destroy]
    resources :projects, except: %i[edit new]
  end

  get '/api/homepage/:category', to: 'api/projects#fetch_index', defaults: { format: :json }
  get '/api/header', to: 'api/projects#fetch_header', defaults: { format: :json }
  get '/api/search', to: 'api/projects#search_projects', defaults: { format: :json }
  get '/api/searchlimit', to: 'api/projects#limited_search_projects', defaults: { format: :json }

  root 'static_pages#root'
end
