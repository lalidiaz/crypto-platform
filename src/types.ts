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
  ath_date?: Date;
  atl: number;
  atl_change_percentage: number;
  atl_date?: Date;
  roi: number | null;
  last_updated?: Date;
};

type Images = {
  thumb: string;
  small: string;
  large: string;
};

type CurrencyValues = {
  aed?: string;
  usd?: string;
  ars?: string;
};

type Converted = {
  btc: number | null;
  eth: number | null;
  usd: number | null;
};

export type MarketData = {
  current_price: CurrencyValues;
  ath: Converted;
  ath_change_percentage: CurrencyValues;
  ath_date: CurrencyValues;
  atl: CurrencyValues;
  atl_change_percentage: CurrencyValues;
  atl_date: CurrencyValues;
  market_cap: CurrencyValues;
  total_volume: CurrencyValues;
  high_24h: CurrencyValues;
  low_24h: CurrencyValues;
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
  price_change_24h_in_currency: CurrencyValues;
  price_change_percentage_1h_in_currency: CurrencyValues;
  price_change_percentage_24h_in_currency: CurrencyValues;
  price_change_percentage_7d_in_currency: CurrencyValues;
  price_change_percentage_14d_in_currency: CurrencyValues;
  price_change_percentage_30d_in_currency: CurrencyValues;
  price_change_percentage_60d_in_currency: CurrencyValues;
  price_change_percentage_200d_in_currency: CurrencyValues;
  price_change_percentage_1y_in_currency: CurrencyValues;
  market_cap_change_24h_in_currency: CurrencyValues;
  market_cap_change_percentage_24h_in_currency: CurrencyValues;
};

type ResposURL = {
  github: string;
  bitbucket: string;
};

type Links = {
  homepage: string;
  whitepaper: string;
  repos_url: ResposURL;
};

type DevData = {
  forks: number | string | null;
  stars: number | string | null;
  subscribers: number | string | null;
};

type CommunityData = {
  twitter_followers: number | string | null;
  reddit_average_posts_48h: number | string | null;
  facebook_likes: number | string | null;
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
  market_data: MarketData;
  last_updated: string | Date;
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
  label: string;
  value: string;
}
