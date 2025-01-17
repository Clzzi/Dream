/* 1. 엄격모드 = Use strict
    ES5때 추가된모드, 바닐라JS쓸때만 사용 */
'use strict';

/* 2. Variable(read/write)
    let (ES6때 추가)
    let은 변할수있는 변수
    blockscope는 괄호안에 있는 것들을
    말하는데 괄호안에서 변수를 썼으면
    괄호밖에서는 인식못함, 
    괄호밖,즉 바깥에서 생성한
    변수는 전역변수로 괄호안,밖 둘다 인식됨
*/
let globalName = 'glabal name';
{
    let name = 'minjae';
    console.log(name);
    name = 'sonminjae';
    console.log(name);
}
console.log(name);
console.log(globalName);

/*  var
    var hoisting --> 변수를 어디에 선언했는지 불문하고 항상 
    선언한것을 가장 위로 끌어올려주는것 
    var 는 blockscope에 먹히지 않음
*/

/* 3. const(Contants) only read
    const는 선언한후 값변경이 불가능함
    const를 쓰는 이유
    - 보안 , - 동시에 값을 변경하는걸 방지 , - 실수방지
 */
const daysInweek = 7;
const maxNumber = 5;

/*
    Immutable data types: premitive types, frozen objects (i.e. object.freeze()) 변경불가능
    Mutable data types: all objects by default are mutable in JS 변경가능
*/

/* 4. Variable types
    - primitive type(더이상 쪼개질수없는 단위) : number, string, boolean, null, undefined, symbol
    - object type(primitive를 한박스로 묶어서 관리)
    - function, first-class function (함수안에 함수를 리턴가능함)
    들어가는 값에따라 자동으로 정수형인지 소수점인지 문자열인지 판단해줌 
*/

const count = 23; // integer 정수형
const size = 16.9// decimal number 소수점
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, - infinity , Nan(Not a number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'Not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (아직 쓰지 않지만 새로이 나옴)
const bigInt = 13415n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string , 백틱(backtic) ``사용하기
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

/*boolean (true/false)
    false: 0, null, undefined, NaN, ''
    true: 다른것 모두
*/
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null 
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifilers for objects
// 값을 우선할당하고싶을때 사용한다 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

//동일한 심볼을 만들고 싶을때 
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)
// 심볼을 출력할때는 .description으로 문자열로 출력해야함

//object, real-life object, data structure 객체
const minjae = {name: 'sonminjae', age: 17};
minjae.age = 18; //가능
minjae = clzzi; // 불가능

// 5. Dynamic typing: dynamically typed language
// 할당된 값에 따라서 자동으로 자료형지정
let test = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); //hello , string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //1, number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 75, string
text = '8' / 2;
console.log(`value: ${text}, type: ${typeof text}`); //4 , number

























