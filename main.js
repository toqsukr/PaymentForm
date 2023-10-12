import { cardChooseFormComponent } from './components/card-choose-form/card-choose-form.component'
import './style.css'
import { redirect } from './utils/functions'
import { Routes } from './utils/routes'

redirect()

const cardChooseForm = await cardChooseFormComponent()

const urlContent = {
  [Routes.HOME]: '',
  [Routes.PAYMENT_METHODS]: cardChooseForm,
}

const pathname = window.location.pathname
const content = urlContent[pathname]

document.getElementById('app-inner-container').appendChild(content)
