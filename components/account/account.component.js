import { Routes } from '../../utils/routes'
import css from './account.module.css'

export const accountComponent = async () => {
  const accountSectionElement = document.createElement('section')
  accountSectionElement.id = css.accountSection

  const accountHeaderElement = document.createElement('span')
  accountHeaderElement.textContent = 'Account'
  accountHeaderElement.id = css.accountHeader

  const paymentMethodsLink = document.createElement('a')
  paymentMethodsLink.id = css.paymentMethodsLink
  paymentMethodsLink.href = Routes.PAYMENT_METHODS

  accountSectionElement.appendChild(accountHeaderElement)
  accountSectionElement.appendChild(paymentMethodsLink)

  return accountSectionElement
}
