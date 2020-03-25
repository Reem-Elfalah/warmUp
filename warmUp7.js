// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
<<<<<<< HEAD
//answer :
 5 < 7
=======
//answer : 5 < 7 ? true : false;
>>>>>>> eedf4d1da29beb7f6472f832fb846002ed7197b5

//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'

<<<<<<< HEAD
function hello(str){
	if(str === '')
		str = 'en';
	str.toLowerCase();
	
	let morningstr = {
		fr: 'Bonjour tout le monde',
		en: 'Hello, World',
		es: 'Hola, Mundo',
		it: 'Ciao mondo'
	}
	return morningstr[str]
}

=======
>>>>>>> eedf4d1da29beb7f6472f832fb846002ed7197b5

//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
function reverseArray(arr){
	let array = [];
	for(let i = 0; i < arr.length; i++){
		array.unshift(arr[i])
	}
	return array;
}
