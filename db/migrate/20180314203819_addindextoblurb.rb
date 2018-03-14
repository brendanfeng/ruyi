class Addindextoblurb < ActiveRecord::Migration[5.1]
  def change
    add_index :projects, :blurb
    add_index :projects, :blurb, using: :gin, name: "trgm_idx_on_blurb"
  end
end
