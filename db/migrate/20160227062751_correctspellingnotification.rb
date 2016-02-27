class Correctspellingnotification < ActiveRecord::Migration
  def change
    rename_table :notifciations, :notifications
  end
end
