$( function() {
    $( "#draggable" ).draggable({
    	cursor: "pointer"
    });
  } );
$(document).ready(function birdPlacement () {
	 	$('.bird').each(function(){
	 		var id = $(this).attr('id')
	 		var left = Math.ceil(Math.random() * 4000)
	 		var top = Math.ceil(Math.random() * 4000)
	 		$('#' + id).css('left',  left + 'px')
	 		$('#' + id).css('top', top + 'px')
			})
	 })
$(document).on('click', '.bird', function(){
	$('.birdBox').addClass('hidden')
	var id = $(this).attr('id')
	id = parseInt(id)
	$('#bird_' + id).removeClass('hidden')
	$('.bird').addClass('hidden')
})
$('.birdBox').on('click', '.close', function(){
	$('.birdBox').addClass('hidden')
	$('.bird').removeClass('hidden')
})

var parentPos = $('body').offset();
var childPos = $('.sky').offset();

$(".sky").draggable({
    drag: function(event, ui) {
        var screenW = $(window).width()
        var screenH = $(window).height()
  /*      console.log(screenW)
        console.log(screenH)*/
        if (ui.position.top > parentPos.top) {
            ui.position.top = parentPos.top;
        }
        if (ui.position.left > parentPos.left) {
            ui.position.left = parentPos.left;
        }
        if (ui.position.left < parentPos.left - (4000 - screenW)) {
            ui.position.left = parentPos.left - (4000 - screenW);
        }
        if (ui.position.top < parentPos.top - (4000 - screenH)) {
        	ui.position.top = parentPos.top - (4000 - screenH)
        }
    },
    scroll: false
});
$('.birdBox').on('click', '.button', function(){
	var BtnClass = $(this).attr('class')
	console.log(BtnClass)
	if (BtnClass == 'button wrong'){
		$('.birdBox .button').removeAttr('id')
		$(this).attr('id', 'wrong')
	}
	else {
		$('.birdBox .button').removeAttr('id')
		$(this).attr('id', 'correct')
	}
})
