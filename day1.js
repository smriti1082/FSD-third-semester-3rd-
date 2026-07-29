console.log("Hello, World!");
//variable declaration
var name = "John Doe";
let age = 30;
const country = "LONDON";
console.log(name);
console.log(age);
console.log(country);
// in case of using var, it can be redeclared and updated
//cons ki value change ho skti h with the help of object and array but
//  not with primitive data types

//datatype ko hum check krne k liye "typeof" operator ka use krte h

//create an object
var person = {
  firstName: "John",
    age: 30,
};
console.log(person);



const s={
    name:"John",
    age: 30
};
console.log(s);
//change in const datatype
s.name="smriti";
console.log(s);

//add any new property to the object
s.country="DUBAI";
console.log(s);

//change const array
const arr=[1,2,3,4,5];
console.log(arr);
arr.push(6);
console.log(arr);

//through index we can change the value of array
arr[0]=10;
console.log(arr);

//object kewal ek baar assign hoga but uske andar ki value change
//  ho skti h