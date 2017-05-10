$( function() {
    $( "#draggable" ).draggable({
/*    	containment: [0, 0, 4000, 4000],*/
    	cursor: "pointer"
 
    });
  } );
$(document).ready(function birdPlacement () {
	 	$('.bird').each(function(){
/*	 		var min = 1
	 		var max = 4000*/
	 		var id = $(this).attr('id')
	 		console.log(id)
	 		var left = Math.ceil(Math.random() * 4000)
	 		var top = Math.ceil(Math.random() * 4000)
	 		console.log(top)
	 		$('#' + id).css('left',  left + 'px')
	 		$('#' + id).css('top', top + 'px')

			})
	 })
$(document).on('click', '.bird', function(){
	var id = $(this).attr('id')
	id = parseInt(id)
	console.log(id)
	$('#bird_' + id).removeClass('display')
})