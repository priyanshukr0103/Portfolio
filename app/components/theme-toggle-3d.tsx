"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle3D() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative overflow-hidden rounded-full p-2 ${
        isDark
          ? "bg-gradient-to-br from-indigo-500/20 to-purple-500/5 shadow-lg shadow-indigo-500/20"
          : "bg-gradient-to-br from-amber-500/20 to-yellow-500/5 shadow-lg shadow-amber-500/20"
      }`}
      aria-label="Toggle theme"
    >
      <div className="relative z-10">
        {isDark ? (
          <Moon className="h-6 w-6 text-indigo-400" />
        ) : (
          <Sun className="h-6 w-6 text-amber-400" />
        )}
      </div>

      {/* Animated background */}
      <motion.div
        className={`absolute inset-0 ${
          isDark ? "bg-indigo-950" : "bg-amber-50"
        }`}
        initial={false}
        animate={{
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Stars/rays effect */}
      {isDark ? (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white"
              initial={false}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
              }}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
            />
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-6 w-0.5 bg-amber-200 origin-bottom"
              style={{
                left: "50%",
                bottom: "50%",
                transform: `rotate(${i * 45}deg)`,
                transformOrigin: "bottom center",
              }}
              initial={false}
              animate={{
                height: ["24%", "30%", "24%"],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.button>
  );
}
