/**
 * Display amounts for the website build / redesign offer (base: ₹4,999).
 * Rates are approximate for marketing display only — final quote may vary.
 */
export const OFFER_BASE_INR = 4999

export type OfferCurrency = {
  code: string
  label: string
  locale: string
  /** Multiply INR amount to get this currency (approximate). */
  fromInr: number
  /** Round JPY etc. */
  roundTo?: number
}

export const offerCurrencies: OfferCurrency[] = [
  { code: 'INR', label: 'Indian Rupee', locale: 'en-IN', fromInr: 1 },
  { code: 'USD', label: 'US Dollar', locale: 'en-US', fromInr: 1 / 83.2 },
  { code: 'EUR', label: 'Euro', locale: 'de-DE', fromInr: 1 / 90.5 },
  { code: 'GBP', label: 'British Pound', locale: 'en-GB', fromInr: 1 / 105.8 },
  { code: 'AED', label: 'UAE Dirham', locale: 'en-AE', fromInr: 1 / 22.65 },
  { code: 'SAR', label: 'Saudi Riyal', locale: 'en-SA', fromInr: 1 / 22.18 },
  { code: 'AUD', label: 'Australian Dollar', locale: 'en-AU', fromInr: 1 / 54.2 },
  { code: 'CAD', label: 'Canadian Dollar', locale: 'en-CA', fromInr: 1 / 61.4 },
  { code: 'SGD', label: 'Singapore Dollar', locale: 'en-SG', fromInr: 1 / 62.1 },
  { code: 'JPY', label: 'Japanese Yen', locale: 'ja-JP', fromInr: 1 / 0.56, roundTo: 10 },
]

export function amountInCurrency(currency: OfferCurrency): number {
  const raw = OFFER_BASE_INR * currency.fromInr
  if (currency.roundTo) {
    return Math.round(raw / currency.roundTo) * currency.roundTo
  }
  if (currency.code === 'INR') return OFFER_BASE_INR
  return Math.round(raw * 100) / 100
}

export function formatOfferPrice(currency: OfferCurrency): string {
  const amount = amountInCurrency(currency)
  const isWhole = currency.code === 'JPY' || currency.code === 'INR' || Number.isInteger(amount)
  const opts: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: currency.code,
    maximumFractionDigits: currency.code === 'JPY' || currency.code === 'INR' ? 0 : 2,
    minimumFractionDigits: isWhole ? 0 : 2,
  }
  return new Intl.NumberFormat(currency.locale, opts).format(amount)
}
