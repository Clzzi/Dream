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

/*
3. Fields (public,private)
Top soon!
https://developer.mozilla,org/en-US/docs/Web/JavaScript/Refe
*/
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
/*
4. Static  properties and methods
Top soon!
 */
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
// 스태틱자체는 article자체에 들어가있음
// 할당되는 무언가에 상관없이 공통적으로 해야하는 일이면 스태틱을 씀
    static printPublisher() {
        console.log(Article.publisher); 
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); 
Article.printPublisher(); 

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`${this.color} color !`);
    }

    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shpae{}

class Triangle extends Shape{ //overwritting
    draw() {
        super.draw();
        console.log('^');
    }
    getArea() {
        return width * this.height / 2;
    }
    toString() {
        //overwritting
        return `Triangle: color : ${this.color}`;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
triangle.draw(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());


