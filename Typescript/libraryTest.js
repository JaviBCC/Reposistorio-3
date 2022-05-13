"use strict";
exports.__esModule = true;
var library_1 = require("./library");
var book_1 = require("./book");
var book1 = new book_1.Book("Introducción a Javascript 1", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
var book2 = new book_1.Book("Introducción a Javascript 2", 320, "2344896-BC24896", "Ariel dexter", "Now Editions");
var book3 = new book_1.Book("Introducción a Javascript 3", 518, "2345668-BC24568", "Ariel dexter", "Now Editions");
var coleccion = [book1, book2, book3];
var address1 = "Calle del Puerto Angel 25";
var manager1 = "Felipe Martinez";
var library1 = new library_1.Library(coleccion, address1, manager1);
library1.toString();
console.log(library1.getNumberOfBooks());
console.log(library1.findByAutor("Ariel dexter"));
