import { buttonComponent } from '../ui/button/button.component'
import { inputs } from './card-edit-form.data'
import './card-edit-form.style.css'
import { formComponent } from './form/form.component'
import { inputComponent } from './input/input.component'

export const cardEditForm = async () => {
  const cardEditFormElement = document.createElement('div')
  cardEditFormElement.className = 'card-edit-form-container'
  const moduleUrl = new URL('./card-edit-form.template.html', import.meta.url)
  const data = await (await fetch(moduleUrl)).text()
  cardEditFormElement.innerHTML = data
  document
    .querySelector('#app-inner-container')
    .appendChild(cardEditFormElement)
  appendForm()
  appendInputs()
  appendButtons()
}

const appendForm = () => {
  const cardEditFormCardContainerElement = document.querySelector(
    '.card-edit-form-container'
  )
  const form = formComponent()
  cardEditFormCardContainerElement.appendChild(form)
}

const appendInputs = () => {
  const cardEditFormEditorElement = document.querySelector(
    '#card-edit-form-editor'
  )
  inputs.forEach(inputData => {
    const inputDiv = inputComponent(inputData)
    const input = inputDiv.querySelector('input')
    input.required = true
    if (inputData.name != 'cardNumber')
      input.addEventListener('paste', e => e.preventDefault())
    cardEditFormEditorElement.appendChild(input)
  })
}

const appendButtons = () => {
  const parentContainer = document.querySelector(
    '#card-edit-form-button-container'
  )
  const submitButton = buttonComponent({ text: 'Submit', type: 'submit' })

  const cancelButton = buttonComponent({
    text: 'Cancel',
    id: 'card-edit-form-cancel-button',
  })
  parentContainer.appendChild(cancelButton)
  parentContainer.appendChild(submitButton)
}
