"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Post from "@/types/Post";

export const BlogCard: React.FC<{ post: Post }> = ({ post }) => {
  console.log("Post data: ", post);
  // Safely access the content of the body
  const bodyText = post.body?.[0]?.children?.[0]?.text || "No content available.";

  // Mock star rating (you can pull from post if your data contains rating)
  const mockRating = 5;

  // If you have an author object with name + image, you can show an avatar
  // Otherwise, fallback to your brand or a default avatar
  const authorName = post.author?.name || "Unknown Author";

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow p-4">
      {/* Top row: Author avatar + info + timestamp */}
      <div className="flex items-center gap-2 mb-2">
        {/* Author avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden">
          {post.author?.image ? (
            <Image
              src={urlFor(post.author.image).width(40).height(40).url()}
              alt={authorName}
              width={40}
              height={40}
              className="object-cover"
            />
          ) : (
            <div className="bg-gray-300 w-full h-full flex items-center justify-center text-white text-sm">
              ?
            </div>
          )}
        </div>
        {/* Author name and "Posted X hours ago" - mock or from data */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{authorName}</span>
          <span className="text-xs text-gray-400">
            {/* Format publishedAt as "3 hours ago" or similar using dayjs/time libs */}
            {new Date(post.publishedAt).toLocaleDateString()}
          </span>
        </div>
        {/* Optionally place an icon or brand logo to the right if needed */}
      </div>

      {/* Star rating */}
      <div className="flex items-center mb-2">
        {[...Array(mockRating)].map((_, i) => (
          <svg
            key={i}
            className="h-4 w-4 text-yellow-400 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.166 3.6a1 1 0 00.95.69h3.801c.969 0 1.372 1.24.588 1.81l-3.073 2.228a1 1 0 00-.364 1.118l1.166 3.6c.3.92-.755 1.688-1.54 1.118L10 14.347l-3.073 2.228c-.784.57-1.838-.198-1.539-1.118l1.166-3.6a1 1 0 00-.364-1.118L3.117 9.027c-.784-.57-.38-1.81.589-1.81h3.8a1 1 0 00.951-.69l1.166-3.6z" />
          </svg>
        ))}
      </div>

      {/* Text snippet */}
      <p className="text-sm text-gray-700 line-clamp-1 mb-2">
        {bodyText}
      </p>

      {/* "Read more" link */}
      <div className="mb-4">
        <Link
          href={`/blog/${post.slug.current}`}
          aria-label={`Read more about ${post.title}`}
          className="text-blue-500 text-sm font-semibold hover:underline"
        >
          Read more
        </Link>
      </div>

      {/* Image */}
      <div key={post.mainImage.alt} className="relative overflow-hidden">
        <Image
          src={urlFor(post.mainImage).width(350).height(150).url()}
          alt={post.mainImage.alt}
          width={350}
          height={150}
          className="object-cover"
        />
      </div>
    </div>
  );
};
