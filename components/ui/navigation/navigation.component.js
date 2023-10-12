import css from './navigation.module.css'

export const navigationComponent = () => {
  const navigationContent = `
    <span>Account</span>
    <svg
      id="card-choose-form-arrow-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-move-right">
      <path d="M18 8L22 12L18 16" />
      <path d="M2 12H22" />
    </svg>
    <span>Payment methods</span>
  `
  const navigationElement = document.createElement('nav')
  navigationElement.id = css.navigationContainer
  navigationElement.innerHTML = navigationContent

  return navigationElement
}
