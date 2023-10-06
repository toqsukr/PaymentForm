import { buttonComponent } from '../ui/button/button.component'
import { inputs } from './card-edit-form.data'
import './card-edit-form.style.css'
import { inputComponent } from './input/input.component'

export const cardEditForm = async () => {
    const moduleUrl = new URL('./card-edit-form.template.html', import.meta.url)
    const data = await (await fetch(moduleUrl)).text()
    document.querySelector('#card-edit-form-container').innerHTML = data

    appendInputs()
    appendButtons()
}

const appendInputs = () => {
    const cardEditFormEditorElement = document.querySelector(
        '#card-edit-form-editor'
    )
    inputs.forEach(inputData => {
        const input = inputComponent(inputData)
        cardEditFormEditorElement.appendChild(input)
    })
}

const appendButtons = () => {
    const parentContainer = document.querySelector(
        '#card-edit-form-button-container'
    )
    const submitButton = buttonComponent({ text: 'Submit' })

    const cancelButton = buttonComponent({
        text: 'Cancel',
        id: 'card-edit-form-cancel-button',
    })
    parentContainer.appendChild(cancelButton)
    parentContainer.appendChild(submitButton)
}
