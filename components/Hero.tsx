"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Button from "@components/Button";
import { TextGeneratedEffect } from "@components/TextGeneratedEffect";
// import CustomCursor from "@components/CustomCursor";

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen px-4 md:px-8"
      aria-label="Hero Section"
    >
      {/* <CustomCursor /> */}
      {/* Beaming Gradient Effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-0"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      >
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-r from-[var(--blue-primary)] via-[var(--pink-primary)] to-[var(--blue-primary)] blur-[120px]"></div>
      </motion.div>

      {/* Glass Effect Card */}
      <div
        className="relative z-10 w-full max-w-xl p-4 md:p-10 bg-[var(--gray-light)]/[0.2] backdrop-blur-lg border border-[var(--gray-light)]/[0.5] rounded-2xl shadow-lg md:max-w-5xl lg:max-w-6xl flex flex-col md:flex-row align-middle justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue-primary)] to-[var(--pink-primary)]">
            <TextGeneratedEffect words="Hey, I'm Elio! \n I turn code into Experiences."/>
          </h1>
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-[var(--color-gray-darker)]">
            A Software Engineer exploring the realms of full-stack
            development and crafting user-focused applications with a touch of
            innovation.
          </p>
          <p className="mt-2 text-sm italic text-[var(--color-gray-dark)]">
            Fueled by curiosity, inspired by challenges, and guided by the desire
            to make technology more accessible.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              text="Work with me!"
              variant="secondary"
              link="/contact"/>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-10"
        >
          <Image src={"/hero.png"} alt={"Elio Pic"} height={1080} width={1080} className="drop-shadow-2xl"/>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
