// JavaScript is synchronous
// Execute the code block in order after hoisting.
// hoisting: var, function declartion (var선언이나 함수선언은 제일위로 올라감 이것이 호이스팅)
console.log('1');
setTimeout(function() {
    console.log('2');    
}, 1000);
console.log('3');
// 1 3 2  
/* arrow function.ver
--> setTimeout(() => console.log('2'), 1000); */  

// Synchronous callback(즉각적으로 수행함)
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello')); 

// Asynchronous callback(언제 실행될지 모름)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout); 
}
printImmediately(() => console.log('async callback'), 3000); 
// arrow function == print / 3000 == timeout 이되어 setTimeout이 완성됨.

// Callback Hell Example
class UserStorage {
    loginUser(id, password, onSucess, onError) {
        setTimeout( () => {
            if((id === 'minjae' && password === 'alswo') || (id === 'sonminjae' && password === 'thsalswo')) {
                onSucess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000);
    }

    getRoles(user, onSucess, onError) {
        setTimeout( () => {
            if( user === 'minjae') {
                onSucess({ name: 'minjae', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => { //loginUser의 onSucess
        userStorage.getRoles(
            user,
            userWithRole => { //getRoles의 onSucess 
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => { //getRoles의 onError
                console.log(error);
            }
        );
    },
    error => { //loginUser의 onError
        console.log(error);
    }
);


















