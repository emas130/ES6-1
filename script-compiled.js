'use strict';

var string1 = 'Hello';
var string2 = 'world';
var addedStrings = string1 + ' ' + string2;

console.log(addedStrings);

var addedStrings2 = function addedStrings2() {
	var string1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
	var string2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';
	return console.log(string1 + ' ' + string2);
};
addedStrings2();

//TASK 2 - CREATE FUNCTION MULTIPLY MUTLIPLYING TWO VARIABLES. CONTIDTION IS IF USER DOESN'T PUT ONE OR TWO VERIABLES THEY SHOULD BE EQUAL 1 BY DEFAULT.


var multiply = function multiply() {
	var number1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var number2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	return number1 + number2;
};
console.log(multiply(2));
console.log(multiply(6, 5));

//TASK 3 CREATE AVERAGE FUNCTION THAT CALCULATES AVERRAGE OF ALL GIVEN PARAMENTERS. ASSUMPTION: ALL PAARAMETERS OF THE FUNCTION ARE NUMBERS.

// a) in es5

//using for loop

console.log('using es5');

function average1() {
	var sum = 0;
	var average = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum = sum + arguments[i];
	}
	average = sum / arguments.length;
	return average;
}

console.log(average1(1, 2, 3));

//b) in es6
console.log('using es6 ;D');

//using forEach() method

var average = function average() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sum = 0;
	args.forEach(function (arg) {
		sum += arg;
	});
	return '\u015Arednia podanych liczb wynosi: ' + sum / args.length;
};

console.log(average(1, 2, 4));

//using reduce() method

var average5 = function average5() {
	for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		args[_key2] = arguments[_key2];
	}

	var sum = args.reduce(function (suma, arg) {
		return suma + arg;
	});

	return '\u015Arednia podanych liczb wynosi: ' + sum / args.length;
};

console.log(average5(1, 2, 3, 4));

// reduce shorter version
console.log('reduce shorter version');

var averageReduce = function averageReduce() {
	for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		args[_key3] = arguments[_key3];
	}

	return args.reduce(function (suma, arg) {
		return suma + arg;
	}) / args.length;
};

console.log(averageReduce(1, 2, 3));

//using while loop and slice() method

var average6 = function average6() {
	for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
		args[_key4] = arguments[_key4];
	}

	console.log(args.length);
	var suma = 0;
	var array = [].concat(args);
	while (array.length) {
		console.log('warto\u015B\u0107 array przed rpzpocz\u0119ciem pentli ' + array);
		suma += array[0];
		array = array.slice(1);
		console.log('warto\u015B\u0107 array na ko\u0144cu pentli ' + args);
		console.log(suma);
	}
	return '\u015Arednia podanych liczb wynosi: ' + suma / args.length;
};

console.log(average6(1, 2, 3, 4));

// using while and shift() method

var average7 = function average7() {
	for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
		args[_key5] = arguments[_key5];
	}

	console.log('Przed p\u0119tl\u0105 ' + args);
	var suma = 0;
	var array = [].concat(args);
	console.log('Suma przed pentl\u0105 ' + suma);
	while (array.length) {
		suma += array.shift();
	}
	return suma / args.length;
};

console.log(average7(1, 2, 3, 4));

//TASK 4 CREATE AN ARRAY AND PUT THIS ARRAY AS PARAMETER OF AVERAGE FUNCTION. USE SPREAD OPERATOR.

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average.apply(undefined, grades);

// TASK 5

var array1 = [1, 4, 'Leszek', false, 'Nowak'];

var firstName = array1[2],
    lastName = array1[4];


console.log('The frist name is: ' + firstName);
console.log('The last name is: ' + lastName);
