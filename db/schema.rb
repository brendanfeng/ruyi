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

ActiveRecord::Schema.define(version: 20180308142105) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "pg_trgm"
  enable_extension "btree_gin"

  create_table "projects", force: :cascade do |t|
    t.string "title", null: false
    t.string "img_url", null: false
    t.string "blurb", null: false
    t.text "story", null: false
    t.string "category", null: false
    t.integer "goal", null: false
    t.integer "pledged_amount", default: 0, null: false
    t.boolean "public", default: false, null: false
    t.integer "creator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category"], name: "index_projects_on_category"
    t.index ["category"], name: "trgm_idx_on_category", using: :gin
    t.index ["creator_id"], name: "index_projects_on_creator_id"
    t.index ["title"], name: "index_projects_on_title", unique: true
    t.index ["title"], name: "trgm_index_on_title", using: :gin
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["password_digest"], name: "index_users_on_password_digest", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
