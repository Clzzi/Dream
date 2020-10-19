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




































