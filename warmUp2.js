// 1 - Complete the function cube that returns the cube of x:

function cube(x) {
 return x*x*x;
}

// 2 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.

function sameLength(string1, string2) {
  return string1.length === string2.length;
}

// 3 - Write a function called scoreToGrade that accepts a number as a parameter and returns a string representing a letter grade corresponding to that score.

function scoreToGrade(number) {
 text ="Congratiolations Your score is ";
	if (number >= 90 && number <= 100) 
		return(text + 'A');
	else if (number >=80 && number < 90)
			return(text + 'B');

	else if (number >= 70 && number < 80)
		return(text + 'C');

	else if (number >= 60 && number < 70)
		return(text + 'D');

	else if (number >= 0 && number < 60)
		return("Sorry, it's F. you failed.");
	else 
		return("INVALID SCORE");
}
// USE RECURSION
// Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string str should be repeated
// repeatString('dog', 0); // => ''
// repeatString('dog', 1); // => 'dog'
// repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog'
// repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

function repeatString(str, count) {
  if(count === 0)
  	return '';
  return str + repeat(str,count-1)
}
