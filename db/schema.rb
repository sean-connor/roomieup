# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160302165702) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chats", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "listing_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "emails", force: :cascade do |t|
    t.string   "address",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "listingimages", force: :cascade do |t|
    t.string   "url",        null: false
    t.integer  "listing_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "listings", force: :cascade do |t|
    t.string   "title",       null: false
    t.integer  "bedroom",     null: false
    t.integer  "price",       null: false
    t.string   "url",         null: false
    t.text     "description", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.float    "lat",         null: false
    t.float    "lng",         null: false
  end

  create_table "messages", force: :cascade do |t|
    t.string   "body",       null: false
    t.integer  "user_id",    null: false
    t.integer  "chat_id",    null: false
    t.string   "username",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notifications", force: :cascade do |t|
    t.integer  "user_id",                           null: false
    t.string   "notification",                      null: false
    t.string   "notification_type",                 null: false
    t.string   "notification_id",                   null: false
    t.boolean  "read",              default: false
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
  end

  create_table "savedlistings", force: :cascade do |t|
    t.integer  "listing_id", null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_chats", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "chat_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                             null: false
    t.string   "password_digest",                                                                                                      null: false
    t.datetime "created_at",                                                                                                           null: false
    t.datetime "updated_at",                                                                                                           null: false
    t.string   "session_token"
    t.boolean  "is_new",          default: true
    t.text     "description",     default: "Enter a profile description!"
    t.string   "profile_picture", default: "http://res.cloudinary.com/roomieup-com/image/upload/v1456353088/moymcoe5khih7l1wsztr.jpg"
    t.integer  "timepref",        default: 5
    t.integer  "cleanpref",       default: 5
    t.integer  "socialpref",      default: 5
  end

end
