"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

type Model3DIconProps = {
  type: 'cube' | 'sphere' | 'torus' | 'cone' | 'cylinder' | 'octahedron';
  color?: string;
  size?: number;
  className?: string;
  hoverEffect?: boolean;
};

export default function Model3DIcon({
  type = 'cube',
  color = 'primary',
  size = 60,
  className = '',
  hoverEffect = true
}: Model3DIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Color mapping
  const colorMap: Record<string, { main: string, light: string }> = {
    primary: {
      main: isDark ? '#3b82f6' : '#2563eb',
      light: isDark ? '#60a5fa' : '#93c5fd'
    },
    blue: {
      main: isDark ? '#3b82f6' : '#2563eb',
      light: isDark ? '#60a5fa' : '#93c5fd'
    },
    green: {
      main: isDark ? '#10b981' : '#059669',
      light: isDark ? '#34d399' : '#6ee7b7'
    },
    purple: {
      main: isDark ? '#8b5cf6' : '#7c3aed',
      light: isDark ? '#a78bfa' : '#c4b5fd'
    },
    orange: {
      main: isDark ? '#f97316' : '#ea580c',
      light: isDark ? '#fb923c' : '#fdba74'
    },
    red: {
      main: isDark ? '#ef4444' : '#dc2626',
      light: isDark ? '#f87171' : '#fca5a5'
    },
    pink: {
      main: isDark ? '#ec4899' : '#db2777',
      light: isDark ? '#f472b6' : '#f9a8d4'
    },
    yellow: {
      main: isDark ? '#eab308' : '#ca8a04',
      light: isDark ? '#facc15' : '#fde047'
    },
    indigo: {
      main: isDark ? '#6366f1' : '#4f46e5',
      light: isDark ? '#818cf8' : '#a5b4fc'
    },
    teal: {
      main: isDark ? '#14b8a6' : '#0d9488',
      light: isDark ? '#2dd4bf' : '#5eead4'
    },
  };

  const colorStyle = colorMap[color] || colorMap.primary;

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    
    // Create geometry based on type
    let geometry;
    switch (type) {
      case 'sphere':
        geometry = new THREE.SphereGeometry(1.5, 32, 32);
        break;
      case 'torus':
        geometry = new THREE.TorusGeometry(1, 0.4, 16, 32);
        break;
      case 'cone':
        geometry = new THREE.ConeGeometry(1.2, 2, 32);
        break;
      case 'cylinder':
        geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
        break;
      case 'octahedron':
        geometry = new THREE.OctahedronGeometry(1.5);
        break;
      case 'cube':
      default:
        geometry = new THREE.BoxGeometry(1.8, 1.8, 1.8);
        break;
    }
    
    // Create materials
    const mainColor = new THREE.Color(colorStyle.main);
    const lightColor = new THREE.Color(colorStyle.light);
    
    // Main material
    const material = new THREE.MeshPhongMaterial({
      color: mainColor,
      shininess: 100,
      specular: lightColor,
      flatShading: true,
    });
    
    // Create mesh
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    // Animation loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [type, size, colorStyle.main, colorStyle.light]);
  
  return (
    <motion.div
      ref={containerRef}
      className={`relative rounded-full p-2 ${className}`}
      whileHover={hoverEffect ? { scale: 1.1, rotate: 5 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    />
  );
}
