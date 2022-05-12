import {Vector} from './vector';


let vector1:Vector = new Vector(7, 50); 
let vector2:Vector = new Vector(7, 100);
let vector3:Vector = new Vector(0, 0);

vector1.print();

vector3 = (vector1.add(vector2));
vector3.print();

vector3 = (vector1.subs(vector2));
vector3.print();

vector3 = (vector1.mult(vector2));
vector3.print();

vector3 = (vector1.multNumber(6));
vector3.print();
