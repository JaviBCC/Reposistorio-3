
let {Persona} = require("./person");

class Contacts {

    constructor() {
        this.personas = [];

    }

    printPersonas(){

        for(let i=0; i < this.personas.length; i++) {
            console.log(this.personas[i].printAll());

        }

    }

}


module.exports = {Contacts};