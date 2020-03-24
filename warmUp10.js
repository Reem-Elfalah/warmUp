// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
//So from math the greatest common divisor is the largest number dividng two numbers without leaving a remainder.
//This can be done by subtracting or remainder, in subtracting we'll check if a is not equal to b, the proram will excute by subtracting
//the lower integer from the higher, so if we have 12 and 15 
//first it's 15 - 12 = 3 -> 15->[3] , then 12 - 3 = 9 -> 9 - 3 = 6 -> 6 - 3 = [3], 12 ->3 , so now a is equal to b that means this is our gcd
// if there's another number greater we would've got it before that as 12 and 6 we'll get a = b = 6 before 2.
//
function gcd(a,b){
	if (a !== b){
		if(a > b)
			return gcd(a - b , b);
		else 
			return gcd(a, b - a);
	}
	return b;
}
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.
//to sum two numbers without summation and adding only one at a time, the idea of a counter that increases and decreases is helpful.
// so let's imagine counter x is set to 5 and counter y is set to 3 and we'll add those two numbers.
//1st round counter x will increment by 1, counter y will decrement by 1 -> x = 6, y = 2.
//2nd round counter x will increment by 1, counter y will decrement by 1 -> x = 7, y = 1.
//3rd round counter x will increment by 1, counter y will decrement by 1 -> x = 8, y = 0.
//and the correct answer for a + b is 8! so the stop condition is when decrement counter(one of our integers) reaches zero.
//and the returned result is the other integer.

function summation(a,b){
	if(a !== 0)
		return summation(a - 1, b + 1);
	return b;

}

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************
