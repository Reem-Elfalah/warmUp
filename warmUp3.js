// 1 - Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively
function larger(str1,str2){
	if(str1.length > str2.length)
		return str1 + ', is the longer string.';
	else if (str1.length === str2.length)
		return 'Strings have the same length';
	else 
		return str2 + ', is the longer string.';
}
function smaller(str1,str2){
	if(str1.length < str2.length)
		return str1 + ', is the smaller string.';
	else if (str1.length === str2.length)
		return 'Strings have the same length';
	else 
		return str2 + ', is the smaller string.';

}
// 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
// function counting(n) { 
	var i = 1;
   function counting(n){\
   	
  if(i===n)
  	return n;
  return '' + i +',' + counting(i+1)
  i++;
   }

 function counter(n){
 	if (n !== 0)
 		return n++

 	return counter(n)
 }
// } 
// counting(5); // => '1, 2, 3, 4, 5' 
// counting(1); // => '1' 
// counting(3); // => '1, 2, 3'


// 3 -  Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5
// welcome 1
//  welcome 2, meet 1
//  welcome 3, meet 1 and 2
//  welcome 4, meet 1, 2 and 3
//  welcome 5, meet 1, 2, 3 and 4
//

function meetGreet(n){
	i=0;
	var str ='welcome';
	var str1 = 'meet';
	var	str2='and';
while(i<n-1){
	return '/n'
	i++;
	return 

}
}

// 4- Write a function shortestWord that works like longestWord, but returns the shortest word instead.

function shortestWord(str1,str2){
		if(str1.length < str2.length)
		return str1 + ', is the smaller string.';
	else if (str1.length === str2.length)
		return 'Strings have the same length';
	else 
		return str2 + ', is the smaller string.';
}