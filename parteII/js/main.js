
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

let menuItem = document.querySelector('.menu-item');
let subMenuItem = document.querySelector('.sub-menu');
let arrow = document.querySelector('.arrow-icon');
let menuItemOpen = false;

menuItem.addEventListener('click', () => {
  if(!menuItemOpen) {
    menuItem.classList.add('open');
    subMenuItem.classList.add('open');
    arrow.classList.add('open');
    menuItemOpen = true;
  } else {
    menuItem.classList.remove('open');
    subMenuItem.classList.remove('open');
    arrow.classList.remove('open');
    menuItemOpen = false;
  }
});


// function mouseOver() {
//   this.classList.add('open');
// }

// function mouseOut() {
//   this.classList.remove('open');
// }

// menuItem.addEventListener('mouseover', mouseOver);
// menuItem.addEventListener('mouseout', mouseOut);