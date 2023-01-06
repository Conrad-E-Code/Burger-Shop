class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :address 
      t.integer :user_id

      t.timestamps
    end
  end
end
