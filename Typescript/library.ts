import {Book} from './book'

export class Library {

    private books:Book[];
    private address:string;
    private manager: string;
  

    constructor (books:Book[], address:string, manager: string) {

        this.books = books;
        this.address = address;
        this.manager = manager;
    }

         // Getters
        public getAddress():string{
            return this.address;
        } 

        public getManager():string{
            return this.manager;
        } 


         // Setters
        public setAdress(newAddress:string):void{
            this.address = newAddress;
        }     

        public setManager(newManager:string):void{
            this.manager = newManager;
        }   


        public toString():void{
            let mensaje = "";

            for(let i=0; i < this.books.length; i++) {
               
               mensaje = ("Book" + (i + 1) + ":" + "\n" + "Title - " + this.books[i]["title"] + " " + "\n" + "Numer of Pages - " + this.books[i]["nPages"] + " " + "\n" + "ISBN - " + this.books[i]["isbn"] + " " + "\n" + "Author - " + this.books[i]["author"] + " " + "\n" + "Editorial - " + this.books[i]["editorial"] + " " + "\n")
               console.log(mensaje);
            }   
        }
    

        getNumberOfBooks():number{
                return this.books.length;
        }

        findByAutor(myAuthor:string):Book[]{
            let listAutor = [];

            for(let i=0; i < this.books.length; i++) {

                if (this.books[i].getAuthor() === myAuthor) {
                    listAutor.push(this.books[i]);
                }  
            }

            return listAutor;

        }
    }


