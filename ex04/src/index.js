// Only change code below this line
class Pets {
    constructor(name, legs) {
        this._name = name;
        this._legs = legs;
    }
}


class Dog extends Pets {
    constructor(name, legs) {
        super(name, legs)

    }

    walk(numberOfLegs) {
        console.log(`${this._name} is walking on ${this._legs} legs`);
    }
    bark(dogSay) {
        console.log(`${this._name} says WUF-WUF`)
    }

}


// Only change code above this line
let dog = new Dog("Pujdo", 4); // Change this line
console.log(dog.walk());
console.log(dog.bark());
module.exports = {
    Pets,
    Dog
}