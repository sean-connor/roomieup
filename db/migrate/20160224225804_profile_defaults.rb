class ProfileDefaults < ActiveRecord::Migration
  def change
    change_column :users, :profile_picture, :string, default: "http://res.cloudinary.com/roomieup-com/image/upload/v1456353088/moymcoe5khih7l1wsztr.jpg"
    change_column :users, :description, :text, default: "Enter a profile description!"
  end
end
