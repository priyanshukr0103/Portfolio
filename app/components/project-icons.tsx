"use client";

import { ShoppingCart, LineChart, Sprout, Contact, Code, Mail } from "lucide-react";

// Simplified interface with more icon options
interface ProjectIconProps {
  icon: "amazer" | "fintrack" | "sustainable" | "contact" | "projects" | "email";
  className?: string;
  size?: number;
}

export function ProjectIcon({ icon, className = "", size = 12 }: ProjectIconProps) {
  // Simple function to render the appropriate icon with its styling
  const renderIcon = () => {
    const iconSize = `h-${size} w-${size}`;

    switch (icon) {
      case "amazer":
        return (
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-950 dark:to-orange-900 p-6 rounded-full">
            <ShoppingCart className={`${iconSize} text-orange-500 dark:text-orange-300`} />
          </div>
        );
      case "fintrack":
        return (
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900 p-6 rounded-full">
            <LineChart className={`${iconSize} text-blue-500 dark:text-blue-300`} />
          </div>
        );
      case "sustainable":
        return (
          <div className="bg-gradient-to-br from-green-100 to-green-50 dark:from-green-950 dark:to-green-900 p-6 rounded-full">
            <Sprout className={`${iconSize} text-green-500 dark:text-green-300`} />
          </div>
        );
      case "contact":
        return (
          <div className="bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-950 dark:to-purple-900 p-6 rounded-full">
            <Mail className={`${iconSize} text-purple-500 dark:text-purple-300`} />
          </div>
        );
      case "projects":
        return (
          <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-950 dark:to-indigo-900 p-6 rounded-full">
            <Code className={`${iconSize} text-indigo-500 dark:text-indigo-300`} />
          </div>
        );
      case "email":
        return (
          <div className="bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-950 dark:to-pink-900 p-6 rounded-full">
            <Mail className={`${iconSize} text-pink-500 dark:text-pink-300`} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`flex items-center justify-center hover:scale-105 transition-transform ${className}`}>
      {renderIcon()}
    </div>
  );
}
