console.log("> Este ejemplo muestra todos los innerText de los toppings");
const toppings = document.getElementsByClassName("topping");

// El for of es para recorrer cada uno de los elementos con la clase "topping" y mostrar su innerText.
for (const losToppings of toppings) { 
  console.log(losToppings.innerText);
}

// ----------------------------------------------------------------------------

const albahaca = document.getElementById("albahaca");

function mostrarClick() {
  console.log("¡Haz hecho clic en la albahaca!");
}

albahaca.addEventListener("click", mostrarClick); // Los parametros son el tipo de evento y la función a ejecutar ("click" y "mostrarClic"). Esto es una forma mas practica de agregar eventos en el DOM en este caso sustituye el onclick que escribimos en el HTML. Además, se pueden agregar múltiples eventos al mismo elemento sin sobrescribir los anteriores, lo que no es posible con onClick.