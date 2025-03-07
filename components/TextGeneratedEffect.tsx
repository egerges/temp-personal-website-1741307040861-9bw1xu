"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

import { cn } from "@/lib/utils";

export const TextGeneratedEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      },
    );
  }, [animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return word.includes("\\n") ? <br key={`br-${word + idx}`}/> : (
            <motion.span
              key={word + idx}
              className="bg-clip-text bg-gradient-to-br from-[var(--color-blue-primary)] to-[var(--color-pink-primary)] opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="bg-gradient-to-br from-[var(--color-blue-primary)] to-[var(--color-pink-primary)] py-4 bg-clip-text text-4xl tracking-tight text-transparent md:text-7xl">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};