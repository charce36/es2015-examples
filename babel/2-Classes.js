class Person{
  _name = "";
  _email = "";

  constructor(name, email){
      this._email = email;
      this._name = name;
  }
  sayHello(){
      console.log("Hello! I'm " + this._name);
  }
}

class Client extends Person{
    _clientId = 0;

    constructor(clientId, name, email){
        super(name, email);

        this._clientId = clientId;
    }
    sayHello(){
        super.sayHello();
        console.log(" and my client id is: " + this._clientId);
    }
}