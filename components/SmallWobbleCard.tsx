/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import React from "react";

export const SmallWobbleCard: React.FC<{
  title: string;
  content: string;
  cta?: string;
}> = ({ title, content, cta }) => {
  return (
    <div className="flex flex-col justify-center items-start space-y-10">
      <h2 className="text-left text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <p className="text-left text-base text-neutral-200 max-w-md">{content}</p>
      {/* {cta && (
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform">
          {cta}
        </button>
      )} */}
    </div>
  );
};
