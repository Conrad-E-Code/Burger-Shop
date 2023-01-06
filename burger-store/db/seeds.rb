# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Location.destroy_all
Inventory.destroy_all
Shipment.destroy_all
Supply.destroy_all
Cart.destroy_all


manager = User.create(username: "manager1", password: "managerpass", is_manager: true)
michelle = User.create(username: "michelle", password: "1234", is_manager: false)
conrad = User.create(username: "conrad", password: "burgers", is_manager: false)
cameron = User.create(username: "cameron", password: "hackerman", is_manager: false)

manCart = Cart.create user_id: manager.id
conCart = Cart.create user_id: conrad.id
camCart = Cart.create user_id: cameron.id
michCart = Cart.create user_id: michelle.id

sliders = Item.create name: "Sliders", cart_id: manCart.id, price: 12.01
onion_rings = Item.create name: "Onion Rings", cart_id: manCart.id, price: 6.89
fries = Item.create name: "Fries", cart_id: manCart.id, price: 4.19

denver = Location.create address: "2228 Blake St #100, Denver, CO 80205", user_id: manager.id
ny = Location.create address: "11 Broadway 2nd floor, New York, NY 10004", user_id: manager.id

denver_inv = Inventory.create location_id: denver.id, patty_count: 5, bun_count: 5, fries_count: 5
ny_inv = Inventory.create location_id: ny.id, patty_count: 5, bun_count: 5, fries_count: 5



denver_shipment = Shipment.create location_id: denver.id
ny_shipment = Shipment.create location_id: denver.id

denver_shipment_patties = Supply.create name:"patties", weight: 20, shipment_id: denver_shipment.id
denver_shipment_buns1 = Supply.create name:"buns", weight: 1, shipment_id: denver_shipment.id
denver_shipment_buns2 = Supply.create name:"buns", weight: 1, shipment_id: denver_shipment.id
denver_shipment_fries = Supply.create name:"fries", weight:25, shipment_id: denver_shipment.id
ny_shipment_patties = Supply.create name:"patties", weight: 20, shipment_id: ny_shipment.id

puts "Done seeding"

# build models + relationships
# allow manager to update inventory
# inventory - burgers, drinks, fries
# allow customers to order from inventory

# restaurant/inventory < orders > customers