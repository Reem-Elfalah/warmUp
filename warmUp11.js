// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors
let females = ['Amal Mansour', 'Emna labiadh', 'Hiba brik', 'Khaoula', 'Meryem Ben Askri', 'Mouna Khila', 'Ranoua lachheb', 'Wala Nour'];

let males = ['Adam Boulawdhen', 'Ahmed Fenni', 'Ahmed guedri', 'Akil Zitouni', 'Amine hamdi', 'Aouissaoui mohamed achref', 'Bessam Haj Salem', 
	'Brahim derouiche', 'Omar Chaouachi', 'Charaf Chroudi', 'Dhia Fattoum', 'Fedi Bn Khalifa', 'Firas Bchir', 'Hamza Ouni', 'Hbaieb Khaled',
 	'Kais Felhi', 'Malek Chebil', 'Moez Hamza', 'Moez Saafi', 'Mohamed Amine Oueslati', 'Mohamed Ben Ammar', 'Oussama fejjari', 'Oussema Sfèri',
 	'rabai alaa', 'Sahli Chahine', 'Sami Affes', 'Skander ben Romdhane', 'Yasser massoud', 'Youssef sami', 'Zakaria Gharbi', 'Zied Abdelli'];

let instructors = ['Abobaker Elaghel', 'Farouk Guizeni', 'Hashem Buzer', 'Houda Rouaissi', 'Insaf', 'Jihed Abdelly', 'Mohamed Dhia', 'Omar Belghith', 
	'Seif Miehiar', 'Walid Hajhussien']

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middle(array){
	if (array.length % 2 === 0)
		return 'Array has even number of elements';
	return array[Math.floor(array.length / 2)]
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function evenIndex(array){
	for (let i = 0; i < array.length; i++){
		if (i === 0 || i % 2 === 0)
			array[i] = array[i] * 2;
	}
	return array;
}