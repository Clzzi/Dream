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
