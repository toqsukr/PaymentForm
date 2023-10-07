import { getFromStorage } from '../../utils/functions'
import { buttonComponent } from '../ui/button/button.component'
import { addCardComponent } from './addCard/addCard.component'
import './card-choose-form.style.css'
import { cardComponent } from './card/card.component'

export const cardChooseForm = async () => {
    const moduleUrl = new URL(
        './card-choose-form.template.html',
        import.meta.url
    )
    const data = await (await fetch(moduleUrl)).text()
    document.querySelector('#card-choose-form-container').innerHTML = data

    appendCards()
    appendButton()
}

export const appendCards = () => {
    const cardSectionElement = document.querySelector(
        '#card-choose-form-cards-section'
    )
    cardSectionElement.innerHTML = ''
    const cards = getFromStorage('cards')
    cards.forEach(cardData => {
        const card = cardComponent(cardData)
        cardSectionElement.appendChild(card)
    })
    const addCard = addCardComponent()
    cardSectionElement.appendChild(addCard)
}

const appendButton = () => {
    const parentContainer = document.querySelector(
        '#card-choose-form-container'
    )
    const submitButton = buttonComponent({ text: 'Submit' })

    parentContainer.appendChild(submitButton)
}
