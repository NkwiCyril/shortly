import React, { useState } from 'react';
import { shortenUrl } from '../services/api';
import { UrlShortenerProps } from '../types';
import bgDesktop from '../assets/images/bg-shorten-desktop.svg';
import bgMobile from '../assets/images/bg-shorten-mobile.svg';

const UrlShortener: React.FC<UrlShortenerProps> = ({ onLinkShortened }) => {
  const [inputUrl, setInputUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
          createdAt: new Date().toISOString(),
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
    <section className="max-width bg-[#3b3054] mt-20 rounded-lg relative md:bottom-[50px] z-10 px-6">
      <picture>
        <source media="(min-width: 768px)" srcSet={bgDesktop} />
        <img
          src={bgMobile}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </picture>

      <div className="relative z-10 py-6 px-2 md:p-10 bg-dark-violet rounded-lg">
        <form onSubmit={handleSubmit} className="form"> 
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="w-full md:flex-grow relative">
              <input
                type="url"
                placeholder="Shorten a link here..."
                className={`w-full px-5 py-[10px] rounded-lg mb-2 md:mb-0 bg-white outline-0 ${
                  error
                    ? 'border-2 border-red-600 placeholder-red/70'
                    : 'focus:ring-2 focus:ring-cyan'
                }`}
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                aria-invalid={!!error}
              />
              {error && (
                <p className="text-red-600 text-sm italic mt-1">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-cyan-500 py-3 md:w-1/8 text-white text-[14px] py-2 rounded-lg cursor-pointer font-bold hover:bg-cyan-200"
              disabled={isLoading}
            >
              {isLoading ? 'Shortening...' : 'Shorten It!'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UrlShortener;
