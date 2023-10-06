import { PaymentSystem } from './card/card.component'

export const CardStatus = {
    DEFAULT: 'Default',
    NOTDEFAULT: '',
}

export const cards = [
    {
        status: CardStatus.DEFAULT,
        paymentSystem: PaymentSystem.VISA,
        imageURL: '/images/visa.png',
        cardNumber: '5824 2044 7100 8908',
        cardExpires: '09/27',
    },
    {
        status: CardStatus.NOTDEFAULT,
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
