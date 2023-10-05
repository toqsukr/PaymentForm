import './card-choose-form.style.css'

export const cardChooseForm = async () => {
    const moduleUrl = new URL(
        './card-choose-form.template.html',
        import.meta.url
    )
    const data = await (await fetch(moduleUrl)).text()
    document.querySelector('#card-choose-form-container').innerHTML = data
    handleCardContainerClick()
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
                console.log(item)
                item.querySelector(
                    '.card-choose-form-select-circle'
                ).classList.add('circle-selected')
                lastElement = item
            }
        })
    })
}
