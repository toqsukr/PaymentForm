import css from './header.module.css'

export const headerComponent = title => {
  const headerContainerElement = document.createElement('div')
  headerContainerElement.className = css.headerContainer

  const headerTextElement = document.createElement('span')
  headerTextElement.textContent = title

  headerContainerElement.appendChild(headerTextElement)

  return headerContainerElement
}
