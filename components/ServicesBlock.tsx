"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    title: "Web Development",
    description: "Build responsive and modern websites that engage users and drive business growth.",
    icon: "💻",
  },
  {
    title: "E-commerce Solutions",
    description: "Create powerful online stores with secure payment systems and user-friendly interfaces.",
    icon: "🛒",
  },
  {
    title: "Custom Web Applications",
    description: "Develop tailored web applications to meet your specific business requirements.",
    icon: "⚙️",
  },
  {
    title: "UI/UX Design",
    description: "Design beautiful and intuitive user interfaces that provide excellent user experiences.",
    icon: "🎨",
  },
  {
    title: "AI Integration",
    description: "Integrate AI solutions to enhance your web applications and automate business processes.",
    icon: "🤖",
  },
]

const ServicesBlock: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const cardWidth = {
    mobile: 280,
    tablet: 301,
    desktop: 301
  }
  
  const gap = 20
  const visibleCards = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  }

  const handleDotClick = (i: number) => {
    setCurrentIndex(i)
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="bg-[#EEF6FF] font-[Inter,sans-serif] py-8 sm:py-12 lg:py-16 text-center overflow-hidden">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 lg:mb-12 leading-tight px-4">Services we offer</h2>

      <div className="relative overflow-hidden w-full px-4 sm:px-8">
        <div className="flex gap-4 sm:gap-6 lg:gap-[20px] transition-transform duration-500 ease-in-out justify-center lg:justify-start"
             style={{
               transform: `translateX(-${currentIndex * (cardWidth.mobile + 16)}px)`,
             }}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-[280px] sm:w-[301px] h-auto sm:h-[215px] p-4 sm:p-6 lg:p-[20px] bg-white rounded-[10px] shadow-[0_0_10px_rgba(0,0,0,0.05)] flex-shrink-0 transition-transform duration-300 ${
                index === currentIndex ? "border border-[#D100E0] scale-105" : ""
              }`}
            >
              <div className="text-2xl sm:text-3xl lg:text-[30px] mb-2 sm:mb-3 lg:mb-[10px]">{service.icon}</div>
              <h3 className="text-sm sm:text-base lg:text-[14px] font-semibold mb-2 sm:mb-3 lg:mb-[10px]">{service.title}</h3>
              <p className="text-xs sm:text-sm lg:text-[12px] text-[#666] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-2 h-2 sm:w-3 sm:h-3 lg:w-[10px] lg:h-[10px] rounded-full mx-1 sm:mx-2 lg:mx-[5px] border-none cursor-pointer transition-colors duration-300 ${
              currentIndex === i ? "bg-[#D100E0]" : "bg-[#ccc]"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm lg:text-[12px] text-[#666]">
        0{currentIndex + 1} — 0{services.length}
      </div>
    </div>
  )
}

export default ServicesBlock
