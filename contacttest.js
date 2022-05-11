let {Contacts} = require("./contacts");
let {Persona}  = require("./person");


let persona1 = new Persona(80, 1.70, 1975);
let persona2 = new Persona(75, 1.90, 1992);

let contacto = new Contacts();
contacto.personas =[persona1, persona2];
console.log(contacto);

contacto.printPersonas();











