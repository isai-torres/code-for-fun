from classUser import User

# Instances
user1 = User("Link", "link@gmail.com", "12345")
user2 = User("Zelda", "zelda@gmail.com", "0987")

user1.greet_user(user2)
# user1 calls the greet_user method and passes user2 as the argument.
# This means: inside the method, 'self' refers to user1, and 'user' refers to user2.