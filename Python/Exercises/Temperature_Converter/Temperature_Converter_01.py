# Select Menu
def menu():
  print("Please make a selection from 1 to 3.")
  print("1. Convert Celsius to Fahrenheit.")
  print("2. Convert Fahrenheit to Celsius.")
  print("3. To exit the program.")

# Convert Celsius to Fahrenheit
def celsiusToFahrenheit():
  while True:
    try:
      temperature = float(input("Please enter the temperature to be converted: "))
    except ValueError:
      print("Invalid input. Please enter a number \n")
      continue
    temperature = (temperature * 9/5) + 32
    print(f"Your Celsius temperature converted to Fahrenheit is {temperature}°F \n")
    break

# Convert  Fahrenheit to Celsius
def fahrenheitToCelsius():
  while True:
    try:
      temperature = float(input("Please enter the temperature to be converted: "))
    except ValueError:
      print("Invalid input. Please enter a number \n")
      continue
    temperature = (temperature - 32) * 5/9
    print(f"Your Fahrenheit temperature converted to Celsius is {temperature}°C \n")
    break

# Main program
selection = 0

print("Welcome to Isai's Temperature Converter! \n")

while selection != 3:
  menu()
  try:
    selection = int(input("Enter your selection: "))
  except ValueError:
    print("Invalid input. Please enter a number \n")
    continue

  if selection == 1:
    celsiusToFahrenheit()
  elif selection == 2:
    fahrenheitToCelsius()
  elif selection == 3:
    print("Closing program...")
  else:
    print("Invalid selection, please make a selection from 1 to 3. \n")