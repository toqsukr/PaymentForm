import css from './input.module.css'

export const inputComponent = ({
    label,
    type,
    name,
    placeholder,
    oninput,
    maxlength,
}) => {
    const inputContent = `
        <span>${label}</span>
  `

    const input = document.createElement('input')
    input.name = name
    input.type = type
    input.placeholder = placeholder
    input.maxLength = maxlength
    input.oninput = oninput
    const inputElement = document.createElement('div')
    inputElement.className = css.editorCell
    inputElement.innerHTML = inputContent
    inputElement.appendChild(input)
    return inputElement
}
