/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import React from "react";
import Image from "next/image";

export const LargeWobbleCardWithNoise: React.FC<{
  title: string;
  content: string;
  image: string;
  cta?: string;
}> = ({ title, content, image, cta }) => {
  return (
    <div className="flex flex-col justify-start md:justify-center items-start space-y-4 h-[300%] md:h-[100%]">
      <div className="space-y-4 w-[100%] md:w-[50%] text-wrap">
        <h2 className="text-left text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            {title}
        </h2>
        <p className="text-left text-lg text-neutral-200 max-w-lg">{content}</p>
        {/* {cta && (
            <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-transform">
            {cta}
            </button>
        )} */}
      </div>
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="absolute -right-6 -bottom-36 object-contain rounded-lg hidden md:block"
      />
    </div>
  );
};
