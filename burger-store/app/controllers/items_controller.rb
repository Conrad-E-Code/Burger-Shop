class ItemsController < ApplicationController
    skip_before_action :manager_authorize, only: %i[create destroy]
    def create
        manager = User.find_by is_manager: true
        manager_cart = Cart.find_by user_id: manager.id
        sliders = manager_cart.items.find_by name: "Sliders"
        onion_rings = manager_cart.items.find_by name: "Onion_Rings"
        fries = manager_cart.items.find_by name: "Fries"
        user = User.find_by id: session[:user_id]
        user_cart = Cart.find_by user_id: user.id
        if params[:name] == "Sliders"
            price = sliders.price
        elsif params[:name] == "Fries"
            price = fries.price
        elsif params[:name] == "Onion_Rings"
            price = onion_rings.price
        end

        item = Item.create cart_id: user_cart.id, name: params[:name], price: price
        #     session[:in_cart] = cart.get_items
        render json: item, status: :created
    end
    def update
        manager = User.find_by is_manager: true
        cart = Cart.find_by user_id: manager.id
        item = Item.find_by cart_id: cart.id, name: params[:name]
        current_price = item.price
        item.update price: current_price + 0.21

        render json: item, status: 202
    end

    def destroy
        # user = User.find_by id: session[:user_id]
        cart = Cart.find_by user_id: session[:user_id]
        item = Item.find_by name: params[:name], cart_id: cart.id
        item.destroy
        cart_item_names = cart.items.map { |item| item.name }
        cart_item_name_tally = cart_item_names.tally
        cart_item_prices = cart.items.map { |item| item.price }
        cart_item_prices_tally = cart_item_prices.tally
        response = { items: cart_item_name_tally, prices: cart_item_prices_tally }

        render json: response, status: :ok
    end
end
