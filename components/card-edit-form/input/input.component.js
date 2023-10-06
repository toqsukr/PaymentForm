import css from './input.module.css'

export const inputComponent = ({ label, type }) => {
    const inputContent = `
        <span>${label}</span>
        <input type=${type} />
  `
    const inputElement = document.createElement('div')
    inputElement.className = css.editorCell
    inputElement.innerHTML = inputContent
    return inputElement
}
