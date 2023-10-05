import css from './card.module.css'

export const cardComponent = ({
    imageURL,
    imageAlt = '',
    cardNumber,
    cardExpires,
}) => {
    const cardContent = `
        <div class=${css.cardDataContainer}>
            <div class=${css.cardData}>
                <img
                    id=${css.visaIcon}
                    src=${imageURL}
                    alt=${imageAlt} />
                <span id=${css.cardNumber}>${cardNumber}</span>
                <span style="font-size: 14px; align-self: center">Expires</span>
                <div class=${css.cardOtherData}>
                    <span style="font-weight: 600; font-style: italic">${cardExpires}</span>
                    <span style="font-weight: bold">Default</span>
                </div>
            </div>
        </div>
        <span class=${css.selectCircle}>
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
    cardElement.className = css.cardContainer
    cardElement.innerHTML = cardContent
    return cardElement
}

export const handleCardContainerClick = () => {
    const items = document.querySelectorAll(`.${css.cardContainer}`)
    let lastElement
    items.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.classList.contains(css.cardSelected)) {
                if (lastElement) {
                    lastElement
                        .querySelector(`.${css.selectCircle}`)
                        .classList.remove(css.circleSelected)
                    lastElement.classList.remove(css.cardSelected)
                }
                item.classList.add(css.cardSelected)
                item.querySelector(`.${css.selectCircle}`).classList.add(
                    css.circleSelected
                )
                lastElement = item
            }
        })
    })
}
