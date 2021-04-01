let fieldsetForm = document.querySelector('form.conversion-form fieldset')
let formGroups = document.querySelectorAll('form.conversion-form div.form-group')

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



// let choiceItemSelectable = choicesList[2].children[1].cloneNode(true)

// let optionElement = document.querySelector('div.form-group option')
// optionElement.setAttribute('value', options[0])
// optionElement.setAttribute('selected', 'selected')
// optionElement.innerText = options[0]

// // Input Message
// let inputFormGroupClone = formGroups[formGroups.length - 1].cloneNode(true)
// fieldsetForm.append(inputFormGroupClone)

// for (let index of options) {
//   let option = document.createElement('option')
//   option.setAttribute('value', index)
//   option.innerHTML = index;
//   selectElement.appendChild(option)
// }

// selectElement.setAttribute('class', 'form-control choices__input ')
// let selectElement = document.createElement('select')
// divFormGroup.setAttribute('class', 'form-group choices choices__inner')
// divFormGroup.prepend(selectElement)
// let divFormGroup = document.createElement('div')