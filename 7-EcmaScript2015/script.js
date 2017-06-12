////////////////////////////////////////////////////////////////////////////////
// Lecture 95: let and const

// ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
//
// name5 = 'Jane Miller';
// console.log(name5);

// ES6
// const = variables you don't want to mutate
// let = variable that can be changed
// var in es5 is functio

// const name6 = 'Jane Smith';
// let age6 = 23;
//
// // name6 = 'Jane Miller';
// console.log(age6);

// ES5
/*
function driversLicense5 (passedTest){

	if(passedTest){

		var firstName = 'John';
		var yearOfBirth = 1990;
	}

	console.log(firstName + ', born in ' + yearOfBirth + ', is now allowed to drive a car.');
}

driversLicense5(true);

// ES6
function driversLicense6 (passedTest){

	let firstName;
	const yearOfBirth = 1990;

	if(passedTest){

		firstName = 'John';
	}

	console.log(firstName + ', born in ' + yearOfBirth + ', is now allowed to drive a car.');
}

driversLicense6(true);


let i = 23;

for (let i = 0; i < 5; i++){

	console.log(i);
}

console.log(i);
*/
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Lecture 96: blocks and IIFEs

// Const and Let defined inside a block are not accessible from the outside.
// This is good for data privacy.

// A block is created by using curly brackets. If or while or for are not needed.

// ES6
/*
{

	const a = 1;
	let b = 2;
	var c = 3;
}

//console.log(a + b);
console.log(c);

//ES5
(function(){

	var c = 3;
})();

//console.log(c);
*/
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Lecture 97: Strings in ES6
/*
let firstName = 'John';
let lastName =  'Smith';
const yearOfBirth = 1990;
function calcAge(year){

	return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth +
	'. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
// Template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); // new string method startsWith
console.log(n.endsWith('th')); // new string method endsWith
console.log(n.includes('oh')); // new string method includes
console.log(`${firstName} `.repeat(5));
*/
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Lecture 98: Arrow functions (basics)
/*
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el){

	return 2016 - el;
});

console.log(ages5);

// ES6
// with 1 argument
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

// with multiple arguments
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

// multiple arguments and multiple lines of code.
// require curly brackets and return keyword.
ages6 = years.map((el, index) => {

	const now = new Date().getFullYear();
	const age = now - el;
	return `Age element ${index + 1}: ${2016 - el}.`;
});
console.log(ages6);
*/
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Lecture 99: Arrow functions (lexical 'this' keyword)
/*
// ES5
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function(){

		var self = this;
		document.querySelector('.green').addEventListener('click', function(){

			// Because the this keyword is called within this anonymous function, 'this' points
			// towards the global object (in this case the window).
			var str = 'This is box number ' + self.position + ' and it is ' + self.color;
			alert(str);
		});
	}
};

//box5.clickMe();

// ES6
const box6 = {
	color: 'green',
	position: 1,
	clickMe: function(){

		document.querySelector('.green').addEventListener('click', () => {

			// In ES6 the 'this' keyword is shared from its surrounding.
			// In this case: the object box6
			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		});
	}
};

//box6.clickMe();

/*
const box6b = {
	color: 'green',
	position: 1,
	// in this example the arrow function shares the from its surrounding: the global object
	// That's why it shows undefined again.
	clickMe: () => {

		document.querySelector('.green').addEventListener('click', () => {

			// In ES6 the 'this' keyword remains pointing to the object in an
			// arrow function.
			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
			alert(str);
		});
	}
};

box6b.clickMe();


function Person(name){

	this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends){

	var arr = friends.map(function(el){

		return this.name + ' is friends with ' + el;
	}.bind(this));

	console.log(arr);
};

const friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends){

	const arr = friends.map(el => `${this.name} is friends with ${el}`);
	console.log(arr);
};

new Person('Jim').myFriends6(friends);
*/
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Lecture 100: Destructuring
/*
// ES5
var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {

	firstName: 'John',
	lastName: 'Smith'
};

const{firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year){

	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
};

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Lecture 101: Arrays
/*
const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){

	cur.style.backgroundColor = 'dodgerblue';
});

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// ======================================
// Looping through the array

// ES55
/*
for(var i = 0; i < boxesArr5.length; i++){

	if(boxesArr5[i].className === 'box blue'){

		//continue;
		break;
	}

	boxesArr5[i].textContent = 'I changed to blue!';
};
*

// ES6
for (const cur of boxesArr6){

	if(cur.className.includes('blue')){

		continue;
	}
	cur.textContent = 'I changed to blue!';
}

// ======================================

// ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur){
	return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
// findIndex and find
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Lecture 102: Spread operator

function addFourAges (a, b, c, d){

	return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages5 = [18, 30, 12, 21];

// This will call addFourAges with the array ages5 as the arguments
var sum2 = addFourAges.apply(null, ages5);
console.log(sum2);

// ES6
// Spead operator takes the array and split them in the multiple arguments of the function.
const sum3 = addFourAges(...ages5);
console.log(sum3);

// Combine two arrays to one big array, by using the spread operator.
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

// Spread operators also work on node lists
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');

////////////////////////////////////////////////////////////////////////////////