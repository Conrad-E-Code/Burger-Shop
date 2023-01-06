class Inventory < ApplicationRecord
    belongs_to :location
    has_many :ingredients
    
end
