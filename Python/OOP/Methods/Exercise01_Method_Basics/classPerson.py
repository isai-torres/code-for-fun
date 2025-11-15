class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  # Method --> Method --> is used to define behaviors/actions that the object can perform
  def greet(self):
    print(f"Hi, my name is {self.name} and I am {self.age} years old.") # self is used to access the instance's own attributes (name and age) inside the method