import { Contacts } from './contact';
import {Person} from './person';



let contact1 = new Contacts();

let Manolo    = new Person("Manolo", 25, "Calle rodolfo valentino");
let Juanito   = new Person("Juanito", 38, "Calle salcdeo");
let Menganito = new Person("Menganito", 50, "Calle del olvido");


contact1.people = [Manolo, Juanito, Menganito];
contact1.printCalendar();










