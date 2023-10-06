export const CardStatus = {
    DEFAULT: 'Default',
    NOTDEFAULT: '',
}

export const PaymentSystem = {
    VISA: 'VISA',
    MASTERCARD: 'MASTERCARD',
    PAYPAL: 'PAYPAL',
}

export const cardPatterns = {
    VISA: /^4[0-9]{12}(?:[0-9]{3})?$/,
    MASTERCARD: /^5[1-5][0-9]{14}$/,
    AMEX: /^3[47][0-9]{13}$/,
    DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    DINERS: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}$/,
    MIR: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/,
}

export const cards = [
    {
        status: CardStatus.NOTDEFAULT,
        paymentSystem: PaymentSystem.VISA,
        imageURL: '/images/visa.png',
        cardNumber: '5824 2044 7100 8908',
        cardExpires: '09/27',
    },
    {
        status: CardStatus.DEFAULT,
        paymentSystem: PaymentSystem.MASTERCARD,
        imageURL: '/images/mastercard.png',
        cardNumber: '2202 2002 4722 7777',
        cardExpires: '01/24',
    },
    {
        status: CardStatus.NOTDEFAULT,
        paymentSystem: PaymentSystem.PAYPAL,
        imageURL: '/images/paypal.png',
        cardNumber: '6936 5936 5482 6498',
        cardExpires: '12/23',
    },
]
