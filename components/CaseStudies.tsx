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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recent</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {caseStudiesData.slice(0, visibleStudies).map((study, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <img src={study.image} alt={study.heading} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{study.heading}</h2>
            <p className="text-gray-600 mb-2">{study.paragraph}</p>
            <button
              onClick={() => handleReadMore(study)}
              className="text-purple-600 hover:underline"
            >
              Read more
            </button>
          </div>
        ))}
      </div>
      {visibleStudies < caseStudiesData.length && (
        <button
          onClick={handleViewAll}
          className="mt-4 text-purple-600 hover:underline"
        >
          Read more case studies
        </button>
      )}
      {selectedStudy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h2 className="text-xl font-semibold">{selectedStudy.heading}</h2>
            <img src={selectedStudy.image} alt={selectedStudy.heading} className="w-full h-48 object-cover mb-2" />
            <p className="text-gray-600 mb-2">{selectedStudy.paragraph}</p>
            {selectedStudy.extraParagraphs.map((para, idx) => (
              <p key={idx} className="text-gray-600 mb-2">{para}</p>
            ))}
            <button
              onClick={handleClosePopup}
              className="mt-4 text-purple-600 hover:underline"
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