class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :address, null: false
      t.timestamps null: false
    end
  end
end
