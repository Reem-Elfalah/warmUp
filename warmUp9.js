// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
//check whether the input is array ot not not using array methods.
function isArray(input){
	return Array.isArray(input);
}

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
<<<<<<< HEAD
//    first([1,2,3,4]2)=>[1,2]
// a loop is needed to find the required number of elements, same n given by the
// user will be used but after decreasing 1, so it matches the current element required in the array since arrays
// start with index 0, unshift is used to place the elements in order.
function first(array,n){
	let arr = [];
	for(n--; n >= 0; n--){
		arr.unshift(array[n])
	}

	return arr
}


//    first([1,2,3,4],2)=>[1,2]
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]
 //first keys must be defined, so I used the object method keys. and then a loop is required to get each value for those keys
 // and place it next to its key in the final array.

function convert(obj){
	let arrayOfKeys = Object.keys(obj); 
	let array = [];
	for(let i = 0; i < arrayOfKeys.length; i++){
		array[i] = [arrayOfKeys[i], obj[arrayOfKeys[i]]];
		}
return array
}

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************
