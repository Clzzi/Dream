/* 1. 엄격모드 = Use strict
    ES5때 추가된모드, 바닐라JS쓸때만 사용 */
'use strict';

/* 2. Variable
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

/* 3. const(Contants)
    const는 선언한후 값변경이 불가능함
    const를 쓰는 이유
    - 보안 , - 동시에 값을 변경하는걸 방지 , - 실수방지
 */
const daysInweek = 7;
const maxNumber = 5;


























