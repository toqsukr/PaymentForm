import { CardStatus } from '../card-choose-form.data'
import css from './card.module.css'

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
        <div class=${css.cardDataContainer}>
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
        </div>
        <span class='${css.selectCircle} ${
        status === CardStatus.DEFAULT && css.circleSelected
    }'>
            <svg
                id=${css.selectIcon}
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.5 4.5L4 6.5L9 1"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </span>`
    const cardElement = document.createElement('div')
    cardElement.className = `${css.cardContainer} ${
        status === CardStatus.DEFAULT && css.cardSelected
    }`
    cardElement.innerHTML = cardContent
    setupCardContainerClickListener(cardElement)
    return cardElement
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

const deleteCardEditForm = () => {
    const appInnerContainer = document.querySelector('#app-inner-container')
    const editCardForm = document.querySelector('.card-edit-form-container')
    if (editCardForm) {
        editCardForm.classList.remove('edit-form-show')
        setTimeout(() => {
            appInnerContainer.removeChild(editCardForm)
        }, 300)
    }
}
