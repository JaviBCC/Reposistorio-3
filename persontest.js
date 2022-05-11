// MAIN => ESTA PARTE IRIA EN OTRO ARCHIVO SOLO SE PONE ASI PARA VERLO EN NUESTRAS PRUEBAS

let {Persona} = require("./person");

// let cuadrado = new Poligono(20, 20);
// cuadrado.printAltura();
// console.log(cuadrado.calcArea());

let persona1 = new Persona(80, 1.70, 1975);
 console.log(persona1.printIMC());
 console.log(persona1.printEdad(2005));
 persona1.printAll();
 persona1.hobbies = ["Natacion", "Baile", "Leer"];
 console.log(persona1.printHobbies());
 
 console.log(persona1);


// let persona2 = new Persona(80, 1.70, 1975);
// console.log(persona2.peso);

// persona1.printAll();

// let juan = new Persona();
// juan.hobbies = ["Natacion", "Baile", "Leer"];
// console.log(juan.printHobbies());












