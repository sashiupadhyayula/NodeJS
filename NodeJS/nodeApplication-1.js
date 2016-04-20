var rect = require('./nodeModule-1');

function solveRect(l,b){
	console.log("Rectangle has length: " + l + " and breadth: " + b);
	
	if(l <= 0 || b <= 0){
		console.log("Invalid arguments");
	}else{
		console.log("Area: " + rect.area(l,b) + " and Perimeter: " + rect.perimeter(l,b));
	}
}

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);