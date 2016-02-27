class CreateUserChats < ActiveRecord::Migration
  def change
    create_table :user_chats do |t|
      t.integer :user_id, null: false
      t.integer :chat_id, null: false
      
      t.timestamps null: false
    end
  end
end
