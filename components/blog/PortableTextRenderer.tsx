/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { PortableText } from "@portabletext/react";

export const PortableTextRenderer: React.FC<{ value: any }> = ({ value }) => {
  return (
    <PortableText
      value={value}
      components={{
        block: {
          h1: ({ children }) => <><br/><h1 className="text-3xl font-bold mt-8">{children}</h1></>,
          h2: ({ children }) => <><br/><h2 className="text-2xl font-semibold mt-6">{children}</h2></>,
          h3: ({ children }) => <><br/><h3 className="text-xl font-semibold mt-6">{children}</h3></>,
          h4: ({ children }) => <><br/><h4 className="text-lg font-semibold mt-6">{children}</h4></>,
          p: ({ children }) => <><br/><p className="mt-4">{children}</p></>,
        },
        list: {
          bullet: ({ children }) => <ul className="list-disc ml-5 mt-2">{children}</ul>,
          number: ({ children }) => <ol className="list-decimal ml-5 mt-2">{children}</ol>,
        },
        types: {
          code: ({ value }) => {
            // The 'code' type in your schema includes 'code', 'language', etc.
            // Default the language to 'javascript' if none is provided
            const { code, language = "javascript", filename } = value;

            return (
              <div className="my-6">
                {filename && (
                  <div className="bg-gray-100 px-2 py-1 text-sm text-gray-700 font-medium rounded-t-md">
                    {filename}
                  </div>
                )}
                <pre className="bg-gray-800 text-white p-4 rounded-b-md rounded-t-md overflow-auto">
                  <code className={`language-${language}`}>
                    {code}
                  </code>
                </pre>
              </div>
            );
          },
        },
      }
    }
    />
  );
};