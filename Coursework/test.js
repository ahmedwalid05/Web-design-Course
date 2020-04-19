// class  Person {
//     constructor (name) {
//     this.name = name;
//    }
//     greeting () {  return `Hi I am ${this.name}`; }
//  }
//  module.exports = Person;
 
//  //Filename ex3.js - same folder
// //  var Person = require('./person.js');
//  var p = new Person('Ali');
//  console.log(p.greeting());
// const  fs = require('fs-extra');
// let result =fs.readFile("student.json");
// console.log(result);
const  fs = require('fs');

callBack = function ( err, data) {
   if (err){
   console.log(err);
  }else {
   const students = JSON.parse(data);
  }
}
let fileContent = fs.readFile('data/student.json', callBack);
console.log(fileContent);