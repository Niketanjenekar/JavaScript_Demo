//console.log("Niketan")
/*console.log("Niketan")
console.log("Niketan")
console.log("Niketan")
console.log("Niketan")*/

let name = "Niketan";
//let keyword is used to declare a variable
console.log(name);

var names = "Jenekar";
//var is a lable that references a value
console.log(names);

const named = "Niketan Jenekar"
//const is a read-only value
console.log(named);

//Datatype
let number = 4;
console.log(typeof(number));
number = "Niketan";
console.log(typeof(number));
number = 5.32;
console.log(typeof(number));

//Array
let array = new Array();
let arrays = new Array(10);
let arrr=new Array(1, 2, 3, 4, 5);
let fruits=["Banana", "Apple"];
console.log(fruits[0]);
fruits[2]="Kiwi"
console.log(fruits);
console.log(fruits.length);
fruits.push("Mango");
console.log(fruits);
fruits.unshift("Orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);

console.log(fruits.indexOf("Apple"));
console.log(Array.isArray("Apple"));

//Arithmatic oprator
let x='4';
y=2;
let z=x-y;
console.log(z);

let result=x*y;
console.log(result)

let div=x/y;
console.log(div)

let rem=x%y;
console.log(rem);

let ankush=0;
ankush+=1;
console.log(ankush);
ankush-=1;

let val=5;
val_Two=10;
Val_Three=20;
val=val_Two=Val_Three;

let dd=5 && 10;
console.log(val);

let res=4>5;
console.log(res);

let str='ankush';
str_One='Anish';
let ss=str>str_One;
console.log(ss);

console.log(str=='ankush');
console.log(5>'1');

console.log(null==undefined);

//logical operator
let aa=false,
cc=false;
console.log(aa && cc);
console.log(!aa);
console.log(aa || cc);

//if,If else condition

let as=25;
let sw='Ankush';
if(sw=='Ankush')
{
if(as==25)
{
    console.log('Condition is True');
}
else
{
    console.log('Condition is False');
}
}
if(sw=='Ankush' && as==25)
{
    console.log('Condition is True');

}

//if ,else if ,else condition
// let month=6;
// let monthName;
// if(month==1)
// {
//     monthName='Jan';
// }
// else if(month==2)
// {
// monthName =  'Feb';
// }
// else if(month==3)
// {
//     monthName='Mar';
// }
// else
// {
// monthName='Invalid';
// }
// console.log(monthName);

//Turnory oprator

let month=5;
let monthName;
if(month==1)
{
    monthName='Jan';
}
else if(month==2)
{
monthName =  'Feb';
}
else if(month==3)
{
    monthName='Mar';
}
else
{
monthName='Invalid';
}

console.log(monthName);
month>5?(monthName='Feb'):(monthName='Invalid')
console.log(monthName);

let count=5;
while(count<10)
{
    console.log(count);
    count+=2;
}

//Function

function MyFunction()
{
    //Function Body
}
function MyFunction(a,b)
{
    //function body
}
function Hi(message)
{
    console.log(message);
}
Hi('Niketan');
function Add(a,b)
{
    return a+b;
}
let sunResult = Add(23, 52);
console.log(sunResult);

//Lambda in js
let ab = function()
{console.log('Niketan');};
ab();

let abc = ()=>console.log('Niketan');
abc();

let k=function(a,b){return a+b;};
let kc = (a,b)=>console.log(10+67);
kc();

//Constructor

function MyConstructor(firstName,lastName)
{
    this.firstName=firstName;
    this.lastName = lastName;
    this.demo=function(){return this.firstName+this.lastName};
}
let yz= new MyConstructor('Niketan','Jenekar');
console.log(yz.demo());

class MyClass
{
    constructor(firstName,lastName)
    {
        this.firstName=firstName;
        this.lastName = lastName;
    }

}
const niketan = new MyClass("NiketanJ", "JenekarN");
console.log(niketan);

