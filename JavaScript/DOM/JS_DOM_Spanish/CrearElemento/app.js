// Crear un elemento es util para cuando se recibe información de un servidor o una API (Application Programming Interface) en formato JSON y se necesita convertir o transformar esa información en elementos HTML que el usuario pueda ver o interactuar.

// Esta es la referencia en donde queremos agregar el nuevo elemento.
const listaDeToppings = document.getElementById('lista-toppings');

const toppingNuevo = document.createElement('li'); // En este caso lo que esta dentro del paréntesis es el elemento que queremos crear.

// Agregamos clases a toppingNuevo para que se agreguen los estilos y se pueda apreciar o ver el elemento nuevo en el HTML.
toppingNuevo.classList.add('topping', 'fondo-marron');

// Aquí se le agrega el texto.
toppingNuevo.innerText = "Queso Extra";

// Especificamos donde lo queremos agregarlo de esta manera.
listaDeToppings.append(toppingNuevo);

// De esta manera podemos remover el elemento nuevo (remueve los comentarios para ver su función).

//toppingNuevo.remove();