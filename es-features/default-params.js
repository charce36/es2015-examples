function addTwoNumbers(x=0, y=0) {
    return x + y;
}

addTwoNumbers(2, 4); // 6
addTwoNumbers(2); // 2
addTwoNumbers(); // 0



//rest params
//Using the rest operator, we can pass in an indefinite amount of arguments:

function logArguments(...args) {
    for (let arg of args) {
        console.log(arg);
    }
}