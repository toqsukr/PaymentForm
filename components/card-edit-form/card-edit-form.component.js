import { deleteCardEditForm } from '../card-choose-form/card/card.component'
import { buttonComponent } from '../ui/button/button.component'
import { inputs } from './card-edit-form.data'
import './card-edit-form.style.css'
import { formComponent } from './form/form.component'
import { inputComponent } from './input/input.component'

export const cardEditFormComponent = async () => {
  const cardEditFormElement = document.createElement('div')
  cardEditFormElement.className = 'card-edit-form-container'
  const moduleUrl = new URL('./card-edit-form.template.html', import.meta.url)
  const data = await (await fetch(moduleUrl)).text()
  cardEditFormElement.innerHTML = data
  appendForm(cardEditFormElement)
  appendInputs(cardEditFormElement)
  appendButtons(cardEditFormElement)
  return cardEditFormElement
}

const appendForm = parentElement => {
  const form = formComponent()
  parentElement.appendChild(form)
}

const appendInputs = parentElement => {
  const cardEditFormEditorElement = parentElement.querySelector('#card-edit-form-editor')
  inputs.forEach(inputData => {
    const inputDiv = inputComponent({
      ...inputData,
      id: `${inputData.name}-input`,
    })
    const input = inputDiv.querySelector('input')
    input.required = true
    if (inputData.name != 'cardNumber') input.addEventListener('paste', e => e.preventDefault())
    cardEditFormEditorElement.appendChild(input)
  })
}

const appendButtons = parentElement => {
  const parentContainer = parentElement.querySelector('#card-edit-form-button-container')
  const submitButton = buttonComponent({ text: 'Submit', type: 'submit' })

  const cancelButton = buttonComponent({
    text: 'Cancel',
    id: 'card-edit-form-cancel-button',
  })

  cancelButton.addEventListener('click', () => {
    deleteCardEditForm()
  })

  parentContainer.appendChild(cancelButton)
  parentContainer.appendChild(submitButton)
}
