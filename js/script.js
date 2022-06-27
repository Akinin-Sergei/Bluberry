$(function () {

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });



    /* Fixed Header */
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* SCROLL TO TOP */
    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= introH) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 1000);
    })



    /* Звездный рейтинг - Блинчики */
    $(".rateYo_bl-one").rateYo({
        rating: 4,
        readOnly: true
    });

    $(".rateYo_bl-twoo").rateYo({
        rating: 5,
        readOnly: true
    });

    $(".rateYo_bl-tree").rateYo({
        rating: 3,
        readOnly: true
    });

    $(".rateYo_bl-four").rateYo({
        rating: 5,
        readOnly: true
    });

    $(".rateYo_bl-five").rateYo({
        rating: 4,
        readOnly: true
    });

    $(".rateYo_bl-six").rateYo({
        rating: 5,
        readOnly: true
    });

    $(".rateYo_bl-seven").rateYo({
        rating: 2,
        readOnly: true
    });

    $(".rateYo_bl-eight").rateYo({
        rating: 1,
        readOnly: true
    });


    /* Звездный рейтинг - Печенье */
    $(".rateYo_cook-one").rateYo({
        rating: 4,
        readOnly: true
    });

    $(".rateYo_cook-twoo").rateYo({
        rating: 5,
        readOnly: true
    });

    $(".rateYo_cook-tree").rateYo({
        rating: 3,
        readOnly: true
    });

    $(".rateYo_cook-four").rateYo({
        rating: 5,
        readOnly: true
    });

    $(".rateYo_cook-five").rateYo({
        rating: 4,
        readOnly: true
    });

    $(".rateYo_cook-six").rateYo({
        rating: 5,
        readOnly: true
    });

    $(".rateYo_cook-seven").rateYo({
        rating: 4,
        readOnly: true
    });

    $(".rateYo_cook-eight").rateYo({
        rating: 3,
        readOnly: true
    });


    /* Звездный рейтинг - Шоколад */
    $(".rateYo_ch-one").rateYo({
        rating: 5,
        readOnly: true
    });

    $(".rateYo_ch-twoo").rateYo({
        rating: 5,
        readOnly: true
    });

    $(".rateYo_ch-tree").rateYo({
        rating: 5,
        readOnly: true
    });

    $(".rateYo_ch-four").rateYo({
        rating: 3,
        readOnly: true
    });

    $(".rateYo_ch-five").rateYo({
        rating: 2,
        readOnly: true
    });

    $(".rateYo_ch-six").rateYo({
        rating: 5,
        readOnly: true
    });

    $(".rateYo_ch-seven").rateYo({
        rating: 3,
        readOnly: true
    });

    $(".rateYo_ch-eight").rateYo({
        rating: 4,
        readOnly: true
    });


    /* Звездный рейтинг - Торт */
    $(".rateYo_cake-one").rateYo({
        rating: 3,
        readOnly: true
    });

    $(".rateYo_cake-twoo").rateYo({
        rating: 5,
        readOnly: true
    });

    $(".rateYo_cake-tree").rateYo({
        rating: 2,
        readOnly: true
    });

    $(".rateYo_cake-four").rateYo({
        rating: 5,
        readOnly: true
    });

    $(".rateYo_cake-five").rateYo({
        rating: 4,
        readOnly: true
    });

    $(".rateYo_cake-six").rateYo({
        rating: 5,
        readOnly: true
    });

    $(".rateYo_cake-seven").rateYo({
        rating: 4,
        readOnly: true
    });

    $(".rateYo_cake-eight").rateYo({
        rating: 5,
        readOnly: true
    });

    /* Звездный рейтинг - card */
    $(".rateYo_card-one").rateYo({
        rating: 4,
        readOnly: true
    });

    $(".rateYo_card-twoo").rateYo({
        rating: 5,
        readOnly: true
    });



    /* Переключатель */
    $('.menu__tabs-item').on('click', function (e) {
        e.preventDefault();

        $('.menu__tabs-item').removeClass('menu__tabs-item-active');
        $('.tabs-content').removeClass('tabs-content-active');

        $(this).addClass('menu__tabs-item-active');
        $($(this).attr('href')).addClass('tabs-content-active');

    });



    /* Slider__reviews */
    $('.reviews_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="reviews_slider-btn reviews_slider-btnprev"><img src="img/arrow_left.png" alt="arrow_left"></button>',
        nextArrow: '<button class="reviews_slider-btn reviews_slider-btnnext"><img src="img/arrow_right.png" alt="arrow_right"></button>'

    });

    /* Slider__news */
    $('.news_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

});


/*MAP*/
$(function () {
    if (typeof ymaps === 'undefined') {
        return;
    }

    ymaps.ready(function () {
        var myMap = new ymaps.Map('ymap', {
            center: [55.747566, 37.602292],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                balloonContent: 'Мы находимся здесь!'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../img/map_pointer.png',
                // Размеры метки.
                iconImageSize: [36, 51],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });

        myMap.geoObjects.add(myPlacemark)

        myMap.behaviors.disable('scrollZoom');/*что бы убрать скролл при наведении на карту*/


    });
});


document.getElementById("to_send").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Введите Ваше имя!");
    } else if (document.getElementById("phone").value === "") {
        alert("Введите Ваш телефон!!");
    } else {
        alert("Спасибо за заявку мы свяжемся с Вами в ближайшее время!");
    }
}
