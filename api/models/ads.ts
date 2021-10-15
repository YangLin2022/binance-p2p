/** */
export type TradeType = 'buy' | 'sell'
/** */
export type Fiat = 'USD' | 'ARS' | 'VES' | 'CLP'
/** */
export type Defi = 'USDT' | 'BTC' | 'BNB' | 'ETH'
/** */
export type PaymentMethod = 'Transferwise' | 'Mercadopago' | 'Mercantil' | 'all'

/** */
export interface P2PAdFilter {
  type: TradeType,
  fiat: Fiat,
  defi: Defi,
  payment: PaymentMethod
}

/** */
export interface P2PAd {
  id?: number,
  created_at?: string,
  btc_price: number,
  fiat: Fiat,
  price: number,
  available: number,
  payment_methods: PaymentMethod[],
  limits: number[],
  type: TradeType,
  defi: Defi
}
