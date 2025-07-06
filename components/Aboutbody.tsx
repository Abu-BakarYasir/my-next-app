import React from 'react';
import Image from 'next/image';

function AboutBody() {
  return (
    <div className="px-[104px] py-[75px] flex justify-between items-center  font-[Inter,sans-serif]">
      {/* Left Section */}
      <div className="max-w-[600px]">
        <h1 className="mb-[20px]">
          <span className="text-[45px] leading-[71px] font-light text-black font-[Inter,sans-serif]">
            Great{' '}
          </span>

          <span className="text-[53px] leading-[71px] font-extrabold text-[#A259FF] font-[Inter,sans-serif]">
            Product{' '}
          </span>

          <span className="text-[45px] leading-[71px] font-light text-black font-[Inter,sans-serif]">
            is{' '}
          </span>

          <span className="block text-[45px] leading-[71px] font-extrabold text-[#333] font-[Inter,sans-serif]">
            built by great{' '}
            <span className="text-[#A259FF]">teams</span>
          </span>
        </h1>

        <p className="text-[16px] text-[#555] leading-[28px] mb-[30px] font-[Inter,sans-serif]">
          We help build and manage a team of world-class developers
          <br />
          to bring your vision to life
        </p>

        <button className="bg-gradient-to-r from-[#3D63EA] to-[#5A79F2] border-none px-[30px] py-[19px] rounded-[5px] text-white w-[175px] h-[52px] cursor-pointer text-[16px] font-medium font-[Inter,sans-serif] shadow-[0_4px_14px_rgba(61,99,234,0.4)] transition-all duration-300 flex items-center justify-center gap-[10px] whitespace-nowrap">
          Let’s get started!
        </button>
      </div>

      {/* Right Section (Image) */}
      <div>
        <img
          src="/Hero-Wrapper__image.png"
          alt="Team illustration"
          className="w-[614px] h-[546px] object-contain"
        />
      </div>
    </div>
  );
}

export default AboutBody;
