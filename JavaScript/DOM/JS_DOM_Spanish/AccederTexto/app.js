const listaDeToppings = document.getElementById('lista-toppings');

// Devuelve únicamente texto legible para humanos (lo que ves en la pantalla) y respeta los estilos CSS.
console.log("> innerText")
console.log(listaDeToppings.innerText);

// textContent muestra el texto con los espacios y saltos de línea, mientras que innerText no los muestra y no respeta los estilos CSS.
console.log("> textContent");
console.log(listaDeToppings.textContent);

// innerHTML muestra el contenido HTML dentro del elemento, incluyendo las etiquetas HTML. En este caso, muestra la lista de toppings con sus respectivas etiquetas <li>.
console.log("> innerHTML");
console.log(listaDeToppings.innerHTML);