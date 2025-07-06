"use client";

import React from 'react';
import approachData from '../public/assets/approach-data.json';

const ApproachSection: React.FC = () => {
  return (
    <div className="w-full container mx-auto  p-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Our design and development approach</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {approachData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow flex items-center">
            <div className="mr-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <img src={item.icon} alt={item.title} className="w-8 h-8" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold inline-block align-middle">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApproachSection;