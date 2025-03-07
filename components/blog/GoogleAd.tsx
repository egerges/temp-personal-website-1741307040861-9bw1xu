/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";

export const GoogleAd: React.FC<{ adSlot: string }> = ({ adSlot }) => {
  return (
    <div
      className="my-4 mx-auto max-w-screen-lg"
      role="complementary"
      aria-label="Advertisement"
    >
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1039385271790053"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-1039385271790053"
        data-ad-slot="8230692897"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
        }}
      />
    </div>
  );
};
