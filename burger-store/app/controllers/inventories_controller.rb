class InventoriesController < ApplicationController
    def show 
    inventory = Inventory.find_by location_id: params[:id]
    inventory_array = []
    inventory_array << {"patty_count": inventory.patty_count} << {"bun_count": inventory.bun_count} << {"fries_count": inventory.fries_count} << {"id": inventory.id}
    render json: inventory, status: :ok
    end
end
