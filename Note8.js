// browser 과 server가 통신할때는 fetch() api / json를 씀
// JSON
//JavaScript Object Notation
// 1. Object to JSON (stringify) 객체 => 문자열로
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple','banana']);
console.log(json); // ["apple","banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json); 
// {"name":"tori","color":"white","size": null, "birthDate":"2020-10-16"}

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'minjae' : value;
});

// 2. JSON to Object
//parse(json) 문자열 => 객체로
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`ket: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
// 리턴값중 key가 birthDate의 문자열이라면 new Date(value)를 아니라면 기본 value를 리턴,
});
console.log(obj);
rabbit.jump();
console.log(rabbit.birthDate.getDate()); 
//DATE()함수의 자체지원 함수 getDate()
console.log(obj.birthDate.getDate());






























