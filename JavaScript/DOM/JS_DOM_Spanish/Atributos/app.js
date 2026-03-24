const enlace = document.getElementsByTagName('a'); // Aquí se elegirá el elemento 'a' (enlace) de la página. Si hay más de uno, se seleccionará el primero con [0].

// Imprimimos el enlace para ver su dirección actual o la colección de enlaces si hay más de uno.
console.log(enlace);

// Aquí cambiamos la dirección de FreeCodeCamp a la dirección de FaceBook.
enlace[0].setAttribute('href', 'https://facebook.com');

// Cambiamos el texto visible          
enlace[0].innerText = 'Facebook';