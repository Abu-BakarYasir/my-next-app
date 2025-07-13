'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between h-[79px] px-4 sm:px-6 lg:px-24 w-full">

        {/* Left: Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
           <div className="inline-block h-10 w-10 sm:h-10 sm:w-10 rounded-full overflow-hidden">
  <img
    src="/logopiral.png"
    alt="Spiral Labs Logo"
    className="h-full w-full object-cover"
  />
</div>

            <span className="font-inspiration text-lg sm:text-xl lg:text-[24px] font-normal text-black">
              Spiral&nbsp;Labs
            </span>
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-6 lg:gap-8 text-sm sm:text-base lg:text-[16px] font-medium text-gray-700">
            {[
              { label: 'About us', id: 'about-us' },
              { label: 'Services', id: 'services' },
              { label: 'Case Studies', id: 'case-studies' },
              { label: 'Testimonials', id: 'testimonials' },
              { label: 'How it Works', id: 'how-it-works' },
              { label: 'Hire', id: 'hire' },
            ].map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="transition hover:text-[#161490] cursor-pointer"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: CTA and Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="hidden md:inline-block rounded-md bg-gradient-to-r from-[#161490] via-[#7476ED] to-[#E56F8C] px-4 lg:px-6 py-2 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:brightness-110"
          >
            Contact&nbsp;us
          </button>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-700 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-gray-700 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:hidden absolute top-[79px] left-0 w-full bg-white shadow-lg flex-col items-start gap-4 p-4 text-sm sm:text-base font-medium text-gray-700 z-50`}
      >
        {[
          { label: 'About us', id: 'about-us' },
          { label: 'Services', id: 'services' },
          { label: 'Case Studies', id: 'case-studies' },
          { label: 'Testimonials', id: 'testimonials' },
          { label: 'How it Works', id: 'how-it-works' },
          { label: 'Hire', id: 'hire' },
        ].map(({ label, id }) => (
          <li key={id} className="w-full">
            <button
              onClick={() => scrollToSection(id)}
              className="block w-full text-left py-2 transition hover:text-[#161490]"
            >
              {label}
            </button>
          </li>
        ))}

        <li className="w-full">
          <button
            onClick={() => {
              setShowModal(true);
              setIsMenuOpen(false);
            }}
            className="block w-full text-center rounded-md bg-gradient-to-r from-[#161490] via-[#7476ED] to-[#E56F8C] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
          >
            Contact&nbsp;us
          </button>
        </li>
      </ul>

      {/* Modal */}
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
}
