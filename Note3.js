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


