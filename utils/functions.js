export const saveToStorage = (data, key) => {
  const dataString = JSON.stringify(data)
  console.log(dataString, key)
  localStorage.setItem(key, dataString)
}

export const getFromStorage = key => {
  const dataString = localStorage.getItem(key)
  const data = JSON.parse(dataString)
  return data
}
