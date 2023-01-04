class CreateInventories < ActiveRecord::Migration[7.0]
  def change
    create_table :inventories do |t|
      t.integer :location_id
      t.integer :patty_count
      t.timestamps
    end
  end
end
