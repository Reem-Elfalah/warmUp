// 1) Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// ex greaterNum(5, 10) => "The greater number of 5 and 10 is 10."
function(n1,n2){
	if(n1 === n2)
		return "The numbers " + n1 + " and " + n2 + " are equal."
	else if(n1 > n2)
		return "The greater number of " + n1 + " and " + n2 + " is " + n1 + ".";
	else 
	return "The greater number of " + n1 + " and " + n2 + " is " + n2 + ".";
}
// 2) Write a function named isEven using  for loop that
// -  iterate from x to y.
// -  return array contain the even values,
//  ex:  isEven(1,10) => [2,4,6,8,10]


function isEven(x, y) {
	var hold = x;
	if((y - x) % 2 === 0)    // To find the number of even integers between x and y and use it as the length of array
		var len = (y - x) / 2;
	else len = (y - x + 1) / 2
   var arr = [ ];
for (var i = 0; i < len - 1; i++) {
       while (x <= y) {
            if (x % 2 === 0) {
               arr[i] = arr.push(x)
             }
            x++;
       }
    }
    arr.shift();
    if (hold % 2 === 0)          // A mistake occurs in the first element of the array so this is used to fix it.
    	arr.unshift(hold);
    else 
    	arr.unshift(hold++);
     return arr;
   }
// function isEven(x, y) {

// }
//3) write a function named sum that
// - Use a while loop to add up the numbers from x to y.
// ex sum(1,5) => 15

function sum(n1,n2){
	if(n1 > n2){
		var hold = n1;
		n1 = n2;
		n2 = hold;
	}
	var total = 0;
		while(n1 <= n2){
			total += n1;
			n1++;
		}

		return total
}

//4) Write a function named factorial that
// -  Use Recursion to calculate the factorial of a number
// -  the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
// - 5! = 5*4*3*2*1 = 120
// ex : factorial(5) => 120

function factorial(n){
	if(n === 0)
		return 1;
	return n * factorial(n-1);
}

//5) write a function named decimals
//- the function will format a number up to specified decimal places
//- the function will return a string
//- if the parameters not a number return false
// ex :
//      decimals(2100, 'a') ==> false
//      decimals('a', 5) ==> false
//      decimals(2.100212, 2) ==> '2.10'
//      decimals(2.100212, 3) ==> '2.100'
//      decimals(2100, 2) ==> '2100.00'
//

function decimals(n,d){
	if(isNaN(n) || isNaN(d))
		return false;
	else 
		return n.toFixed(d);

}
