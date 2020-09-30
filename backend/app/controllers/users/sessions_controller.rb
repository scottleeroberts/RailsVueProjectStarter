# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  respond_to :json

  def create
    super do
      @token = current_token
    end
  end

  private

  def current_token
    request.env['warden-jwt_auth.token']
  end

  def respond_to_on_destroy
    head :ok
  end
end
