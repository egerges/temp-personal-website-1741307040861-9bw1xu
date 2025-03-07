'use client';

import React from "react";
import { motion } from 'framer-motion';

export default function Loading() {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <motion.div
          className="relative w-32 h-32"
          animate={{
            rotateZ: [0, 360],
          }}
          transition={{ 
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Core orb structure */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/80 to-cyan-400/80 backdrop-blur-xl"></div>
          
          {/* Inner glow layer */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-purple-400/40 to-cyan-300/40 blur-sm"></div>
          
          {/* Center highlight */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>
          
          {/* Outer glow effect */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-500/20 to-cyan-400/20 blur-xl"></div>
          
          {/* Glass effect overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-white/5 to-transparent backdrop-blur-sm"></div>
        </motion.div>
      </section>
    );
}