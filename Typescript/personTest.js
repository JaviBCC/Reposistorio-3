"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var person1 = new person_1.Person("Javier", 22, "Calle Elfo");
person1.printName();
console.log(person1.yearOfBirth(35));
person1.setAddress('santo angel');
console.log(person1.getCalle());
