const xyz = require('./people');

//or const {people, ages} = require... so we dont need to use xyz.prop

console.log(xyz); //returns empty object if people.js doesnt exports something
console.log(xyz.people); 
console.log(xyz.ages); 


const os = require('os');
// console.log(os);
console.log(os.platform(), os.homedir());