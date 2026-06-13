export interface ShortenedURL {
    originalUrl: string;
    shortenedUrl: string;
    createdAt: Date;
}

export interface Theme {
    name: string;
    backgroundColor: string;
    textColor: string;
}

export interface AppState {
    shortenedUrls: ShortenedURL[];
    currentTheme: Theme;
}