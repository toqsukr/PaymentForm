import { getFromStorage, saveToStorage } from '../../../utils/functions'
import { appendCards } from '../../card-choose-form/card-choose-form.component'
import {
  CardStatus,
  PaymentSystem,
  cardPatterns,
} from '../../card-choose-form/card-choose-form.data'
import { deleteCardEditForm } from '../../card-choose-form/card/card.component'
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
    const paymentSystem = detectPaymentSystem(cardNumber)
    const cards = getFromStorage('cards')

    addNewCard({
      cardExpires: expiration,
      cardNumber,
      name,
      code,
      paymentSystem,
    })
    if (cards && cards.length === 4) {
      document.getElementById('add-card-container').remove()
    }
    clearInputs(form)
  })
}

const clearInputs = form => {
  form.elements['name'].value = ''
  form.elements['expiration'].value = ''
  form.elements['cardNumber'].value = ''
  form.elements['code'].value = ''
}

export const detectPaymentSystem = cardNumber => {
  cardNumber = cardNumber.replace(/[\s\-]/g, '')
  for (const system in cardPatterns) {
    if (cardPatterns[system].test(cardNumber)) {
      return system
    }
  }
  return PaymentSystem.PAYPAL
}

const addNewCard = ({ cardExpires, cardNumber, name, code, paymentSystem }) => {
  const data = { cardExpires, cardNumber, name, code, paymentSystem }
  let cards = getFromStorage('cards')
  if (!cards || cards.length < 4) {
    if (!cards) cards = []
    cards.push({
      ...data,
      imageURL: `/images/${paymentSystem}.png`,
      status: CardStatus.NOTDEFAULT,
    })
    saveToStorage(cards, 'cards')
    appendCards(document)
    deleteCardEditForm()
  }
}
