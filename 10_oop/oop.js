const user = {
    username: "abdullah",
    age: 20,
    signedIn: true,

    getUserDetails: function() {
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, age, signedIn){
    this.username = username;
    this.age = age;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("khan", 12, true)
const userTwo = new User("john", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);