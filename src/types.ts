export interface ShortenedURL {
    originalUrl: string;
    shortenedUrl: string;
    createdAt: string;
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