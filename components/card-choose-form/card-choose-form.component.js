import './card-choose-form.style.css'

export const cardChooseForm = async () => {
    const moduleUrl = new URL(
        './card-choose-form.template.html',
        import.meta.url
    )
    const data = await (await fetch(moduleUrl)).text()
    document.querySelector('#card-choose-form-container').innerHTML = data
}

export const handleCardContainerClick = () => {
    const items = document.querySelectorAll('.card-choose-form-card-container')
    let lastSelected

    items.forEach(item => {
        item.addEventListener('click', () => {
            if (lastSelected) {
                lastSelected.classList.remove(
                    'card-choose-form-card-container-selected'
                )
            }
            this.classList.add('card-choose-form-card-container-selected')
            lastSelected = this
        })
    })
}
