$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 1000,
		easing: 'linear',
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
		draggable: true,
		swipe: true,
		touchMove: true,
		waitForAnimate: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});

$(".item").magnificPopup({
	type : 'image',
	gallery : {
		enabled : true
	},
	removalDelay: 300,
	mainClass: 'mfp-fade'
});

$(".media__screenshot").magnificPopup({
	type : 'image',
	gallery : {
		enabled : true
	},
	removalDelay: 300,
	mainClass: 'mfp-fade'
});