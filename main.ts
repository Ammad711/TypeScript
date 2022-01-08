export{}
let message="World";
console.log(message);

let x=10;
const y=20;
let sum;
const title="Codeevolution";
let isBeginner:boolean=true;
let total:number=0;
let name:string='amar';
let sentence:string=`My name is ${name}
I am a beginner in Typescript`;
console.log(sentence);
// name=true;  //Can't write like this
let n:null=null;
let u:undefined=undefined;
let isNew:boolean=null;
let myName:string=undefined;
let list1:number[]=[1,2,3,4];
let list2:Array<number>=[1,2,3];
let person1:[string,number]=['Chris',22];  //This is called a tuple
enum Color{Red,Green,Blue};  // Starts counting from 0
let c:Color=Color.Green;
console.log(c);  // this will give output 1
enum Color2{Red=2,Green,Blue}; //Starts counting from 2
let c2:Color2=Color2.Green;
console.log(c2);  // this will give output 3
let randomvalue:any=10;
randomvalue=true;
randomvalue="world";

let myVariable:any=10;
console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
let myVariable2:unknown=10; // now here we will not be given any functions unlike in any
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

let a;
a=10;
a=true;
let b=20; 
//b=true; //This will give error unlike in above one a one. This is called type inference.
let multitype:number|boolean; //This is called union where we can define a variable can be of which data types only.
multitype=10;
multitype=true;
let anytype:any;
//anytype.  // This will not have function similar to above multitype
function add(num1:number,num2:number=10):number //We may or may not specify return type. Using ? makes parameter optional. 
//First parameter can't be optional but after that parameters can be optional   
{
    if(num2)
        return num1+num2;
    else
        return num1;
}
add(5,10);
// add(5,'10'); // This will give error.
add(5);
//Interfaces
function fullname(person:{firstname:string,lastname:string}){
     console.log(`${person.firstname} ${person.lastname}`);
}
let p={
    firstname:'Bruce',
    lastname:'Wayne'
};
fullname(p);
interface Person{
    firstname:string;
    lastname?:string;  // This is now an optional property
}
function fullname2(person:Person){
    console.log(`${person.firstname} ${person.lastname}`);
}
let p2={
    firstname:'Bruce'
};
fullname2(p2);

//Class and AccessModifiers
class Employee{
    public employeename:string;
    constructor(name:string)
    {
        this.employeename=name;
    }
    greet(){
        console.log(`Good Morning ${this.employeename}`);
    }
}
let emp1=new Employee('Vishwas');
console.log(emp1.employeename);
emp1.greet();

class Manager extends Employee{
    constructor(managername:string){
        super(managername);
    }
    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}
let m1=new Manager('Clark');
m1.delegateWork();
m1.greet();
console.log(m1.employeename);
// access modifiers are public, private and protected.















