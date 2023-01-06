class AddOnionRingsToInventories < ActiveRecord::Migration[7.0]
    def change
        add_column :inventories, :onion_rings_count, :integer
    end
end
