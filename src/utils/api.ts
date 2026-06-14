import { ShortenedURL } from '../types';

const STORAGE_KEY = 'shortenedUrls';

export const getShortenedUrls = async (): Promise<ShortenedURL[]> => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        return [];
    }

    try {
        return JSON.parse(stored) as ShortenedURL[];
    } catch {
        return [];
    }
};

const createSlug = () => Math.random().toString(36).substring(2, 8);

export const shortenUrl = async (url: string): Promise<ShortenedURL> => {
    const slug = createSlug();
    const shortenedUrl = `${window.location.origin}/${slug}`;
    const nextUrl: ShortenedURL = {
        originalUrl: url,
        shortenedUrl,
        createdAt: new Date().toISOString(),
    };

    const currentUrls = await getShortenedUrls();
    const updatedUrls = [nextUrl, ...currentUrls];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUrls));

    return nextUrl;
};
