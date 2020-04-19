var Textbook = require('./textbook.js')
var Instructor = require('./instructor.js')
var Course = require('./course.js')
// import { Textbook } from textbookJS;
// import Textbook from "./textbook.js";
// package = require
textbook1 = new Textbook("Java OOP", "Ahmed Massoud", 50.69, 500, 5, "Simon", 2, "12121-554657879");
textbook2 = new Textbook("Python OOP", " Mohammed Mohammed", 99.99, 200, 20, "Spark", 2, "54654654-89784654");
console.log(textbook1.isSameAuthor(textbook2));

instructor = new Instructor("Nasser Omar", 78880, "nasomar@qu.edu.qa");

course = new Course("Web Dev", 3, 5444, instructor, textbook1);

console.log(course.toString())

