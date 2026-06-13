import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const shortenUrl = async (url: string): Promise<string> => {
    const response = await axios.post(`${API_BASE_URL}/shorten`, { url });
    return response.data.shortenedUrl;
};

export const getShortenedUrls = async (): Promise<string[]> => {
    const response = await axios.get(`${API_BASE_URL}/shortened-urls`);
    return response.data.urls;
};