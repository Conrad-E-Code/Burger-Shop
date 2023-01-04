# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all

manager = User.create(username: "manager1", password: "managerpass", is_manager: true)
michelle = User.create(username: "michelle", password: "1234")
conrad = User.create(username: "conrad", password: "burgers")
cameron = User.create(username: "cameron", password: "hackerman")

puts "Done seeding"

# build models + relationships
# allow manager to update inventory
# inventory - burgers, drinks, fries
# allow customers to order from inventory

# restaurant/inventory < orders > customers