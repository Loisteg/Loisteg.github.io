const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.work__bar-item__procent'),
        lines = document.querySelectorAll('.work__bar-item__firstline');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Smooth scroll (Jquery)

console.log(document.body.clientWidth);

if (document.body.clientWidth > 767) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
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

// $('.contacs__form').validate({
//     rules: {
//         name: {
//             required: true,
//             minlength: 2
//         },
//         email: {
//             required: true,
//             email: true
//         },
//         text: {
//             required: true,
//             minlength: 1
//         }
//     },
//     messages: {
//         name: {
//             required: 'Пожалуйста, введите своё имя',
//             minlength: jQuery.validator.format("Введите хотя бы {0} символа")
//         },
//         email: {
//           required: 'Пожалуйста, введите свою почты',
//           email: 'Неправильно введён адрес почты'
//         },
//         text: {
//             required: ""
//         }
//       }
// });


//PHP Form

// $('form').submit(function(e) {
//     e.preventDefault();

//     if (!$(this).valid()) {
//         return;
//     }

//     $.ajax({
//         type: 'POST',
//         url: 'mailer/smart.php',
//         data: $(this).serialize()
//     }).done(function() {
//         $(this).find('input').val('');
//         $('form').trigger('reset');
//     });
//     return false;
// });
