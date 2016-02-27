class CreateNotifciations < ActiveRecord::Migration
  def change
    create_table :notifciations do |t|
      t.integer :user_id, null: false
      t.string :notification, null: false
      t.string :notification_type, null: false
      t.string :notification_id, null: false
      t.boolean :read, default: false
      t.timestamps null: false
    end
  end
end
