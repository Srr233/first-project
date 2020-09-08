class Person {
    constructor(name) {
        this._name = name;
    }
    getName() {
        return this._name;
    }
    sayHi() {
        alert(`Hi, I'm ${this._name}`);
    }
}

let sergeyPerson = new Person('Sergey');

sergeyPerson.sayHi();