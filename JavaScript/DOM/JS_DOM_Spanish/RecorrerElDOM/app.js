const listaDeToppings = document.getElementById('lista-toppings');

// parentElement devuelve el elemento padre de listaDeToppings, parentNode también funciona pero es mas amplio incluye mas cosas como el texto y comentarios.
console.log("> Ejemplo parentElement");
console.log(listaDeToppings.parentElement); 

console.log("> Ejemplo children");
console.log(listaDeToppings.children); // children devuelve una colección de los elementos hijos de listaDeToppings, en este caso los li.

// También se puede elegir el primer hijo utilizando children[0] o firstElementChild y el último utilizando lastElementChild.

console.log("> Ejemplo previous sibling");
console.log(listaDeToppings.previousElementSibling); // previousElementSibling devuelve el elemento hermano anterior a listaDeToppings, en este caso el h2.

console.log("> Ejemplo next sibling");
console.log(listaDeToppings.nextElementSibling); // nextElementSibling devuelve el elemento hermano siguiente a listaDeToppings, en este caso el devuelve null porque no hay más hermanos.