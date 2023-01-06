class AddSlidersAndFriesAndOnionRingsToOrders < ActiveRecord::Migration[7.0]
  def change
    add_column :orders, :sliders, :integer
    add_column :orders, :onion_rings, :integer
    add_column :orders, :fries, :integer
end
end
