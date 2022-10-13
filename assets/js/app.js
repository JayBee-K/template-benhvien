;(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	let initNavigation = function () {
		if (windowWidth < 1024) {
			$(".header .header-navigation .header-navigation_inner > ul > li > ul").each(function (index) {
				$(this).prev().attr({
					"href": "#subMenu" + index,
					"data-bs-toggle": "collapse"
				});
				$(this).attr({
					"id": "subMenu" + index,
					"class": "collapse list-unstyled mb-0",
					"data-bs-parent": "#hasMenu"
				});
			});

			$('#call-navigation').click(function () {
				$('#header').toggleClass('is-navigation');
			});
			$('#header-overlay').click(function () {
				$('#header').removeClass('is-navigation');
			})
		}
	}

	let initHeaderScroll = function () {
		if (!$('body').hasClass('page-dontiep')) {
			if ($('body').height() / $(window).height() > 1.3) {
				$(window).scroll(function () {
					if ($(document).scrollTop() > 0) {
						$('#header').addClass('is-scroll').removeClass('is-scrolled');
					} else {
						$('#header').removeClass('is-scroll').addClass('is-scrolled');
					}
				});
			}
		}
	}

	let initSliderBanner = function () {
		if ($('#slider-banner').length) {
			new Swiper('#slider-banner .swiper', {
				speed: 500,
				autoplay: {
					delay: 8000,
					disableOnInteraction: true,
				},
				loop: 1,
				effect: 'fade',
				pagination: {
					el: "#slider-banner .swiper-pagination",
					clickable: 1,
				}
			});
		}
	}
	let initSliderPartner = function () {
		if ($('#slider-partner').length) {
			new Swiper('#slider-partner .swiper', {
				slidesPerView: "auto",
				spaceBetween: 15,
				freeMode: true,
				speed: 3000,
				loop: true,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
					pauseOnMouseEnter: true
				},
			});
		}
	}

	let initSliderFeature = function () {
		if ($('#feature-slide').length) {
			new Swiper('#feature-slide .swiper', {
				speed: 1000,
				spaceBetween: 10,
				autoplay: {
					delay: 8000,
					disableOnInteraction: true,
				},
				loop: 1,
				navigation: {
					nextEl: '#feature-slide .button-slider_next',
					prevEl: '#feature-slide .button-slider_prev',
				},
				centeredSlides: true,
				breakpoints: {
					1359: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 2.5,
					},
					375: {
						slidesPerView: 1.5,
					},
					320: {
						slidesPerView: 1,
					}
				},
				pagination: {
					el: "#feature-slide .swiper-pagination",
					clickable: 1,
				}
			});
		}
	}

	let initCounter = function () {
		let i = 0;
		if ($('#initCounter').length === 0) return false;
		$(window).scroll(() => {
			let counterOffsetTop = $('#initCounter').offset().top - window.innerHeight;
			if (i === 0 && $(window).scrollTop() > counterOffsetTop) {
				$('#initCounter .counter-event').each(function () {
					let counterItem = $(this),
						counterItemValue = counterItem.attr('data-value'),
						counterItemDecor = counterItem.attr('data-decor');

					$({countNum: counterItem.text()}).animate(
						{countNum: counterItemValue},
						{
							duration: 2000,
							easing: 'swing',
							step: function () {
								counterItem.html(Math.floor(this.countNum));
							},
							complete: function () {
								counterItem.html(this.countNum + '<span>' + counterItemDecor + '</span>');
							}
						});
				});
				i = 1;
			}
		});
	}

	let handleViewPass = function () {
		$('.btn-viewpass').click(function () {
			if ($(this).parent().hasClass('show-pass')) {
				$(this).parent().removeClass('show-pass');
				$(this).parent().find('input').attr('type', 'password');
				$(this).html('<i class="far fa-eye"></i>');
			} else {
				$(this).parent().addClass('show-pass');
				$(this).parent().find('input').attr('type', 'text');
				$(this).html('<i class="far fa-eye-slash"></i>');
			}
		});
	}

	$(function () {
		initNavigation();
		initHeaderScroll();
		initSliderBanner();
		initSliderPartner();
		initSliderFeature();
		initCounter();
		handleViewPass();
	});
})(jQuery);