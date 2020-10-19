// JavaScript is synchronous
// Execute the code block in order after hoisting.
// hoisting: var, function declartion (var선언이나 함수선언은 제일위로 올라감 이것이 호이스팅)
console.log('1');
setTimeout(function() {
    console.log('2');    
}, 1000);
console.log('3');
// 1 3 2  
/* arrow function.ver
--> setTimeout(() => console.log('2'), 1000); */  

// Synchronous callback(즉각적으로 수행함)
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello')); 

// Asynchronous callback(언제 실행될지 모름)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout); 
}
printImmediately(() => console.log('async callback'), 3000); 
// arrow function == print / 3000 == timeout 이되어 setTimeout이 완성됨








