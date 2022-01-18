export interface cryptoInterface {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
}

export interface cryptoDetailInterface {
  csupply: string;
  id: string;
  market_cap_usd: string;
  msupply: string;
  name: string;
  nameid: string;
  percent_change_1h: string;
  percent_change_7d: string;
  percent_change_24h: string;
  price_btc: string;
  price_usd: string;
  rank: number;
  symbol: string;
  tsupply: string;
  volume24: string;
  volume24_native: string;
}

export interface detailCoinInterface {
  csupply: string;
  id: string;
  market_cap_usd: string;
  msupply: string;
  name: string;
  nameid: string;
  percent_change_1h: string;
  percent_change_7d: string;
  percent_change_24h: string;
  price_btc: string;
  price_usd: string;
  rank: number;
  symbol: string;
  tsupply: string;
  volume24: string;
  volume24_native: string;
}

export interface detailMarketInterface {
  base: string;
  name: string;
  price: number;
  price_usd: number;
  quote: string;
  time: number;
  volume: number;
  volume_usd: number;
}

export interface detailCoinMarketInterface {
  infoCoin: detailCoinInterface[];
  infoMarkets: detailMarketInterface[];
}
