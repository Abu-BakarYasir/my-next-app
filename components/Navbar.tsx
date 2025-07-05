// 'use client';

import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      {/* Outer wrapper keeps the bar exactly 79 px tall */}
      <nav className="mx-auto flex h-[79px] max-w-7xl items-center justify-between px-4 md:px-8">
        {/* ------------ Brand (gradient badge + word‑mark) ------------ */}
        <Link href="/" className="flex items-center gap-2">
          {/* gradient circle from the spec */}
          <span
            className="inline-block h-6 w-6 rounded-full"
            style={{
              background:
                'linear-gradient(270deg,#161490 4.55%,#7476ED 49.85%,#E56F8C 93.3%)',
            }}
          />
          {/* word‑mark – be sure the Inspiration font is loaded globally */}
          <span className="font-inspiration text-[24px] font-normal text-black">
            Ik&nbsp;developers
          </span>
        </Link>

        {/* ------------------------- Menu -------------------------- */}
        <ul className="hidden md:flex items-center gap-8 text-[16px] leading-[25px] font-medium text-gray-700">
          <li>
            <Link href="/about" className="transition hover:text-[#161490]">
              About&nbsp;us
            </Link>
          </li>
          <li>
            <Link href="/services" className="transition hover:text-[#161490]">
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/case-studies"
              className="transition hover:text-[#161490]"
            >
              Case&nbsp;Studies
            </Link>
          </li>
          <li>
            <Link href="/blog" className="transition hover:text-[#161490]">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/how-it-works" className="transition hover:text-[#161490]">
              How&nbsp;it&nbsp;Works
            </Link>
          </li>
          <li>
            <Link href="/hire" className="transition hover:text-[#161490]">
              Hire
            </Link>
          </li>
        </ul>

        {/* -------------------- Gradient CTA button -------------------- */}
        <Link
          href="/contact"
          className="ml-4 inline-block rounded-md bg-gradient-to-r from-[#161490] via-[#7476ED] to-[#E56F8C] px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
        >
          Contact&nbsp;us
        </Link>
      </nav>
    </header>
  );
}
