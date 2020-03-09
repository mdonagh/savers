Rails.application.routes.draw do
  resources :payments
  resources :user_discounts
  resources :discounts
  resources :likes
  resources :user_last_catagories
  resources :last_catagories
  resources :sub_catagories
  resources :catagories
  resources :users

  post '/users/login', to: 'users#login'
  post '/forgot_password', to: 'users#send_password_reset'
  put '/reset_password', to: 'users#reset_password'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
