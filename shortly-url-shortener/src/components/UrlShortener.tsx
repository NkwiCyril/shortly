import React, { useState } from 'react';
import { shortenUrl } from '../services/api';
import { UrlShortenerProps } from '../types';

const UrlShortener: React.FC<UrlShortenerProps> = ({ onLinkShortened }) => {
  const [inputUrl, setInputUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input
    if (!inputUrl.trim()) {
      setError('Please add a link');
      return;
    }
    
    try {
      setIsLoading(true);
      setError(null);
      
      const result = await shortenUrl(inputUrl);
      
      if (result.shortUrl) {
        onLinkShortened({
          originalUrl: inputUrl,
          shortUrl: result.shortUrl,
          createdAt: new Date().toISOString()
        });
        setInputUrl('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to shorten URL');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full rounded-lg bg-dark-violet bg-[url('/public/images/bg-shorten-desktop.svg')] bg-cover p-6 md:p-12">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <div className={`relative ${error ? 'mb-8 md:mb-0' : ''}`}>
            <input
              type="text"
              placeholder="Shorten a link here..."
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              className={`w-full p-3 md:p-4 rounded-lg text-very-dark-violet focus:outline-none focus:ring-2 focus:ring-cyan ${
                error ? 'border-2 border-red placeholder-red/70' : ''
              }`}
              aria-invalid={!!error}
            />
            {error && (
              <p className="text-red text-xs italic absolute left-0 top-full mt-1 md:mt-2">
                {error}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-cyan hover:bg-cyan-light text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-70 md:whitespace-nowrap"
        >
          {isLoading ? 'Shortening...' : 'Shorten It!'}
        </button>
      </form>
    </div>
  );
};

export default UrlShortener;