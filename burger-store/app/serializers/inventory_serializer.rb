class InventorySerializer < ActiveModel::Serializer
    attributes :id, :patty_count, :bun_count, :fries_count, :onion_rings_count
    belongs_to :location
end
