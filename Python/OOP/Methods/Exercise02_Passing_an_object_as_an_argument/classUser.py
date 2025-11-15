class User:
  def __init__(self, user_name, email, password):
    self.user_name = user_name
    self.email = email
    self.password = password

  def greet_user(self, user): 
    # user.user_name - accesses the user_name of another User instance passed as an argument.
    # self.user_name - accesses the user_name of the current object calling the method.
    print(f"Sending message to user {user.user_name}: Hi {user.user_name}, it's {self.user_name}")