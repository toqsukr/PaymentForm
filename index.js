import { accountComponent } from './components/account/account.component'
import { cardChooseFormComponent } from './components/card-choose-form/card-choose-form.component'
import './style.css'
import { Routes } from './utils/routes'

// redirect()

const cardChooseForm = cardChooseFormComponent()
const account = accountComponent()

const parentElement = document.getElementById('app-inner-container')

parentElement.innerHTML = ''

const urlContent = {
  [Routes.HOME]: account,
  [Routes.PAYMENT_METHODS]: cardChooseForm,
}

const pathname = window.location.pathname
const content = urlContent[pathname]

parentElement.appendChild(content)
