(function($) {
$(function() {

	$('#scrollup').click(function() {
		$('body,html').animate({scrollTop:0},1700);
		return false;
	})

})
})(jQuery)