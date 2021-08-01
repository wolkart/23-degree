$(document).ready(function() {
	
	function ibg(){
		$.each($('.ibg'), function(index, val) {
			if($(this).find('img').length>0){
				$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
			}
		});
	}
	ibg();

	var burger 	 = $('.nav-burger'),
	menu   	 = $('.nav-menu'),
	menuItem = $('.nav-menu ul li a')

	$(burger).click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		menu.toggleClass('active');
	});

	$(menuItem).click(function(e) {
		e.preventDefault();
		menu.removeClass('active');
		burger.removeClass('active');
	});

	//Клик вне области
	$(document).mouseup(function(e) {
		e.preventDefault();
		if (!$(e.target).is('.nav-burger, .nav-menu, .nav-menu ul')) {
			menu.removeClass('active');
			burger.removeClass('active');
		}
	});

	$( "#slider-range" ).slider({
	  range: false,
	  min: 100,
	  max: 500000,
	  values: [ 100000, 250000 ],
	  slide: function( event, ui ) {
	    $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	  }
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});