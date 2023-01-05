class InventoriesController < ApplicationController
  def index
    user = User.find_by id: session[:user_id]
    inventories = user.inventories
    render json: inventories, status: :ok
  end
  def show
    inventory = Inventory.find_by location_id: params[:id]
    render json: inventory, status: :ok
  end
end
