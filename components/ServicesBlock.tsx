'use client';
import React, { useState } from 'react';

const services = [
  {
    title: 'Mobile App Development',
    description:
      'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    icon: '📱',
  },
  {
    title: 'Web Design & Development',
    description:
      'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    icon: '💻',
  },
  {
    title: 'Software Testing Service',
    description:
      'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    icon: '🧪',
  },
  {
    title: 'Software Testing',
    description:
      'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    icon: '🔧',
  },
  {
    title: 'Cloud Integration',
    description:
      'Seamlessly integrate your applications with cloud services for better scalability and performance.',
    icon: '☁️',
  },
  {
    title: 'UI/UX Design',
    description:
      'Create intuitive and delightful user experiences with our design-first approach to product development.',
    icon: '🎨',
  },
  {
    title: 'Digital Marketing',
    description:
      'Boost your business online with our strategic digital marketing and SEO services.',
    icon: '📈',
  },
];

const ServicesBlock: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(3); // center on 4th item initially

  const cardWidth = 301;
  const gap = 20;
  const totalCardWidth = cardWidth + gap;
  const visibleCards = 3;
  const containerVisibleWidth = totalCardWidth * visibleCards - gap;

  const translateX = `calc(${containerVisibleWidth / 2}px - ${
    cardWidth / 2 + currentIndex * totalCardWidth
  }px)`;

  return (
    <div className="bg-[#E7DAED] font-[Inter,sans-serif] py-[40px] text-center">
      <h2 className="text-[24px] font-bold mb-[30px] leading-[55px]">Services we offer</h2>

      <div
        className="overflow-hidden mx-auto"
        style={{ width: `${containerVisibleWidth}px` }}
      >
        <div
          className="flex transition-transform ease-in-out duration-500 gap-[20px]"
          style={{
            transform: `translateX(${translateX})`,
            width: `${services.length * totalCardWidth}px`,
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-[301px] h-[215px] p-[20px] bg-white rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.05)] flex-shrink-0 transition-transform duration-300 ${
                index === currentIndex
                  ? 'border border-[#D100E0] translate-y-2'
                  : ''
              }`}
            >
              <div className="text-[30px] mb-[10px]">{service.icon}</div>
              <h3 className="text-[14px] font-semibold">{service.title}</h3>
              <p className="text-[12px] mt-[10px] text-[#666]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="mt-[20px] flex justify-center">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-[10px] h-[10px] rounded-full mx-[5px] border-none cursor-pointer ${
              i === currentIndex ? 'bg-[#D100E0]' : 'bg-[#ccc]'
            }`}
          />
        ))}
      </div>

      {/* Slide Count */}
      <div className="mt-[10px] text-[12px] text-[#666]">
        0{currentIndex + 1} — 07
      </div>
    </div>
  );
};

export default ServicesBlock;
