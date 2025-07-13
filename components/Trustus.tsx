'use client';
import React from 'react';

const TrustedSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-20 gap-8 lg:gap-12 font-[Inter,sans-serif]">
      <div className="flex-1 w-full lg:pr-8">
        <p className="text-[#5F267B] font-medium mb-2 sm:mb-3 lg:mb-4">—</p>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-medium mb-3 sm:mb-4 lg:mb-6 leading-[55px]">
          Leading companies trust us <br className="hidden sm:block" />
<span className="font-bold">to build their web and AI-powered presence</span>

        </h2>
        <p className="text-sm sm:text-base lg:text-[18px] text-[#555] leading-relaxed lg:leading-[1.6] mb-4 sm:mb-6 lg:mb-8">
          We{' '}
          <span className="text-[#D100E0] font-semibold">
            Deliver smart, scalable web and AI solutions
          </span>{' '}
         To businesses of all sizes. Our expertise spans the entire development lifecycle — from initial concept to deployment and maintenance. We are a web and AI development company that guarantees quality results and innovative, intelligent solutions.
        </p>
        <a
          href="#"
          className="text-sm sm:text-base lg:text-[16px] font-medium text-[#D100E0] no-underline inline-flex items-center gap-2 lg:gap-[6px]"
        >
          See our work <span className="font-bold">→</span>
        </a>
      </div>

      <div className="flex-1 w-full relative flex justify-center">
        <img
          src="/depositphotos_445338506-stock-photo-diverse-group-of-co-workers.jpg"
          alt="Team"
          className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[480px] h-auto rounded-[12px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D100E0] rounded-full w-8 h-8 sm:w-10 sm:h-10 lg:w-[40px] lg:h-[40px] flex justify-center items-center cursor-pointer">
          <span className="text-white text-sm sm:text-base lg:text-[18px]">▶</span>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
