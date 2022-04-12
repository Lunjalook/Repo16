const firstName = (firstName) => {

    return firstName.toUpperCase();
}

const lastName = (lastName) => {
    return lastName.toLowerCase();

}
exports.lastName;
exports.firstName;
console.log(firstName("AZra"));
console.log(lastName("CoSiCkIc"));
module.exports = {
    firstName,
    lastName
}