"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    // METODOS
    // Getters
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    // Setters
    Book.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
    };
    Book.prototype.setnPages = function (newnPages) {
        this.nPages = newnPages;
    };
    Book.prototype.setIsbn = function (newIsbn) {
        this.isbn = newIsbn;
    };
    Book.prototype.setAuthor = function (newAuthor) {
        this.author = newAuthor;
    };
    Book.prototype.setEditorial = function (newEditorial) {
        this.editorial = newEditorial;
    };
    Book.prototype.toString = function () {
        return ("Title - " + this.title + " " + "\n" + "Numer of Pages - " + this.nPages + " " + "\n" + "ISBN - " + this.isbn + " " + "\n" + "Author - " + this.author + " " + "\n" + "Editorial - " + this.editorial + " " + "\n");
    };
    return Book;
}());
exports.Book = Book;
