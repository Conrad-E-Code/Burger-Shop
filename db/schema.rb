# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_06_190028) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carts", force: :cascade do |t|
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "inventories", force: :cascade do |t|
    t.integer "location_id"
    t.integer "patty_count"
    t.integer "bun_count"
    t.integer "fries_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "onion_rings_count"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.integer "cart_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "price"
  end

  create_table "locations", force: :cascade do |t|
    t.string "address"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", force: :cascade do |t|
    t.integer "user_id"
    t.integer "location_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "sliders"
    t.integer "onion_rings"
    t.integer "fries"
  end

  create_table "shipments", force: :cascade do |t|
    t.integer "location_id"
    t.string "tracking_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "supplies", force: :cascade do |t|
    t.string "name"
    t.integer "weight"
    t.integer "shipment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest"
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_manager"
  end

end
