// let myName = "John Doe  ";
// consolr.log(myName.truelength);

let myHeros = ['thor', 'spiderman'];
let heroPowers = {
    thor: 'thunder',
    spiderman: 'spider web',

    getSpiderPower: function() {
        // console.log(`Spidy power is ${this.spiderman}`);
    }
};

Object.prototype.khan = function() {
    console.log('khan');
}
Array.prototype.heyKhan = function() {
    console.log('hey khan');
}

// myHeros.khan();
// myHeros.heyKhan();
// heroPowers.khan();
// heroPowers.heyKhan(); // Error, not a function of object

// inheritance

const User = {
    name: 'john',
    email: 'john@google.com'
};

const teacher = {
    makeVideo: true
};

const teachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
};

teacher.__proto__ = User;
// console.log(teacher.name); // john

// modern syntax
Object.setPrototypeOf(teacher, User);

let anotherUserName = 'johndoe   ';
String.prototype.truelength = function() {
    console.log(`${this}`);
    // console.log(this.name); // absolute property
    console.log(`True length is: ${this.trim().length}`);
};

anotherUserName.truelength();
'pakistan'.truelength();
'hello world'.truelength();