import { Routes } from '../../utils/routes'
import css from './login-panel.module.css'

export const loginPanelComponent = async () => {
  const loginPanelElement = document.createElement('section')
  loginPanelElement.id = css.mainContainer

  const title = document.createElement('span')
  title.textContent = 'Payment System'
  title.id = css.title

  const loginLink = document.createElement('a')
  loginLink.text = 'Sign in'
  loginLink.href = Routes.ACCOUNT
  loginLink.id = css.loginLink

  loginPanelElement.appendChild(title)
  loginPanelElement.appendChild(loginLink)

  return loginPanelElement
}
