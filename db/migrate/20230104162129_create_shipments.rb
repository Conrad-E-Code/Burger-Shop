class CreateShipments < ActiveRecord::Migration[7.0]
  def change
    create_table :shipments do |t|
      t.integer :location_id
      t.string :tracking_number
      
      t.timestamps
    end
  end
end
