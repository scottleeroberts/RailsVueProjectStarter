# frozen_string_literal: true

class Users::SessionsController < ApplicationController
  skip_before_action :authenticate_user, only: [:create]
  skip_before_action :set_tenant, only: [:create]

  def create
    @user = authenticated_user

    if @user.present?
      cookies.signed[:user_id] = { value: @user.id, expires: 2.weeks.from_now }
    else
      head :unauthorized
    end
  end

  def destroy
    cookies.delete :user_id
    head :ok
  end

  private

  def authenticated_user
    User.authenticate(session_params[:email], session_params[:password])
  end

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
