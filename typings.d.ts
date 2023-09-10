import TradeHistory from '@/app/portfolio/TradeHistory';

export interface NewsCardProps {
  imgLink: string;
  headline: string;
  summary: string;
  newsLink: string;
  datetime: number;
}

export interface NewsData {
  id: number;
  headline: string;
  summary: string;
  url: string;
  image: string;
  datetime: number;
}

export type materialColors =
  | 'white'
  | 'blue-gray'
  | 'gray'
  | 'brown'
  | 'deep-orange'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'light-green'
  | 'green'
  | 'teal'
  | 'cyan'
  | 'light-blue'
  | 'blue'
  | 'indigo'
  | 'deep-purple'
  | 'purple'
  | 'pink'
  | 'red';

export interface NewsCardProps {
  imgLink: string;
  headline: string;
  summary: string;
  newsLink: string;
}

export interface NewsData {
  id: number;
  headline: string;
  summary: string;
  url: string;
  image: string;
}

export interface User {
  id: string;
  initial_amount: number;
  cash: number;
  current_portfolio_value: number;
}

export interface PortfolioData {
  shares: number;
  average_price: number;
  total_equity: number;
  gain: number;
  percentGain: string;
  Stock: {
    symbol: string;
    name: string;
    icon_url: string;
    current_price: number;
  };
}

export interface WatchlistData {
  low: number;
  open: number;
  high: number;
  price: number;
  change: number;
  changePercent: number;
  prevClose: number;
  name: string;
  symbol: string;
  icon: string;
  marketCap: number;
  low52: number;
  high52: number;
}

export interface TradeHistory {
  date: string;
  time: string;
  symbol: string;
  price: Decimal | null;
  type: string;
  shares: number;
}
