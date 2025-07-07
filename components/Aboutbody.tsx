import React from 'react';
import Image from 'next/image';

function AboutBody() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 font-[Inter,sans-serif]">
      <div className="w-full lg:max-w-[600px] text-center lg:text-left">
        <h1 className="mb-4 sm:mb-6 lg:mb-8">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight lg:leading-[71px] font-light text-black font-[Inter,sans-serif]">
            Great{' '}
          </span>

          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[53px] leading-tight lg:leading-[71px] font-extrabold text-[#A259FF] font-[Inter,sans-serif]">
            Websites{' '}
          </span>

          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight lg:leading-[71px] font-light text-black font-[Inter,sans-serif]">
            are{' '}
          </span>

          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight lg:leading-[71px] font-extrabold text-[#333] font-[Inter,sans-serif]">
            built by great{' '}
            <span className="text-[#A259FF]">teams</span>
          </span>
        </h1>

        <p className="text-sm sm:text-base lg:text-[16px] text-[#555] leading-relaxed lg:leading-[28px] mb-6 lg:mb-8 font-[Inter,sans-serif] max-w-lg mx-auto lg:mx-0">
          We build modern web applications and digital solutions
          <br className="hidden sm:block" />
          to bring your business vision to life
        </p>

        <button className="bg-gradient-to-r from-[#3D63EA] to-[#5A79F2] border-none px-6 sm:px-8 lg:px-[30px] py-3 sm:py-4 lg:py-[19px] rounded-[5px] text-white w-full sm:w-auto lg:w-[175px] h-auto lg:h-[52px] cursor-pointer text-sm sm:text-base lg:text-[16px] font-medium font-[Inter,sans-serif] shadow-[0_4px_14px_rgba(61,99,234,0.4)] transition-all duration-300 flex items-center justify-center gap-2 lg:gap-[10px] whitespace-nowrap">
          Get Started
        </button>
      </div>

      <div className="w-full lg:flex-1 flex justify-center">
        <img
          src="/Hero-Wrapper__image.png"
          alt="Team illustration"
          className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[614px] h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default AboutBody;
