$(window).on('load', function () {
	// $('.preloader').delay(500).fadeToggle(500);


	if (window.matchMedia("(min-width: 851px)").matches) {

		// var link = Array.prototype.slice.call(document.querySelectorAll(".header__link")).reverse();

		// var tl = gsap.timeline({ defaults: { duration: 1 } });
		// tl.from(".intro__bg", { delay: 1, x: '-100%' })
		//   .from(".header__bg", { x: '-100%', opacity: 0 }, "-=.5")



	} else {



	}

});


$(function () {

	// Menu
	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
		};
		init();
	}();



	$('#fullpage').fullpage({
		autoScrolling: true,
		scrollBar: false,
		navigation: true,
		navigationTooltips: ['Home', 'About', 'Services', 'Works', 'Contact'],
		showActiveTooltip: true,
	});

	// Vegas
	// $('.intro').vegas({
	// 	transition: 'fade2',
	// 	animation: 'random',
	// 	timer: false,
	// 	delay: 8000,
	// 	transitionDuration: 2000,
	// 	slides: [
	// 		{ src: '../img/0013.jpg' },
	// 		{ src: '../img/07.jpg' },
	// 		{ src: '../img/0012.jpg' }
	// 	]
	// });





	var mySwiper = new Swiper('.ourServices__slider', {
		loop: true,
		slidesPerView: 'auto',
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		
	});

	var mySwiper2 = new Swiper('.portfolio__slider', {
		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 60,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});


	var mySwiper3 = new Swiper('.testimonials__slider', {
		loop: true,
		slidesPerView: 1,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	var mySwiper4 = new Swiper('.team__slider', {
		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 200,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});






	$(window).on("scroll load resize", function () {
		$(".box__pages").css("opacity", 1 - $(window).scrollTop() / 350);
	});

	$(window).on("scroll load resize", function () {
		$(".bgText--pages").css("opacity", 1 - $(window).scrollTop() / 500);
	});


	// Popup
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,


		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in',

		callbacks: {
			open: function () {
				jQuery('body').addClass('popup-active');
			},
			close: function () {
				jQuery('body').removeClass('popup-active');
			}
		}

	});


	$('.popup-with-zoom-anim').click(function () {
		var mySwiper5 = new Swiper('.services__popup-slider', {
			loop: true,
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: false
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'progressbar',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	});


	// Image popup
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		fixedContentPos: false,
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function (item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function (element) {
				return element.find('img');
			}
		}

	});


	// Tilt
	$('.js-tilt').tilt({
		maxTilt: 5,
		glare: true,
		maxGlare: 0.1,
		easing: "cubic-bezier(.03,.98,.52,.99)",
		speed: 600
	})






});

