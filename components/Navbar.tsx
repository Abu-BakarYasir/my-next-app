'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={30}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li><Link href="/about" className="hover:text-blue-600">About us</Link></li>
          <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>

        {/* Button */}
        <div className="ml-auto md:ml-0">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-sm font-semibold shadow-md transition"
          >
            Contact us
          </Link>
        </div>
      </nav>
    </header>
  );
}
