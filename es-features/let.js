// var
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // undefined

// let
let snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        let snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // 'Meow Mix'


//Best Practice: Leave var declarations inside of legacy code to denote that it needs to be carefully refactored. When working on a new codebase, use let for variables that will change their value over time, and const for variables which cannot be reassigned.