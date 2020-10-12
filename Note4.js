/*
Object-oriendted programming
class : template
object : instance of a class
Js calsses
- introduced in ES6
- syntactical sugar over prototype-based inheritance

1. Class declarations
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

//2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('Steve','Job',-1);
console.log(user1.age);
