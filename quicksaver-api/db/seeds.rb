# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'

# user = User.create(
#   full_name: "Wellington Vicioso",
#   email: "w@email.com",
#   password: "pass",
#   reset_password: false
# )

catagories = Catagory.create([
  {name: "Entertainment"},
  {name: "Financial/Legal"},
  {name: "Food & Drink"},
  {name: "Health/Fitness"},
  {name: "Home"},
  {name: "Professional"},
  {name: "Personal"},
  {name: "Pet"},
  {name: "Retail"},
  {name: "Senior"},
  {name: "Travel"},
  {name: "Vehicles"},
])

sub_catagories = SubCatagory.create([
  {name: "Family Fun", catagory: catagories[0]},
  {name: "Nightlife", catagory: catagories[0]},
  {name: "Sightseeing & Tours", catagory: catagories[0]},
  {name: "Sports & Outdoors", catagory: catagories[0]},
  {name: "Tickets & Events", catagory: catagories[0]},

  {name: "Advisors", catagory: catagories[1]},
  {name: "Bank/Credit Union", catagory: catagories[1]},

  {name: "Grocery & Markets", catagory: catagories[2]},
  {name: "Restaurants/Bars", catagory: catagories[2]},
  {name: "Specialty/Treats", catagory: catagories[2]},

  {name: "Gyms & Clubs", catagory: catagories[3]},
  {name: "Camps & Crossfit", catagory: catagories[3]},
  {name: "Medical", catagory: catagories[3]},
  {name: "Nutrition & Weight Loss", catagory: catagories[3]},

  {name: "Buy/Sell", catagory: catagories[4]},
  {name: "Cleaning Services", catagory: catagories[4]},
  {name: "Contractors - Indoor", catagory: catagories[4]},
  {name: "Contractors - Outdoor", catagory: catagories[4]},
  {name: "Home Services", catagory: catagories[4]},

  {name: "Business/Office", catagory: catagories[5]},
  {name: "Education", catagory: catagories[5]},
  {name: "TECH/IT", catagory: catagories[5]},

  {name: "Self Care", catagory: catagories[6]},
  {name: "Special Needs", catagory: catagories[6]},

  {name: "Boarding", catagory: catagories[7]},
  {name: "Grooming", catagory: catagories[7]},
  {name: "Health", catagory: catagories[7]},
  {name: "Stores", catagory: catagories[7]},

  {name: "Clothing", catagory: catagories[8]},
  {name: "Electronics", catagory: catagories[8]},
  {name: "Food", catagory: catagories[8]},
  {name: "Home ", catagory: catagories[8]},
  {name: "Kids", catagory: catagories[8]},
  {name: "Office", catagory: catagories[8]},
  {name: "Personal", catagory: catagories[8]},
  {name: "Sports", catagory: catagories[8]},
  {name: "Subscriptions", catagory: catagories[8]},

  {name: "Entertainment", catagory: catagories[9]},
  {name: "Equipment", catagory: catagories[9]},
  {name: "Food", catagory: catagories[9]},
  {name: "Handicap", catagory: catagories[9]},
  {name: "Housing", catagory: catagories[9]},
  {name: "Medical", catagory: catagories[9]},

  {name: "Entertainment", catagory: catagories[10]},
  {name: "Lodging", catagory: catagories[10]},
  {name: "Transportation", catagory: catagories[10]},

  {name: "Professional Services", catagory: catagories[11]},
  {name: "Repair and Maintenance", catagory: catagories[11]},
])


last_catagories = LastCatagory.create([
  {name: "Kid Friendly", sub_catagory: sub_catagories[0]},
  {name: "Adults Only", sub_catagory: sub_catagories[0]},

  {name: "Bars & Clubs", sub_catagory: sub_catagories[1]},
  {name: "Casinos", sub_catagory: sub_catagories[1]},
  {name: "Live Music", sub_catagory: sub_catagories[1]},

  {name: "Concerts", sub_catagory: sub_catagories[4]},
  {name: "Theater & Shows", sub_catagory: sub_catagories[4]},

  {name: "Accounting/Bookeeper", sub_catagory: sub_catagories[5]},
  {name: "Estate Planning", sub_catagory: sub_catagories[5]},
  {name: "Financial  Advisor", sub_catagory: sub_catagories[5]},
  {name: "Insurance", sub_catagory: sub_catagories[5]},
  {name: "Legal", sub_catagory: sub_catagories[5]},
  {name: "Loans", sub_catagory: sub_catagories[5]},

  {name: "Drinks", sub_catagory: sub_catagories[7]},
  {name: "Farmer's Market", sub_catagory: sub_catagories[7]},
  {name: "Meal Delivery", sub_catagory: sub_catagories[7]},

  {name: "African", sub_catagory: sub_catagories[8]},
  {name: "American", sub_catagory: sub_catagories[8]},
  {name: "Asian", sub_catagory: sub_catagories[8]},
  {name: "European", sub_catagory: sub_catagories[8]},
  {name: "French", sub_catagory: sub_catagories[8]},
  {name: "German", sub_catagory: sub_catagories[8]},
  {name: "Greek", sub_catagory: sub_catagories[8]},
  {name: "Indian", sub_catagory: sub_catagories[8]},
  {name: "Italian", sub_catagory: sub_catagories[8]},
  {name: "Latin American", sub_catagory: sub_catagories[8]},
  {name: "Mediterranean", sub_catagory: sub_catagories[8]},
  {name: "Mexican", sub_catagory: sub_catagories[8]},
  {name: "Middle Eastern", sub_catagory: sub_catagories[8]},
  {name: "Pakistani", sub_catagory: sub_catagories[8]},
  {name: "Vegetarian", sub_catagory: sub_catagories[8]},

  {name: "Candy", sub_catagory: sub_catagories[9]},
  {name: "Coffee/Tea", sub_catagory: sub_catagories[9]},
  {name: "Ice Cream", sub_catagory: sub_catagories[9]},
  {name: "Popcorn", sub_catagory: sub_catagories[9]},

  {name: "Holistic Health", sub_catagory: sub_catagories[12]},
  {name: "Therapist", sub_catagory: sub_catagories[12]},
  {name: "Doctor/Dentist", sub_catagory: sub_catagories[12]},
  {name: "Pharmacy", sub_catagory: sub_catagories[12]},

  {name: "Meal Plan", sub_catagory: sub_catagories[14]},
  {name: "Nutritional Therapy", sub_catagory: sub_catagories[14]},
  {name: "Weight Loss Clinic", sub_catagory: sub_catagories[14]},
  {name: "Vitamins & Supplements", sub_catagory: sub_catagories[14]},

  {name: "Appraisal", sub_catagory: sub_catagories[16]},
  {name: "Mortgage Lender", sub_catagory: sub_catagories[16]},
  {name: "Movers/Transportation", sub_catagory: sub_catagories[16]},
  {name: "Real Estate Agent", sub_catagory: sub_catagories[16]},

  {name: "Adaptive Equipment", sub_catagory: sub_catagories[17]},
  {name: "Handyman", sub_catagory: sub_catagories[17]},
  {name: "Home Improvement", sub_catagory: sub_catagories[17]},

  {name: "Lawn & Garden", sub_catagory: sub_catagories[18]},
  {name: "Patio & Pool", sub_catagory: sub_catagories[18]},

  {name: "Cable/TV/Satellite", sub_catagory: sub_catagories[18]},
  {name: "Home Warranty", sub_catagory: sub_catagories[18]},
  {name: "HVAC", sub_catagory: sub_catagories[18]},
  {name: "Plumbing & Electrical", sub_catagory: sub_catagories[18]},

  {name: "Accounting/Bookeeper", sub_catagory: sub_catagories[19]},
  {name: "Business Cards", sub_catagory: sub_catagories[19]},
  {name: "Copy/Printing", sub_catagory: sub_catagories[19]},
  {name: "Computers/Phones", sub_catagory: sub_catagories[19]},

  {name: "Academy", sub_catagory: sub_catagories[20]},
  {name: "Montessori", sub_catagory: sub_catagories[20]},
  {name: "Tutoring", sub_catagory: sub_catagories[20]},

  {name: "Computer/Electronics Repair", sub_catagory: sub_catagories[21]},
  {name: "Equipment Recycle", sub_catagory: sub_catagories[21]},
  {name: "PC Repair", sub_catagory: sub_catagories[21]},
  {name: "Phones", sub_catagory: sub_catagories[21]},

  {name: "Dental/Vision", sub_catagory: sub_catagories[22]},
  {name: "Hair/Skin/Nails", sub_catagory: sub_catagories[22]},
  {name: "Mind/Body", sub_catagory: sub_catagories[22]},

  {name: "Childcare", sub_catagory: sub_catagories[23]},
  {name: "Eldercare", sub_catagory: sub_catagories[23]},
  {name: "Homecare", sub_catagory: sub_catagories[23]},

  {name: "Dog Walker", sub_catagory: sub_catagories[24]},
  {name: "Pet Sitter", sub_catagory: sub_catagories[24]},

  {name: "Animal Clinic", sub_catagory: sub_catagories[26]},
  {name: "Veterinarian", sub_catagory: sub_catagories[26]},

  {name: "Dealership", sub_catagory: sub_catagories[46]},
  {name: "Detailing", sub_catagory: sub_catagories[46]},
  {name: "Insurance", sub_catagory: sub_catagories[46]},

  {name: "Body Shop", sub_catagory: sub_catagories[47]},
  {name: "Rental", sub_catagory: sub_catagories[47]},
  {name: "Tires & Wheels", sub_catagory: sub_catagories[47]},
])

discounts = Discount.create([
  {
    name: 'Target',
    desc: '50% Off Everything',
    expiration: DateTime.new(2016,5,17).next_day(30),
    telephone: '0000000000',
    # address: ,
    # country: ,
    # city: ,
    # state: ,
    # zip: ,
    # lat: ,
    # lng: ,
  },
  {
    name: 'Trader Joes',
    desc: '50% Off Everything',
    expiration: DateTime.new(2016,5,17).next_day(30),
    telephone: '0000000000',
  },
  {
    name: 'Walmart',
    desc: '50% Off Everything',
    expiration: DateTime.new(2016,5,17).next_day(30),
    telephone: '0000000000',
  }
])

# UserLastCatagory.create([
  # {user: user, last_catagory: last_catagories[1]},
  # {user: user, last_catagory: last_catagories[2]}
# ])
