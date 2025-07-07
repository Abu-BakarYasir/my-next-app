'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
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
            <Link href="/about" className="block py-2 md:py-0 transition hover:text-[#161490]">
              About&nbsp;us
            </Link>
          </li>
          <li>
            <Link href="/services" className="block py-2 md:py-0 transition hover:text-[#161490]">
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/case-studies"
              className="block py-2 md:py-0 transition hover:text-[#161490]"
            >
              Case&nbsp;Studies
            </Link>
          </li>
          <li>
            <Link href="/blog" className="block py-2 md:py-0 transition hover:text-[#161490]">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/how-it-works" className="block py-2 md:py-0 transition hover:text-[#161490]">
              How&nbsp;it&nbsp;Works
            </Link>
          </li>
          <li>
            <Link href="/hire" className="block py-2 md:py-0 transition hover:text-[#161490]">
              Hire
            </Link>
          </li>
          <li className="md:hidden w-full">
            <Link
              href="/contact"
              className="block w-full text-center rounded-md bg-gradient-to-r from-[#161490] via-[#7476ED] to-[#E56F8C] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            >
              Contact&nbsp;us
            </Link>
          </li>
        </ul>

        {/* -------------------- Gradient CTA button -------------------- */}
        <Link
          href="/contact"
          className="hidden md:inline-block ml-4 rounded-md bg-gradient-to-r from-[#161490] via-[#7476ED] to-[#E56F8C] px-4 lg:px-6 py-2 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:brightness-110"
        >
          Contact&nbsp;us
        </Link>
      </nav>
    </header>
  );
}
