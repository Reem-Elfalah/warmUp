// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']
function objKey(obj){
	return Object.keys(obj);
}
// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

function objLength(obj){
	let arr = Object.keys(obj);
	return arr.length;
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
function objSort(arr){
	let array = [];
    let min = 0;
	for(let i = 1; i < arr.length; i++){
		for(let j = 0; j < arr.length; j++){     // the idea is to compare each element with others, but something is wrong and I couldn't figure it out
			if(arr[i].id < arr[j].id){
				min = arr[i];	        
			}    
		}
		array.push(min);
	}
	return array
}