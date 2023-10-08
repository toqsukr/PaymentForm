export const inputs = [
    {
        name: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Name Surname',
        maxlength: 50,
        oninput: validateCardOwner,
    },
    {
        name: 'expiration',
        label: 'Expiration',
        type: 'text',
        placeholder: 'MM/YY',
        maxlength: 5,
        oninput: validateExpirationDate,
    },
    {
        name: 'cardNumber',
        label: 'Card Number',
        type: 'text',
        placeholder: 'XXXX XXXX XXXX XXXX',
        maxlength: 19,
        oninput: validateCardNumber,
    },
    {
        name: 'code',
        label: 'CVV',
        type: 'password',
        placeholder: 'XXX',
        maxlength: 3,
        oninput: validateCVV,
    },
]

function validateCardOwner() {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '')
}

function validateCardNumber() {
    this.value = this.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
}

function validateExpirationDate() {
    this.value = this.value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{0,2})/, '$1/$2')
}

function validateCVV() {
    this.value = this.value.replace(/\D/g, '')
}
