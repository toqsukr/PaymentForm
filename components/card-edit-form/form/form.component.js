import {
  CARD_NUMBER_INPUT_MAX_LENGTH,
  CODE_INPUT_MAX_LENGTH,
  EXPIRATION_INPUT_MAX_LENGTH,
} from '../../../utils/constants'
import { getFromStorage, saveToStorage } from '../../../utils/functions'
import {
  CardStatus,
  PaymentSystem,
  cardPatterns,
} from '../../card-choose-form/card-choose-form.data'
import {
  cardComponent,
  deleteCardEditForm,
  getVisualCardsCount,
} from '../../card-choose-form/card/card.component'
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
    try {
      event.preventDefault()

      const name = form.elements['name'].value
      const expiration = form.elements['expiration'].value
      const cardNumber = form.elements['cardNumber'].value
      const code = form.elements['code'].value
      const paymentSystem = detectPaymentSystem(cardNumber)

      isValidFullData(cardNumber, expiration, code)
      isValidCreditCardNumber(cardNumber)

      addNewCard({
        cardExpires: expiration,
        cardNumber,
        name,
        code,
        paymentSystem,
      })
      if (getVisualCardsCount() === 5) {
        document.getElementById('add-card-container').remove()
      }
      clearInputs(form)
    } catch (error) {
      alert(error.message)
    }
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
  if (getVisualCardsCount() < 5) {
    const cards = getFromStorage('cards') || []
    console.log(cards)
    const imageURL = `/images/${paymentSystem}.png`
    const status = CardStatus.NOTDEFAULT
    cards.push({
      ...data,
      imageURL,
      status,
    })
    const newCard = cardComponent({
      cardExpires,
      cardNumber,
      imageURL,
      paymentSystem,
      status,
    })
    saveToStorage(cards, 'cards')
    const addCard = document.getElementById('add-card-container')
    document.getElementById('card-choose-form-cards-section').insertBefore(newCard, addCard)
    deleteCardEditForm()
  }
}

const isValidFullData = (cardNumber, expiration, code) => {
  if (cardNumber.length !== CARD_NUMBER_INPUT_MAX_LENGTH)
    throw new Error('Card number is too short')
  if (code.length !== CODE_INPUT_MAX_LENGTH) throw new Error('CVV code is too short')
  if (expiration.length !== EXPIRATION_INPUT_MAX_LENGTH)
    throw new Error('Expiration date is too short')
}

const isValidCreditCardNumber = cardNumber => {
  cardNumber = cardNumber.replace(/\s/g, '')

  const cardDigits = cardNumber.split('').map(Number)

  for (let i = cardDigits.length - 2; i >= 0; i -= 2) {
    cardDigits[i] *= 2

    if (cardDigits[i] >= 10) {
      cardDigits[i] -= 9
    }
  }

  const sum = cardDigits.reduce((acc, digit) => acc + digit, 0)
  if (sum % 10 !== 0) {
    throw new Error('Сard number is incorrect')
  }
}
