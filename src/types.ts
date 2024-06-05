export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date?: Date;
  atl: number;
  atl_change_percentage: number;
  atl_date?: Date;
  roi: number | null;
  last_updated?: Date;
}

interface IImages {
  thumb: string;
  small: string;
  large: string;
}

interface ICurrencyValues {
  aed?: string;
  usd?: string;
  ars?: string;
}

interface IConverted {
  btc: number | null;
  eth: number | null;
  usd: number | null;
}

// interface IThickers {
//   base: string;
//   target: string;
//   market: object;
//   last: number;
//   volume: number;
//   converted_last: IConverted;
//   converted_volume: IConverted;
//   timestamp: string | Date;
//   last_traded_at: string | Date;
//   last_fetch_at: string | Date;
//   coin_id: string;
//   target_coin_id: string;
// }

export interface ICoinDetails {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  categories: [];
  // ==? localization.en
  localization: object;
  //  =====> description.en
  description: object;
  whitepaper: string;
  image: IImages;
  market_cap_rank: number | null;
  market_data: {
    current_price: ICurrencyValues;
    ath: IConverted;
    ath_change_percentage: ICurrencyValues;
    ath_date: ICurrencyValues;
    atl: ICurrencyValues;
    atl_change_percentage: ICurrencyValues;
    atl_date: ICurrencyValues;
    market_cap: ICurrencyValues;
    total_volume: ICurrencyValues;
    high_24h: ICurrencyValues;
    low_24h: ICurrencyValues;
    price_change_24h: number | null;
    price_change_percentage_24h: number | null;
    price_change_percentage_7d: number | null;
    price_change_percentage_14d: number | null;
    price_change_percentage_30d: number | null;
    price_change_percentage_60d: number | null;
    price_change_percentage_200d: number | null;
    price_change_percentage_1y: number | null;
    market_cap_change_24h: number | null;
    market_cap_change_percentage_24h: number | null;
    price_change_24h_in_currency: ICurrencyValues;
    price_change_percentage_1h_in_currency: ICurrencyValues;
    price_change_percentage_24h_in_currency: ICurrencyValues;
    price_change_percentage_7d_in_currency: ICurrencyValues;
    price_change_percentage_14d_in_currency: ICurrencyValues;
    price_change_percentage_30d_in_currency: ICurrencyValues;
    price_change_percentage_60d_in_currency: ICurrencyValues;
    price_change_percentage_200d_in_currency: ICurrencyValues;
    price_change_percentage_1y_in_currency: ICurrencyValues;
    market_cap_change_24h_in_currency: ICurrencyValues;
    market_cap_change_percentage_24h_in_currency: ICurrencyValues;
  };
  last_updated: string | Date;
}
