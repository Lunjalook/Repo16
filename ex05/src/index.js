// only change code below this line
class Microsoft {
    constructor(name) {
        this._name = name;
    }
    //getter
    get name() {
        return this._name;
    }

    //setter
    set name(newName) {
        this._name = newName;
    }

    occupation() {
        return `${this._name} is a philanthropist!`;
    }
}
class Facebook extends Microsoft {
    constructor(name, age) {
        super(name)
        this._age = age;

    }

    studentAge() {
        return `${this._name} is ${this._age}`;
    }
}
let henry = new Microsoft("William Henry Gates III");
let elliot = new Facebook("Mark Elliot Zuckerber", 23) // Change this line
console.log(henry.occupation());
console.log(elliot.occupation());
console.log(elliot.studentAge());

// Only change code above this line
module.exports = {
    Microsoft,
    Facebook
}