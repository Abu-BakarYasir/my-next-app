'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [suggestion, setSuggestion] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Close modal when clicking outside
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!suggestion.trim()) {
      setError('❌ Please enter a suggestion.');
      setMessage('');
      return;
    }

    setError('');
    setMessage('Sending...');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ suggestion }),
      });

      if (res.ok) {
        setMessage('✅ Suggestion sent successfully!');
        setSuggestion('');
      } else {
        setMessage('❌ Failed to send. Try again later.');
      }
    } catch (err) {
      setMessage('❌ Server error.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
      <div ref={modalRef} className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl">×</button>
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

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your suggestion or task..."
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7476ED]"
          />
          <textarea
            placeholder="Details / Message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7476ED]"
          ></textarea>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-600 text-sm">{message}</p>}

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
            <a href="https://www.linkedin.com/in/spiral-lab-441711373/" target="_blank" className="text-[#161490] underline">LinkedIn</a>
            <a href="https://www.upwork.com/freelancers/~01fbe526fa02c36593" target="_blank" className="text-[#E56F8C] underline">Upwork</a>
          </div>
        </div>
      </div>
    </div>
  );
}
