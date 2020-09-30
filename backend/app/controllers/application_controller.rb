# frozen_string_literal: true

class ApplicationController < ActionController::API
  include ActionView::Rendering

  before_action :set_tenant
  before_action :authenticate_user!
  before_action :set_cache_headers
  before_action :set_default_response_format

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
end
