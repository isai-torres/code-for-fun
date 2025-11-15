class Car:
# Combining objects
# 'owner' must be an instance of the Owner class
# store the Owner object inside the Car object
  def __init__(self, make, model, year, owner): 
    self.make = make
    self.model = model
    self.year = year
    self.owner = owner

class Owner:
  def __init__(self, name, address, phone_number):
    self.name = name
    self.address = address
    self.phone_number = phone_number