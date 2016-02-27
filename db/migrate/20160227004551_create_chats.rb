class CreateChats < ActiveRecord::Migration
  def change
    create_table :chats do |t|
      t.string :title, null: false
      t.integer :listing_id, null: false
      
      t.timestamps null: false
    end
  end
end
