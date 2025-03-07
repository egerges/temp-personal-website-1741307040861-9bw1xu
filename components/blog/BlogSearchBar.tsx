"use client";

import React, { useState, useEffect, useRef } from "react";

interface BlogSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  suggestions: string[];
}

export const BlogSearchBar: React.FC<BlogSearchBarProps> = ({ 
  searchQuery, 
  onSearchChange,
  suggestions 
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  return (
    <div ref={searchRef} className="my-6 max-w-2xl mx-auto relative">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        placeholder="Search blog posts..."
        aria-label="Search blog posts"
        className="w-full rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow pr-10"
      />
      {searchQuery && (
        <button
          onClick={() => {
            onSearchChange("");
            setShowSuggestions(false);
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
      
      {showSuggestions && searchQuery && filteredSuggestions.length > 0 && (
        <div className="absolute z-10 w-full bg-white mt-1 rounded-lg shadow-lg border border-gray-200">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
              onClick={() => {
                onSearchChange(suggestion);
                setShowSuggestions(false);
              }}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
