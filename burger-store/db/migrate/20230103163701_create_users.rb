class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|

      t.string :password_digest
      t.string :username
      
      t.timestamps
    end
  end
end
