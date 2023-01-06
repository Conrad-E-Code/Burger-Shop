class SeedsController < ApplicationController
    skip_before_action :authorize
    skip_before_action :manager_authorize
    def create 
        User.destroy_all
Location.destroy_all
Inventory.destroy_all
Shipment.destroy_all
Supply.destroy_all
Cart.destroy_all

manager =
    User.create(username: "manager1", password: "managerpass", is_manager: true)
michelle =
    User.create(username: "michelle", password: "1234", is_manager: false)
conrad = User.create(username: "conrad", password: "burgers", is_manager: false)
cameron =
    User.create(username: "cameron", password: "hackerman", is_manager: false)

manCart = Cart.create user_id: manager.id
conCart = Cart.create user_id: conrad.id
camCart = Cart.create user_id: cameron.id
michCart = Cart.create user_id: michelle.id

sliders = Item.create name: "Sliders", cart_id: manCart.id, price: 12.01
onion_rings = Item.create name: "Onion_Rings", cart_id: manCart.id, price: 6.89
fries = Item.create name: "Fries", cart_id: manCart.id, price: 4.19

denver =
    Location.create address: "2228 Blake St #100, Denver, CO 80205",
                                    user_id: manager.id
ny =
    Location.create address: "11 Broadway 2nd floor, New York, NY 10004",
                                    user_id: manager.id

denver_inv =
    Inventory.create location_id: denver.id,
                                      patty_count: 80,
                                      bun_count: 24,
                                      fries_count: 100,
                                      onion_rings_count: 100
        head :no_content
    end
end
