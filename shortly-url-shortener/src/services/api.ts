import axios from 'axios';
import { ShortenUrlResponse } from '../types';

const API_BASE_URL = 'https://api.t.ly';

export const shortenUrl = async (url: string): Promise<ShortenUrlResponse> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/v1/link/shorten`, {
      'long_url': url
    }, {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
        'Accept': 'application/json',       
        'Content-Type': 'application/json',
      }
    });
    
    return {
      shortUrl: response.data.short_url
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Failed to shorten URL');
    }
    throw new Error('Network error occurred');
  }
};