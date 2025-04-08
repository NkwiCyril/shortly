import React from 'react';
import { FeatureCardProps } from '../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, offset = '' }) => {
  return (
    <div className={`bg-white rounded-lg pt-16 pb-10 px-8 text-center md:text-left relative ${offset}`}>
      <div className="absolute -top-10 left-1/2 md:left-10 transform -translate-x-1/2 md:translate-x-0 rounded-full p-5 bg-dark-violet flex items-center justify-center">
        <img src={`/images/${icon}`} alt={title} className="w-10 h-10" />
      </div>
      
      <h3 className="text-xl font-bold text-very-dark-violet mb-4">
        {title}
      </h3>
      <p className="text-grayish-violet text-sm">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;