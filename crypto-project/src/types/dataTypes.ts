// Common reusable type
interface PriceData {
  [currency: string]: number;
}

// Common reusable type
interface PlatformDetail {
  decimal_place: number;
  contract_address: string;
  geckoterminal_url?: string;
}

// Common reusable type
interface Roi {
  times: number;
  currency: string;
  percentage: number;
}

// Main interfaces
export interface CoinMarketData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number | null;
  market_cap_rank: number | null;
  fully_diluted_valuation: number | null;
  total_volume: number | null;
  high_24h: number | null;
  low_24h: number | null;
  price_change_24h: number | null;
  price_change_percentage_24h: number | null;
  market_cap_change_24h: number | null;
  market_cap_change_percentage_24h: number | null;
  circulating_supply: number | null;
  total_supply: number | null;
  max_supply: number | null;
  ath: number | null;
  ath_change_percentage: number | null;
  ath_date: string | null;
  atl: number | null;
  atl_change_percentage: number | null;
  atl_date: string | null;
  roi: Roi | null;
  last_updated: string;
}

export interface CoinDetailData {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: string | null;
  platforms: {
    [platform: string]: string;
  };
  detail_platforms: {
    [platform: string]: PlatformDetail;
  };
  block_time_in_minutes: number;
  hashing_algorithm: string | null;
  categories: string[];
  preview_listing: boolean;
  public_notice: string | null;
  additional_notices: unknown[];
  description: {
    en: string;
  };
  links: {
    homepage: string[];
    whitepaper: string;
    blockchain_site: string[];
    official_forum_url: unknown[];
    chat_url: string[];
    announcement_url: string[];
    snapshot_url: string | null;
    twitter_screen_name: string;
    facebook_username: string;
    bitcointalk_thread_identifier: string | null;
    telegram_channel_identifier: string;
    subreddit_url: string | null;
    repos_url: {
      github: string[];
      bitbucket: unknown[];
    };
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  country_origin: string;
  genesis_date: string | null;
  contract_address: string;
  sentiment_votes_up_percentage: number | null;
  sentiment_votes_down_percentage: number | null;
  watchlist_portfolio_users: number;
  market_cap_rank: number | null;
  market_data: {
    current_price: PriceData;
    total_value_locked: {
      btc: number;
      usd: number;
    } | null;
    mcap_to_tvl_ratio: number | null;
    fdv_to_tvl_ratio: number | null;
    roi: Roi | null;
    ath: PriceData;
    ath_change_percentage: PriceData;
    ath_date: {
      [currency: string]: string;
    };
    atl: PriceData;
    atl_change_percentage: PriceData;
    atl_date: {
      [currency: string]: string;
    };
    market_cap: PriceData;
    market_cap_rank: number | null;
    fully_diluted_valuation: PriceData;
    market_cap_fdv_ratio: number;
    total_volume: PriceData;
    high_24h: PriceData;
    low_24h: PriceData;
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: PriceData;
    price_change_percentage_1h_in_currency: PriceData;
    price_change_percentage_24h_in_currency: PriceData;
    price_change_percentage_7d_in_currency: PriceData;
    price_change_percentage_14d_in_currency: PriceData;
    price_change_percentage_30d_in_currency: PriceData;
    price_change_percentage_60d_in_currency: PriceData;
    price_change_percentage_200d_in_currency: PriceData;
    price_change_percentage_1y_in_currency: PriceData;
    market_cap_change_24h_in_currency: PriceData;
    market_cap_change_percentage_24h_in_currency: PriceData;
    total_supply: number;
    max_supply: number | null;
    max_supply_infinite: boolean;
    circulating_supply: number;
    last_updated: string;
  };
  status_updates: unknown[];
  last_updated: string;
}

export interface CoinMarketChartData {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

export interface CoinDetails {
  coin : CoinDetailData;
  chart: CoinMarketChartData;
}