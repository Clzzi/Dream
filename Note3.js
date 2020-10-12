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
 
//3. Defalut parameters ( added in ES6 )
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
};
showMessage('Hi!');


