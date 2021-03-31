let liElements = document.querySelectorAll('.header-desktop .header__card-whatsapp-item');
let aElements = document.querySelectorAll('.header-desktop .header__card-whatsapp-item .header-mobile__whatsapp-link');

let whatsappNumbers = [
  'https://api.whatsapp.com/send?phone=551199999999',
  'https://api.whatsapp.com/send?phone=5511111111111',
  'https://api.whatsapp.com/send?phone=5511973860742&amp;text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20este%20ve%C3%ADculo.'
];

for (let index = 0; index < aElements.length; index += 1) {
  var clone = aElements[index].cloneNode(true);
  
  aElements[index].remove();
  liElements[index].prepend(clone);
  
  clone.setAttribute('href', whatsappNumbers[index]);
  clone.setAttribute('target', '_blank');
}