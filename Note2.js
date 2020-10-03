/* 1. String concatenation -- 문자열*/
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log('Minjae\'s \nbook ');

// 2. Numeric operators -- 숫자연산
console.log(1 + 1); //더하기 (add)
console.log(1 - 1); //빼기 (substract)
console.log(1 / 1); // 나누기 (devide)
console.log(1 * 1); //곱하기 (multiply)
console.log(5 % 2); //나머지 (remainder)
console.log(2 ** 3); //제곱 (exponentiation)

// 3. Increment and decrement operators -- 전.후위 연산자
let counter = 2;
const preIncrement = ++counter; 
//전위 연산자 (=> counter = counter + 1; preIncrement = counter )
const postIncrement = counter++;
//후위 연산자 (=> postIncrement = counter; counter = counter + 1 )
// + , - 둘다 같음 

