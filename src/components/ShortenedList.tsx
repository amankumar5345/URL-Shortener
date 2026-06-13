import React from 'react';

interface ShortenedURL {
    originalUrl: string;
    shortenedUrl: string;
}

interface ShortenedListProps {
    urls: ShortenedURL[];
}

const ShortenedList: React.FC<ShortenedListProps> = ({ urls }) => {
    return (
        <div className="shortened-list">
            <h2>Shortened URLs</h2>
            <ul>
                {urls.map((url, index) => (
                    <li key={index} className="shortened-url-item">
                        <span className="original-url">{url.originalUrl}</span>
                        <span className="shortened-url">{url.shortenedUrl}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShortenedList;