$(window).on('load', function () {
	// $('.darkBox').delay(100).fadeToggle(100);
	$('.intro__title').addClass('active');

	// Intro
	var tl0 = gsap.timeline({ defaults: { duration: 1 } });
			tl0.to(".intro__stick", { delay: 3.5, width: '60%' })
			tl0.from(".intro__subtitle", { x: '-5%', opacity: 0 }, "-=.8")
			tl0.from(".intro__btn-box", { x: '-5%', opacity: 0 }, "-=.7")
			tl0.from(".intro__arrow", { y: '-50%', opacity: 0 }, "-=.7")
			tl0.from("#fp-nav li", { stagger: 0.1, x: '50%', opacity: 0 }, "-=1")

	// Header & Footer
	var tl1 = gsap.timeline({ defaults: { duration: 1 } });
			tl1.from(".header__logo", { delay: 1, y: '50%', opacity: 0 })
			tl1.from(".menu", { y: '50%', opacity: 0 }, "-=1")
			tl1.from(".footer__copy", { y: '50%', opacity: 0 }, "-=.8")
			tl1.from(".social__link", { y: '20%', opacity: 0, stagger: 0.2 }, "-=.8")




	if (window.matchMedia("(min-width: 851px)").matches) {

		// var link = Array.prototype.slice.call(document.querySelectorAll(".header__link")).reverse();

		

	} else {



	}

});


$(function () {

	// Animsition
	$(".animsition-overlay").animsition({
		inClass: 'overlay-slide-in-top',
		outClass: 'overlay-slide-out-top',
		inDuration: 1500,
		outDuration: 800,
		linkElement: '.animsition-link',
		loading: true,
		loadingParentElement: 'body', 
		loadingClass: 'animsition-loading',
		loadingInner: '', // e.g '<img src="loading.svg" />'
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: ['animation-duration', '-webkit-animation-duration'],
		overlay: true,
		overlayClass: 'animsition-overlay-slide',
		overlayParentElement: 'body',
		transition: function (url) { window.location.href = url; }
	});




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
		navigationTooltips: ['Home', 'About', 'Services', 'Works', 'Contacts'],
		showActiveTooltip: true,

		onLeave: function (origin, destination, direction) {

			// about us
			if (destination == 2) {
				var tl2 = gsap.timeline({ defaults: { duration: 1 } });
						tl2.from(".bgText span", { delay: .5, y: '110%'})
							 .from(".aboutUs__suptitle", { opacity: 0, y: '100%' }, "-=.7")
							 .from(".aboutUs__title", { y: '20%', opacity: 0 }, "-=.7")
							 .from(".aboutUs__text", { stagger: 0.2, y: '20%', opacity: 0 }, "-=.7")
							 .from(".aboutUs__btn-box", { y: '40%', opacity: 0 }, "-=.8")
							 .from(".aboutUs__image", { x: '100%' }, "-=1.7")
							 .from(".aboutUs__image-dark", { width: '100%' }, "-=.7")
							 .from(".aboutUs__item", { stagger: 0.2, y: '20%', opacity: 0 }, "-=1.5")
			};
			// our services
			if (destination == 3) {
				var tl3 = gsap.timeline({ defaults: { duration: 1 } });
						tl3.from(".ourServices__item-hide", { delay: .5, height: '100%', stagger: 0.2 })
							 .from(".ourServices__num", { y: '20%', opacity: 0, stagger: 0.2 }, "-=2.4")
							 .from(".ourServices__name", { y: '20%', opacity: 0, stagger: 0.2 }, "-=2.2")
							 .from(".ourServices__popup-pagination", { width: 0 }, "-=2.2")
							 .from(".ourServices-button-prev", { y: '20%', opacity: 0 }, "-=2.2")
							 .from(".ourServices-button-next", { y: '20%', opacity: 0 }, "-=2.2")		 
			};
			// potfolio
			if (destination == 4) {
				var tl4 = gsap.timeline({ defaults: { duration: 1 } });
						tl4.from(".portfolio__bgText span", { delay: .5, y: '110%' })
							 .from(".portfolio__item-hide", { height: '100%', stagger: 0.2 }, "-=.8")
							 .from(".portfolio__btn-box", { y: '15%', opacity: 0 }, "-=1.8")
							 .from(".portfolio-button-prev", { opacity: 0 }, "-=.8")
							 .from(".portfolio-button-next", { opacity: 0 }, "-=1")		 
			};
			// contacts
			if (destination == 5) {
				var tl4 = gsap.timeline({ defaults: { duration: 1 } });
						tl4.from(".ourContacts__bgText span", { delay: .5, y: '110%' })
							 .from(".ourContacts__title", { y: '50%', opacity: 0 }, "-=.7")
							 .from(".ourContacts__text", { y: '30%', opacity: 0 }, "-=.7")
							 .from(".ourContacts__logo", { y: '15%', opacity: 0, stagger: 0.2 }, "-=.7")
							 .from(".ourContacts__adress", { y: '15%', opacity: 0 }, "-=1")
							 .from(".ourContacts__tel a", { y: '15%', opacity: 0, stagger: 0.2 }, "-=.8")
							 .from(".ourContacts__email", { y: '15%', opacity: 0 }, "-=1")
							 .from(".ourContacts__map", { x:'100%' }, "-=2.2")
							 .from(".ourContacts__map-hide", { width: '100%' }, "-=1.2")
			};

		}
	});


	// Vegas
	$('.intro').vegas({
		transition: 'fade2',
		animation: 'random',
		timer: false,
		delay: 8000,
		transitionDuration: 2000,
		slides: [
			{ src: '../img/0013.jpg' },
			{ src: '../img/07.jpg' },
			{ src: '../img/0012.jpg' }
		]
	});





	var mySwiper = new Swiper('.ourServices__slider', {
		loop: false,
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
		loop: false,
		slidesPerView: 'auto',
		spaceBetween: 40,
		centeredSlides: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {

			701: {
				spaceBetween: 60,
			},
			1401: {
				centeredSlides: false,
			}
		}
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




	if (window.matchMedia("(min-width: 1440px)").matches) {

		$(window).on("scroll load resize", function () {
			$(".box__pages").css("opacity", 1 - $(window).scrollTop() / 350);
		});

		$(window).on("scroll load resize", function () {
			$(".bgText--pages").css("opacity", 1 - $(window).scrollTop() / 500);
		});

	} else {

		$(window).on("scroll load resize", function () {
			$(".box__pages").css("opacity", 1 - $(window).scrollTop() / 200);
		});

		$(window).on("scroll load resize", function () {
			$(".bgText--pages").css("opacity", 1 - $(window).scrollTop() / 300);
		});

	}




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

