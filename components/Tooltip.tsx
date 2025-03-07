"use client";

import React from "react";
import { motion } from "framer-motion";

interface TooltipProps {
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  isVisible: boolean;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = "top",
  isVisible,
  className = "",
}) => {
  if (!isVisible) return null;

  const positionClasses = {
    top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
    left: "right-full mr-2 top-1/2 transform -translate-y-1/2",
    right: "left-full ml-2 top-1/2 transform -translate-y-1/2",
  };

  return (
    <motion.div
      className={`absolute bg-gradient-to-r from-gray-700 to-gray-900 text-gray-100 text-sm font-medium rounded-md shadow-lg px-3 py-1 ${positionClasses[position]} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      role="tooltip"
    >
      {content}
    </motion.div>
  );
};

export default Tooltip;
