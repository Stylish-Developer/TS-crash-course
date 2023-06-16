// -- Basic Types
let age: number;
const num: number = 10;
const str: string = "GOWTHAM";
const boo: boolean = true;

const x: any = "GOWTHAM SAMPATHKUMAR";

//-- array
const arr: number[] = [10, 20, 30, 40];
const person: any[] = [1, "Gowtham", "Developer"];

console.log(num, str, boo, x, arr, person);

// -- Tuple
const employee: [string, number, string] = ["Gowtham", 24, "gowthamsampathkumar@outlook.com"];

// -- Tuple Array
let items: [number, string][];

items = [
    [1, "Orange"],
    [2, "Banana"],
    [3, "Mango"]
]

console.log(employee, items);

// -- Union
let y: string | number;
y = "Gowtham"

console.log(y);

// -- enum --> enum allow us to define a set of named constants either number or string
// by default it has number and the value starts from 0
// number
enum position1 {
    developer,
    designer,
    tester,
    manager,
    SEO
}

// string
enum position2 {
    developer = "coder",
    designer = "ui/ux",
    tester = "bug finder",
    manager = "all in all",
    SEO = "Marketing"
}

console.log(position1.developer); // it  will be shown 0 for this. bacause the value starts from 0
console.log(position2.developer); // it  will be shown coder for this. bacause the value for this coder

// -- Object
type personTypes = {
    name: string,
    location: string,
    suit: boolean,
    country?: string
}
const personInfo: personTypes = {
    name: 'batman',
    location: 'Gautham city',
    suit: true,

}

console.log(JSON.stringify(personInfo));

// -- Type Assertion
// this is nothing but explicitly telling the data type to the compiler
// initially the data type of following var is any

let amount: any;
amount = 10;
let totalAmount = <number>amount;
// totalAmount = "Angle"  this will be shown error when you un comment this

// -- Function
const sum1 = (brand: string, model: string): string => {
    return `I am using ${brand} ${model} with powerful A13 bionic chip`
}

// if the function does not return anything - mention type void
const sum2 = (brand: string, model: string): void => {
    console.log(`I am using ${brand} ${model} with powerful M2 pro chip`)
}
console.log(sum1("Apple", "Iphone SE2"));
console.log(sum2("Apple", "MacBookPro 14'inch"));

// -- Interfaces
interface carsTypes {
    readonly brand1: string, // read only property
    brand2: string,
    brand3: string,
    brand4: string,
    brand5: string,
    completed?: boolean     // optional properties
}
const cars: carsTypes = {
    brand1: 'MERCEDES BENZ',
    brand2: 'BMW',
    brand3: 'PORSCHE',
    brand4: 'ASTON MARTIN',
    brand5: 'BENTLY',
}

// funtion interfaces

interface Props {
    (a: number, b: number): number
}

const add: Props = (a: number, b: number): number => {
    return a * b;
}

const op = add(10, 15);
console.log(JSON.stringify(cars));
console.log(op);

// -- classes
class Product {

    pid: number
    pname: string
    pprice: string

    constructor(pid: number, pname: string, pprice: string) {
        this.pid = pid;
        this.pname = pname;
        this.pprice = pprice;
    }

    display() {
        return `Your product ${this.pname} order is confirmed.`
    }
}

const newObject = new Product(1, "MACBOOK PRO 14'INCH", "$2440.08");

const output = newObject.display();
// alert(output); // go to chrome and run the index.html file then see the alert message
console.log(newObject.display());

// -- Implementing Interfaces in class

interface sampleInterface {
    dname: string;
    throwOutput(): void
}

class Sample implements sampleInterface {
    dname: string;

    constructor(dname: string) {
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
    mobileDevice: string;

    constructor(dname: string, mobileDevice: string) {
        super(dname);
        this.mobileDevice = mobileDevice;
    }
}

const displayOutput = new Test("boult stone 350", "Iphone SE2");

console.log(displayOutput.throwOutput());

// --Generics
// which are basically used to build reuseable components
// basically like a placeholder of the type

function App<T>(items: T[]): T[]  {
    const newArr: any[] = [];
    for(let i: number = 0;i<items.length;i++){
        newArr.push(items[i]);
    }
    // newArr.push(items);
    return newArr;
}

const appOutput = App<string>(['Pendrive',"Hardisk","Mouse","Keyboard"]);

console.log(appOutput);