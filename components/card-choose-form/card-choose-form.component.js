import { cards } from './card-choose-form.data'
import './card-choose-form.style.css'

export const cardChooseForm = async () => {
    const moduleUrl = new URL(
        './card-choose-form.template.html',
        import.meta.url
    )
    const data = await (await fetch(moduleUrl)).text()
    document.querySelector('#card-choose-form-container').innerHTML = data
    const cardSectionElement = document.querySelector(
        '#card-choose-form-cards-section'
    )
    cards.forEach(cardData => {
        const Card = cardComponent(cardData)
        cardSectionElement.appendChild(Card)
    })
    handleCardContainerClick()
}

const cardComponent = ({
    imageURL,
    imageAlt = '',
    cardNumber,
    cardExpires,
}) => {
    const cardContent = `
        <div class="card-choose-form-card-data-container">
            <div class="card-choose-form-card-data">
                <img
                    id="card-choose-form-visa-icon"
                    src=${imageURL}
                    alt=${imageAlt} />
                <span id="card-choose-form-card-number">${cardNumber}</span>
                <span style="font-size: 14px; align-self: center">Expires</span>
                <div class="card-choose-form-card-other-data">
                    <span style="font-weight: 600; font-style: italic">${cardExpires}</span>
                    <span style="font-weight: bold">Default</span>
                </div>
            </div>
        </div>
        <span class="card-choose-form-select-circle">
            <svg
                id="card-choose-form-select-icon"
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
    cardElement.className = 'card-choose-form-card-container'
    cardElement.innerHTML = cardContent
    return cardElement
}

export const handleCardContainerClick = () => {
    const items = document.querySelectorAll('.card-choose-form-card-container')
    let lastElement
    items.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.classList.contains('.card-selected')) {
                if (lastElement) {
                    lastElement
                        .querySelector('.card-choose-form-select-circle')
                        .classList.remove('circle-selected')
                    lastElement.classList.remove('card-selected')
                }
                item.classList.add('card-selected')
                item.querySelector(
                    '.card-choose-form-select-circle'
                ).classList.add('circle-selected')
                lastElement = item
            }
        })
    })
}
