class ItemsController < ApplicationController
    skip_before_action :authorize
    def create
        byebug
        user = User.find_by id: session[:user_id]
        cart = Cart.find_by user_id: user.id
        item = Item.create cart_id: cart.id, name: params[:name]
        session[:in_cart] = cart.get_items
        byebug
        render json: item, status: :created
    end

end
