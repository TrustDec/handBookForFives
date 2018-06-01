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
// console.log(x[5].toString());

// Enum
enum Color {Red=1, Green=2, Blue=4};
let colorName: string = Color[2];
alert(colorName);