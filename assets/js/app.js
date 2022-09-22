;(function ($) {
	'use strict';
	let windowWidth = $(window).width();

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

	let callSearchForm = function () {
		$('.call-search').click(function () {
			$(this).parent().find('.search-form').toggleClass('is-show');
		});

		$(document).on('mouseup', function (e) {
			let o = $(".search-form.is-show");
			o.is(e.target) || 0 !== o.has(e.target).length || (
				o.removeClass('is-show'));
		});
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

	$(function () {
		initSliderBanner();
		callSearchForm();
		initCounter();
	});
})(jQuery);