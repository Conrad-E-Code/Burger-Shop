class AddIsManagerToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :is_manager, :boolean
  end
end
