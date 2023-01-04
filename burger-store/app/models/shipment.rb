class Shipment < ApplicationRecord
    belongs_to :location
    has_many :supplies

    def check_in
        self.supplies.each do |supply| 
            inventory = supply.shipment.location.inventory
            if supply.name == "patties"
                patty_count = inventory.patty_count
                newcount = patty_count + 80
                inventory.update patty_count: newcount
                supply.destroy

            
            elsif supply.name == "buns"
                bun_count = inventory.bun_count
                newcount = bun_count + 24
                inventory.update bun_count: newcount
                supply.destroy
            elsif supply.name == "fries"
                fries_amount = inventory.fries_count
                newcount = fries_amount + 100
                inventory.update fries_count: newcount
                supply.destroy
            end
            byebug
        end
    end
end


