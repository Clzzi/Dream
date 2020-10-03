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

// 4. Assignment operators -- 증감 연산자
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y

// 5. Comparison operators -- 관계 연산자
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6);  // greater than or equal

// 6. Logical operators: ||(or) , &&(and) , !(not)
const value1 = false;
const value2 = 4 < 2;
function check(){
    for (let i = 0; i < 10; i++)
    {//wasting time
        console.log('x');
    }
    return true;
}
// || (or)
console.log(`or : ${value1 || value2 || check()}`);
/* 이코드는 value1,value2,check함수 중에 하나라도 true가 있으면 그걸 출력해주는
    코드입니다. 3개중에 하나라도 true라면 그즉시 멈추게 됩니다.
    그러므로 연산이 복잡한 함수나 연산자들은 가장 후위에 둬서 마지막 수로 하는것, */

//&& (and)
console.log(`and : ${value1 && value2 && check()}`);
/* and도 마찬가지로 true값이 하나라도 나오게되면 바로 출력해주기때문에 
    무거운 연산일수록 후위에 두는것이 좋아요  */

// ! (not)
console.log(!value1); //value1 이 true이므로 !연산자를 쓰면 false로 값이 바뀜 

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false 
console.log(stringFive !== numberFive); // true 

//object equality by reference
const minjae1 = {name: 'minjae'};
const minjae2 = {name: 'minjae'};
const minjae3 = minjae1;
console.log(minjae1 == minjae2); //false
console.log(minjae1 === minjae2); //false
console.log(minjae1 === minjae3); //true

// 8. Conditional operators: if -- 조건 연산자
//if, else if, else
const name = 'minjae';
if (name === 'minjae'){
    console.log('Welcome, Minjae!');
} else if(name === 'coder'){
    console.log('You are amazing coder');
} else{
    console.log('unknown');
}

// 9. Ternary operators: ? --> 삼항연산자
// condition ? value1 : value2;
console.log(name === 'minjae' ? 'yes' : 'no');

/* 10. Switch statment (스위치 케이스)
    use for multiple if checks
    use for enum-like value check
    use for multiple type checks in TS    
*/
const browser = 'IE';
switch(browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chorme':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

/* 11. Loops(while문)
    while loop, while the condition is truthy,
    body code is executed.
*/
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
}


