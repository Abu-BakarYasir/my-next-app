'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';




const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    { text: 'About Us', action: () => scrollToSection('about-us') },
    { text: 'Services', action: () => scrollToSection('services') },
    { text: 'Portfolio', action: () => scrollToSection('case-studies') },
    { text: 'How it works', action: () => scrollToSection('how-it-works') },
    { text: 'Testimonials', action: () => scrollToSection('testimonials') },
    { text: 'Contact', action: () => scrollToSection('hire') },
    { text: 'Back to Top', action: scrollToTop },
  ];

  return (
    <footer className="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 lg:py-14 text-sm text-[#5E5E5E] font-[Poppins,sans-serif]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 mb-8 lg:mb-12">
          <div className="flex-1 max-w-[300px] space-y-3 sm:space-y-4 text-center lg:text-left">
            <button onClick={scrollToTop} className="flex items-center gap-2">
  <div className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full overflow-hidden">
    <img
      src="/logopiral.png"
      alt="Spiral Labs Logo"
      className="w-full h-full object-cover hover:opacity-80 transition-opacity"
    />
  </div>
  <span className="text-xl sm:text-2xl font-inspiration text-black">
    Spiral labs
  </span>
</button>

            <p className="text-[#5E5E5E] font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[236%] tracking-normal">
              Spiral Labs specializes in crafting cutting-edge web applications and AI-powered solutions tailored to businesses of all sizes.
            </p>
            <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <img src="/google.png" alt="Google Review" className="w-[80px] sm:w-[100px] h-auto" />
              <img src="/score.png" alt="Score" className="w-[32px] sm:w-[40px] h-auto" />
            </div>
          </div>

          <div className="flex-1 space-y-2 sm:space-y-3 text-center lg:text-left">
            <h4 className="text-[#2F2F2F] font-semibold text-sm sm:text-base lg:text-[16px] mb-3 sm:mb-4">Quick Navigation</h4>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={link.action}
                    className="font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[236%] tracking-normal text-[#5E5E5E] hover:text-[#D100E0] transition-colors cursor-pointer text-left w-full"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 max-w-[300px] space-y-3 sm:space-y-4 text-center lg:text-left">
            <h4 className="text-[#2F2F2F] font-semibold text-sm sm:text-base lg:text-[16px] mb-3 sm:mb-4">Contact us</h4>
            <p className="font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[236%] tracking-normal text-[#5E5E5E]">
             Looking to build a powerful web app or integrate AI into your business? Spiral Labs is here to bring your ideas to life.
            </p>
            <button
              onClick={() => scrollToSection('hire')}
              className="font-normal text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[236%] tracking-normal text-[#5E5E5E] hover:text-[#D100E0] transition-colors cursor-pointer"
            >
              spirallab.official@gmail.com
            </button>
            <div className="flex gap-2 sm:gap-3 justify-center lg:justify-start mt-3 sm:mt-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, index) => (
                <button
                  key={index}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#F7F7F7] flex items-center justify-center text-[#5E5E5E] hover:text-white hover:bg-[#D100E0] transition"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon size={12} className="sm:w-[14px] sm:h-[14px]" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#eee] mb-4 sm:mb-6" />

        <div className="text-center text-[#5E5E5E] font-normal text-xs sm:text-sm lg:text-[16px] leading-relaxed lg:leading-[236%] tracking-normal">
          © 2024 Copyright by Spiral Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
