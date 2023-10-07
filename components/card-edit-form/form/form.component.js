import { saveToStorage } from '../../../utils/functions'
import { appendCards } from '../../card-choose-form/card-choose-form.component'
import {
    CardStatus,
    PaymentSystem,
    cards,
} from '../../card-choose-form/card-choose-form.data'
import css from './form.module.css'

export const formComponent = () => {
    const formContent = `
    <div id="card-edit-form-editor"></div>
    <div id="card-edit-form-button-container"></div>
  `
    const formElement = document.createElement('form')
    formElement.innerHTML = formContent
    formElement.id = css.dataContainer
    applyFormSubmitListener(formElement)
    return formElement
}

const applyFormSubmitListener = form => {
    form.addEventListener('submit', event => {
        event.preventDefault()

        const name = form.elements['name'].value
        const expiration = form.elements['expiration'].value
        const cardNumber = form.elements['cardNumber'].value
        const code = form.elements['code'].value

        cards.push({
            cardExpires: expiration,
            cardNumber,
            imageURL: '/images/mastercard.png',
            paymentSystem: PaymentSystem.MASTERCARD,
            status: CardStatus.NOTDEFAULT,
        })

        saveToStorage(cards, 'cards')
        appendCards()

        console.log('Имя:', name)
        console.log('Истекает:', expiration)
        console.log('Номер карты:', cardNumber)
        console.log('Код:', code)
    })
}
