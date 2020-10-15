//Q1. Make a string out of an array
// 배열을 문자열로 바꾸어 주는 함수 -> join();
const fruits = ['apple', 'banana','orange'];
const result = fruits.join();
console.log(result); //apple,banana,orange

//Q2. Make an array out of a string
// 문자열을 배열로 바꾸어 주는 함수 -> split();
const fruits2 = 'apple,grape,coco';
const result2 = fruits2.split(',', 2); // ['apple','grape'];
 // split(' ',limit); 이 있음 limit은 해도되고 안해도 됨
console.log(result2);

//Q3. Make this array look like this: [5, 3, 3, 2, 1]
// 배열안에 들어있는 아이템의 순서를 거꾸로 바꾸어 주는 함수 -> reverse();
const array = [1,2,3,4,5];
array.reverse();
console.log(array)