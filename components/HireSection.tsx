"use client";

import React from 'react';

const HireSection: React.FC = () => {
  return (
    <div className="bg-blue-50 rounded-lg p-6 m-20 flex items-center justify-between max-w-4xl mx-auto shadow-md h-32 relative bottom-16">
      <p className="text-lg font-medium text-gray-800">
        Hire the best developers and designers around!
      </p>
      <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-red-600 transition duration-300">
        Hire Top Developers
      </button>
    </div>
  );
};

export default HireSection;