// Select Menu
function menu() {
  console.log("Please make a selection from 1 to 3.");
  console.log("1. Convert Celsius to Fahrenheit.");
  console.log("2. Convert Fahrenheit to Celsius.");
  console.log("3. To exit the program or write cancel.");
}

// Function to Convert Celsius to Fahrenheit 
function celsiusToFahrenheit() {
  while (true) {
    const temperature = parseFloat(prompt("Please enter the temperature to be converted: "));

    if (isNaN(temperature)) {
      console.log("Invalid input. Please enter a number \n");
      continue;
    }

    const convertedTemperature = (temperature * 9/5) + 32;
    console.log(`Your Celsius temperature converted to Fahrenheit is ${convertedTemperature}°F \n`);
    break;
  }
}

// Function to Convert Fahrenheit to Celsius
function fahrenheitToCelsius() {
  while (true) {
    const temperature = parseFloat(prompt("Please enter the temperature to be converted: "));

    if (isNaN(temperature)) {
      console.log("Invalid input. Please enter a number \n");
      continue;
    }

    const convertedTemperature = (temperature - 32) * 5/9;
    console.log(`Your Fahrenheit temperature converted to Celsius is ${convertedTemperature}°C \n`);
    break;
  }
}

// Main Program
let selection = 0;

console.log("Welcome to Isai's Temperature Converter! \n");

while (selection !== 3) {
  menu();

  const userChoice = prompt("Enter your selection: ");
  if (userChoice === null || userChoice.toLocaleLowerCase() === "cancel") {
    console.log("Closing program...");
    break;
  }

  selection = parseInt(userChoice, 10);

  if (isNaN(selection)) {
    console.log("Invalid input. Please enter a number from 1 to 3 or write cancel to exit the program. \n");
    continue;
  }


  if (selection === 1) {
    celsiusToFahrenheit();
  } 
  else if (selection === 2) {
    fahrenheitToCelsius();
  }
  else if (selection === 3) {
    console.log("Closing program...");
  }
  else {
    console.log("Invalid selection, please make a selection from 1 to 3 or write cancel to exit the program.. \n");
  }
}