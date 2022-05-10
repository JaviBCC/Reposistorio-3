
class Poligono {

    constructor(altura, ancho) {
        this.altura = altura
        this.ancho  = ancho
        this.lados = 4;
    }

    // metodos

     printAltura() {
        console.log(this.altura);
     }   

     calcArea() {
        return this.altura * this.ancho;
     }

}

// MAIN => ESTA PARTE IRIA EN OTRO ARCHIVO SOLO SE PONE ASI PARA VERLO EN NUESTRAS PRUEBAS

let cuadrado = new Poligono(20, 20);
cuadrado.printAltura();
console.log(cuadrado.calcArea());