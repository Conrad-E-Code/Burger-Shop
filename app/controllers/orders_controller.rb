class OrdersController < ApplicationController
    skip_before_action :manager_authorize, only: [:create]
    def create
        order =
            Order.create location_id: 1,
                                      user_id: session[:user_id],
                                      sliders: params[:Sliders] || 0,
                                      onion_rings: params[:Onion_Rings] || 0,
                                      fries: params[:Fries] || 0
        user = User.find_by id: session[:user_id]
        user.cart.destroy
        Cart.create user_id: user.id

        render json: order, status: :created
    end
    def index
        orders = Order.all
        render json: orders, status: :ok
    end
    def destroy
        user = User.find_by id: session[:user_id]
        inventories = user.inventories
        order = Order.find_by id: params[:id]
        inventories[0].update(
            patty_count: inventories[0].patty_count - order.sliders,
            fries_count: inventories[0].fries_count - order.fries,
            bun_count: inventories[0].bun_count - order.sliders,
            onion_rings_count: inventories[0].onion_rings_count - order.onion_rings,
        )
        order.destroy
        index
    end
end
