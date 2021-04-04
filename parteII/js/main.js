
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

let menuItens = document.querySelectorAll('.menu-item');
let subMenuItens = document.querySelectorAll('.sub-menu');
let arrows = document.querySelectorAll('.arrow-icon');

let menuItemOpen = false;

for (let index = 0; index < menuItens.length; index += 1) {
  if (!subMenuItens[index]) {
    break;
  } else {
    menuItens[index].addEventListener('click', () => {
      if(!menuItemOpen) {
        menuItens[index].classList.add('open');
        subMenuItens[index].classList.add('open');
        arrows[index].classList.add('open');
        
        menuItemOpen = true;
      } else {
        menuItens[index].classList.remove('open');
        subMenuItens[index].classList.remove('open');
        arrows[index].classList.remove('open');
        
        menuItemOpen = false;
      }
    });
  }
}




// function mouseOver() {
//   this.classList.add('open');
// }

// function mouseOut() {
//   this.classList.remove('open');
// }

// menuItem.addEventListener('mouseover', mouseOver);
// menuItem.addEventListener('mouseout', mouseOut);