class Order < ApplicationRecord
    belongs_to :location
    belongs_to :user
    has_many :items
end
