import React from 'react';
import illustrationWorking from "../assets/images/illustration-working.svg";

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-5 md:pb-40 md:pt-10 flex flex-col-reverse md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-slate-800 text-4xl md:text-6xl font-bold text-very-dark-violet leading-tight mb-4">
          More than just shorter links
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto md:mx-0">
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button className="bg-cyan-500 cursor-pointer text-white px-6 py-2 rounded-full font-bold hover:bg-cyan-200">
            Get Started
          </button>
      </div>
      <div className="md:w-1/2 flex justify-end"> 
        <img 
          src={illustrationWorking}
          alt="Person working at desk" 
          className="w-full max-w-md md:max-w-none md:transform md:translate-x-16"
        />
      </div>
    </section>
  );
};

export default Hero;