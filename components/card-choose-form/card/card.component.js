import { getFromStorage, saveToStorage } from '../../../utils/functions'
import { addCardComponent } from '../addCard/addCard.component'
import { CardStatus } from '../card-choose-form.data'
import css from './card.module.css'
import { checkIconComponent } from './checkIcon/checkIcon.component'
import { trashIconComponent } from './trashIcon/trashIcon.component'

const cardStyles = {
  visa: css.visaIcon,
  mastercard: css.mastercardIcon,
  paypal: css.paypalIcon,
  mir: css.mirIcon,
  unionpay: css.unionpayIcon,
}

export const cardComponent = ({
  status,
  paymentSystem,
  imageURL,
  cardNumber,
  cardExpires,
}) => {
  const cardContent = `
        <div class=${css.cardData}>
            <img
                id=${cardStyles[paymentSystem]}
                src=${imageURL}
                alt='' />
            <span id=${css.cardNumber}>${cardNumber}</span>
            <span style="font-size: 14px; align-self: center">Expires</span>
            <div class=${css.cardOtherData}>
                <span style="font-weight: 600; font-style: italic">${cardExpires}</span>
                <span style="font-weight: bold">${status}</span>
            </div>
        </div>
        `
  const cardElement = document.createElement('div')
  cardElement.className = `${css.cardContainer} ${
    status === CardStatus.DEFAULT && css.cardSelected
  }`
  cardElement.id = cardNumber
  cardElement.innerHTML = cardContent

  appendIcons(cardElement, status)

  setupCardContainerClickListener(cardElement)
  return cardElement
}

const appendIcons = (cardElement, status) => {
  const iconsContainer = document.createElement('div')
  iconsContainer.className = css.iconsContainer
  const checkIcon = checkIconComponent({
    className: `${css.selectCircle} ${
      status === CardStatus.DEFAULT && css.circleSelected
    }`,
  })
  const trashIcon = trashIconComponent({ id: css.trashIcon })
  trashIcon.addEventListener('click', () => handleTrashClick(trashIcon))
  iconsContainer.appendChild(checkIcon)
  iconsContainer.appendChild(trashIcon)
  cardElement.appendChild(iconsContainer)
}

const handleTrashClick = trashIcon => {
  const removingCard = trashIcon.parentElement.parentElement
  console.log(removingCard)
  const cards = getFromStorage('cards')
  if (cards && cards.length === 4) {
    const addCard = addCardComponent()
    const cardSectionElement = document.querySelector(
      '#card-choose-form-cards-section'
    )
    cardSectionElement.appendChild(addCard)
  }
  deleteFromCards(removingCard)
  removingCard.remove()
}

const deleteFromCards = removingCard => {
  const cards = getFromStorage('cards')
  const newCards = cards.filter(card => removingCard.id != card.cardNumber)
  saveToStorage(newCards, 'cards')
}

export const setupCardContainerClickListener = cardElement => {
  const handleClick = () => {
    let lastElement = document.querySelector(`.${css.cardSelected}`)
    if (cardElement.id != 'add-card-container') deleteCardEditForm()
    if (!cardElement.classList.contains(css.cardSelected)) {
      if (lastElement) {
        if (lastElement.querySelector(`.${css.selectCircle}`)) {
          lastElement
            .querySelector(`.${css.selectCircle}`)
            .classList.remove(css.circleSelected)
        }
        lastElement.classList.remove(css.cardSelected)
      }
      cardElement.classList.add(css.cardSelected)
      if (cardElement.querySelector(`.${css.selectCircle}`)) {
        cardElement
          .querySelector(`.${css.selectCircle}`)
          .classList.add(css.circleSelected)
      }
      lastElement = cardElement
    }
  }
  cardElement.addEventListener('click', () => handleClick())
}

export const deleteCardEditForm = () => {
  const appInnerContainer = document.querySelector('#app-inner-container')
  const editCardForm = document.querySelector('.card-edit-form-container')
  if (editCardForm) {
    editCardForm.classList.remove('edit-form-show')
    setTimeout(() => {
      appInnerContainer.removeChild(editCardForm)
    }, 300)
  }
}
