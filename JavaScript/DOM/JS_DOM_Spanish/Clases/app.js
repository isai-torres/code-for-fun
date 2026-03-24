const primerTopping = document.querySelector('.topping');

// Muestra la lista de clases del elemento seleccionado.
console.log("> Lista de clases sin agregar una nueva");
console.log(primerTopping.classList);

// Agrega una nueva clase al elemento.
console.log("> Agregamos una clase nueva");
primerTopping.classList.add('texto-verde');

// Se muestra todas las clases incluyendo la que se agrego.
console.log(primerTopping.classList);

// Verificar si una clase existe.
console.log("> Verificamos si existe una clase");
console.log(primerTopping.classList.contains('texto-verde')); // Devuelve true si la clase existe, de lo contrario devuelve false.

// como eliminar una clase (al eliminarla se eliminan los estilos que tenia) remueva el comentario para ver su función.

// primerTopping.classList.remove('texto-verde');