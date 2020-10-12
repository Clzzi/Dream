/*
Object-oriendted programming
class : template
object : instance of a class
Js calsses
- introduced in ES6
- syntactical sugar over prototype-based inheritance

1. Class declartions
*/
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    
    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const minjae = new Person('minjae', '21');
console.log(minjae.age);
console.log(minjae.name);
minjae.speak();
