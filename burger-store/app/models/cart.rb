class Cart < ApplicationRecord
    belongs_to :user
    has_many :items
    def get_items
        items = self.items
        items.map do |item| 
            send_hash = {
                "id": item.id,
                "name": item.name,
                "cart_id": item.cart_id
                        }
        end
    end
end
