import { ShortenedURL } from '../types';

const STORAGE_KEY = 'shortenedUrls';

export const getShortenedUrls = async (): Promise<ShortenedURL[]> => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        return [];
    }

    try {
        const parsed: ShortenedURL[] = JSON.parse(stored);
        return parsed;
    } catch {
        return [];
    }
};

const createSlug = () => Math.random().toString(36).substring(2, 8);

const getBasePath = () => {
    const pathname = window.location.pathname;
    return pathname.endsWith('/') ? pathname : pathname + '/';
};

export const shortenUrl = async (url: string): Promise<ShortenedURL> => {
    const slug = createSlug();
    const basePath = getBasePath();
    const shortenedUrl = `${window.location.origin}${basePath}${slug}`;
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

export const findOriginalUrl = async (slug: string): Promise<string | null> => {
    const urls = await getShortenedUrls();
    const found = urls.find(item => item.shortenedUrl.endsWith(`/${slug}`));
    return found ? found.originalUrl : null;
};

