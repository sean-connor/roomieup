class Addlatlng < ActiveRecord::Migration
  def change
    add_column :listings, :lat, :float, :null => false
    add_column :listings, :lng, :float, :null => false
  end
end
