const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
      menuOverlay = document.querySelector('.menu__overlay')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.style.display = 'none';
});

menuOverlay.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.style.display = 'flex';
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.style.display = 'flex';
});

const counters = document.querySelectorAll('.work__bar-item__procent'),
        lines = document.querySelectorAll('.work__bar-item__firstline');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Smooth scroll (Jquery)

if (document.body.clientWidth > 767) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800 && $(this).scrollTop() < 3700) {
            $('.pageup').fadeIn();
        }
        else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
}

// Animate with WOW

new WOW().init();