// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o0l1l2e3h4"
function reverseString(str) { 
	let rvs = '';
    let i = 0;
   while(str.slice(0) !== ''){
   	rvs += str.slice(str.length - 1) + i;
   	str = str.slice(0,str.length - 1);
    i++;
   } 
   return rvs;
} 

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
// I tried t do it so it can work for multiple groups of lengths but something is wrong.
function arratStr(array){
	let arr = [];
	let i = 0;
	let j;
	let x;
	while(i < array.length){
		j = 0;
		x = 0;
		while(j < array.length - 1){
			if(i === j){
				j++;}
			if(array[i].length === array[j].length){
				arr[x] = [array[i], array[j]];
				x++;
			}
			j++;
		}
		i++
	}
	return arr;
}