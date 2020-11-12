# frozen_string_literal: true

class ApplicationController < ActionController::API
  include ActionView::Rendering
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  before_action :authenticate_user
  before_action :set_csrf_cookie
  before_action :set_tenant
  before_action :set_cache_headers
  before_action :set_default_response_format

  rescue_from ActiveRecord::RecordNotFound do |_e|
    head :not_found
  end

  rescue_from ActionController::InvalidAuthenticityToken do |_e|
    head :unauthorized
  end

  private

  def set_tenant
    ActsAsTenant.current_tenant = current_user
  end

  def set_cache_headers
    response.headers['Cache-Control'] = 'no-cache, no-store'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = 'Fri, 01 Jan 1990 00:00:00 GMT'
  end

  def set_default_response_format
    request.format = :json
  end

  def set_csrf_cookie
    cookies['CSRF-TOKEN'] = form_authenticity_token
  end

  def authenticate_user
    return if current_user

    render json: { error: 'Requires authentication' }, status: :unauthorized
  end

  def current_user
    return unless cookies.signed[:user_id]

    @current_user ||= User.find(cookies.signed[:user_id])
  end
end
