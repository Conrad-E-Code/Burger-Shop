class CartsController < ApplicationController
    skip_before_action :manager_authorize
    def index
        cart = Cart.find_by user_id: session[:user_id]
        cart_item_names = cart.items.map do |item|
            item.name
        end
        cart_item_name_tally = cart_item_names.tally
        cart_item_prices = cart.items.map do |item|
            item.price
        end
        cart_item_prices_tally = cart_item_prices.tally
        response = {items: cart_item_name_tally,
            prices: cart_item_prices_tally}
            render json: response, status: :ok
    end
end
