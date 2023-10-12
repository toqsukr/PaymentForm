import { Routes } from './routes'

export const saveToStorage = (data, key) => {
  const dataString = JSON.stringify(data)
  localStorage.setItem(key, dataString)
}

export const getFromStorage = key => {
  const dataString = localStorage.getItem(key)
  const data = JSON.parse(dataString)
  return data
}

export const redirect = () => {
  if (!Object.values(Routes).includes(window.location.pathname)) {
    window.location.pathname = Routes.HOME
  }
}
