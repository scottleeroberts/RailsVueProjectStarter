# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }
  devise_scope :user do
    get 'users/current', to: 'users/sessions#show'
  end
end
