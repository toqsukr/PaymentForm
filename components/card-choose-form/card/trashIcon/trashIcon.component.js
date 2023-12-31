import css from './trashIcon.module.css'

export const trashIconComponent = ({ id }) => {
  const trashIconContent = `
  <svg
    viewBox="0 0 41 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.99971 13.5C0.500106 13.0001 0.500087 10 0.99971 9C1.49933 8 1.99875 6.5 3.49971 6.5H13.4997V2.5C13.4997 1.50009 15 -7.82578e-05 16.4997 3.06191e-09H24.4997C26.5017 -1.33285e-05 27.4997 1.50009 27.4997 2.5V6.5H37.4997C39 6.5 39.7339 8 39.9997 9C40.2656 10 40.5 13.0001 39.9997 13.5C39.4994 13.9999 1.49931 13.9999 0.99971 13.5Z"
      fill="black"
      fill-opacity='0.4'
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.49971 17.5C2.99776 18.5 4.49776 42 4.99971 44C5.50167 46 6.50167 47.5 8.49971 47.5H32.9997C35.5017 47.5 36.0017 46.5 36.4997 44C36.9978 41.5 38.4978 18.5 37.4997 17.5C36.5017 16.5 4.00167 16.5 3.49971 17.5ZM14.9978 42C14.9978 43 14.2037 43.5 13.4997 43.5C12.7957 43.5 11.9978 43 11.9978 42V21.5C11.9978 20.5 12.7957 20 13.4997 20C14.2037 20 14.9978 20.5 14.9978 21.5V42ZM20.9997 43.5C21.7037 43.5 22.4978 43 22.4978 42V21.5C22.4978 20.5 21.7037 20 20.9997 20C20.2957 20 19.4978 20.5 19.4978 21.5V42C19.4978 43 20.2957 43.5 20.9997 43.5ZM29.9978 42C29.9978 43 29.2037 43.5 28.4997 43.5C27.7957 43.5 26.9978 43 26.9978 42V21.5C26.9978 20.5 27.7957 20 28.4997 20C29.2037 20 29.9978 20.5 29.9978 21.5V42Z"
      fill="black"
      fill-opacity='0.4'
    />
  </svg>
  `
  const trashIconElement = document.createElement('span')
  trashIconElement.id = id
  trashIconElement.className = css.trashIcon
  trashIconElement.innerHTML = trashIconContent
  return trashIconElement
}
