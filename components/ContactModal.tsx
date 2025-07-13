'use client';

import React, { useEffect, useRef } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close if clicked outside the modal box
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">

      <div ref={modalRef} className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4 text-[#161490]">Get in Touch</h2>

        <p className="text-sm text-gray-600 mb-3">
          Email us at:{' '}
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=spirallab.official@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#7476ED] underline"
>
  spirallab.official@gmail.com
</a>
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your suggestion or task..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7476ED]"
          />
          <textarea
            placeholder="Details / Message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7476ED]"
          ></textarea>
          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-r from-[#161490] via-[#7476ED] to-[#E56F8C] px-4 py-2 text-white font-semibold hover:brightness-110"
          >
            Submit
          </button>
        </form>

        <div className="mt-4 text-sm text-center">
          <p>Connect with us:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/spiral-lab-441711373/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#161490] underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01fbe526fa02c36593"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E56F8C] underline"
            >
              Upwork
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
