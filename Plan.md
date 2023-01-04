question for tomorrow: is it okay practice to have certain accounts that have extra keys that others do not. (user table, only some users have is_manager key with a boolean value)
alternatively, are there other options for session.include? for authorizing requests.




Goals:

User (manager) can log in and see shipments that need to be checked in. READ SHIPMENTS


Can check in shipments. which adds to the inventory of the location UPDATE INVENTORY

when shipments are checked in successfully they are deleted. DELETE SHIPMENT

can view inventories: READ INVENTORY
<!-- location.inventory.ingredients -->

can subtract from inventory DELETE INGREDIENT (dependant destroy)


Stretch goals:

Shipment discrepancy handling

TRACK INVENTORY LEVELS OVER TIME IMPLEMENT CHART API?
RENDER MAP API TO PAGE WITH A PIN SHOWING A FLATIRON LOCATION

Traceable sources for ingredients







Model Planning In order of Inheritance: 

USER model:
attributes: 

is_manager?
username
password_digest

relationships:
has_many locations (maybe)
has_many inventories through locations
has_many shipments through locations

#BEHAVIORS:

a manager can process shipments add ingredients to inventory for their store

post "/inventory/add" to: "controller#add"
manager will post in bulk need that need to translate to broken down ingredients in inventory. 

for a case of burgers:
################## 1st Method brainstorming may be obsolete
#inside user model we have a method look something like this.
#(have to be manger to execute)
#
#user model method for getting inventory_id
#
#def get_inventory_id
#    self.
#end
#
#def patty_check_in 
#inventory = Inventory.find_by user_id: self.id
#
#80.times |do| Ingredient.create name: patty, inventory_id: (find the correct inventory id) 


@LOCATION Model
attributes:

address: can either be a string or an object with a bunch of strings.
user_id: integer (foreign key for manager)


relationships: 
has_many orders
has_one inventory
has_many customers through order
has_many ingredients through inventory
belongs_to User (manager_only)

BEHAVIORS:


SHIPMENT
attributes:

location_id: integer (destination)
tracking_number: string

relationships:
belongs_to location
has_many Supplies
??XXX belongs_to inventory through location

#BEHAVIORS:
contains supplies, has tracking number 
has a method for the conversion (DETERMINE LOCATION OF THIS METHOD)
shipment.supplies.each |supply| do

if supply.name == "patties"
    80.times do
    Ingredient.create name: patty inventory_id: supply.shipment.location.inventory.id
    end
elsif fries conversion
    finsih code here
elsif buns conversion
    and here
end



SUPPLY:
attributes:

name:patties || fries || buns
weight: 20
shipment_id:

relationships:
belongs_to shipment

#BEHAVIORS:
gets converted into INGREDIENT inside INVENTORY by USER (manager-only)
is a factor in above iteration for SHIPMENT

Inventory Table: Join Table between location and ingredient
attributes:  
location_id:


relationships:
belongs_to location
has_many ingredients

Ingredients
validates presence :name, inventory_id
validates names + buns || fries || patties
attributes:
 name: string
 inventory_id:

relationships:
belongs_to: inventory 








FINISH FIRST ^^^^^^^^^












ORDERS Table

relationships:
has_many items
belongs_to user
belongs_to location
has_many item_ingredients through items

(how are we going to)

Items Table

attributes:
name: string
order_id: integer (foreign key for order)



relationships:
belongs to inventory
belongs_to order
has_many item_ingredients

BEHAVIORS:

???Item_ingredients table
