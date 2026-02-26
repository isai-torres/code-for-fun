class Dog:
    # Class attribute:
    # This attribute belongs to the class itself.
    # All Dog objects share the same value unless it is overridden in an instance.
    species = "Husky"

    # Instance attributes:
    # The constructor (__init__) runs every time you create a new Dog object.
    # Attributes defined with self. belong to each individual instance.
    def __init__(self, name, age):
        # Each Dog object stores its own name
        self.name = name
        # Each Dog object stores its own age
        self.age = age
