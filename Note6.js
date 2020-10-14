//Array
// 1. Declartion
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index postion
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //apple
console.log(fruits[33]); //undefined
console.log(fruits[fruits.length-1]);

// 3.Looping over an array
// print all fruits
// a. for
for(let i = 0; i<fruits.length;i++)
    console.log(fruits[i]);

//b. for of
for(let key of fruits)
    console.log(key);

//c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push : add an item to the end
fruits.push('grape');

// pop : remove an item from the end
fruits.pop();

//unshift :  add an item to the benigging
fruits.unshift('apple');

//shift : remove an item from the benigging
fruits.shift();

// shift, unshift are slower than pop, push
// spilce : remove an item by index position
fruits.push('orange');
fruits.splice(1,1); // 1번위치에서 부터 1개 삭제
fruits.splice(1,1,'a','b'); // 1번위치에서 1개 삭제한후에 그위치에 a와b를 넣어줌

// combine two arrays
const fruits2 = ['man','woman'];
const newFruits = fruits.concat(fruits2); // 둘이 합쳐짐