/**
 * Boolean
*/
var isDone = false;
if (isDone) {
    document.body.innerHTML = "isDone = false";
}
// number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// string
var color = "blue";
color = 'red';
var fullname = "Bob Bobbington";
var age = 37;
var sentence = "Hello.My name is " + fullname + ".I'll be " + (age + 1) + " years old next month";
// Array
var list = [1, 2, 3, 4];
var listone = [1, 2, 3, 4];
// Tuple
var x;
x = ["hello", 10];
// x=[10,"hello"];
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[3] = "world";
// console.log(x[5].toString());
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
alert(colorName);
