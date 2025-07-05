'use client';
import React from 'react';

const TrustedSection: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-[40px] py-[60px] font-[Inter,sans-serif]">
      {/* Left Content */}
      <div className="flex-1 pr-[40px]">
        <p className="text-[#5F267B] font-medium mb-[10px]">—</p>
        <h2 className="text-[24px] font-medium mb-[10px]">
          Leading companies trust us <br />
          <span className="font-bold">to develop software</span>
        </h2>
        <p className="text-[14px] text-[#555] leading-[1.6] mb-[20px]">
          We{' '}
          <span className="text-[#D100E0] font-semibold">
            add development capacity
          </span>{' '}
          to tech teams. Our value isn’t limited to building teams but is equally
          distributed across the project lifecycle. We are a custom software
          development company that guarantees the successful delivery of your
          project.
        </p>
        <a
          href="#"
          className="text-[14px] font-medium text-[#D100E0] no-underline inline-flex items-center gap-[6px]"
        >
          See more informations <span className="font-bold">→</span>
        </a>
      </div>

      {/* Right Image with Play Button */}
      <div className="flex-1 relative flex justify-center">
        <img
          src="/depositphotos_445338506-stock-photo-diverse-group-of-co-workers.jpg"
          alt="Team"
          className="w-full max-w-[480px] h-auto rounded-[12px] object-cover"
        />
        {/* Play button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#D100E0] rounded-full w-[40px] h-[40px] flex justify-center items-center cursor-pointer">
          <span className="text-white text-[18px]">▶</span>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
