import { Routes } from '../../../utils/routes'
import css from './navigation.module.css'

export const navigationComponent = () => {
  const arrowIconContent = `
    <svg
      id="card-choose-form-arrow-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-move-right">
      <path d="M18 8L22 12L18 16" />
      <path d="M2 12H22" />
    </svg>
  `
  const navigationElement = document.createElement('nav')
  navigationElement.classList = css.navContainer + ' ' + navigationStyle[window.location.pathname]

  const arrowIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  arrowIcon.innerHTML = arrowIconContent
  arrowIcon.setAttribute('width', '24')
  arrowIcon.setAttribute('height', '24')

  const navAccountLink = document.createElement('a')
  navAccountLink.text = 'Account'

  const navPaymentMethodsLink = document.createElement('a')
  navPaymentMethodsLink.text = 'Payment Methods'

  if (window.location.pathname === Routes.PAYMENT_METHODS) {
    navAccountLink.href = Routes.HOME
  } else {
    navPaymentMethodsLink.href = Routes.PAYMENT_METHODS
  }

  navigationElement.appendChild(navAccountLink)
  navigationElement.appendChild(arrowIcon)
  navigationElement.appendChild(navPaymentMethodsLink)

  return navigationElement
}

const navigationStyle = {
  [Routes.HOME]: css.account,
  [Routes.PAYMENT_METHODS]: css.paymentMethods,
}
