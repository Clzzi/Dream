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
console.log(result3); // [3, 4, 5]

//Q5. Find a student with the score 90
// 객체에서 원하는 정보를 찾을때 쓰는 함수 find();
// find()함수는 callback함수로 students객체 안에있는 인자들을
// 차례대로 콜백해주는데 리턴값이 boolean임, 그래서 return (조건) 이 참일때  true를 리턴해주고 즉시종료함
class Student {
    constructor(name,age,enrolled, score) {
        this.name = name,
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

const result4 = students.find((student) => student.score === 90);
console.log(result4);

//Q6. Make an array of enrolled students
// filter()함수또한 callback형식이고 , enrolled 가 true인것들만 
//골라서 배열로 만들고싶다고 해서 썼다, find는 원하는것 하나를 찾고 바로 종료해서 못씀 
const result5 = students.filter((student) => student.enrolled);
console.log(result5); 

//Q7. Make an array containing only the students' scores
// map()함수는 안에 들어있는 값하나하나에 내가 쓴 fn을 설정해주어 리턴해줌
const result6 = students.map((student) => student.score);
console.log(result6); //[45,80,90,66,90]