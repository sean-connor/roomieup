class AddUsername < ActiveRecord::Migration
  def change
    drop_table :messages
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :user_id, null: false
      t.integer :chat_id, null: false
      t.string :username, null: false

      t.timestamps null: false
    end
  end
end
