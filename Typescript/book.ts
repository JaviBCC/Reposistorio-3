
export class Book {

    private title:string;
    private nPages:number;
    private isbn: string;
    private author:string;
    private editorial:string;
    
    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string) {

        this.title      = title;
        this.nPages     = nPages;
        this.isbn       = isbn;
        this.author     = author;
        this.editorial  = editorial;         
    }

    // METODOS

    // Getters
    public getTitle():string{
        return this.title;
    } 

    public getnPages():number{
        return this.nPages;
    } 

    public getIsbn():string{
        return this.isbn;
    }

    public getAuthor():string{
        return this.author;
    }

    public getEditorial():string{
        return this.editorial;
    }


    // Setters
    public setTitle(newTitle:string):void{
        this.title = newTitle;
    }     

    public setnPages(newnPages:number):void{
        this.nPages = newnPages;
    }

    public setIsbn(newIsbn:string):void{
        this.isbn = newIsbn;
    }

    public setAuthor(newAuthor:string):void{
        this.author = newAuthor;
    }

    public setEditorial(newEditorial:string):void{
        this.editorial = newEditorial;

    }

    public toString():string{

        return ("Title - " + this.title + " " + "\n" + "Numer of Pages - " + this.nPages + " " + "\n" + "ISBN - " + this.isbn + " " + "\n" + "Author - " + this.author + " " + "\n" + "Editorial - " + this.editorial + " " + "\n")
    }

}



