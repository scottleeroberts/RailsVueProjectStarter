# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password

  def self.authenticate(email, password)
    user = User.find_by(email: email)

    user&.authenticate(password)
  end
end

# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           default(""), not null
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#
