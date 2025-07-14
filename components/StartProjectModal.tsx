'use client';

import React, { useEffect, useRef } from 'react';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StartProjectModal({ isOpen, onClose }: StartProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      project_type: formData.get('project_type'),
      budget: formData.get('budget'),
      message: formData.get('message'),
    };

    if (!data.name || !data.email || !data.message) {
      alert('Please fill in your name, email, and message.');
      return;
    }

    try {
      const res = await fetch('/api/start-project', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await res.json();

      if (res.ok) {
        alert('✅ Your project inquiry was sent!');
        form.reset();
        onClose();
      } else {
        alert('❌ ' + (result.error || 'Failed to send email.'));
      }
    } catch (err) {
      alert('❌ Error sending request. Try again later.');
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-md">
      <div
        ref={modalRef}
        className="bg-white rounded-xl p-6 w-[90%] max-w-xl shadow-xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-4 text-[#161490]">Start Your Project</h2>
        <p className="text-sm text-gray-600 mb-3">
          Fill out the form below and we’ll get in touch with you as soon as possible.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7476ED]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7476ED]"
          />
          <input
            type="text"
            name="company"
            placeholder="Company (Optional)"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7476ED]"
          />

          <select
            name="project_type"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7476ED]"
          >
            <option value="">Select Project Type</option>
            <option value="web_app">Web Application</option>
            <option value="ai_solution">AI-Powered Solution</option>
            <option value="ecommerce">eCommerce Platform</option>
            <option value="other">Other</option>
          </select>

          <select
            name="budget"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7476ED]"
          >
            <option value="">Estimated Budget (Optional)</option>
            <option value="under_1k">Under $1,000</option>
            <option value="1k_5k">$1,000 – $5,000</option>
            <option value="5k_10k">$5,000 – $10,000</option>
            <option value="10k_plus">$10,000+</option>
          </select>

          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us about your project..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7476ED]"
          ></textarea>

          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-r from-[#161490] via-[#7476ED] to-[#E56F8C] px-4 py-2 text-white font-semibold hover:brightness-110"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
