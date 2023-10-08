import css from './button.module.css'

export const buttonComponent = ({ text, id = css.buttonDefault, type = 'button' }) => {
  const buttonElement = document.createElement('button')
  buttonElement.type = type
  buttonElement.textContent = text
  buttonElement.className = css.button
  buttonElement.id = id
  return buttonElement
}
