
class Persona {

    constructor(peso, altura, yearOfBirth) {
        this.altura      = altura;     
        this.peso        = peso; 
        this.edad          
        this.profesion  
        this.hobbies     = [];
        this.yearOfBirth = yearOfBirth;
    }

    // Metodo IMC

    printIMC() {
        return (this.peso / (this.altura * 2));
     }   

    printEdad(year) {
        return (year - this.yearOfBirth);
     }

    printAll() {
        console.log("Altura " + "- " + this.altura + "Peso " + "- " + this.peso + "Edad " + "- " + this.edad + "Profesion " + "- " + this.Profesion + "YearOfBirth " + "- " + this.yearOfBirth);
     }

    printHobbies() {

        return this.hobbies;
     }


 }


 // EXPORTACION

 module.exports = {Persona}

