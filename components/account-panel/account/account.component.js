import { Routes } from '../../../utils/routes'
import css from './account.module.css'

export const accountComponent = ({ name, email, imageURL = '/images/default-logo.png' }) => {
  const accountElement = document.createElement('a')
  accountElement.className = css.accountContainer
  accountElement.href = Routes.PAYMENT_METHODS
  applyAccountEventListener(accountElement, email)

  const textContainerElement = document.createElement('div')
  textContainerElement.className = css.textContainer

  const nameElement = document.createElement('span')
  nameElement.textContent = name
  nameElement.id = css.name

  const emailElement = document.createElement('span')
  emailElement.textContent = email

  textContainerElement.appendChild(nameElement)
  textContainerElement.appendChild(emailElement)

  const imageElement = document.createElement('img')
  imageElement.src = imageURL
  imageElement.id = css.image

  accountElement.appendChild(imageElement)
  accountElement.appendChild(textContainerElement)

  return accountElement
}

const applyAccountEventListener = (accountContainer, email) => {
  accountContainer.addEventListener('click', e => {
    e.preventDefault()

    const currentURL = window.location.href

    const newURL = `${currentURL}/payment_methods?email=${encodeURIComponent(email)}`

    window.location.href = newURL
  })
}
