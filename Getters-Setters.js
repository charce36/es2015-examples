class Employee {

    constructor(name) {
        this._name = name;
    }

    get name() {
      if(this._name) {
        return 'Mr. ' + this._name.toUpperCase();  
      } else {
        return undefined;
      }  
    }

    set name(newName) {
      if (newName == this._name) {
        console.log('I already have this name.');
      } else if (newName) {
        this._name = newName;
      } else {
        return false;
      }
    }
}

var emp = new Employee("James Bond");

// uses the get method in the background
if (emp.name) {
  console.log(emp.name);  // Mr. JAMES BOND
}

// uses the setter in the background
emp.name = "Bond 007";
console.log(emp.name);  // Mr. BOND 007  