/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export const FeaturedPost: React.FC<{ post: any }> = ({ post }) => {
  const previewText = post.body?.find((block: any) => block._type === "block")?.children?.[0]?.text || "Click to read more.";

  return (
    <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-gradient-to-r from-gray-100 to-gray-300">
      <Link href={`/blog/${post.slug.current}`} aria-label={`Read featured post: ${post.title}`}>
        <Image
          src={urlFor(post.mainImage).width(800).height(450).url()}
          alt={post.mainImage.alt || "Featured post image"}
          className="w-full h-56 object-cover"
          width={800}
          height={450}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent p-6 flex flex-col justify-end">
          <h2 className="text-xl font-bold text-white">{post.title}</h2>
          <p className="mt-2 text-gray-300 line-clamp-2">{previewText}</p>
        </div>
      </Link>
    </div>
  );
};
