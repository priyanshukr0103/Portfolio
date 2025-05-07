"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  demoLink?: string;
  tags: string[];
}

export default function ProjectCard3D({
  title,
  description,
  image,
  link,
  demoLink,
  tags,
}: ProjectCardProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only access theme on the client side after mounting
  const isDark = mounted ? theme === 'dark' : false;

  // Mouse position for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for mouse movement
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  // Transform mouse position to rotation values
  const rotateX = useTransform(springY, [-0.5, 0.5], ["-5deg", "5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["5deg", "-5deg"]);

  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate normalized position (between -0.5 and 0.5)
    const xPos = (e.clientX - rect.left) / width - 0.5;
    const yPos = (e.clientY - rect.top) / height - 0.5;

    x.set(xPos);
    y.set(yPos);
  };

  // 3D particle effect in the background
  useEffect(() => {
    if (!canvasRef.current || !isHovered) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;

    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Material with custom color based on theme
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: isDark ? 0x6366f1 : 0x3b82f6,
      transparent: true,
      opacity: 0.8,
    });

    // Create points
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animation
    const animate = () => {
      const animationId = requestAnimationFrame(animate);

      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0003;

      renderer.render(scene, camera);

      return () => {
        cancelAnimationFrame(animationId);
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        renderer.dispose();
      };
    };

    const cleanup = animate();

    return cleanup;
  }, [isHovered, isDark]);

  // Return a simplified placeholder during server-side rendering
  if (!mounted) {
    return (
      <div className="relative h-full rounded-xl overflow-hidden group bg-background border border-border shadow-lg">
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          {/* Placeholder for image */}
        </div>
        <div className="flex flex-col flex-grow p-5">
          <div className="h-6 w-3/4 bg-muted rounded mb-2"></div>
          <div className="h-12 w-full bg-muted rounded mb-4"></div>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((_, index) => (
              <div key={index} className="h-5 w-16 bg-muted rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="relative h-full rounded-xl overflow-hidden group"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* 3D particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 opacity-50"
        style={{ display: isHovered ? 'block' : 'none' }}
      />

      {/* Card content */}
      <div
        suppressHydrationWarning
        className={`relative z-10 h-full flex flex-col border ${isDark ? 'border-gray-800 bg-gradient-to-br from-gray-900/90 to-gray-950/90' : 'border-gray-200 bg-gradient-to-br from-white/90 to-gray-100/90'} backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 shadow-lg`}
      >
        {/* Image */}
        <div
          className="relative h-48 w-full overflow-hidden"
          style={{
            transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
            transition: "transform 0.3s ease-out",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
          <div suppressHydrationWarning className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-gray-900 to-transparent opacity-60' : 'from-gray-500 to-transparent opacity-30'}`} />
        </div>

        {/* Content */}
        <div
          className="flex flex-col flex-grow p-5"
          style={{
            transform: isHovered ? "translateZ(30px)" : "translateZ(0px)",
            transition: "transform 0.3s ease-out",
          }}
        >
          <h3 suppressHydrationWarning className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
          <p suppressHydrationWarning className={`${isDark ? 'text-muted-foreground' : 'text-gray-700'} text-sm mb-4 flex-grow`}>{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                suppressHydrationWarning
                className={`inline-flex items-center rounded-full ${isDark ? 'bg-muted text-muted-foreground' : 'bg-gray-100 text-gray-800'} px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${isDark ? 'ring-gray-500/10' : 'ring-gray-300'} hover:bg-muted/80 transition-colors`}
                style={{
                  transform: isHovered ? "translateZ(40px)" : "translateZ(0px)",
                  transition: `transform 0.3s ease-out ${index * 0.05}s`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div
            className="flex gap-3 mt-auto"
            style={{
              transform: isHovered ? "translateZ(40px)" : "translateZ(0px)",
              transition: "transform 0.3s ease-out",
            }}
          >
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium hover:underline text-primary"
            >
              <IconBrandGithub size={18} />
              <span>Code</span>
            </Link>

            {demoLink && (
              <Link
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline text-primary"
              >
                <IconExternalLink size={18} />
                <span>Live Demo</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
