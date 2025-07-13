import React from 'react';

function AboutBody() {
  return (
    <div className="px-4 sm:px-8 md:px-16 py-6 lg:py-12 flex flex-col lg:flex-row items-center justify-center gap-[48px] font-[Inter,sans-serif] max-w-[1200px] mx-auto">
      
      {/* Left Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left ">
        <h1 className="mb-6 lg:mb-8 leading-[71px]">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-light text-black">
            Great{' '}
          </span>
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#161490] via-[#7476ED] to-[#E56F8C]">
            Products{' '}
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-light text-black">
            are{' '}
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[53px] font-extrabold text-[#333]">
            built by great{' '}
            <span className="bg-gradient-to-r from-[#161490] lg:text-[53px] via-[#7476ED] to-[#E56F8C] bg-clip-text text-transparent">
              teams
            </span>
          </span>
        </h1>

        <p className="text-sm sm:text-base lg:text-[18px] text-[#555] leading-relaxed lg:leading-[36px] mb-6 max-w-md mx-auto lg:mx-0">
          We build modern web applications and AI-powered solutions 
          to bring your business vision to life.
        </p>

        <button className="bg-gradient-to-r from-[#3D63EA] to-[#5A79F2] px-6 sm:px-8 py-3 sm:py-4 rounded-[5px] text-white w-full sm:w-auto lg:w-[175px] h-auto cursor-pointer text-sm sm:text-base lg:text-[16px] font-medium shadow-[0_4px_14px_rgba(61,99,234,0.4)] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap mx-auto lg:mx-0">
          Get Started
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
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
