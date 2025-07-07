"use client";

import React, { useState } from "react";
import techStackData from "../public/assets/tech-stack.json";

/* ─────────────  Icon component ───────────── */
const Icon = ({ image, name }: { image: string; name: string }) => (
  <div className="flex flex-col items-center select-none">
    {/* • w‑32 h‑32 → bigger icons
       • lg:w‑36 h‑36 → a touch larger on ≥ 1024 px
       • mix-blend-multiply hides white backgrounds on coloured sections  */}
    <img
      src={image}
      alt={name}
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-contain mix-blend-multiply"
    />
    <span className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm lg:text-base whitespace-nowrap text-center">{name}</span>
  </div>
);

/* ─────────────  Section ───────────── */
const TechStackSection: React.FC = () => {
  const categories = [
    "Backend",
    "Frontend",
    "Databases",
    "CMS",
    "CloudTesting",
    "DevOps",
  ];
  const [activeCategory, setActiveCategory] = useState("Backend");

  // icons for the selected tab (empty array if none found)
  const icons =
    techStackData.find((c) => c.category === activeCategory)?.icons ?? [];

  // split into two rows: 5 (top) + 4 (bottom)
  const firstRow = icons.slice(0, 5);
  const secondRow = icons.slice(5, 9);

  return (
    <section className="bg-gray-50 px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center leading-tight mb-2 sm:mb-3 lg:mb-4">
          Our
          <br />
          Tech Stack
        </h1>
        <div className="w-12 sm:w-16 mx-auto border-t-2 sm:border-t-4 border-purple-600 mb-6 sm:mb-8 lg:mb-10" />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-10 lg:mb-14 gap-4 sm:gap-6 lg:gap-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm sm:text-base lg:text-lg font-medium transition-colors px-2 py-1 ${
                activeCategory === cat
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Icons */}
        <div className="flex flex-col items-center space-y-8 sm:space-y-12 lg:space-y-20">
          {/* first row – 5 icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 w-full max-w-[1200px]">
            {firstRow.map((icon, i) => (
              <Icon key={i} {...icon} />
            ))}
          </div>

          {/* second row – 4 icons centred under the first row */}
          {secondRow.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 w-full max-w-[960px]">
              {secondRow.map((icon, i) => (
                <Icon key={i} {...icon} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
