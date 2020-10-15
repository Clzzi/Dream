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
console.log(array);

//Q4. Make new array without the first two elements
// 배열의 특정한 부분을 리턴해주는 함수 -> slice(0, 3); 0부터 2까지임
const array2 = [1,2,3,4,5];
const result3 = array2.slice(2, 5); // 배열의2번위치부터 4번위치까지를 리턴해줌
console.log(result3); // [3, 4, 5