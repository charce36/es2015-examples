//Expressions
var evens = [0,2,4,6,8,10];
var odds = evens.map(v => v + 1);
console.log("odds: " + odds);

//Statemen bodies
var nums = [1,5,8,10,15,17,19,25,30,32,45];
var fives = [];
nums.forEach(v=>{
    if( v % 5 === 0)
        fives.push(v);
});
console.log(fives);

//Lexical this
var bob = {
    _name: "Bob",
    _friends: ['Chris', 'Jagger', 'Luke'],
    printFriends() {
        this._friends.forEach(f=>
            console.log(this._name + " knows " + f)
            )
        },
    sayHello(){
        console.log("Hello");
    },
    sayBye(message){
        console.log(message + ".. Bye")
    }
};
bob.sayHello();
bob.printFriends();
bob.sayBye("JS is great!");

// Lexical arguments
function square() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) {
      numbers.push(number * number);
    }

    return numbers;
  };

  return example();
}

square(2, 4, 7.5, 8, 11.5, 21); // returns: [4, 16, 56.25, 64, 132.25, 441]