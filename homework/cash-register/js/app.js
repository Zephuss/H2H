// User flow:
// 1: user enters numerical value into #newEntry
// 2: user pushes enter key (submits the form), the new line is appended to the <tbody id="entries">
// 3: #total is updated to reflect the sum of all the #entries
//
// Instructions:
// 1: Add a .submit event to the form; use an anonymous function to handle the sumbit
// Inside the anonymous function:
// 2: Remeber to prevent the default action on the form!
// 3: Create a variable to store the user input from #newEntry
// 4: Remember to call parseFloat() on this variable! It needs to be a number.
// 5: Append a new <tr></tr> to the <tbody id="entries"> containing two <td>'s, one of which contains the new variable: <tr><td></td><td>NEW VALUE</td></tr>
// 6: Figure out a way to update the number in #total (Hint: look back at the calculator box example)
// 7: Empty the input in #newEntry (clear it out)
// BONUS 8: If the user does not enter a number, do not calculate and alert them!  (If Else)
$(document).ready(function(){
		var total = 0
		var count = 0
	$('#entry').submit(function(event){
		event.preventDefault();
		if ($('#newEntry').val() === ''){
			alert('you must enter something dipshit')
		}
		else {
			var amount = $('#newEntry').val();
			amount = parseFloat(amount);
			count = count + 1;
			$('#entries').append('<tr><th><button id="' + count + '">Tax 20%</button></th><th></th><th id="amount' + count + '">' + amount + '</th></tr>');
			total = amount + total;
			$('#total').html('$' + total)
			$('#newEntry').val('')
		}
	});
	$('#entries').on('click', 'button',  function(){
		var currentId = $(this).attr('id')
		var currentVal = $('#amount' + currentId).html()
		currentVal = parseFloat(currentVal)
		newVal = currentVal * 1.20
		$('#amount' + currentId).html(newVal).addClass('t')
		$('#' + currentId).prop('disabled', true)
		//this updates the total
		taxAmt = newVal - currentVal
		total = total + taxAmt
		$('#total').html('$' + total)
	})
	 $(document).on('click', '#rmvTax', function(){
	 	$('th.t').each(function(){
	 			var oldAmount = $(this).html()
				var amount = $(this).html()
				console.log(amount)
				amount = parseFloat(amount)
				$(this).html(amount / 1.2)
				var amount = $(this).html()
				$('button').prop('disabled', false)
				//to update total
				var newAmount = amount - oldAmount
				console.log(newAmount)
				total = total + newAmount
				console.log(total)
				$('#total').html('$' + total)
				$(this).removeClass('t')
	 	})
	})
})	
 //to theoretically remove the row when the number is clicked on.
$('#entries').on('click', 'th', function() {
	if ($(this).has($('button'))){
		console.log(this)
	}
	else {
		console.log('correct')
	}
})
// the las couple of lines are all commented out because it doesn't work

