import { getFromStorage } from '../../utils/functions'
import { buttonComponent } from '../ui/button/button.component'
import { headerComponent } from '../ui/header/header.component'
import { navigationComponent } from '../ui/navigation/navigation.component'
import { addCardComponent } from './addCard/addCard.component'
import './card-choose-form.style.css'
import { cardComponent } from './card/card.component'

export const cardChooseFormComponent = async () => {
  const cardChooseFormElement = document.createElement('section')
  cardChooseFormElement.id = 'card-choose-form-container'

  const cardChooseFormCardSection = document.createElement('section')
  cardChooseFormCardSection.id = 'card-choose-form-cards-section'

  appendNav(cardChooseFormElement)
  appendHeader(cardChooseFormElement)
  appendCards(cardChooseFormCardSection)

  cardChooseFormElement.appendChild(cardChooseFormCardSection)

  appendButton(cardChooseFormElement)
  return cardChooseFormElement
}

const appendHeader = parentContainer => {
  const headerElement = headerComponent('Choose your payment method')
  console.log(headerElement)
  parentContainer.appendChild(headerElement)
}

const appendNav = parentContainer => {
  const navigationElement = navigationComponent()
  console.log(navigationElement)
  parentContainer.appendChild(navigationElement)
}

export const appendCards = parentContainer => {
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
  const submitButton = buttonComponent({ text: 'Submit' })

  parentContainer.appendChild(submitButton)
}
