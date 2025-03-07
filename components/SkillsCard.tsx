"use client";

import React, { useState } from "react";
import Image from "next/image";
import Tooltip from "./Tooltip";

export const SkillsCard: React.FC<{
  title: string;
  images: { src: string; alt: string }[];
}> = ({ title, images }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className="flex flex-col items-center gap-4 bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-6 shadow-lg min-h-full"
      aria-labelledby={`skills-card-${title}`}
    >
      <h3 id={`skills-card-${title}`} className="text-lg font-semibold">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-6 relative">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            role="button"
            aria-label={image.alt}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={50}
              height={50}
              className="transition-transform transform hover:scale-110"
            />
            <Tooltip
              content={image.alt}
              isVisible={hoveredIndex === index}
              position="top"
              className="z-50"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
