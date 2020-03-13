// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.
// your code is here
//1
'Reem ' + 'Elfalah'

//2
13%3===0

//3
var array = [13,14,13,15,16,17,19,13,16,15]
var nOfNums = array.length
var total= 0;
for(i=0; i<nOfNums; i++){
	total+= array[i];
}

//4
var avg = total/nOfNums
var ageInsec = 24*365*24*60*60