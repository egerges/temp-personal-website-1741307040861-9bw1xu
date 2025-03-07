/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

import { client } from "@/sanity/lib/client";
import { BlogCard } from "@components/blog/BlogCard";
import { FeaturedPost } from "@components/blog/FeaturedPost";
import { BlogSearchBar } from "@components/blog/BlogSearchBar";
import { GoogleAd } from "@components/blog/GoogleAd";
import { TextGeneratedEffect } from "@components/TextGeneratedEffect";
import Loader from "@/components/Loader";

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique titles and categories for suggestions
  const suggestions = Array.from(new Set([
    ...posts.map(post => post.title),
    ...posts.flatMap(post => post.categories?.map((cat: any) => cat.title) || [])
  ]));

  useEffect(() => {
    async function fetchPosts() {
      try {
        const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            mainImage,
            body,
            categories[]->{title},
            publishedAt,
            author->{name, image}
        }`;
        
        const featuredQuery = `*[_type == "post" && featured == true][0...2] {
            _id,
            title,
            slug,
            mainImage,
            body
        }`;

        const [allPosts, featured] = await Promise.all([
          client.fetch(postsQuery),
          client.fetch(featuredQuery),
        ]);

        console.log("All Posts Query Result:", allPosts);
        console.log("Featured Posts Query Result:", featured);

        setPosts(allPosts);
        setFeaturedPosts(featured);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.categories?.some((cat: any) => cat.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-extrabold text-gray-800">Insights and Stories</h1>
        <p className="mt-2 text-gray-600">
          Exploring technology, design, and innovation one post at a time.
        </p>
        <BlogSearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} suggestions={suggestions} />
        <p className="mt-10 text-gray-500">No blog posts available yet. Check back soon!</p>
      </section>
    );
  }

  const NoResultsMessage = () => (
    <div className="text-center py-10">
      <p className="text-gray-600 mb-4">
        No posts found matching &quot;{searchQuery}&quot;. Would you like to write about this topic?
      </p>
      <div className="space-y-4">
        <Link
            href="/contact"
            className="px-4 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl transition"
            aria-label="Contact Me to Contribute"
          >
            Contact Me to Contribute
          </Link>
        <p className="text-sm text-gray-500">
          Share your knowledge and expertise with our community!
        </p>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen mt-16">
      {/* Header Section */}
      <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-10 text-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue-primary)] to-[var(--pink-primary)]">
            <TextGeneratedEffect words="Insights and Stories..."/>
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-[var(--color-gray-darker)]">
          Exploring technology, design, and innovation one post at a time.
          </p>
          <BlogSearchBar 
            searchQuery={searchQuery} 
            onSearchChange={setSearchQuery}
            suggestions={suggestions}
          />
      </motion.section>

      {/* Featured Posts */}
      <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="my-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Posts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredPosts.length > 0 ? featuredPosts.map((post) => (
            <FeaturedPost key={post._id} post={post} />
          )) : (<p className="text-gray-500">No featured posts available.</p>)}
        </div>
      </motion.section>

      {/* Google Ad */}
      <GoogleAd adSlot="header-ad-slot" />

      {/* All Posts */}
      <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
           className="my-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">All Posts</h2>
        {filteredPosts.length === 0 ? (
          <NoResultsMessage />
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </motion.section>

      {/* Google Ad */}
      <GoogleAd adSlot="footer-ad-slot" />
    </section>
  );
}
