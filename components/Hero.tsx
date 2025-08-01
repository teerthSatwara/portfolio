import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-all duration-300 flex flex-col md:flex-row items-center justify-center text-left px-4 md:px-10 gap-6 relative">
      
      {/* ✅ LEFT: Text Section */}
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left space-y-5 md:pl-4">
        
        {/* Headline */}
        <h1 className="text-5xl text-gray-800 dark:text-gray-100 font-bold leading-tight">
          Transforming Ideas into Revolution
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Bringing my story to the world
        </p>

        {/* CTA Button */}

      </div>

      {/* ✅ RIGHT: Image Section */}
      <div className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0">
        <Image
          src="/profile.tiff"
          alt="Teerth Satwara"
          width={350}
          height={350}
          className="rounded-xl shadow-lg w-3/4 md:w-auto"
        />
      </div>
    </section>
  );
}

export default Hero;
