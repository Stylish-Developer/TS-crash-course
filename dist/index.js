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
// -- Function
const sum1 = (brand, model) => {
    return `I am using ${brand} ${model} with powerful A13 bionic chip`;
};
// if the function does not return anything
const sum2 = (brand, model) => {
    console.log(`I am using ${brand} ${model} with powerful M2 pro chip`);
};
console.log(sum1("Apple", "Iphone SE2"));
console.log(sum2("Apple", "MacBookPro 14'inch"));
