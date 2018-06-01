var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a;
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
// console.log(x[5].toString()); Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var colorName = Color[2];
console.log(colorName);
// any
var notSure = 4;
// notSure.ifItExists();
notSure.toFixed();
notSure = 'Maybe a string instead';
notSure = false;
var listTwo = [1, true, "free"];
listTwo[1] = 100;
// Void
function warnUser() { alert("This is my warning message"); }
var unusable = undefined;
function error(message) { throw new Error(message); }
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) { }
}
// create({prop:0});
// create(null);
// Type assertions
var someValue = "this is a string";
var strLength = someValue.length;
var strLengthAs = someValue.length;
console.log(strLength, strLengthAs);
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
// Destructuring
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
var _b = [1, 2, 3, 4], firstq = _b[0], rest = _b.slice(1);
console.log(firstq); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
var _c = [1, 2, 3, 4], second12 = _c[1], fourth = _c[3];
console.log(second12, fourth);
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
(_a = { a: "baz", b: 101 }, a = _a.a, b = _a.b);
var passthrough = __rest(o, []);
var total = passthrough.b + passthrough.c.length;
var a = o.a, b = o.b;
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
keepWholeObject(o);
