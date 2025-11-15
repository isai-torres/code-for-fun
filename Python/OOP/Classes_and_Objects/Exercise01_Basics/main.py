# This is how to import the Dog class if the class is defined in another file.
from classDog import Dog

# Creating an instance of Dog
dog1 = Dog("Luna", 3)

# Accessing the class attribute
print("First Dog Instance:")
print(dog1.name)
print(dog1.age)
print(dog1.species)

print() # Blank line for better readability

# Creating second instance of Dog
dog2 = Dog("Bosly", 6)

print("Second Dog Instance:")
print(dog2.name)
print(dog2.age)
print(dog2.species)

print()

# Creating third instance of Dog and overriding the class attribute species
dog3 = Dog("Max", 2)
dog3.species = "Golden Retriever"  # Overriding the class attribute for this instance

print("Third Dog Instance:")
print(dog3.name)
print(dog3.age)
print(dog3.species)