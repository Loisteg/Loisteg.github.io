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