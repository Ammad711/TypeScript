"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "World";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "Codeevolution";
var isBeginner = true;
var total = 0;
var name = 'amar';
var sentence = "My name is ".concat(name, "\nI am a beginner in Typescript");
console.log(sentence);
// name=true;  //Can't write like this
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22]; //This is called a tuple
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; // Starts counting from 0
var c = Color.Green;
console.log(c); // this will give output 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 2] = "Red";
    Color2[Color2["Green"] = 3] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
; //Starts counting from 2
var c2 = Color2.Green;
console.log(c2); // this will give output 3
var randomvalue = 10;
randomvalue = true;
randomvalue = "world";
var myVariable = 10;
console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
var myVariable2 = 10; // now here we will not be given any functions unlike in any
//(myVariable2 as string).toUpperCase(); //Type Assertion is similar to typecasting
// myVariable2(); // This will not work in unknown
// function hasName(obj:any):obj is {name:string}{
//     return !!obj &&
//         typeof obj==='object' &&
//         'name' in obj
// }
// if(hasName(myVariable2)){
//     console.log(myVariable2.name);
// }
var a;
a = 10;
a = true;
var b = 20;
//b=true; //This will give error unlike in above one a one. This is called type inference.
var multitype; //This is called union where we can define a variable can be of which data types only.
multitype = 10;
multitype = true;
var anytype;
//anytype.  // This will not have function similar to above multitype
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
// add(5,'10'); // This will give error.
add(5);
//Interfaces
function fullname(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var p = {
    firstname: 'Bruce',
    lastname: 'Wayne'
};
fullname(p);
function fullname2(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var p2 = {
    firstname: 'Bruce'
};
fullname2(p2);
//Class and AccessModifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeename = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeename));
    };
    return Employee;
}());
var emp1 = new Employee('Vishwas');
console.log(emp1.employeename);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managername) {
        return _super.call(this, managername) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Clark');
m1.delegateWork();
m1.greet();
console.log(m1.employeename);
// access modifiers are public, private and protected.
