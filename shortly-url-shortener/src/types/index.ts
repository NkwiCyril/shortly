export interface LinkItem {
  originalUrl: string;
  shortUrl: string;
  createdAt: string;
}

export interface LinkResultProps {
  originalUrl: string;
  shortUrl: string;
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  offset?: string;
}

export interface UrlShortenerProps {
  onLinkShortened: (link: LinkItem) => void;
}

export interface ShortenUrlResponse {
  shortUrl: string;
}