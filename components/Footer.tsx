"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
  BuildingOfficeIcon
} from "@heroicons/react/24/solid";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: "./blog", label: "Blog" },
  ];

  return (
    <footer
      className="relative bg-gradient-to-b from-gray-50/60 to-gray-200/80 dark:from-gray-800/60 dark:to-gray-900/80 backdrop-blur-lg"
      aria-labelledby="footer-heading"
    >
      {/* Gradient Separator */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          {/* Navigation Links */}
          <div>
            <h3 id="footer-heading" className="text-lg font-bold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={`/${link.href}`}
                    className="hover:text-blue-500 transition"
                    aria-label={`Navigate to ${link} page`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5 text-blue-500" />
                <a
                  href="mailto:info@eliogerges.com"
                  className="hover:text-blue-500 transition"
                  aria-label="Email Elio Gerges"
                >
                  info@eliogerges.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-blue-500" />
                <p aria-label="Location information">Los Angeles, California, USA</p>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              {[
                {
                  href: "https://www.linkedin.com/in/elio-gerges",
                  label: "LinkedIn",
                  icon: <GlobeAltIcon className="w-6 h-6" />,
                },
                {
                  href: "https://github.com/egerges",
                  label: "GitHub",
                  icon: <BuildingOfficeIcon className="w-6 h-6" />,
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 hover:text-blue-500 dark:hover:text-blue-300 transition"
                  aria-label={`Follow on ${social.label}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Legal Section */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 italic text-gray-600 dark:text-gray-300">
            Let’s create something amazing together!
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            aria-label="Contact Elio Gerges"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Footer Legal Info */}
        <motion.div
          className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p>© {currentYear} Elio Gerges. All Rights Reserved.</p>
          <p className="mt-2">
            By using this website, you agree to the{" "}
            <Link
              href="/privacy"
              className="underline hover:text-blue-500"
              aria-label="Navigate to Privacy Policy"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              className="underline hover:text-blue-500"
              aria-label="Navigate to Terms of Service"
            >
              Terms and Conditions
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
