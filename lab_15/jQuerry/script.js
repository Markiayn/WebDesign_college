$(function () {
    var sldr = $('.sldr'),
        slideWidth, // оголошуємо без значення
        slideCount = $('.sldr img').length,
        prv_b = $('.prv_b'),
        nxt_b = $('.nxt_b'),
        sldrInterval = 3300,
        animateTime = 1000,
        course = 1,
        margin,
        interval;

    // Функція для оновлення ширини
    function updateSlideWidth() {
        slideWidth = $('.sl_ctr').outerWidth();
        margin = -slideWidth;
        // Оновлюємо ширину всіх картинок під ширину контейнера
        $('.sldr img').width(slideWidth);
        // Скидаємо позицію
        sldr.css({'marginLeft': margin, 'width': slideWidth * (slideCount + 2)});
    }

    // Ініціалізація
    $('.sldr img:last').clone().prependTo('.sldr');
    $('.sldr img').eq(1).clone().appendTo('.sldr');
    updateSlideWidth();

    function nxt_bSlide() {
        interval = window.setInterval(animate, sldrInterval);
    }

    function animate() {
        // Логіка залишається твоєю, вона вірна
        if (margin == -slideCount * slideWidth - slideWidth) {
            sldr.css({'marginLeft': -slideWidth});
            margin = -slideWidth * 2;
        } else if (margin == 0 && course == -1) {
            sldr.css({'marginLeft': -slideWidth * slideCount});
            margin = -slideWidth * slideCount + slideWidth;
        } else {
            margin = margin - slideWidth * course;
        }
        sldr.animate({'marginLeft': margin}, animateTime);
    }

    function sldrStop() { window.clearInterval(interval); }

    // Обробники кнопок... (твої вже правильні)
    prv_b.click(function () {
        if (sldr.is(':animated')) return false;
        var course2 = course; course = -1; animate(); course = course2;
    });

    nxt_b.click(function () {
        if (sldr.is(':animated')) return false;
        var course2 = course; course = 1; animate(); course = course2;
    });

    sldr.add(nxt_b).add(prv_b).hover(sldrStop, nxt_bSlide);
    nxt_bSlide();

    // Головна частина адаптивності:
    $(window).resize(function() {
        updateSlideWidth();
    });
});