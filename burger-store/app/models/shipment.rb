class Shipment < ApplicationRecord
    belongs_to :location
    has_many :supplies
    def check_in
       
        end
    def valid_check ingredient
        byebug
        if ingredient.valid? 
            supply.destroy
            else puts "Ingredient not valid, couldn't delete"
    end
end
end


