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

    let callSearchForm = function () {
        $('.call-search').click(function () {
            $(this).parent().find('.search-form').toggleClass('is-show');
        });

        $(document).on('mouseup', function (e) {
            let o = $(".search-form.is-show");
            if ($('.call-search').has(e.target).length !== 1) {
                o.is(e.target) || 0 !== o.has(e.target).length || (
                    o.removeClass('is-show'));
            }
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

    let toggleCollapseMobile = function () {
        if (windowWidth < 992) {
            $('.btn-collapse').click(function (e) {
                if ($(this).next('.list-collapse').hasClass('is-show')) {
                    $(this).next('.list-collapse').removeClass('is-show');
                } else {
                    $(this).next('.list-collapse').addClass('is-show');
                }
            });

            $(document).on('mouseup', function (e) {
                let o = $(".list-collapse.is-show");
                if ($('.btn-collapse').has(e.target).length !== 1) {
                    o.is(e.target) || 0 !== o.has(e.target).length || (
                        o.removeClass('is-show'));
                }
            });
        }
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

    let initSelect2 = function () {
        if ($('.initSelect2').length) {
            $('.initSelect2').each(function () {
                let dropdownParent = $(this).parent();
                $(this).select2({
                    language: 'vi',
                    dropdownParent: dropdownParent,
                });
            })
        }
    }

    let initCreateRow = function () {
        let elmWrapper = $('#createRow');
        $('#createRow').on('click', '.addRow', function () {
            let rowRender = `<div class="row g-2 mt-0">
                                            <div class="col-lg-3 col-sm-6">
                                                <div class="position-relative row g-2">
                                                    <label for="" class="col-form-label col-4">
                                                        ĐK khám
                                                    </label>
                                                    <div class="col-8">
                                                        <select name="" id=""
                                                                class="form-select initSelect2">
                                                            <option value="">Khám Mắt</option>
                                                            <option value="">Khám Ngoại khoa</option>
                                                            <option value="">Khám Nội khoa</option>
                                                            <option value="">Khám Nội tiết</option>
                                                            <option value="">Khám Phụ sản</option>
                                                            <option value="">Khám Răng hàm mặt</option>
                                                            <option value="">Khám Tai mũi họng</option>
                                                            <option value="">Khám Tâm thần</option>
                                                            <option value="">Khám Ung bướu</option>
                                                            <option value="">Khám YHCT</option>
                                                            <option value="">Khám Lao</option>
                                                            <option value="">Khám Nội Hô Hấp</option>
                                                            <option value="">Khám Ngoại thận - tiết niệu</option>
                                                            <option value="">Khám Chấn thương chỉnh hình</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-sm-6">
                                                <div class="position-relative row g-2">
                                                    <label for="" class="col-form-label col-12">
                                                        Lúc:&nbsp;<span class="ms-2">07:01 10/07/2021</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-sm-6">
                                                <div class="position-relative row g-2">
                                                    <label for=""
                                                           class="col-form-label col-4 col-lg-2">
                                                        Lý do khám
                                                    </label>
                                                    <div class="col-8 col-lg-10">
                                                        <input type="text" class="form-control"
                                                               placeholder="Nhập lý do khám">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-sm-6">
                                                <div class="position-relative row g-2">
                                                    <label for=""
                                                           class="col-form-label col-4 col-lg-2">
                                                        Dịch vụ
                                                    </label>
                                                    <div class="col-8 col-lg-10">
                                                        <select name="" id="" class="form-select">
                                                            <option value="">Dịch vụ 1</option>
                                                            <option value="">Dịch vụ 2</option>
                                                            <option value="">Dịch vụ 3</option>
                                                            <option value="">Dịch vụ 4</option>
                                                            <option value="">Dịch vụ 5</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="position-relative row g-2">
                                                    <label for=""
                                                           class="col-form-label col-4 col-sm-2 col-lg-2">
                                                        Phòng khám
                                                    </label>
                                                    <div class="col-6 col-sm-8 col-lg-9">
                                                        <div class="position-relative">
                                                            <select name="" id="" class="form-select initSelect2">
                                                                <option value="">PK 1</option>
                                                                <option value="">PK 2</option>
                                                                <option value="">PK 3</option>
                                                                <option value="">PK 4</option>
                                                                <option value="">PK 5</option>
                                                                <option value="">PK 6</option>
                                                                <option value="">PK 7</option>
                                                                <option value="">PK 8</option>
                                                                <option value="">PK 9</option>
                                                                <option value="">PK 10</option>
                                                                <option value="">PK 11</option>
                                                                <option value="">PK 12</option>
                                                                <option value="">PK 13</option>
                                                                <option value="">PK 14</option>
                                                                <option value="">PK 15</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-2 col-lg-1">
                                                        <button type="button" class="btn btn-danger btn-sm btn-sm--width w-100 deleteRow">
                                                            <i class="fas fa-times"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>`;
            elmWrapper.append(rowRender);
        }).on('click', '.deleteRow', function () {
            $(this).closest('.row').remove();
        });
    }

    $(function () {
        initNavigation();
        initHeaderScroll();
        initSliderBanner();
        initSliderPartner();
        initSliderFeature();
        callSearchForm();
        initCounter();
        toggleCollapseMobile();
        handleViewPass();
        initSelect2();
        initCreateRow();
    });
})(jQuery);