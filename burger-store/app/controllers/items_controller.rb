class ItemsController < ApplicationController
    # skip_before_action :authorize
    def create
        user = User.find_by id: session[:user_id]
        cart = Cart.find_by user_id: user.id
        if params[:name] == "Sliders"
            price = 5.38
        elsif params[:name] == "Fries"
            price = 10.99
        elsif params[:name] == "Onion Rings"
            price = 421.68
        end

        item = Item.create cart_id: cart.id, name: params[:name], price: price

        session[:in_cart] = cart.get_items
        render json: item, status: :created
    end
end
