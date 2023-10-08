import css from './checkIcon.module.css'

export const checkIconComponent = ({ className }) => {
  const checkIconContent = `
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
  `
  const checkIconElement = document.createElement('span')
  checkIconElement.className = className
  checkIconElement.innerHTML = checkIconContent
  return checkIconElement
}
