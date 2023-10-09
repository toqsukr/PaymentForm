import { accountPanelComponent } from './components/account-panel/account-panel.component'
import { cardChooseFormComponent } from './components/card-choose-form/card-choose-form.component'
import { loginPanelComponent } from './components/login-panel/login-panel.component'
import './style.css'
import { Routes } from './utils/routes'

const handleRouteChange = async () => {
  const parentContainer = document.getElementById('app-inner-container')
  const hash = window.location.hash

  parentContainer.innerHTML = ''

  if (hash === Routes.HOME) {
    const loginPanel = await loginPanelComponent()
    parentContainer.appendChild(loginPanel)
  } else if (hash.includes(Routes.PAYMENT_METHODS)) {
    const cardChooseForm = await cardChooseFormComponent()
    parentContainer.appendChild(cardChooseForm)
  } else if (hash === Routes.ACCOUNT) {
    const accountPanel = await accountPanelComponent()
    parentContainer.appendChild(accountPanel)
  } else {
    parentContainer.innerHTML = '<h1>Страница не найдена</h1>'
  }
}

window.addEventListener('hashchange', handleRouteChange)

handleRouteChange()
