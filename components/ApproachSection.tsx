"use client";

import React from 'react';
import approachData from '../public/assets/approach-data.json';

const ApproachSection: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-20">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 leading-tight">Our design and development approach</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {approachData.map((item, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-start sm:items-center">
            <div className="mr-3 sm:mr-4 flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <img src={item.icon} alt={item.title} className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproachSection;