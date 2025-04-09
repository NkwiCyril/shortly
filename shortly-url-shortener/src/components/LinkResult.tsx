import React, { useState } from 'react';
import { LinkResultProps } from '../types';

const LinkResult: React.FC<LinkResultProps> = ({ originalUrl, shortUrl }) => {
  const [copied, setCopied] = useState<boolean>(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
      });
  };
  
  // Truncate long original URLs for display
  const displayUrl = originalUrl.length > 50 
    ? `${originalUrl.substring(0, 47)}...` 
    : originalUrl;
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <p className="p-4 border-b-0 md:border-b-0 text-very-dark-violet truncate">
          {displayUrl}
        </p>
        
        <div className="p-4 flex flex-col md:flex-row md:items-center md:space-x-6">
          <a 
            href={shortUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 font-medium mb-3 md:mb-0"
          >
            {shortUrl}
          </a>
          
          <button
            onClick={handleCopy}
            className={`${
              copied ? 'bg-[#35323e]' : 'bg-cyan-400 hover:bg-cyan-200 cursor-pointer'
            } text-white font-bold py-2 px-6 rounded-lg transition-colors`}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkResult;