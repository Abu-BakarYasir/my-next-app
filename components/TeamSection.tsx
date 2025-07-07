"use client";

import React from 'react';
import teamData from '../public/assets/team-data.json';

const TeamSection: React.FC = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 leading-tight">Our Approach to Building Great Websites</h1>
      {teamData.map((item, index) => (
        <div key={index} className="flex flex-col lg:flex-row items-center justify-between mb-6 sm:mb-8 lg:mb-12 w-full gap-6 lg:gap-8">
          {index % 2 === 1 ? (
            <>
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <img src={item.image} alt={item.heading} className="w-full h-auto object-cover rounded-lg" />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">{item.heading}</h2>
                <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">{item.paragraph}</p>
                <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">{item.budget}</p>
                <p className="text-gray-600 italic mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">"{item.quote}"</p>
                <div className="flex items-center justify-center lg:justify-start mt-3 sm:mt-4">
                  <img src={item.authorImage} alt={item.author} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-3" />
                  <p className="text-gray-600 text-sm sm:text-base">{item.author}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">{item.heading}</h2>
                <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">{item.paragraph}</p>
                <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">{item.budget}</p>
                <p className="text-gray-600 italic mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">"{item.quote}"</p>
                <div className="flex items-center justify-center lg:justify-start mt-3 sm:mt-4">
                  <img src={item.authorImage} alt={item.author} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-2 sm:mr-3" />
                  <p className="text-gray-600 text-sm sm:text-base">{item.author}</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <img src={item.image} alt={item.heading} className="w-full h-auto object-cover rounded-lg" />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TeamSection;