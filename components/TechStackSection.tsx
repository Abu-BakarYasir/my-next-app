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
      className="w-32 h-32 lg:w-36 lg:h-36 object-contain mix-blend-multiply"
    />
    <span className="mt-4 text-base whitespace-nowrap">{name}</span>
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
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center leading-tight mb-2">
          Our
          <br />
          Tech Stack
        </h1>
        <div className="w-16 mx-auto border-t-4 border-purple-600 mb-10" />

        {/* Tabs */}
        <div className="flex justify-center mb-14 space-x-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-lg font-medium transition-colors ${
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
        <div className="flex flex-col items-center space-y-20">
          {/* first row – 5 icons */}
          <div className="grid grid-cols-5 gap-x-24 max-w-[1200px]">
            {firstRow.map((icon, i) => (
              <Icon key={i} {...icon} />
            ))}
          </div>

          {/* second row – 4 icons centred under the first row */}
          {secondRow.length > 0 && (
            <div className="grid grid-cols-4 gap-x-24 max-w-[960px]">
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
