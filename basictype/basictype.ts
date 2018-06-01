/**
 * Boolean
*/
let isDone : boolean = false;
if (isDone) {
    document.body.innerHTML = "isDone = false";
}
// number
let decimal : number = 6;
let hex : number = 0xf00d;
let binary : number = 0b1010;
let octal : number = 0o744;
// string
let color : string = "blue";
color = 'red';

let fullname : string = `Bob Bobbington`;
let age : number = 37;
let sentence : string = `Hello.My name is ${fullname}.I'll be ${age + 1} years old next month`;

// Array
let list : number[] = [1, 2, 3, 4];
let listone : Array < number > = [1, 2, 3, 4];
// Tuple
let x : [string, number];
x = ["hello", 10];
// x=[10,"hello"];
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[3] = "world";
// console.log(x[5].toString()); Enum
enum Color {
    Red = 1,
    Green = 2,
    Blue = 4
};
let colorName : string = Color[2];
console.log(colorName);
// any
let notSure : any = 4;
// notSure.ifItExists();
notSure.toFixed();
notSure = 'Maybe a string instead';
notSure = false;

let listTwo : any[] = [1, true, "free"];
listTwo[1] = 100;
// Void

function warnUser() : void {alert("This is my warning message");}
let unusable : void = undefined;

function error(message : string) : never {throw new Error(message);}
function fail() {
    return error("Something failed")
}
function infiniteLoop() : never {
    while(true) {}
}

// Object
declare function create(o:object|null):void;
// create({prop:0});
// create(null);

// Type assertions
let someValue: any = "this is a string";
let strLength:number = (<string>someValue).length;
let strLengthAs:number = (someValue as string).length;
console.log(strLength,strLengthAs);

const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;

// Destructuring
let input = [1,2];
let [first,second] = input;
console.log(first);
console.log(second);
let [firstq, ...rest] = [1, 2, 3, 4];
console.log(firstq); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let [, second12, , fourth] = [1, 2, 3, 4];
console.log(second12,fourth);
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;

({ a, b } = { a: "baz", b: 101 });

let { ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;

//let { a, b }: { a: string, b: number } = o;

function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}
keepWholeObject(o);

type C = { a: string, b?: number }
funciton f({a,b}:C):void{
    // ...
}