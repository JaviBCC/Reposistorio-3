
class Persona {

    constructor(peso, altura) {
        this.altura     = altura;     
        this.peso       = peso; 
        this.edad       = edad;   
        this.colorpelo  = colorpelo;  
        this.colorojos  = colorojos;
        this.profesion  = profesion;
        this.aficiones  = aficiones;
    }

    // Metodo IMC

    printIMC() {
        return (this.peso / (this.altura * 2));
     }   

 }

 let persona1 = new Persona(80, 1.70);
 console.log(persona1);




