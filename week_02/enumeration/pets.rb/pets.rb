pets = [
{
    name: "Sir Percy",
    pet_type: :cat,
    breed: "British Shorthair",
    price: 500
},
{
    name: "King Bagdemagus",
    pet_type: :cat,
    breed: "British Shorthair",
    price: 500
},
{
    name: "Sir Lancelot",
    pet_type: :dog,
    breed: "Pomsky",
    price: 1000,
},
{
    name: "Arthur",
    pet_type: :dog,
    breed: "Husky",
    price: 900,
},
{
    name: "Tristan",
    pet_type: :dog,
    breed: "Basset Hound",
    price: 800,
},
{
    name: "Merlin",
    pet_type: :cat,
    breed: "Egyptian Mau",
    price: 1500,
}
]

# Print out all of the names using a loop
 # for pets in pets
 #   p {|pets| name}
 # end


# Print out all of the names using an enumerable

# Find a pet using a loop and if statement

# Find a pet using an enumerable

# Task: using enumerable methods:
# 1. Find the pet which breed is Husky

# p pets.find {|pet| pet:[breed] == "Husky"}

## 2. Make an array of all of the pets' names
pets_names = []
pets.each {|pet| pets_names << pet[:name]}
p pets_names


## 3. Find out if there are any pets of breed 'Dalmation' (true or false)

p pets.any?{|pet| pet[:breed] == "Dalmation" }

## 4. Find the most expensive pet i.e. pet with the highest/maximum price
p pets.max {|pet| pet[:price] }

## 5. Find the total value (price) of all of the pets added together.
p.pets.inject(0) {|total, pet| total + pet[:price] }

p.pets.sum {|pet| pet[:price] }


## 6. Change each pet so their price is 50% chea
# p pets

p pets.each{|pet| pet[:price] -= (pet[:price] /  2)}

puts pets

p pets.each {|pet| pet[:price] = pet[:price].div(2)}

pets.map! {|pet| pet[:price] /= 2; pet}
puts pets

# p pets.find {|pet| pet:[breed] == "Husky"}
#
