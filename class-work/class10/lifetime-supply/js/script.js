//add an event listen to #click-me
//store inputs as variables using .value method
//(max age - age) * drinks per day * 365
//output answers for the user to see


//1
 document.querySelector('#click-me').onclick = function () {
//2
 	var age = document.querySelector('#age').value;
 	var maxAge = document.querySelector('#max-age').value;
 	var numPerDay = document.querySelector('#num-per-day').value;
 	var item = document.querySelector('#item').value;
//3
 	age = parseInt(age);
 	maxAge = parseInt(maxAge);
 	numPerDay = parseInt(numPerDay);

 	var cat = (maxAge - age) * numPerDay * 365;
//4
 	document.querySelector('#solution').innerHTML = cat;
 	document.querySelector('#drink').innerHTML = item;

 }

