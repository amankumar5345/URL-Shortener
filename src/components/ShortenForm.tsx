import React, { useState } from 'react';

interface ShortenFormProps {
    onShorten: (url: string) => Promise<void>;
    isSaving: boolean;
}

const ShortenForm: React.FC<ShortenFormProps> = ({ onShorten, isSaving }) => {
    const [url, setUrl] = useState('');
    const [error, setError] = useState('');

    const validateUrl = (value: string) => {
        try {
            const parsed = new URL(value);
            return parsed.protocol === 'http:' || parsed.protocol === 'https:';
        } catch {
            return false;
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        const trimmed = url.trim();
        if (!trimmed) {
            setError('Please enter a URL.');
            return;
        }

        if (!validateUrl(trimmed)) {
            setError('Please enter a valid URL starting with http:// or https://.');
            return;
        }

        await onShorten(trimmed);
        setUrl('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="input"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                disabled={isSaving}
                aria-label="URL to shorten"
            />
            {error && <p className="error">{error}</p>}
            <button className="button" type="submit" disabled={isSaving}>
                {isSaving ? 'Shortening...' : 'Shorten URL'}
            </button>
        </form>
    );
};

export default ShortenForm;
