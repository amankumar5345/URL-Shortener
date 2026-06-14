import React from 'react';
import { ShortenedURL } from '../types';

interface ShortenedListProps {
    urls: ShortenedURL[];
}

const ShortenedList: React.FC<ShortenedListProps> = ({ urls }) => {
    if (urls.length === 0) {
        return <p>No shortened URLs yet. Add one above to get started.</p>;
    }

    return (
        <ul className="shortened-list">
            {urls.map((item) => (
                <li key={item.shortenedUrl} className="shortened-item">
                    <div>
                        <strong>Original:</strong>{' '}
                        <a href={item.originalUrl} target="_blank" rel="noreferrer">
                            {item.originalUrl}
                        </a>
                    </div>
                    <div>
                        <strong>Shortened:</strong>{' '}
                        <a href={item.shortenedUrl} target="_blank" rel="noreferrer">
                            {item.shortenedUrl}
                        </a>
                    </div>
                    <div className="meta">Created: {new Date(item.createdAt).toLocaleString()}</div>
                </li>
            ))}
        </ul>
    );
};

export default ShortenedList;
