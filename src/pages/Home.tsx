import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ShortenForm from '../components/ShortenForm';
import ShortenedList from '../components/ShortenedList';
import ThemeToggle from '../components/ThemeToggle';
import { getShortenedUrls, shortenUrl } from '../utils/api';
import { ShortenedURL } from '../types';

const Home: React.FC = () => {
    const [urls, setUrls] = useState<ShortenedURL[]>([]);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const loadUrls = async () => {
            const stored = await getShortenedUrls();
            setUrls(stored);
        };

        loadUrls();
    }, []);

    const handleShorten = async (url: string) => {
        setIsSaving(true);
        try {
            const nextUrl = await shortenUrl(url);
            setUrls((current) => [nextUrl, ...current]);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <main className="home-container container">
            <Header />
            <ThemeToggle />
            <ShortenForm onShorten={handleShorten} isSaving={isSaving} />
            <ShortenedList urls={urls} />
        </main>
    );
};

export default Home;
