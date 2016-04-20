var rect = require('./callbackModule.js');

function solveRect(l,b){
	if(l <= 0 || b <= 0){
		console.log("Invalid dimensions of a rectangle");
	}else{
		console.log("l: " + l + " b: " + b);
		rect(l,b,function(err,rectangle){
			if(err){
				console.log(err);
			}else{
				console.log("Area: " + rectangle.area() + " and Perimeter: " + rectangle.perimeter());
			}
		});
	}
	
};

solveRect(2,4);