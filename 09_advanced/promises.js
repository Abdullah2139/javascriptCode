const promisesOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Promise 1 resolved');
        resolve();
    }, 1000);
});

promisesOne.then(function(){
    console.log('Promise 1 then');
});

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Promise 2 resolved');
        resolve();
    }, 1000);
}).then(function(){
    console.log('Promise 2 then');
});

const promisesTwo = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Promise 3 resolved');
        resolve({username: 'John Doe', age: 30});
    }, 1000);
});
promisesTwo.then(function(data){
    console.log(data);
});

const promisesThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: 'Jane', age: 25});
        } else {
            reject('Error: Something went wrong');
        }
        resolve({username: 'Jane', age: 25});
    }, 1000);
});
promisesThree
    .then(function(data){
        console.log(data);
        return data.username;
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        console.log('Finally block executed');
    });

const promisesFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: 'javascript'});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
});
async function consumePromiseFive(){
    try {
        const response = await promisesFour;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUser();

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log("E: ", error);
    });