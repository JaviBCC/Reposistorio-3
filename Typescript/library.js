"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    // Getters
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    // Setters
    Library.prototype.setAdress = function (newAddress) {
        this.address = newAddress;
    };
    Library.prototype.setManager = function (newManager) {
        this.manager = newManager;
    };
    Library.prototype.toString = function () {
        var mensaje = "";
        for (var i = 0; i < this.books.length; i++) {
            mensaje = ("Book" + (i + 1) + ":" + "\n" + "Title - " + this.books[i]["title"] + " " + "\n" + "Numer of Pages - " + this.books[i]["nPages"] + " " + "\n" + "ISBN - " + this.books[i]["isbn"] + " " + "\n" + "Author - " + this.books[i]["author"] + " " + "\n" + "Editorial - " + this.books[i]["editorial"] + " " + "\n");
            console.log(mensaje);
        }
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAutor = function (myAuthor) {
        var listAutor = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() === myAuthor) {
                listAutor.push(this.books[i]);
            }
        }
        return listAutor;
    };
    return Library;
}());
exports.Library = Library;
