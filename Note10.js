/* Promise is a JavaScript objcet for asynchronous operation.
 비동기적인것을 수행할때 콜백함수 대신 유용하게 쓸수있는것 --> Promise
State(현재상태): pending --> fulfilled or rejected
Producer(제공자) vs Consumer(소비자)*/
//1. Producer
// when new Promise is created, the executor runs automatically.
// 새 Promise를 생성하게되면, 바로 엑시큐터가 자동적으로 실행됨
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('minjae); -- 성공
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise //.then도 promise를 리턴해주고 .catch도 promise를 리턴해줌
    .then((value) => { // -- 성공했을때
    console.log(value);
})
    .catch(error => { // -- 실패했을때
        console.log(error);
})
    .finally(() => {console.log('finally'); // -- 어떤경우에도 출력됨
});

// 3. Promise Chaning
const fetchNumber = new Promise((resolve, rejected) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => resolve(num - 1), 1000);
    })
})
.then(num => console.log(num))

