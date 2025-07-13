"use client"
import React, { useEffect, useRef, useState, useLayoutEffect } from "react"

const services = [
  {
    title: "Mobile App Development",
    description:
      "Create stunning mobile applications for iOS and Android platforms with cutting-edge technology.",
    icon: "📱",
  },
  {
    title: "Web Design & Development",
    description:
      "Build responsive and modern websites that engage users and drive business growth.",
    icon: "💻",
  },
  {
    title: "Software Testing Service",
    description:
      "Comprehensive testing solutions to ensure your software is bug-free and performs optimally.",
    icon: "🧪",
  },
  {
   title: "AI-Powered Testing",
description: "Smart, automated software testing solutions for high-performance and reliable delivery.",
icon: "🤖",
  },
  {
   title: "AI Automation",
description: "Streamline your workflows with intelligent automation powered by AI technology.",
icon: "⚙️",
  },
]

const cardWidth = 301
const gap = 20
const totalCardWidth = cardWidth + gap
const visibleCards = 3

const ServicesBlock: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(services.length)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const [autoScroll, setAutoScroll] = useState(true)
  const [wrapperWidth, setWrapperWidth] = useState(0)

  const wrapperRef = useRef<HTMLDivElement>(null)

  const extendedServices = [
    ...services.slice(-visibleCards),
    ...services,
    ...services.slice(0, visibleCards),
  ]

  const handleDotClick = (i: number) => {
    setAutoScroll(false)
    setCurrentIndex(i + services.length)
  }

  const handleCardClick = () => {
    setAutoScroll(false)
  }

  const handleTransitionEnd = () => {
    if (currentIndex >= services.length * 2) {
      setTransitionEnabled(false)
      setCurrentIndex(services.length)
    } else if (currentIndex < services.length) {
      setTransitionEnabled(false)
      setCurrentIndex(services.length + services.length - 1)
    }
  }

  useEffect(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => {
        setTransitionEnabled(true)
      }, 20)
      return () => clearTimeout(timer)
    }
  }, [transitionEnabled])

  useEffect(() => {
    if (!autoScroll) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 2500)
    return () => clearInterval(interval)
  }, [autoScroll])

  useLayoutEffect(() => {
    if (wrapperRef.current) {
      setWrapperWidth(wrapperRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (wrapperRef.current) {
        setWrapperWidth(wrapperRef.current.offsetWidth)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const translateX =
    wrapperWidth / 2 - (cardWidth / 2 + currentIndex * totalCardWidth)

  return (
    <div className="bg-gray-50 font-[Inter,sans-serif] py-[40px] text-center overflow-hidden">
      <h2 className="text-[20px] font-bold mb-[30px] leading-[55px]">Services we offer</h2>

      <div className="relative overflow-hidden w-full max-w-[963px] mx-auto">
        <div
          ref={wrapperRef}
          className="flex gap-[20px]"
          style={{
            transform: `translateX(${translateX}px)`,
            width: `${extendedServices.length * totalCardWidth}px`,
            transition: transitionEnabled ? "transform 0.5s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedServices.map((service, index) => (
            <div
              key={index}
              onClick={handleCardClick}
              className="p-[2px] bg-gradient-to-r from-[#e56f8c] to-[#D100E0] rounded-[12px] w-[301px] h-[215px] flex-shrink-0"
            >
              <div className="w-full h-full bg-white rounded-[10px] p-[20px] shadow-[0_0_10px_rgba(0,0,0,0.05)] transition-transform duration-300">
                <div className="text-[30px] mb-[10px]">{service.icon}</div>
                <h3 className="text-[14px] font-semibold mb-[10px]">{service.title}</h3>
                <p className="text-[12px] text-[#666] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[20px] flex justify-center">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-[10px] h-[10px] rounded-full mx-[5px] border-none cursor-pointer transition-colors duration-300 ${
              currentIndex % services.length === i ? "bg-[#D100E0]" : "bg-[#ccc]"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="mt-[10px] text-[12px] text-[#666]">
        0{(currentIndex % services.length) + 1} — 0{services.length}
      </div>
    </div>
  )
}

export default ServicesBlock
