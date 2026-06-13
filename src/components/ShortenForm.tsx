import React, { useState } from 'react';

const ShortenForm: React.FC = () => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) {
            setError('Please enter a URL');
            return;
        }
        setError('');
        // Handle URL shortening logic here
        console.log('URL to shorten:', url);
    };

    return (
        <form onSubmit={handleSubmit} className="shorten-form">
            <input
                type="url"
                placeholder="Enter your URL here"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className={`url-input ${error ? 'error' : ''}`}
                required
            />
            <button type="submit" className="shorten-button">Shorten</button>
            {error && <p className="error-message">{error}</p>}
        </form>
    );
};

export default ShortenForm;