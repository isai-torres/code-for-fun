const primerTopping = document.querySelector('.topping');

console.log(primerTopping); // Muestra el primer elemento con la clase 'topping'.
console.log(primerTopping.style); // Muestra el objeto CSSStyleDeclaration con los estilos en línea del elemento aplicar.

primerTopping.style.backgroundColor = 'blue'; // Se cambia el fondo del primer topping a azul.
primerTopping.style.color = '#6dff00'; // Se cambia el color del texto del primer topping a un verde brillante.
primerTopping.style.textTransform = 'uppercase'; // Se cambia el texto del primer topping a mayúsculas.