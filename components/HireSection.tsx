"use client";

import React, { useState } from 'react';
import StartProjectModal from './StartProjectModal'; // Adjust path as needed

const HireSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 lg:py-16">
      <div className="bg-blue-50 rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto shadow-md gap-4 sm:gap-6">
        <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-800 text-center sm:text-left">
          Ready to build your next project?
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:from-orange-600 hover:to-red-600 transition duration-300 text-sm sm:text-base font-medium whitespace-nowrap"
        >
          Start Your Project
        </button>
      </div>

      {/* Modal */}
      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HireSection;
