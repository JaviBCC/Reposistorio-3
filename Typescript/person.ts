
export class Person {

        public name:string;
        public age:number;
        private address:string;

    constructor(name:string, age:number, address:string){
        this.name = name
        this.age  = age
        this.address = address
    }

    // Metodos

    printName():void {
        console.log(this.name);
    }

    yearOfBirth(currentYear:number):number {
        return (currentYear - this.age);
    }

    public setAddress(address:string):void {
        this.address = address;
    }

    public getCalle():string{
        return this.address;
    } 
 
}

// EXPORTACION










