class Location < ApplicationRecord
    belongs_to :user
    has_one :inventory
    has_many :ingredients, through: :inventory
    has_many :shipments
    #has_many :supplies, through: :shipments
    has_many :orders
    #has_many :users, through: :orders

end
