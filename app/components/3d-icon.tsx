"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconMail,
  IconFileText,
  IconCode,
  IconMoon,
  IconSun,
  IconPalette,
  IconSparkles,
  IconExternalLink
} from '@tabler/icons-react';

type Icon3DProps = {
  icon: string;
  color?: string;
  size?: number;
  hoverEffect?: boolean;
  className?: string;
};

export default function Icon3D({
  icon,
  color = "primary",
  size = 24,
  hoverEffect = true,
  className = ""
}: Icon3DProps) {
  // Color mapping
  const colorMap: Record<string, { bg: string, shadow: string, icon: string }> = {
    primary: {
      bg: "bg-gradient-to-br from-primary/20 to-primary/5",
      shadow: "shadow-primary/20",
      icon: "text-primary"
    },
    blue: {
      bg: "bg-gradient-to-br from-blue-500/20 to-blue-600/5",
      shadow: "shadow-blue-500/20",
      icon: "text-blue-500"
    },
    green: {
      bg: "bg-gradient-to-br from-green-500/20 to-green-600/5",
      shadow: "shadow-green-500/20",
      icon: "text-green-500"
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-500/20 to-purple-600/5",
      shadow: "shadow-purple-500/20",
      icon: "text-purple-500"
    },
    orange: {
      bg: "bg-gradient-to-br from-orange-500/20 to-orange-600/5",
      shadow: "shadow-orange-500/20",
      icon: "text-orange-500"
    },
    red: {
      bg: "bg-gradient-to-br from-red-500/20 to-red-600/5",
      shadow: "shadow-red-500/20",
      icon: "text-red-500"
    },
    pink: {
      bg: "bg-gradient-to-br from-pink-500/20 to-pink-600/5",
      shadow: "shadow-pink-500/20",
      icon: "text-pink-500"
    },
    yellow: {
      bg: "bg-gradient-to-br from-yellow-500/20 to-yellow-600/5",
      shadow: "shadow-yellow-500/20",
      icon: "text-yellow-500"
    },
    indigo: {
      bg: "bg-gradient-to-br from-indigo-500/20 to-indigo-600/5",
      shadow: "shadow-indigo-500/20",
      icon: "text-indigo-500"
    },
    teal: {
      bg: "bg-gradient-to-br from-teal-500/20 to-teal-600/5",
      shadow: "shadow-teal-500/20",
      icon: "text-teal-500"
    },
  };

  const colorStyle = colorMap[color] || colorMap.primary;

  // Icon mapping
  const renderIcon = () => {
    switch (icon) {
      case 'home':
        return <IconHome size={size} />;
      case 'user':
        return <IconUser size={size} />;
      case 'projects':
        return <IconBriefcase size={size} />;
      case 'contact':
        return <IconMail size={size} />;
      case 'resume':
        return <IconFileText size={size} />;
      case 'code':
        return <IconCode size={size} />;
      case 'github':
        return <IconExternalLink size={size} />;
      case 'linkedin':
        return <IconExternalLink size={size} />;
      case 'twitter':
        return <IconExternalLink size={size} />;
      case 'moon':
        return <IconMoon size={size} />;
      case 'sun':
        return <IconSun size={size} />;
      case 'theme':
        return <IconPalette size={size} />;
      case 'sparkles':
        return <IconSparkles size={size} />;
      default:
        return <IconCode size={size} />;
    }
  };

  return (
    <motion.div
      className={`relative rounded-full p-3 ${colorStyle.bg} ${colorStyle.shadow} ${className}`}
      whileHover={hoverEffect ? { scale: 1.1, rotate: 5 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className={`${colorStyle.icon}`}>
        {renderIcon()}
      </div>
    </motion.div>
  );
}
