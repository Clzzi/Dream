/* Function 
- fundamental building block in the program
- subprogram can be used multiple time
- performs a task or calculates a value

1. Function declaration
function name(param1, param2) { body... return; }
one function === one thing 
naming: doSomethnig, command, verb
e.g. createCardAndPoint -> createCard, createPoint
function is object in JS
*/
function printHello() {
    console.log('Hello');
};
printHello();

function log(message) {
    console.log(message);
};
log('hi'); 

/*
2. Parameters
premitive parameters: passed by value
object parameters: passed by refernce
*/
 
//3. Default parameters ( added in ES6 )
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
};
showMessage('Hi!');

//4. Rest parameters (added in ES6) --> [...something]
function printAll(...args) {
// 4-1. args의 길이만큼 일반 for문으로 일일히 출력 
    for(let i = 0; i < args.length;i++){
        console.log(args[i]);
    }
// 4-2. args에 들어있는 배열들을 차례로 일일히 변수에 지정해 출력해주는것
    for(const arg of args) { 
        console.log(arg);
    }
// 4-1. forEach함수로 args의 배열하나하나를 일일히 훑는 개념,
    args.forEach((arg) => console.log(arg));
};
printAll('dream', 'coding', 'ellie');


// 5. Local scope ( 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. )
let globalMessage = 'global'; //global variable -- 전역변수
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable -- 지역변수
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hey';
    };
    // console.log(childMessage); --> 지역변수스코프에서 벗어나 에러발생
};
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
};
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, ealry exit

//[bad.ver]
function upgradeUser(user) {
    if (user.point > 10) {
        // long  upgrade logic...
    }
};
//[good.ver]
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic...
};

/*
First-class function
functions are treated like any other variable
can be assigned as a value to variable
can be passed as an argument to other functions.
can be returned by another function

1. Function expression
a function declaration can be called earlier than it is defined. (hoisted)
a function expression is created when the execution reaches it.
*/
const print = function  () { //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
