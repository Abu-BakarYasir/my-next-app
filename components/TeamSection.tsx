"use client";

import React from 'react';
import teamData from '../public/assets/team-data.json';

const TeamSection: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Way of building Great Software</h1>
      {teamData.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center justify-between mb-8 w-full">
          {index % 2 === 1 ? (
            <>
              <div className="md:w-1/2 p-4">
                <img src={item.image} alt={item.heading} className="w-full h-auto object-cover rounded-lg" />
              </div>
              <div className="md:w-1/2 p-4 text-left">
                <h2 className="text-2xl font-semibold mb-2">{item.heading}</h2>
                <p className="text-gray-600 mb-2">{item.paragraph}</p>
                <p className="text-gray-600 mb-2">{item.budget}</p>
                <p className="text-gray-600 italic mb-2">"{item.quote}"</p>
                <div className="flex items-center mt-2">
                  <img src={item.authorImage} alt={item.author} className="w-10 h-10 rounded-full mr-2" />
                  <p className="text-gray-600">{item.author}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="md:w-1/2 p-4 text-left">
                <h2 className="text-2xl font-semibold mb-2">{item.heading}</h2>
                <p className="text-gray-600 mb-2">{item.paragraph}</p>
                <p className="text-gray-600 mb-2">{item.budget}</p>
                <p className="text-gray-600 italic mb-2">"{item.quote}"</p>
                <div className="flex items-center mt-2">
                  <img src={item.authorImage} alt={item.author} className="w-10 h-10 rounded-full mr-2" />
                  <p className="text-gray-600">{item.author}</p>
                </div>
              </div>
              <div className="md:w-1/2 p-4">
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