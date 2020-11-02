# frozen_string_literal: true

class RemoveDevise < ActiveRecord::Migration[6.0]
  def change
    drop_table :jwt_denylist

    remove_column :users, :current_sign_in_at
    remove_column :users, :current_sign_in_ip
    remove_column :users, :encrypted_password
    remove_column :users, :last_sign_in_at
    remove_column :users, :last_sign_in_ip
    remove_column :users, :remember_created_at
    remove_column :users, :reset_password_sent_at
    remove_column :users, :reset_password_token
    remove_column :users, :sign_in_count

    add_column :users, :password_digest, :string

    User.all.each do |user|
      user.password = 'password'
      user.save
    end
  end
end
