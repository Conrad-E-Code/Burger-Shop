class CartsController < ApplicationController
    def index
        cart = Cart.find_by user_id: session[:user_id]
        render json: cart, status: :ok, serializer: CartSerializer
    end
end
