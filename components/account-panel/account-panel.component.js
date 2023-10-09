import { accounts } from './account-panel.data'
import css from './account-panel.module.css'
import { accountComponent } from './account/account.component'

export const accountPanelComponent = async () => {
  const accountPanelElement = document.createElement('section')
  accountPanelElement.id = css.accountPanelContainer

  appendTitle(accountPanelElement)

  const innerContainerElement = document.createElement('div')
  innerContainerElement.id = css.innerContainer

  appendAccounts(innerContainerElement)
  appendAddIcon(innerContainerElement)

  accountPanelElement.appendChild(innerContainerElement)

  return accountPanelElement
}

const appendTitle = parentContainer => {
  const title = document.createElement('span')
  title.id = css.accountTitle
  title.textContent = 'Sign into account'
  parentContainer.appendChild(title)
}

const appendAddIcon = parentContainer => {
  const addIconElement = document.createElement('img')
  addIconElement.src = '/icons/add.png'
  addIconElement.id = css.addIcon
  parentContainer.appendChild(addIconElement)
}

const appendAccounts = parentContainer => {
  accounts.forEach(accountData => {
    const account = accountComponent(accountData)
    parentContainer.appendChild(account)
  })
}
