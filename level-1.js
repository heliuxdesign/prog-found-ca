// question 1

var student = "Heli";

// question 2

var person = {
	eyeColor: "blue",
	hairColor: "brown",
};

// question 3

var outOfStock = true;
if (outOfStock === true) {
	console.log("Out of stock");
} else {
	console.log("In Stock");
}

// question 4

var numbers = [2, 4, 6, 8, 10];
for (const number of numbers) {
	console.log(number);
}

// question 5

for (var i = 15; i <= 25; i++) {
	console.log(i);
}

// question 6

for (var i = 15; i <= 25; i++) {
	if (i === 20) {
		console.log(i);
	}
}

// question 7

var pineaple = {
	color: "Yellow",
	kcal: 47,
	isFruit: true,
};

var blueberry = {
	color: "Blue",
	kcal: 64,
	isFruit: false,
};

var foods = [pineaple, blueberry];
for (const food of foods) {
	console.log(food.kcal);
	console.log(food.isFruit);
}

// question 8
function whatIDontLike(dislike) {
	alert("I dont Like " + dislike);
}
whatIDontLike("snakes");

// question 9
function subtract(a, b) {
	var result = a - b;
	console.log(result);
}
subtract(10, 3);

// question 10
var carModels = [];

function car(model) {
	carModels.push(model);
}
car("SUV");
