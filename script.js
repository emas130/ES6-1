const string1 = 'Hello';
const string2 = 'world';
const addedStrings = (`${string1} ${string2}`);

console.log(addedStrings);

const addedStrings2 = (string1 = 'Hello', string2 = 'world') => console.log(`${string1} ${string2}`);
addedStrings2();

//TASK 2 - CREATE FUNCTION MULTIPLY MUTLIPLYING TWO VARIABLES. CONTIDTION IS IF USER DOESN'T PUT ONE OR TWO VERIABLES THEY SHOULD BE EQUAL 1 BY DEFAULT.


const multiply = (number1 = 1, number2 = 1) => number1 + number2;
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

const average = (...args) => {
	let sum = 0;
	args.forEach(arg => {
		sum += arg;
	});
	return (`Średnia podanych liczb wynosi: ${sum/args.length}`);
};

console.log(average(1, 2, 4));

//using reduce() method

const average5 = (...args) => {

	const sum = args.reduce((suma, arg) => {
		return suma + arg;
	});

	return (`Średnia podanych liczb wynosi: ${sum/args.length}`);
};

console.log(average5(1, 2, 3, 4));

// reduce shorter version
console.log('reduce shorter version');

const averageReduce = (...args) => args.reduce((suma, arg) => suma + arg) / args.length;

console.log(averageReduce(1, 2, 3));


//using while loop and slice() method

const average6 = (...args) => {
	console.log(args.length);
	let suma = 0;
	let array = [].concat(args);
	while (array.length) {
		console.log(`wartość array przed rpzpoczęciem pentli ${array}`);
		suma += array[0];
		array = array.slice(1);
		console.log(`wartość array na końcu pentli ${args}`);
		console.log(suma);
	}
	return (`Średnia podanych liczb wynosi: ${suma/args.length}`);
};

console.log(average6(1, 2, 3, 4));

// using while and shift() method

const average7 = (...args) => {
	console.log(`Przed pętlą ${args}`);
	let suma = 0;
	let array = [].concat(args);
	console.log(`Suma przed pentlą ${suma}`);
	while (array.length) {
		suma += array.shift();
	}
	return suma / args.length;
};

console.log(average7(1, 2, 3, 4));


//TASK 4 CREATE AN ARRAY AND PUT THIS ARRAY AS PARAMETER OF AVERAGE FUNCTION. USE SPREAD OPERATOR.

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);

// TASK 5

const array1 = [1, 4, 'Leszek', false, 'Nowak'];

const [, , firstName, , lastName] = array1;

console.log(`The frist name is: ${firstName}`);
console.log(`The last name is: ${lastName}`);
