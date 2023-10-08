export const CardStatus = {
  DEFAULT: 'Default',
  NOTDEFAULT: '',
}

export const PaymentSystem = {
  VISA: 'visa',
  MASTERCARD: 'mastercard',
  AMEX: 'amex',
  DISCOVER: 'discover',
  DINERS: 'diners',
  JCB: 'jcb',
  MIR: 'mir',
  UNIONPAY: 'unionpay',
  MAESTRO: 'maestro',
  PAYPAL: 'paypal',
}

export const cardPatterns = {
  visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercard: /^5[1-5][0-9]{14}$/,
  amex: /^3[47][0-9]{13}$/,
  discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
  mir: /^2[0-9]{15}$/,
  unionpay: /^(62|88)\d{14,17}$/,
  maestro: /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/,
}

export const cards = []
