class OrdersController < ApplicationController
    skip_before_action :manager_authorize, only: [:create]
    def create
        order =
            Order.create location_id: 1,
                                      user_id: session[:user_id],
                                      sliders: params["Sliders"],
                                      onion_rings: params["Onion Rings"],
                                      fries: params["Fries"]
        user = User.find_by id: session[:user_id]
        user.cart.destroy
        Cart.create user_id: user.id

        render json: order, status: :created
    end
end
