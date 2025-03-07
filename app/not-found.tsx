"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen text-gray-800"
      aria-labelledby="error-heading"
    >
      <motion.h1
        id="error-heading"
        className="text-9xl font-extrabold text-gray-900"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-700 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>
      <motion.div
        className="mt-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          href="/"
          className="px-6 py-3 text-white bg-blue-600 rounded shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
          aria-label="Return to homepage"
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
  );
}
