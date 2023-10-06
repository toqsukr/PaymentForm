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
    const cardSectionElement = document.querySelector(
        '#card-choose-form-cards-section'
    )
    cards.forEach(cardData => {
        const card = cardComponent(cardData)
        cardSectionElement.appendChild(card)
    })
    const addCard = addCardComponent()
    cardSectionElement.appendChild(addCard)
    handleCardContainerClick()
}
