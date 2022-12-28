# Burger-Shop
Phsae 4 Group Project Repo For Cameron Millen, Michelle Too, and Conrad Etherington
Burger-Shop
INITIAL GOAL SETTING FOR THIS PROJECT:
!* = CORE
#* = STRETCH

USER STORIES: 2 kinds of user:

CUSTOMER: 

WITHOUT LOGGING IN CLIENT CAN...															BRAINSTORM ACTION VERBS FOR SOLVING USER STORIES FOR RESUMES:

#Use a map to find locations:
	strech goal: find location based on some information obtained about the client. (request location from client?)

!Set a location to order from and view menu:	CREATE restaurant table
						
	WHEN ORDERING: grab location instance and add to it's unprocessed orders array only after login/payment or just payment

#View Menu: NAVBAR

	MENU: burgers, fries, drinks, etc.
	Click Items to add to cart. (handle if loggen in or not)

	STOCK UPDATED DYNAMIC MENU

!View Deals: NAVBAR
	Overstock itmes: 50 % off **STRETCH
	Generic Deals that have better prices than the regular menu, buy and save, bogo, etc.

Create Account: 
	Account Will Have:
	Payment information:? maybe not maybe the payment API WIll handle that and we wont store cust info they have to enter it every time.
	name:
	default_location:
	birthday: STRETCH GOAL BIRTHDAY DEAL
	Current_order: STRETCH ATTRIBUTE
	past_orders: []
	MULTI STEP A C PROCESS? 

Login:	Enter username and password into form.
	handle fronted auth stuff

Place Order:
	PATCH REQUEST TO Find restaurant instance and add to 
	Order.create order_params
	
	def order_params
		params.permit ADD PARAMS HERE
		
		
	end
View ORDER STATUS: 

SEE LIVE MESSAGES FROM KITCHEN ABOUT ORDER UPDATES Cook flips patty === patty flipped @ 12:34 get ready!, @12:38 Buns Loaded, @12:38 Burgers in the bag, If last item in order is added to bag I want A COME AND GET IT message!

KITCHEN: 

Manager (user-type)
EVERYTHING COOK CAN DO PLUS
Manage incoming Stock Orders
Manage inventory
! View employee hours ^^stretch goal
	Send edit request to payroll server:
payroll server doesn't exist redirect to Resume page for project participants: EACH PERSON COME UP WITH A HEADLINE YOU WANT TO USE TO get them to click on your full resume link. Embed Portrait, Contact-info linkedin, github, blog links!

COOK: 
	update order status: PATCH "begin"
	Send timestamps for different cooking process PATCH to kitchen messages:
	update order status to when last timestamp finshes "ready"
	
DISTRIBUTION:

ADD ITEMS TO SHIPMENT:
EMAIL/PRINT BOL/SHIPMENT DETAILS
SHIPPER: "Denver warehouse"
SHIPPER CONTACT:
RECEIVER: "STORE #4231"
RECEIVER CONTACT:
DESTINATION: receiver.location
ORIGIN: shipper.location

TO DO'S:

CREATE TABLE STRUCTURES:

restaurants table: location manager_id: phone

A restaurant has_many Orders

Orders Table: 
Belongs_to Customer
Belongs_to Restaurant 
has_many items
has_many kitchen messages. a kitchen message could be sorry we are closed, or pattys on the grill @ Fries in the Frier @
Example Order:
{ customer_id: 1
  restaurant_id: 1
	order_status: pending or canceled or  completed, etc.  	
}
CUSTOMER MEssages: (Pattys on the grill @ timestamp, Fries in the Frier @ )
plus the items accessed through instance.items? 

	DEV NOTE: DESCRIBE EACH TABLE IN A RELATIONAL DATABASE SENSE FOR RESUME USE

Items Table:
Belongs to: Order
Example Item: 
	
	{
		"name": "large_fry"
		"price": 2
		order_id: 1
		"ingredients: 25 singular fries "STRETCH GOAL CUSTOMER CAN SPECIFY EXACT NUMBER OF DESIRED FRIES UP TO 75 AT A TIME (max will fit in fryer, sizes become obselete, just have a minumum fry order of 18.)"
		A RESTAURANT THAT IS DOWN TO A SINGLE FRY EFFICIENT.	
	}
	
Kitchen Message Table:
belongs to: order  


Customers Table:
has many orders
has many kitchen messages through orders


Restaurants Table:

has_many: orders

has_many: Customers through orders

GENERAL BROADCAST OF PAST 10 KITCHEN MESSAGES?

has_many: Kitchen Messages through orders:

SERVER ROUTES:

:customer/orders/:order_id/status get kitchen messages

customer get menu
customer post new order

kitchen messages.find_by order_id=?
# STRETCH customer post review/rating


PROJECT NOTES:

Hours of operation:
11:00 am to 9 PM local time
10 hours.

when ordering on menu: can only place an order betwenn the hours of 11 and 9. we need to check time. either on the front end of the back end. this could be a validation possibly in rails?

hypothetical demand scenario:

11-1 - 60 Burgers Per Hour (BPH) = 120 burgers
1-4 10 BPH = 30 burgers
4-9 15 BPH = 75 burgers

    225 burgers X 0.25 lbs = 56.25 pounds of patties 
    burgers ordered X 0.8 = fry orders = 180 X 4 oz. of fries (1/4 lb)
    DAILY USAGE:

    56 Pounds of Patties
    45 pounds of fries
    225 BUNS
    200 cups, lids, straws, whatever.

    WAREHOUSE INVENTORY:

    1 case of patties = 20 pounds (80 Patties)
    1 case of fries = 25 pounds (100 orders of fries)
    1 case of buns = 24 buns
    1 case of cups = 100 cups
    
    TWICE WEEKLY STOCK ORDER: SUNDAY, THURSDAY
    WAREHOUSE WILL SHIP TO LOCATION

    12 cases of patties (240 pounds) 4 patties to a pound 960 patties
    8 cases of fries    (200 pounds) 4 orders to a pound 800 orders
    40 cases of buns    (960 buns) 
    8 cases of cups.    (800 cups)

    
    WHEN A CASE GETS LOGGED IN AT THE RESTAURANT IT CHANGES FROM A CASE TO A NUMBER OF ITEMS IN THE INGREDIENT INVENTORY.

    RESTAURANTS SHOULD KEEP TRACK OF PAST ORDERS IN A WAY THAT USES THE DATA TO TRACK SUPPLY USAGE THROUGHOUT THE DAY.


    





    

	
PROJECT NOTES:

Hours of operation:
11:00 am to 9 PM local time
10 hours.

when ordering on menu: can only place an order betwenn the hours of 11 and 9. we need to check time. either on the front end of the back end. this could be a validation possibly in rails?

hypothetical demand scenario:

11-1 - 60 Burgers Per Hour (BPH) = 120 burgers
1-4 10 BPH = 30 burgers
4-9 15 BPH = 75 burgers

    225 burgers X 0.25 lbs = 56.25 pounds of patties 
    burgers ordered X 0.8 = fry orders = 180 X 4 oz. of fries (1/4 lb)
    DAILY USAGE:

    56 Pounds of Patties
    45 pounds of fries
    225 BUNS
    200 cups, lids, straws, whatever.

    WAREHOUSE INVENTORY:

    1 case of patties = 20 pounds (80 Patties)
    1 case of fries = 25 pounds (100 orders of fries)
    1 case of buns = 24 buns
    1 case of cups = 100 cups
    
    TWICE WEEKLY STOCK ORDER: SUNDAY, THURSDAY
    WAREHOUSE WILL SHIP TO LOCATION

    12 cases of patties (240 pounds) 4 patties to a pound 960 patties
    8 cases of fries    (200 pounds) 4 orders to a pound 800 orders
    40 cases of buns    (960 buns) 
    8 cases of cups.    (800 cups)

    
    WHEN A CASE GETS LOGGED IN AT THE RESTAURANT IT CHANGES FROM A CASE TO A NUMBER OF ITEMS IN THE INGREDIENT INVENTORY.

    RESTAURANTS SHOULD KEEP TRACK OF PAST ORDERS IN A WAY THAT USES THE DATA TO TRACK SUPPLY USAGE THROUGHOUT THE DAY.


    





    
