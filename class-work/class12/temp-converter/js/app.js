$('#celcius').keyup(calculateF);
$('#farenheight').keyup(calculateC);

function calculateF() {
	var celcius = $('#celcius').val();
	var farenheight = Math.ceil((celcius * 1.8) + 32);
	$('#farenheight').val(farenheight);
	gaugeHeight(celcius);
}

function calculateC() {
	var farenheight = $('#farenheight').val();
	var celcius = Math.ceil((farenheight - 32) / 1.8);
	$('#celcius').val(celcius);
	gaugeHeight(celcius);
} 

function gaugeHeight(celcius) {
	$('.gauge').height(celcius / 400 * 100 + "%");
	$('.whiteSpace').height(100 - (celcius / 400 * 100) + "%")
}
