import {
  CARD_NUMBER_INPUT_MAX_LENGTH,
  CODE_INPUT_MAX_LENGTH,
  EXPIRATION_INPUT_MAX_LENGTH,
  NAME_INPUT_MAX_LENGTH,
} from '../../utils/constants'
import { PaymentSystem } from '../card-choose-form/card-choose-form.data'
import { detectPaymentSystem } from './form/form.component'

export const inputs = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Name Surname',
    maxlength: NAME_INPUT_MAX_LENGTH,
    oninput: cardOwnerOnInput,
  },
  {
    name: 'expiration',
    label: 'Expiration',
    type: 'tel',
    placeholder: 'MM/YY',
    maxlength: EXPIRATION_INPUT_MAX_LENGTH,
    oninput: expirationDateOnInput,
  },
  {
    name: 'cardNumber',
    label: 'Card Number',
    type: 'tel',
    placeholder: 'XXXX XXXX XXXX XXXX',
    maxlength: CARD_NUMBER_INPUT_MAX_LENGTH,
    oninput: cardNumberOnInput,
  },
  {
    name: 'code',
    label: 'CVV',
    type: 'password',
    placeholder: 'XXX',
    maxlength: CODE_INPUT_MAX_LENGTH,
    oninput: CVVOnInput,
  },
]

export const cardEditStyles = {
  visa: 'card-edit-form-visa-icon',
  mastercard: 'card-edit-form-mastercard-icon',
  paypal: 'card-edit-form-paypal-icon',
  mir: 'card-edit-form-mir-icon',
  unionpay: 'card-edit-form-unionpay-icon',
}

function cardOwnerOnInput() {
  this.value = this.value.replace(/[^a-zA-Z\s]/g, '')
  let textContent
  if (this.value.length === 0) textContent = 'Elijahs Popuass'
  else textContent = this.value
  document.getElementById('card-edit-form-card-owner').textContent = textContent
}

function cardNumberOnInput() {
  this.value = this.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
  let textContent
  if (this.value.length === 0) textContent = '0000 0000 0000 0000'
  else textContent = this.value
  const paymentElement = document.querySelector('.card-edit-form-payment-system')
  if (this.value.length === CARD_NUMBER_INPUT_MAX_LENGTH) {
    const paymentSystem = detectPaymentSystem(this.value)
    paymentElement.src = `/images/${paymentSystem}.${
      paymentSystem === PaymentSystem.VISA ? 'jpg' : 'png'
    }`
    paymentElement.id = cardEditStyles[paymentSystem]
  }
  document.getElementById('card-edit-form-card-number').textContent = textContent
}

function expirationDateOnInput() {
  // Удаляем все нецифровые символы
  this.value = this.value.replace(/\D/g, '')

  // Если первая цифра не 0 или 1, добавляем 0 в начало
  if (/^[2-9]$/.test(this.value.charAt(0))) {
    this.value = '0' + this.value
  }

  // Проверяем, что месяц находится в диапазоне от 01 до 12
  this.value = this.value.replace(/^(\d{2})(\d{0,2})$/, (match, p1, p2) => {
    if (parseInt(p1) > 12) {
      return '12/' + p2
    } else if (p1 === '00') {
      return '01/' + p2
    } else {
      return p1 + '/' + p2
    }
  })

  // Проверяем, что год не меньше 23
  this.value = this.value.replace(/(\d{2})(\d{0,2})$/, (match, p1, p2) => {
    if (parseInt(p1) < 23) {
      return '23' + p2
    } else {
      return p1 + p2
    }
  })

  let textContent
  if (this.value.length === 0) textContent = '09/25'
  else textContent = this.value

  document.getElementById('card-edit-form-card-expiration').textContent = textContent
}

function CVVOnInput() {
  this.value = this.value.replace(/\D/g, '')
}
