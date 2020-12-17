
let Name = 'Salik';
console.log(Name);
// Cannot use reserved keyweords 
let firstName = 'Salik uddin';
let lastName = 'Ahmed';
const interestRate = 0.3;
console.log(firstName);
console.log(lastName);
console.log(interestRate);
//Primitives or Value Types 5 in total
let Name2 = 'Salik'; //String Literal
let age = '29'; //Number Literal
let isApproved = false; //Boolean or logic literal
let firstName2 = 'Salik uddin'; 
let lastName2 = null; //for situations where customer does not assign any details
//we can check variable type by typeof in chrome console
//Now reference types total of 3
let person = {
    gender: 'Male',
    education: 'School'
}; //this is object literal having 2 properties

//Dot Notation system
person.education = 'College';

//Bracket Notation
person['gender'] = 'Female'; //this can be used in a better way as follows

//Bracket Notation proper use
let selection = 'education';
person[selection] = 'Masters';//here the user can select different options and then the code uses that to feed to the variable

console.log(person);//to access only the property we can try dot notation in this line aslo

//for client data selection like color or product use Arrays

//let selectedColors = [];these empty brackets are array literals
let selectedColors = ['shirt', 'blue'];
selectedColors[2] = 'medium';
selectedColors[3] = 15;
console.log(selectedColors);
console.log(selectedColors.length);//to access index in console

//functions
//performing a task on console like saying hello
function greet(Name3, Name4) {
    console.log('Hello ' + Name3 + ' ' + Name4);
}
//variables introduced in a function cannot be accessed outside that function
greet('John','Wick');
//default value of variables in JS is undefined until defined

//now lets say I want to show some calulation on console
function square(number){
    return number * number;
}
let number = square(4);
console.log(number);

//practice for order total, not working
function orderTotal(number1, number2, number3) {
    return number1 + number2 + number3;
}
let number = orderTotal(100 + 120 + 150);

console.log(number);