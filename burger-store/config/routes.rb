Rails.application.routes.draw do
    resources :inventories
    resources :supplies
    resources :shipments
    resources :locations
    resources :managers
    resources :users
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    # Defines the root path route ("/")
    # root "articles#index"
    get "/hello", to: "application#hello_world"
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    post "/cart", to: "items#create"
    # tables:
    # restaurants, orders, manager, customers
    get "/cart", to: "carts#index"
    post "/order", to: "orders#create"
end
