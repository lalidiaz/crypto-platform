export type Coin = {
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
  ath_date?: string;
  atl: number;
  atl_change_percentage: number;
  atl_date?: string;
  roi: number | null;
  last_updated?: string;
};

type Images = {
  thumb: string;
  small: string;
  large: string;
};

export type CurrencyValues = {
  aed: number;
  usd: number;
  ars: number;
};

type Converted = {
  btc: number | null;
  eth: number | null;
  usd: number | null;
};

type Dates = {
  ath_date: CurrencyValues | null;
  atl_date: CurrencyValues | null;
};

type Currencies = {
  current_price: CurrencyValues | null;
  atl: CurrencyValues | null;
  market_cap: CurrencyValues | null;
  total_volume: CurrencyValues | null;
  high_24h: CurrencyValues | null;
  low_24h: CurrencyValues | null;
  market_cap_change_24h_in_currency: CurrencyValues | null;
  price_change_24h_in_currency: CurrencyValues | null;
};

type Numbers = {
  price_change_24h: number | null;
  market_cap_change_24h: number | null;
};

type Percentage = {
  price_change_percentage_24h: number | null;
  price_change_percentage_7d: number | null;
  price_change_percentage_14d: number | null;
  price_change_percentage_30d: number | null;
  price_change_percentage_60d: number | null;
  price_change_percentage_200d: number | null;
  price_change_percentage_1y: number | null;
  market_cap_change_percentage_24h: number | null;
};

type PercentageCurrency = {
  price_change_percentage_1h_in_currency: CurrencyValues | null;
  price_change_percentage_24h_in_currency: CurrencyValues | null;
  price_change_percentage_7d_in_currency: CurrencyValues | null;
  price_change_percentage_14d_in_currency: CurrencyValues | null;
  price_change_percentage_30d_in_currency: CurrencyValues | null;
  price_change_percentage_60d_in_currency: CurrencyValues | null;
  price_change_percentage_200d_in_currency: CurrencyValues | null;
  price_change_percentage_1y_in_currency: CurrencyValues | null;
  market_cap_change_percentage_24h_in_currency: CurrencyValues | null;
};

export type CoinMarketData = {
  atl_change_percentage: CurrencyValues | null;
  ath_change_percentage: CurrencyValues | null;
  currencies: Currencies;
  numbers: Numbers;
  dates: Dates;
  percentages: Percentage;
  percentages_currency: PercentageCurrency;
  ath: Converted;
};

type ResposURL = {
  github: string | null;
  bitbucket: string | null;
};

type Links = {
  homepage: string | null;
  whitepaper: string | null;
  repos_url: ResposURL | null;
};

type DevData = {
  forks: number | null;
  stars: number | null;
  subscribers: number | null;
};

type CommunityData = {
  twitter_followers: number | null;
  reddit_average_posts_48h: number | null;
  facebook_likes: number | null;
};

export type CoinDetails = {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  links: Links;
  developer_data: DevData;
  community_data: CommunityData;
  watchlist_portfolio_users: number | null;
  categories: [];
  localization: object;
  description: object;
  image: Images;
  market_cap_rank: number | null;
  market_data: CoinMarketData;
  last_updated: string;
};

export type IOption = {
  label: string;
  value: string;
};

export type Currency = {
  label: string;
  format: string;
  currency: string;
};

export type History = {
  id: string;
  symbol: string;
  name: string;
  localization: {
    en: string;
  };
  image: {
    small: string;
  };
  market_data: {
    current_price: CurrencyValues;
    market_cap: CurrencyValues;
    total_volume: CurrencyValues;
  };
};

export type Category = {
  id: string;
  name: string;
  market_cap: number;
  market_cap_change_24h: number;
  content: "";
  top_3_coins: string[];
  volume_24h: number;
  updated_at: Date | string;
};

export interface CurrencyOption extends IOption {
  format: string;
}

export type Data = {
  name: string;
  value: number;
};
