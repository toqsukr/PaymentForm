import { getFromStorage } from '../../utils/functions'
import { Routes } from '../../utils/routes'
import { buttonComponent } from '../ui/button/button.component'
import { headerComponent } from '../ui/header/header.component'
import { navigationComponent } from '../ui/navigation/navigation.component'
import { addCardComponent } from './addCard/addCard.component'
import './card-choose-form.style.css'
import { cardComponent, setDefaultCard } from './card/card.component'

export const cardChooseFormComponent = () => {
  const cardChooseFormElement = document.createElement('section')
  cardChooseFormElement.id = 'card-choose-form-container'

  const cardChooseContentContainer = document.createElement('div')
  cardChooseContentContainer.id = 'card-choose-form-content-container'

  const cardChooseFormCardSection = document.createElement('section')
  cardChooseFormCardSection.id = 'card-choose-form-cards-section'

  appendNav(cardChooseContentContainer)
  appendHeader(cardChooseContentContainer)
  appendCards(cardChooseFormCardSection)

  cardChooseContentContainer.appendChild(cardChooseFormCardSection)

  appendButton(cardChooseContentContainer)
  cardChooseFormElement.appendChild(cardChooseContentContainer)
  return cardChooseFormElement
}

const appendHeader = parentContainer => {
  const headerElement = headerComponent('Choose your payment method')
  parentContainer.appendChild(headerElement)
}

const appendNav = parentContainer => {
  const navigationElement = navigationComponent()
  parentContainer.appendChild(navigationElement)
}

export const appendCards = (
  parentContainer = document.getElementById('card-choose-form-cards-section')
) => {
  parentContainer.innerHTML = ''
  const cards = getFromStorage('cards')
  cards?.forEach(cardData => {
    const card = cardComponent(cardData)
    parentContainer.appendChild(card)
  })
  if (!cards || cards.length < 4) {
    const addCard = addCardComponent()
    parentContainer.appendChild(addCard)
  }
}

const appendButton = parentContainer => {
  const submitButton = buttonComponent({ text: 'Submit', HTMLElement: 'a' })
  submitButton.href = Routes.HOME
  submitButton.addEventListener('click', event => {
    event.preventDefault()

    setTimeout(() => setDefaultCard())

    window.location.href = event.currentTarget.getAttribute('href')
  })
  parentContainer.appendChild(submitButton)
}
