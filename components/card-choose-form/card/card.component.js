import { CardStatus, PaymentSystem } from '../card-choose-form.data'
import css from './card.module.css'

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
                    id=${
                        paymentSystem === PaymentSystem.VISA
                            ? css.visaIcon
                            : paymentSystem === PaymentSystem.MASTERCARD
                            ? css.mastercardIcon
                            : css.paypalIcon
                    }
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
    return cardElement
}

export const addCardComponent = () => {
    const addCardContent = `
        <svg
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.00082 7.59529C0.994036 5.85348 1.00082 3.68104 2.23887 1.81804C4.08668 0.577608 23.8956 0.888021 25.7619 1.81804C27 3.06453 26.9932 6.47418 27 7.59529M1.00082 7.59529C0.994036 9.26731 1.00117 19.5088 2.23887 22.301C4.0866 23.233 23.8955 23.233 25.7619 22.301C27 20.1295 26.9932 8.95697 27 7.59529M1.00082 7.59529H27M5.71081 18.0994H8.37532M12.4663 18.0994H17.0686"
                stroke="#5F499E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
        <span>Add Payment Method</span>
    `
    const addCardElement = document.createElement('div')
    addCardElement.className = css.cardContainer
    addCardElement.innerHTML = addCardContent
    return addCardElement
}

export const handleCardContainerClick = () => {
    const items = document.querySelectorAll(`.${css.cardContainer}`)
    let lastElement = document.querySelector(`.${css.cardSelected}`)
    items.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.classList.contains(css.cardSelected)) {
                if (lastElement) {
                    if (lastElement.querySelector(`.${css.selectCircle}`)) {
                        lastElement
                            .querySelector(`.${css.selectCircle}`)
                            .classList.remove(css.circleSelected)
                    }
                    lastElement.classList.remove(css.cardSelected)
                }
                item.classList.add(css.cardSelected)
                if (item.querySelector(`.${css.selectCircle}`)) {
                    item.querySelector(`.${css.selectCircle}`).classList.add(
                        css.circleSelected
                    )
                }
                lastElement = item
            }
        })
    })
}
