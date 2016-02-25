class AddUserInfo < ActiveRecord::Migration
  def change
    add_column :users, :is_new, :boolean, :default => true
    add_column :users, :description, :text
    add_column :users, :profile_picture, :string
  end
end
