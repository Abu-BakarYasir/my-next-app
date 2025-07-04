'use client';
import React from 'react';
import Image from 'next/image';

export default function AboutBody() {
  return (
    <div className="pt-[148px] px-[104px] flex gap-10">
      {/* Text Section */}
      <div className="flex flex-col gap-[75px]">
        <div className="font-light text-[45px] leading-[71px]">
          <div>Great Product is</div>
          <div>built by great teams</div>
        </div>
        <div className="w-[531px] h-[58px] text-gray-600 text-base">
          <p>
            We help build and manage a team of world class developers
            <br />
            to bring your vision to life
          </p>
        </div>
        <div>
          <button className="bg-[#3D63EA] text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
            Let’s get started
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div>
       
         <Image src="/Hero-Wrapper__image.png" width={600} height={400} alt="Hero" />
        
      </div>
    </div>
  );
}
