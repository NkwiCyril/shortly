import axios from 'axios';
import { ShortenUrlResponse } from '../types';

const API_BASE_URL = 'https://api.shrtlnk.dev/v2';

export const shortenUrl = async (url: string): Promise<ShortenUrlResponse> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/links`, {
      url
    }, {
      headers: {
        'Content-Type': 'application/json',
        // If the API requires an API key, it would go here
        // 'api-key': 'YOUR_API_KEY'
      }
    });
    
    return {
      shortUrl: response.data.shortUrl
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Failed to shorten URL');
    }
    throw new Error('Network error occurred');
  }
};