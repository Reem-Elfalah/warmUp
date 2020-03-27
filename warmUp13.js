// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n
//starting from 0, e.g.:
// mult(3); // => 6
// mult(4); // => 24
function mult(n){
	let result = 1;
	for(let i = 1; i <= n; i++)
		result *= i;
	return result;
}

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number.
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...
function nums(n){
	let result = '';
	let i = 1;
	while(i <= n){
		result += i + ' ';
		if(i > 1)
		result += i + ' ';
	i++;
	}
	return result;
}