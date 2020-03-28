// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//create a function isSubset that should take two arrays and determine whether
// the second array is a subset of the first array.
//For example:

// array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
// array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
// array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
function isSubset(arr1, arr2) {
	let check = arr2.length;
	for(let i = 0; i < arr1.length; i++){
		for(let j = 0; j < arr2.length; j++){
			if (arr1[i] === arr2[j]){
				check--;
				arr1.splice(i,1);
				i--;
			}
		}
	}
	if (check === 0)
		return true;
	return false
}