class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :img_url, null: false
      t.string :blurb, null: false
      t.text :story, null: false
      t.string :category, null: false
      t.integer :goal, null: false
      t.integer :pledged_amount, null: false, default: 0
      t.boolean :public, null: false, default: false
      t.integer :creator_id, null: false

      t.timestamps
    end

    add_index :projects, :title, unique: true
    add_index :projects, :category
    add_index :projects, :creator_id
    enable_extension "pg_trgm"
    enable_extension "btree_gin"
    add_index :projects, :title, using: :gin, name: "trgm_index_on_title"
    add_index :projects, :category, using: :gin, name: "trgm_idx_on_category"
  end
end
