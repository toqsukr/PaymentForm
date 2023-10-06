import css from './button.module.css'

export const buttonComponent = ({ text, id = css.buttonDefault }) => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = text
    buttonElement.className = css.button
    buttonElement.id = id
    return buttonElement
}
