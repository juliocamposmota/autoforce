let headerNetworksList = document.querySelector('.header__networks-list')
let a = document.createElement('a')
let i = document.createElement('i')

headerNetworksList.append(a)
a.append(i)

a.setAttribute('href', 'https://testes.autoforce.com.br/autoforce-ford')
a.setAttribute('target', '_blank')

i.setAttribute('class', 'icon icon-youtube-header icon--small icon--hover-instagram')