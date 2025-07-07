"use client";

import React, { useState } from 'react';
import caseStudiesData from '../public/assets/case-studies.json';

interface CaseStudy {
  image: string;
  heading: string;
  paragraph: string;
  extraParagraphs: string[];
}

const CaseStudies: React.FC = () => {
  const [visibleStudies, setVisibleStudies] = useState(3);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const handleReadMore = (study: CaseStudy) => {
    setSelectedStudy(study);
  };

  const handleClosePopup = () => {
    setSelectedStudy(null);
  };

  const handleViewAll = () => {
    setVisibleStudies(caseStudiesData.length);
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-20">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-12">Our Recent Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {caseStudiesData.slice(0, visibleStudies).map((study, index) => (
          <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <img src={study.image} alt={study.heading} className="w-full h-40 sm:h-48 object-cover mb-3 sm:mb-4 rounded" />
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{study.heading}</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{study.paragraph}</p>
            <button
              onClick={() => handleReadMore(study)}
              className="text-purple-600 hover:underline text-sm sm:text-base font-medium"
            >
              Read more
            </button>
          </div>
        ))}
      </div>
      {visibleStudies < caseStudiesData.length && (
        <div className="text-center mt-6 sm:mt-8 lg:mt-12">
          <button
            onClick={handleViewAll}
            className="text-purple-600 hover:underline text-sm sm:text-base font-medium"
          >
            View all projects
          </button>
        </div>
      )}
      {selectedStudy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg max-w-md sm:max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{selectedStudy.heading}</h2>
            <img src={selectedStudy.image} alt={selectedStudy.heading} className="w-full h-40 sm:h-48 object-cover mb-3 sm:mb-4 rounded" />
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{selectedStudy.paragraph}</p>
            {selectedStudy.extraParagraphs.map((para, idx) => (
              <p key={idx} className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">{para}</p>
            ))}
            <button
              onClick={handleClosePopup}
              className="mt-4 sm:mt-6 text-purple-600 hover:underline text-sm sm:text-base font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudies;