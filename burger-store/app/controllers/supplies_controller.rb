class SuppliesController < ApplicationController
    def create
        denver_shipment = Shipment.create location_id: Location.all[0].id
        denver_supplies =
            Supply.create(
                name: params[:name],
                weight: 20,
                shipment_id: denver_shipment.id,
            )
        denver_shipment.check_in
        user = User.find_by id: session[:user_id]
        inventories = user.inventories
        render json: inventories, status: :ok
    end
end
