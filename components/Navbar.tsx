"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/blog", label: "Blog" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg h-14" : "backdrop-blur-lg h-16"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        {/* Logo */}
        <Link
          href="/"
          className="text-[var(--color-gray-darker)] font-extrabold text-xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text"
          aria-label="Navigate to Home"
        >
          Elio Gerges
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[var(--color-gray-darker)] text-lg font-semibold hover:text-blue-500 transition"
              aria-label={`Navigate to ${link.label}`}
            >
              {link.label}
            </Link>
          ))}
          {/* Contact Me Button */}
          <Link
            href="/contact"
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl transition"
            aria-label="Navigate to Contact Page"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-[var(--color-gray-darker)] z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[var(--color-blue-dark)] to-[var(--color-blue-primary)] flex flex-col items-center justify-center space-y-6 text-white text-lg font-semibold md:hidden"
            aria-label="Mobile Navigation Menu"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-blue-500 transition"
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Link>
            ))}
            {/* Contact Me Button */}
            <Link
              href="/contact"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl transition"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Navigate to Contact Page"
            >
              Contact Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
