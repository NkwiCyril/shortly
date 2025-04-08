import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-5 pt-8 pb-40 md:py-20 flex flex-col-reverse md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-bold text-very-dark-violet leading-tight mb-4">
          More than just shorter links
        </h1>
        <p className="text-grayish-violet text-lg mb-8 max-w-md mx-auto md:mx-0">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button className="btn-primary">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <img 
          src="/images/illustration-working.svg" 
          alt="Person working at desk" 
          className="w-full max-w-md md:max-w-none md:transform md:translate-x-16"
        />
      </div>
    </section>
  );
};

export default Hero;