import { cardEditForm } from '../../card-edit-form/card-edit-form.component'
import css from '../card/card.module.css'

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
    addCardElement.id = 'add-card-container'
    addCardElement.innerHTML = addCardContent
    applyAddCardContainerClickListener(addCardElement)
    return addCardElement
}

const applyAddCardContainerClickListener = addCardElement => {
    addCardElement.addEventListener('click', () => {
        cardEditForm().then(() => {
            const editCardForm = document.querySelector(
                '.card-edit-form-container'
            )
            setTimeout(() => {
                editCardForm.classList.add('edit-form-show')
            }, 200)
        })
    })
}
