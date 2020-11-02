# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :users do
    resource :session, only: [:create, :destroy]
  end
end
