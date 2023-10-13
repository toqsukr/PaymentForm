import css from './button.module.css'

export const buttonComponent = ({
  text,
  id = css.buttonDefault,
  type = 'button',
  HTMLElement = 'button',
}) => {
  const buttonElement = document.createElement(HTMLElement)
  buttonElement.type = type
  buttonElement.textContent = text
  buttonElement.className = css.button
  buttonElement.id = id
  return buttonElement
}
