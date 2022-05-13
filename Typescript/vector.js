"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.round(Math.random() * k));
        }
    }
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (myVector) {
        var sumaElement = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            sumaElement.elements.push(myVector.elements[i] + this.elements[i]);
        }
        return sumaElement;
    };
    Vector.prototype.subs = function (myVector) {
        var restaElement = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            restaElement.elements.push(myVector.elements[i] - this.elements[i]);
        }
        return restaElement;
    };
    Vector.prototype.mult = function (myVector) {
        var multElement = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            multElement.elements.push(myVector.elements[i] * this.elements[i]);
        }
        return multElement;
    };
    Vector.prototype.multNumber = function (paramNumber) {
        var multNum = new Vector(0, 0);
        for (var i = 0; i < this.elements.length; i++) {
            multNum.elements.push(this.elements[i] * paramNumber);
        }
        return multNum;
    };
    return Vector;
}());
exports.Vector = Vector;
