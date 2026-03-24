// querySelectorAll() Este método se utiliza para seleccionar todos los elementos del DOM que coincidan con un selector CSS específico.
const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');

console.log(toppingsNaranja); // retorna una colección HTML como un Array de todos los elementos que tengan la clase "topping" y "fondo-naranja".

console.log(toppingsNaranja[0]);

  //┌─────────┬─────────────────────────────────┬───────────────────────────────────┐
  //│         │          querySelector          │         querySelectorAll          │                                                                                                              
  //├─────────┼─────────────────────────────────┼───────────────────────────────────┤
  //│ Retorna │ El primer elemento que coincide │ Todos los elementos que coinciden │                                                                                                              
  //├─────────┼─────────────────────────────────┼───────────────────────────────────┤
  //│ Tipo    │ Un elemento o null              │ NodeList                          │                                                                                                              
  //└─────────┴─────────────────────────────────┴───────────────────────────────────┘ 