import { Routes } from '../../utils/routes'
import { headerComponent } from '../ui/header/header.component'
import { navigationComponent } from '../ui/navigation/navigation.component'
import css from './account.module.css'

export const accountComponent = async () => {
  const accountSectionElement = document.createElement('section')
  accountSectionElement.id = css.accountSection

  const accountHeaderElement = headerComponent('Account')

  const paymentMethodsLink = document.createElement('a')
  paymentMethodsLink.id = css.paymentMethodsLink
  paymentMethodsLink.href = Routes.PAYMENT_METHODS

  const paymentMethodsLinkText = document.createElement('span')
  paymentMethodsLinkText.textContent = 'Payment Methods'

  paymentMethodsLink.appendChild(paymentMethodsLinkText)

  const navigationElement = navigationComponent()

  const accountInnerContainer = document.createElement('div')
  accountInnerContainer.id = css.accountInnerContainer

  const profileInfoContainerElement = document.createElement('div')
  profileInfoContainerElement.id = css.profileInfoContainer

  const profileIconElement = document.createElement('img')
  profileIconElement.id = css.profileIcon
  profileIconElement.src = '/images/profile_photo.jpg'

  profileInfoContainerElement.appendChild(profileIconElement)

  accountInnerContainer.appendChild(profileInfoContainerElement)
  accountInnerContainer.appendChild(paymentMethodsLink)

  accountSectionElement.appendChild(navigationElement)
  accountSectionElement.appendChild(accountHeaderElement)
  accountSectionElement.appendChild(accountInnerContainer)

  return accountSectionElement
}
