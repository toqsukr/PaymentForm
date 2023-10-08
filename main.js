import { cardChooseFormComponent } from './components/card-choose-form/card-choose-form.component'
import './style.css'

const cardChooseForm = await cardChooseFormComponent()

document.getElementById('app-inner-container').appendChild(cardChooseForm)
