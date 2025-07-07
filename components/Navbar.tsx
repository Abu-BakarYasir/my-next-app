'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      {/* Outer wrapper keeps the bar exactly 79 px tall */}
      <nav className="mx-auto flex h-[79px] max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
        {/* ------------ Brand (gradient badge + word‑mark) ------------ */}
        <Link href="/" className="flex items-center gap-2">
          {/* gradient circle from the spec */}
          <span
            className="inline-block h-5 w-5 sm:h-6 sm:w-6 rounded-full"
            style={{
              background:
                'linear-gradient(270deg,#161490 4.55%,#7476ED 49.85%,#E56F8C 93.3%)',
            }}
          />
          {/* word‑mark – be sure the Inspiration font is loaded globally */}
          <span className="font-inspiration text-lg sm:text-xl lg:text-[24px] font-normal text-black">
            Spiral&nbsp;Labs
          </span>
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-700 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>

        {/* ------------------------- Menu -------------------------- */}
        <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-[79px] md:top-0 left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-4 md:p-0 text-sm sm:text-base lg:text-[16px] leading-[25px] font-medium text-gray-700 z-50`}>
          <li>
            <button 
              onClick={() => scrollToSection('about-us')} 
              className="block py-2 md:py-0 transition hover:text-[#161490] cursor-pointer"
            >
              About&nbsp;us
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block py-2 md:py-0 transition hover:text-[#161490] cursor-pointer"
            >
              Services
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('case-studies')} 
              className="block py-2 md:py-0 transition hover:text-[#161490] cursor-pointer"
            >
              Case&nbsp;Studies
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="block py-2 md:py-0 transition hover:text-[#161490] cursor-pointer"
            >
              Testimonials
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="block py-2 md:py-0 transition hover:text-[#161490] cursor-pointer"
            >
              How&nbsp;it&nbsp;Works
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('hire')} 
              className="block py-2 md:py-0 transition hover:text-[#161490] cursor-pointer"
            >
              Hire
            </button>
          </li>
          <li className="md:hidden w-full">
            <button
              onClick={() => scrollToSection('hire')}
              className="block w-full text-center rounded-md bg-gradient-to-r from-[#161490] via-[#7476ED] to-[#E56F8C] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            >
              Contact&nbsp;us
            </button>
          </li>
        </ul>

        {/* -------------------- Gradient CTA button -------------------- */}
        <button
          onClick={() => scrollToSection('hire')}
          className="hidden md:inline-block ml-4 rounded-md bg-gradient-to-r from-[#161490] via-[#7476ED] to-[#E56F8C] px-4 lg:px-6 py-2 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:brightness-110"
        >
          Contact&nbsp;us
        </button>
      </nav>
    </header>
  );
}
