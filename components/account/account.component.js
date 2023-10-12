import { Routes } from '../../utils/routes'
import { headerComponent } from '../ui/header/header.component'
import css from './account.module.css'

export const accountComponent = async () => {
  const accountSectionElement = document.createElement('section')
  accountSectionElement.id = css.accountSection

  const accountHeaderElement = headerComponent('Account')

  const paymentMethodsLink = document.createElement('a')
  paymentMethodsLink.id = css.paymentMethodsLink
  paymentMethodsLink.href = Routes.PAYMENT_METHODS

  accountSectionElement.appendChild(accountHeaderElement)
  accountSectionElement.appendChild(paymentMethodsLink)

  return accountSectionElement
}
