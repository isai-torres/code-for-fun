from classCar import Car
from classCar import Owner

owner1 = Owner("Juan", "123 Colorado 00988", "990-344-4444") # create an Owner instance
car1 = Car("Toyota", "Corolla", 2020, owner1) # create a Car instance and pass the Owner instance to it

print(car1.make)
print(car1.model)
print(car1.year)
print(car1.owner.name) # access the 'name' attribute of the Owner instance stored in car1.owner

print()

owner2 = Owner("Pedro", "123 Florida 00988", "990-344-8764")
car2 = Car("Toyota", "Tacoma", 2025, owner2)

print(car2.make)
print(car2.model)
print(car2.year)
print(car2.owner.name)