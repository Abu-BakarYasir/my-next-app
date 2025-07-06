'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-white px-16 py-14 text-sm text-[#5E5E5E] font-[Poppins,sans-serif]">
      <div className="max-w-[1440px] mx-auto flex flex-col justify-between h-[496px]">
        {/* Top Section */}
        <div className="flex justify-between w-full">
          {/* Column 1 */}
          <div className="max-w-[300px] space-y-4">
            <img src="/logo.png" alt="Logo" className="w-[120px] h-auto" />
            <p className="text-[#5E5E5E] font-normal text-[16px] leading-[236%] tracking-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="flex items-center gap-4">
              <img src="/google.png" alt="Google Review" className="w-[100px] h-auto" />
              <img src="/score.png" alt="Score" className="w-[40px] h-auto" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <h4 className="text-[#2F2F2F] font-semibold text-[16px] mb-2">Links</h4>
            <ul className="space-y-2">
              {[
                'About Us',
                'Services',
                'Case Studies',
                'How it works',
                'Blog',
                'Careers',
                'Areas We Serve',
              ].map((text, i) => (
                <li
                  key={i}
                  className="font-normal text-[16px] leading-[236%] tracking-normal text-[#5E5E5E]"
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-3 max-w-[300px]">
            <h4 className="text-[#2F2F2F] font-semibold text-[16px] mb-2">Contact us</h4>
            <p className="font-normal text-[16px] leading-[236%] tracking-normal text-[#5E5E5E]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="font-normal text-[16px] leading-[236%] tracking-normal text-[#5E5E5E]">
              +923183561921
            </p>
            <div className="flex gap-3 mt-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, index) => (
                <button
                  key={index}
                  className="w-8 h-8 rounded-full bg-[#F7F7F7] flex items-center justify-center text-[#5E5E5E] hover:text-white hover:bg-[#D100E0] transition"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#eee] mt-6" />

        {/* Bottom Section */}
        <div className="text-center mt-4 text-[#5E5E5E] font-normal text-[16px] leading-[236%] tracking-normal">
          © 2023 Copyright by IK Developers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
