"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { BlogCard } from "./BlogCard";
import Loader from "../Loader";
import {
  ArrowLeftIcon,
  ArrowRightIcon
} from "@heroicons/react/24/solid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Post from "@/types/Post";

export const RelatedPosts: React.FC<{
  currentTags: { title: string }[];
  currentPostId: string;
}> = ({ currentTags, currentPostId }) => {
  const [relatedPosts, setRelatedPosts] = useState<Post[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRelatedPosts() {
      try {
        const query = `
          *[_type == "post" && count(categories[@->title in $categories]) > 0 && _id != $currentPostId][0...4] {
            _id,
            title,
            slug,
            mainImage,
            body,
            categories[]->{title},
            publishedAt,
            author->{name, image}
          }
        `;
        const currentTagsList = currentTags.map((tag) => tag.title);
        const posts = await client.fetch(query, {
          categories: currentTagsList,
          currentPostId,
        });
        setRelatedPosts(posts);
      } catch (error) {
        console.error("Failed to fetch related posts:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (currentTags.length > 0) {
      fetchRelatedPosts();
    } else {
      setIsLoading(false);
    }
  }, [currentTags, currentPostId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!relatedPosts.length) {
    return (
      <section className="mt-12 text-center">
        <p className="text-gray-600">No related posts found.</p>
      </section>
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    currentSlide: 0,
    slideCount: relatedPosts.length + 1,
    arrows: true,
    nextArrow: <ArrowRightIcon />,
    prevArrow: <ArrowLeftIcon />,
    autoplay: true,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="mt-12">
      <Slider {...settings}>
        {relatedPosts.map((post) => (
          <div key={post._id} className="px-2">
            <BlogCard post={post} />
          </div>
        ))}
      </Slider>
    </section>
  );
};
