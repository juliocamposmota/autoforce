let head = document.querySelector('head')
let header = document.querySelector('header')
let modalContainer = document.createElement('div')
let styles = document.createElement('style')

styles.innerHTML = `
  #abrirModal {
    padding: 5px;
    text-align: center;
    background-color: rgb(20,96,198);
  }

  #abrirModal a {
    width: 100%;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 10px;
    color: #fff;
  }

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: rgba(0,0,0,0.8);
    z-index: 99999;
    opacity:0;
    -webkit-transition: opacity 400ms ease-in;
    -moz-transition: opacity 400ms ease-in;
    transition: opacity 400ms ease-in;
    pointer-events: none;
  }

  .modal:target {
    opacity: 1;
    pointer-events: auto;
  }

  .modal > div {
    width: 400px;
    position: relative;
    margin: 10% auto;
    padding: 15px 20px;
    background: #fff;
    border: 6px solid rgba(0,0,0,0.2);
    text-align: center;
  }

  .modal img {
    width: 100%;
  }

  .modal a:nth-of-type(2) {
    width: 100%;
    padding: 5px;
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    background-color: rgb(20,96,198);
    border-radius: 10px;
    color: #fff;
  }

  .fechar {
    position: absolute;
    width: 30px;
    right: -15px;
    top: -20px;
    text-align: center;
    line-height: 30px;
    margin-top: 5px;
    background: rgb(20,96,198);
    border-radius: 10px;
    font-size: 16px;
    color: #fff;
  }
`;

modalContainer.innerHTML = `
  <div id="abrirModal">
    <a href="#modal">Open Modal</a>
  </div>
  
  <div class="modal micromodal-slide" id="modal" aria-hidden="true">
    <div>
      <a href="#" title="Fechar" class="fechar">x</a>
      <img src="https://logodetimes.com/times/palmeiras/logo-palmeiras-512.png">
      <a href="https://www.youtube.com/watch?v=KIS_80SkWLE" target="_blank">Retrospectiva em campeonatos mundais</a>
    </div>
  </div>
`;

header.prepend(modalContainer)
head.append(styles)

let microModal = modalContainer.querySelector('.micromodal-slide')
let openLink = modalContainer.querySelector('#abrirModal')
let closeLink = modalContainer.querySelector('.fechar')

function openClick() {
  microModal.setAttribute('class', 'modal micromodal-slide is-open')
  microModal.setAttribute('aria-hideen', 'false')
}

function closeClick() {
  microModal.setAttribute('class', 'modal micromodal-slide')
  microModal.setAttribute('aria-hideen', 'true')
}

openLink.addEventListener('click', openClick)
closeLink.addEventListener('click', closeClick)