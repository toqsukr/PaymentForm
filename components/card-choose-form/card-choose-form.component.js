import { getFromStorage } from '../../utils/functions'
import { buttonComponent } from '../ui/button/button.component'
import { addCardComponent } from './addCard/addCard.component'
import './card-choose-form.style.css'
import { cardComponent } from './card/card.component'

export const cardChooseFormComponent = async () => {
  const moduleUrl = new URL('./card-choose-form.template.html', import.meta.url)
  const data = await (await fetch(moduleUrl)).text()
  const cardChooseFormElement = document.createElement('section')
  cardChooseFormElement.id = 'card-choose-form-container'
  cardChooseFormElement.innerHTML = data
  appendCards(cardChooseFormElement)
  appendButton(cardChooseFormElement)
  return cardChooseFormElement
}

export const appendCards = parentContainer => {
  const cardSectionElement = parentContainer.querySelector('#card-choose-form-cards-section')
  cardSectionElement.innerHTML = ''
  const cards = getFromStorage('cards')
  cards?.forEach(cardData => {
    const card = cardComponent(cardData)
    cardSectionElement.appendChild(card)
  })
  if (!cards || cards.length < 4) {
    const addCard = addCardComponent()
    cardSectionElement.appendChild(addCard)
  }
}

const appendButton = parentContainer => {
  const submitButton = buttonComponent({ text: 'Submit' })

  parentContainer.appendChild(submitButton)
}
