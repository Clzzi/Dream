/* async & await (clear style of using promise) - (syntactic sugar)
--> promise를 좀더 간편하게 사용할수있게해줌
--> 동기적으로 실행되는것처럼 보여줌 */ 

// 1. async 
async function fetchUser() {
    // do network request in 10 secs...
    return 'minjae';
}
const user = fetchUser();
user.then(console.log);
console.log(user);
/* 
[1] function fetchUser() 기본형
function fetchUser() {
    // do network request in 10 secs...
    return 'minjae';
}

[2] function fetchUser()를 promise로..
function fetchUser() {
    return new Promise((resolve, reject) => {
        // do network request in 10 secs...
        return 'minjae'; --> return으로 해주면 promise가 pending 상태가됨
        resolve('minjae'); --> resolve로 해주면 promise가 fulfiled 상태가됨
    });
} */

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* function getBanana() {
    return delay(3000)
    .then(() => 'Banana')
} promise를 리턴하는 기본형*/ 

async function getApple() {
    await delay(1000);
    throw 'error';
    return 'Apple';
}

async function getBanana() {
    await delay(1000);
    return 'Banana';
}
 
async function pickFruits() {
    const applePromise = getApple(); // Promise를 만들게되면 바로 실행되므로 1초딜레이가 없어짐
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`; // --> 1초후에 로그나타남 (병렬) 
}
/*
[1] function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
} 
pickFruits().then(console.log); 
--> 2초후에 콘솔나타남

[2] async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`; // --> 2초후에 로그나타남 (직렬)
} */












