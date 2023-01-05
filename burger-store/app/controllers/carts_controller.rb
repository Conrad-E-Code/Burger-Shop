class CartsController < ApplicationController
    def index
        user = User.find_by id: 2 #<---PostMAN  session[:user_id]
        cart = Cart.find_by user_id: user.id
        render json: cart, status: :ok, serializer: CartSerializer

    end
end
