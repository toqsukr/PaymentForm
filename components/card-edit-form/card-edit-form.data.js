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
    // Удаляем все нецифровые символы
    this.value = this.value.replace(/\D/g, '')

    // Если первая цифра не 0 или 1, добавляем 0 в начало
    if (/^[2-9]$/.test(this.value.charAt(0))) {
        this.value = '0' + this.value
    }

    // Проверяем, что месяц находится в диапазоне от 01 до 12
    this.value = this.value.replace(/^(\d{2})(\d{0,2})$/, (match, p1, p2) => {
        if (parseInt(p1) > 12) {
            return '12/' + p2
        } else if (p1 === '00') {
            return '01/' + p2
        } else {
            return p1 + '/' + p2
        }
    })

    // Проверяем, что год не меньше 23
    this.value = this.value.replace(/(\d{2})(\d{0,2})$/, (match, p1, p2) => {
        if (parseInt(p1) < 23) {
            return '23' + p2
        } else {
            return p1 + p2
        }
    })
}

function validateCVV() {
    this.value = this.value.replace(/\D/g, '')
}
