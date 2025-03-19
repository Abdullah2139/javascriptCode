function multipleBy5(num) {
  return num * 5;
}
multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
    this.login = function(){
        console.log(`${this.username} just logged in`);
    }
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`Username: ${this.username}, Score: ${this.score}`);
}


const user1 = new createUser('John', 5);
const user2 = createUser('Jane', 10);

user1.printMe();