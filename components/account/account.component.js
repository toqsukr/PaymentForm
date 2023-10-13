import { getFromStorage } from '../../utils/functions'
import { Routes } from '../../utils/routes'
import { CardStatus } from '../card-choose-form/card-choose-form.data'
import { headerComponent } from '../ui/header/header.component'
import { accountData } from './account.data'
import css from './account.module.css'

export const accountComponent = async () => {
  const accountInnerContent = `  
      <div id=${css.profileInfoContainer}>
        <img id=${css.profileIcon} src=${accountData.profileIconURL} />
        <div id=${css.accountMainDataText}>
          <span id=${css.nameText}>${accountData.name}</span>
          <span>${accountData.email}</span>
        </div>
      </div>
      <div id=${css.otherInfoContainer}>
        <div class=${css.otherInfoInnerContainer}>
          <span>Phone number</span>
          <span>${accountData.phoneNumber}</span>
        </div>
        <div class=${css.otherInfoInnerContainer}>
          <span>Payment region</span>
          <span>${accountData.paymentRegion}</span>
        </div>
        <a href=${Routes.PAYMENT_METHODS} class=${css.otherInfoInnerContainer} id=${
    css.paymentCardContainer
  }>
          <span>Payment method</span>
          <span>${getDefaultCardNumber()}</span>
        </a>
      </div>
  `

  const accountSectionElement = document.createElement('section')
  accountSectionElement.id = css.accountSection

  const accountHeaderElement = headerComponent('Account')

  const accountInnerContainer = document.createElement('div')
  accountInnerContainer.id = css.accountInnerContainer
  accountInnerContainer.innerHTML = accountInnerContent

  accountSectionElement.appendChild(accountHeaderElement)
  accountSectionElement.appendChild(accountInnerContainer)

  return accountSectionElement
}

const getDefaultCardNumber = () => {
  const cards = getFromStorage('cards')
  let defaultCardNumber = 'Not selected'
  cards?.forEach(card => {
    if (card.status === CardStatus.DEFAULT) {
      defaultCardNumber = '**** '.repeat(3) + card.cardNumber.slice(-4)
    }
  })
  return defaultCardNumber
}
