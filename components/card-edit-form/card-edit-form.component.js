import './card-edit-form.style.css'

export const cardEditForm = async () => {
    const moduleUrl = new URL('./card-edit-form.template.html', import.meta.url)
    const data = await (await fetch(moduleUrl)).text()
    document.querySelector('#card-edit-form-container').innerHTML = data
}
