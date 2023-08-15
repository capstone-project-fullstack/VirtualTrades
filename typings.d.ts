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