/*
Objects
one of the JavaScript's data types.
a collection of related data and/or functionality.
Nearly all objects in JavaScript are instances of Object
object = { key : value };
1. Literals and porperties */
const obj1 = {};  //'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person) { 
    console.log(person.name); 
    console.log(person.age); 
}

const minjae = {name: 'minjae', age: 23}; 
print(minjae);

// with JavaScript magic (dynamically typed language)
// can add properties later
minjae.hasJob = true;
console.log(minjae.hasJob);

delete minjae.hasJob;
console.log(minjae.hasJob);

// 2. Computed properties
// key should be always string
console.log(minjae.name); 
console.log(minjae{'name'});
minjae['hasJob'] = true;
console.log(minjae.hasJob);

function printValue(obj, key) {
    console.log(obj[key])
}
printValue(minjae, 'name'); 

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};

