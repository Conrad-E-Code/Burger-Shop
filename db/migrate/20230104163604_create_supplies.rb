class CreateSupplies < ActiveRecord::Migration[7.0]
  def change
    create_table :supplies do |t|
      t.string :name 
      t.integer :weight
      t.integer :shipment_id
      
      t.timestamps
    end
  end
end
