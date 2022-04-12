let firstName = (firstName) => {
    return firstName.toUpperCase();
}

let lastName = (lastName) => {
    return lastName.toLowerCase();
}

console.log(firstName("AZra"));
console.log(lastName("CoSiCkIc"));

exports.lastName = lastName;
exports.firstName = firstName;

