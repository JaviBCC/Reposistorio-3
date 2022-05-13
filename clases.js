
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