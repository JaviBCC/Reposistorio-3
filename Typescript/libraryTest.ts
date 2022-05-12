import {Library} from './library';
import {Book} from './book';


let book1:Book  = new Book("Introducción a Javascript 1", 233, "2344433-BC23333",  "Joseph Smith", "Now Editions");
let book2:Book  = new Book("Introducción a Javascript 2", 320, "2344896-BC24896",  "Ariel dexter", "Now Editions");
let book3:Book  = new Book("Introducción a Javascript 3", 518, "2345668-BC24568",  "Ariel dexter", "Now Editions");

let coleccion:Book[] = [book1, book2, book3];
let address1:string = "Calle del Puerto Angel 25";
let manager1:string = "Felipe Martinez";

let library1:Library = new Library(coleccion, address1, manager1);

library1.toString();

console.log(library1.getNumberOfBooks());

console.log(library1.findByAutor("Ariel dexter"));







