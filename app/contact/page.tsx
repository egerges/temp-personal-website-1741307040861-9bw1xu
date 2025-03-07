"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon
} from "@heroicons/react/24/solid";

// import { ContactForm } from "@components/ContactForm";
import { TextGeneratedEffect } from "@components/TextGeneratedEffect";
import Link from "next/link";
import Loader from "@/components/Loader";

export default function ContactPage() {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    if (!calendlyRef.current) return;
    const observer = new MutationObserver(() => {
      if (calendlyRef.current && calendlyRef.current.innerHTML.trim() !== "") {
        setIsCalendlyLoaded(true);
        observer.disconnect();
      }
    });
    observer.observe(calendlyRef.current, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen mt-16">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-12 px-5 md:px-0 text-center"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--blue-primary)] to-[var(--pink-primary)]">
          <TextGeneratedEffect words="Contact Me!" />
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-[var(--color-gray-darker)]">
          Have a question or want to work together? Book a coffee chat and let&apos;s discuss.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center text-gray-500 text-sm m-6">
          {!isCalendlyLoaded &&
            <div>
              <Loader />
              <br />
              Loading Calendly... (Click the link below if calender does not appear!)
            </div>}
          <br />
          <Link href="https://calendly.com/elio-gerges2000/30min" target="_blank" className="text-[var(--blue-primary)] text-lg">
            <span className="flex items-center justify-center gap-4">
              Book with Calendly <ArrowTopRightOnSquareIcon className="w-5 h-5 text-blue-500"/>
            </span>
          </Link>
        </div>

        {/* Calendly inline widget */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/elio-gerges2000/30min"
          style={{ minWidth: "320px", height: "700px" }}
          ref={calendlyRef}
        />
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />

        {/* <div className="text-center text-gray-500 text-sm m-6">
          OR
        </div>
        <ContactForm /> */}
      </motion.section>
    </main>
  );
}
