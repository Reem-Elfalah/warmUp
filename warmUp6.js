// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-Define a function called myTrueFun that returns true whenever its called.

function myTrueFun(){    //declare a function called myTrueFun
	return true;         //returns true whenever it's called.
}

// 2- Define a function called color in which returns true
// if type of the input is string and returns false otherwise.

function color(name){    //declare a function called color
	return isNaN(name)   // check if it's not a number then true otherwise false.
}

//3-Write a JavaScript function that accepts a number as a parameter 
// and check if the number is prime or not.
// since prime numbers are numbers that accept division only by itself or 1, 
// a loop will be used to divide the number by all possibilities 
//until we reach it's half which will result as 2 if the number is not prime.
// and the division posibilities will start from 2, 
//so 1 is eliminated "since all numbers are divided by 1"
function prime(n){
var i = 2;
while(i <= n / 2){
	if(n % i === 0)
return "number is not prime"
i++;
}
return "number is prime"
}

//4-write a function that accepts two numbers as parameters 
//and returns true if the two parameters have the same value , false if not
function equal(n1,n2){    //declare function called equal.
	return n1 === n2;     //return the result of the equality.
}