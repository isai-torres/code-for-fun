// getElementByTagName se utiliza para seleccionar elementos del DOM a través de su nombre de etiqueta.
const misToppings = document.getElementsByTagName('li');

console.log("> Mostramos el HTMLCollection de elementos <li>:");
console.log(misToppings); // Mostramos el HTMLCollection de elementos <li> que se han seleccionado.

// Para acceder a un elemento específico dentro del HTMLCollection, podemos usar su índice.
console.log("> Mostramos el primer elemento <li> de la colección:");
console.log(misToppings[0]); // Mostramos el primer elemento <li> de la colección.