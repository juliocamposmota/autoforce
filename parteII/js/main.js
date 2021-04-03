
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

// const menuItem = document.querySelector('.menu-item');

// function mouseOver() {
//   this.classList.add('open');
// }

// function mouseOut() {
//   this.classList.remove('open');
// }

// menuItem.addEventListener('mouseover', mouseOver);
// menuItem.addEventListener('mouseout', mouseOut);