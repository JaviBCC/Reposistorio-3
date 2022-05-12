
export class Vector {

    private elements:number[] = [];


    constructor (n:number, k:number) {

        for (let i = 0; i < n; i++) {   
            this.elements.push(Math.round(Math.random() * k)); 
        }      
    }    

        print() {
            console.log(this.elements);
        }  

        add(myVector:Vector):Vector{

            let sumaElement = new Vector(0, 0);

            for (let i = 0; i < this.elements.length; i++) {
                sumaElement.elements.push(myVector.elements[i] + this.elements[i]);
            }

            return sumaElement;

        }

        subs(myVector:Vector):Vector{
            
            let restaElement = new Vector(0, 0);

            for (let i = 0; i < this.elements.length; i++) {
                restaElement.elements.push(myVector.elements[i] + this.elements[i]);
            }

            return restaElement;
        }


        mult(myVector:Vector):Vector {

            let multElement = new Vector(0, 0);

            for (let i = 0; i <this.elements.length; i++) {
                multElement.elements.push(myVector.elements[i] + this.elements[i]);
            }

            return multElement;
        }

         multNumber(paramNumber:number):Vector {

            let multNum = new Vector(0, 0);

            for (let i = 0; i <this.elements.length; i++) {
                multNum.elements.push(this.elements[i] * paramNumber);
            }

            return multNum;
         }

}








