let fieldsetForm = document.querySelector('form.conversion-form fieldset')
let formGroups = document.querySelectorAll('form.conversion-form div.form-group')

// Select element

let options = ['SUV', 'Sedan', 'Hatch', 'Pickup']

let divFormGroup = formGroups[0].cloneNode(true)
fieldsetForm.prepend(divFormGroup)

let choices = document.querySelector('div.form-group div.choices')
let choicesListDropdown = document.querySelector('.choices__list--dropdown')

let choicesList = document.querySelectorAll('.choices__list')
choicesList[2].innerHTML = ''

for (let index = 0; index < options.length; index += 1) {
  let newChoice = document.createElement('div')

  newChoice.setAttribute('class', 'choices__item choices__item--choice choices__item--selectable')
  newChoice.setAttribute('data-select-text', '')
  newChoice.setAttribute('data-choice', '')
  newChoice.setAttribute('data-id', index + 1)
  newChoice.setAttribute('data-value', options[index])
  newChoice.setAttribute('data-choice-selectable', '')
  newChoice.setAttribute('id', 'choices--selectedVariant-hj-item-choice-' + (index + 1))
  newChoice.setAttribute('role', 'option')
  newChoice.innerHTML = options[index]
  
  newChoice.addEventListener('mouseover', onMouseOver)
  newChoice.addEventListener('mouseout', onMouseOut)
  newChoice.addEventListener('click', onClick)
  choicesList[2].appendChild(newChoice)
}

let choicesItemSelectable = document.querySelector('div.choices__item.choices__item--selectable')
choicesItemSelectable.setAttribute('data-value', choicesList[2].children[0].getAttribute('data-value'))
choicesItemSelectable.innerHTML = choicesList[2].children[0].textContent

function openChoices() {
  choices.setAttribute('class', 'choices select-is-open is-focused')
  choices.setAttribute('aria-expanded', 'true')

  choicesListDropdown.setAttribute('class', 'choices__list choices__list--dropdown is-active')
  choicesListDropdown.setAttribute('aria-expanded', 'true')
}

function closeChoices() {
  choices.setAttribute('class', 'choices')
  choices.setAttribute('aria-expanded', 'false')
  
  choicesListDropdown.setAttribute('class', 'choices__list choices__list--dropdown')
  choicesListDropdown.setAttribute('aria-expanded', 'false')
}

choices.addEventListener('focus', openChoices)
choices.addEventListener('blur', closeChoices)

let inputElements = document.querySelectorAll('input')

function onMouseOver() {
  this.setAttribute('class', 'choices__item choices__item--choice choices__item--selectable is-highlighted')
  inputElements[6].setAttribute('aria-activedescendant', this.getAttribute('id'))
}

function onMouseOut() {
  this.setAttribute('class', 'choices__item choices__item--choice choices__item--selectable')
}

function onClick() {
  choicesItemSelectable.setAttribute('data-value', this.getAttribute('data-value'))
  choicesItemSelectable.innerHTML = this.textContent

  closeChoices()
}

// TextArea element
let textAreaFormGroup = document.createElement('div')
let textArea = document.createElement('textarea')

textAreaFormGroup.setAttribute('class', 'form-group')

textArea.setAttribute('class', 'form-control')
textArea.setAttribute('placeholder', 'Menssagem')
textArea.setAttribute('name', 'message')

fieldsetForm.append(textAreaFormGroup)
textAreaFormGroup.append(textArea)

// L??gica

// parte I

// 1. Clonar o elemento select existente no formul??rio
// 2. Inserir o elemento clonado no in??cio do elemento pai
// 3. Iterar sobre um array com as op????es de carros e criar um novo elemento para cada item do array
// 4. Alterar o campo selecionado ('placeholder') para o primeiro elemento do array de op????es
// 5. Fun????es:
// 5.1 Abrir e fechar lista
// 5.2 Destacar op????o em mouse over
// 5.3 Clicar para selecionar uma op????o

// parte II

// 1. Criar um elemento div e ajustar o atributo class para um form group
// 2. Inserir esse elemento no final do elemento pai
// 3. Criar um elemento textarea
// 4. Ajustar seus atributos
// 5. Colocar detro da div.form-group criada