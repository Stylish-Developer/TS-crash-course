"use strict";
// -- Basic Types
let age;
const num = 10;
const str = "GOWTHAM";
const boo = true;
const x = "GOWTHAM SAMPATHKUMAR";
//-- array
const arr = [10, 20, 30, 40];
const person = [1, "Gowtham", "Developer"];
console.log(num, str, boo, x, arr, person);
// -- Tuple
const employee = ["Gowtham", 24, "gowthamsampathkumar@outlook.com"];
// -- Tuple Array
let items;
items = [
    [1, "Orange"],
    [2, "Banana"],
    [3, "Mango"]
];
console.log(employee, items);
// -- Union
let y;
y = "Gowtham";
console.log(y);
// -- enum --> enum allow us to define a set of named constants either number or string
// by default it has number and the value starts from 0
// number
var position1;
(function (position1) {
    position1[position1["developer"] = 0] = "developer";
    position1[position1["designer"] = 1] = "designer";
    position1[position1["tester"] = 2] = "tester";
    position1[position1["manager"] = 3] = "manager";
    position1[position1["SEO"] = 4] = "SEO";
})(position1 || (position1 = {}));
// string
var position2;
(function (position2) {
    position2["developer"] = "coder";
    position2["designer"] = "ui/ux";
    position2["tester"] = "bug finder";
    position2["manager"] = "all in all";
    position2["SEO"] = "Marketing";
})(position2 || (position2 = {}));
console.log(position1.developer); // it  will be shown 0 for this. bacause the value starts from 0
console.log(position2.developer); // it  will be shown coder for this. bacause the value for this coder
const personInfo = {
    name: 'batman',
    location: 'Gautham city',
    suit: true,
};
console.log(JSON.stringify(personInfo));
// -- Type Assertion
// this is nothing but explicitly telling the data type to the compiler
// initially the data type of following var is any
let amount;
amount = 10;
let totalAmount = amount;
// totalAmount = "Angle"  this will be shown error when you un comment this
// -- Function
const sum1 = (brand, model) => {
    return `I am using ${brand} ${model} with powerful A13 bionic chip`;
};
// if the function does not return anything - mention type void
const sum2 = (brand, model) => {
    console.log(`I am using ${brand} ${model} with powerful M2 pro chip`);
};
console.log(sum1("Apple", "Iphone SE2"));
console.log(sum2("Apple", "MacBookPro 14'inch"));
const cars = {
    brand1: 'MERCEDES BENZ',
    brand2: 'BMW',
    brand3: 'PORSCHE',
    brand4: 'ASTON MARTIN',
    brand5: 'BENTLY',
};
const add = (a, b) => {
    return a * b;
};
const op = add(10, 15);
console.log(JSON.stringify(cars));
console.log(op);
// -- classes
class Product {
    constructor(pid, pname, pprice) {
        this.pid = pid;
        this.pname = pname;
        this.pprice = pprice;
    }
    display() {
        return `Your product ${this.pname} order is confirmed.`;
    }
}
const newObject = new Product(1, "MACBOOK PRO 14'INCH", "$2440.08");
const output = newObject.display();
// alert(output); // go to chrome and run the index.html file then see the alert message
console.log(newObject.display());
class Sample {
    constructor(dname) {
        this.dname = dname;
    }
    throwOutput() {
        console.log(`Your device ${this.dname} is now connected.`);
    }
}
const sampleOutput = new Sample("boult stone 350");
sampleOutput.throwOutput();
// -- Extending classes [ subclasses ]
class Test extends Sample {
    constructor(dname, mobileDevice) {
        super(dname);
        this.mobileDevice = mobileDevice;
    }
}
const displayOutput = new Test("boult stone 350", "Iphone SE2");
console.log(displayOutput.throwOutput());
// --Generics
// which are basically used to build reuseable components
// basically like a placeholder of the type
function App(items) {
    const newArr = [];
    for (let i = 0; i < items.length; i++) {
        newArr.push(items[i]);
    }
    // newArr.push(items);
    return newArr;
}
const appOutput = App(['Pendrive', "Hardisk", "Mouse", "Keyboard"]);
console.log(appOutput);
