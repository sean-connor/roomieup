class Userpreferences < ActiveRecord::Migration
  def change
    add_column :users, :timepref, :integer, default: 5
    add_column :users, :cleanpref, :integer, default: 5
    add_column :users, :socialpref, :integer, default: 5
  end
end
