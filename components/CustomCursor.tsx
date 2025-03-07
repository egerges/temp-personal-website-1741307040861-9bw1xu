"use client";

import { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [cursorColor, setCursorColor] = useState<string>("var(--color-gray-light)");
  const [isHovering, setIsHovering] = useState(false);

  // Update cursor position and color on mouse move
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });

      const element = document.elementFromPoint(event.clientX, event.clientY) as HTMLElement;

      if (element) {
        // Check for hover-specific color via data attribute
        const hoverColor = element.getAttribute("data-cursor-color");
        if (hoverColor) {
          setCursorColor(hoverColor);
          setIsHovering(true);
        } else {
          // Default: Use background color contrast
          setCursorColor("var(--color-gray-light)");
          setIsHovering(false);
        }
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Disable cursor for touch devices
  useEffect(() => {
    if ("ontouchstart" in window) {
      setIsVisible(false);
    }
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 transition-transform ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {/* Outer Circle */}
        <div
          className={`absolute rounded-full border-2 transition-all duration-75 ${
            isHovering ? "animate-pulse scale-125" : ""
          }`}
          style={{
            width: "48px",
            height: "48px",
            borderColor: cursorColor,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        {/* Inner Circle */}
        <div
          className={`absolute rounded-full transition-all duration-75 ${
            isHovering ? "animate-scale-up" : ""
          }`}
          style={{
            width: "16px",
            height: "16px",
            backgroundColor: cursorColor,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>

      {/* Hide Default Cursor */}
      <style jsx global>{`
        body {
          cursor: none;
        }
        @keyframes scale-up {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }
        .animate-scale-up {
          animation: scale-up 0.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
