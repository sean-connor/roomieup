class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.integer :bedroom, null: false
      t.integer :price, null: false
      t.string :url, null: false
      t.text :description, null: false

      t.timestamps null: false
    end
    create_table :savedlistings do |t|
      t.integer :listing_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    create_table :listingimages do |t|
      t.string :url, null: false
      t.integer :listing_id, null: false

      t.timestamps null: false
    end
  end
end
