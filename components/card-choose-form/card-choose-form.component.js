import { buttonComponent } from '../ui/button/button.component'
import { cards } from './card-choose-form.data'
import './card-choose-form.style.css'
import {
    addCardComponent,
    cardComponent,
    handleCardContainerClick,
} from './card/card.component'

export const cardChooseForm = async () => {
    const moduleUrl = new URL(
        './card-choose-form.template.html',
        import.meta.url
    )
    const data = await (await fetch(moduleUrl)).text()
    document.querySelector('#card-choose-form-container').innerHTML = data

    appendCards()
    appendButton()
    handleCardContainerClick()
}

const appendCards = () => {
    const cardSectionElement = document.querySelector(
        '#card-choose-form-cards-section'
    )
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
