// Menu open/close implementation

const menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      hamburger = document.querySelector('.hamburger'),
      overlay = document.querySelector('.menu__overlay'),
      menuLink = document.querySelectorAll('.menu__link');

const openMenu = () => {
          menu.classList.add('active');
},
      closeMenu = () => {
        menu.classList.remove('active');
      };

hamburger.addEventListener('click', () => {
    openMenu();
})

closeElem.addEventListener('click', () => {
    closeMenu();
})

window.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
        closeMenu();
    }
});

window.addEventListener('click', (e) => {
    if (e.target == overlay) {
        closeMenu();
    }
});

menuLink.forEach (item => {
    item.addEventListener('click', () => {
        closeMenu();
    });
});

// Percentages recalculation of the skills section

const rates = document.querySelectorAll('.skills__ratings-level'),
      lines = document.querySelectorAll('.skills__ratings-scale div');

rates.forEach((item, index) => {
    lines[index].style.width = item.innerHTML;
})