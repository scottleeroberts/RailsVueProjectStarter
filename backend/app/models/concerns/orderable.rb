# frozen_string_literal: true

module Orderable
  extend ActiveSupport::Concern

  included do
    scope :by_name, -> { order(:name) }
  end
end
