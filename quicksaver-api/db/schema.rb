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

ActiveRecord::Schema.define(version: 2019_12_13_165557) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "catagories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "discounts", force: :cascade do |t|
    t.string "name", null: false
    t.string "desc", null: false
    t.datetime "expiration", null: false
    t.string "telephone", null: false
    t.string "address"
    t.string "country"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.decimal "lat"
    t.decimal "lng"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "last_catagories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "sub_catagory_id"
    t.index ["sub_catagory_id"], name: "index_last_catagories_on_sub_catagory_id"
  end

  create_table "likes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_discount_id"
    t.index ["user_discount_id"], name: "index_likes_on_user_discount_id"
  end

  create_table "sub_catagories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "catagory_id"
    t.index ["catagory_id"], name: "index_sub_catagories_on_catagory_id"
  end

  create_table "user_discounts", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "discount_id"
    t.index ["discount_id"], name: "index_user_discounts_on_discount_id"
    t.index ["user_id"], name: "index_user_discounts_on_user_id"
  end

  create_table "user_last_catagories", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "last_catagory_id"
    t.index ["last_catagory_id"], name: "index_user_last_catagories_on_last_catagory_id"
    t.index ["user_id"], name: "index_user_last_catagories_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "full_name", null: false
    t.string "email", null: false
    t.string "img_url"
    t.string "password_digest", null: false
    t.boolean "reset_password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
