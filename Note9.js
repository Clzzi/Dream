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


