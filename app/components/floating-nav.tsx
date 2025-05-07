"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { ThemeToggle3D } from './theme-toggle-3d';
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconMail,
  IconMenu2,
  IconX,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconFileText
} from '@tabler/icons-react';

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for nav transparency
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = ['home', 'about', 'projects', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', icon: <IconHome size={20} /> },
    { id: 'about', label: 'About', icon: <IconUser size={20} /> },
    { id: 'projects', label: 'Projects', icon: <IconBriefcase size={20} /> },
    { id: 'contact', label: 'Contact', icon: <IconMail size={20} /> },
  ];

  // Social links
  const socialLinks = [
    { href: 'https://github.com/priyanshukr0103', icon: <IconBrandGithub size={18} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/priyanshu-kumar-44ab3624b/', icon: <IconBrandLinkedin size={18} />, label: 'LinkedIn' },
    { href: 'https://x.com/Priyanshukr__01', icon: <IconBrandTwitter size={18} />, label: 'Twitter' },
    { href: '/PriyanshuKumar_resume.pdf', icon: <IconFileText size={18} />, label: 'Resume' },
  ];

  // Handle navigation click
  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center justify-center ${
          scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        } rounded-full px-2 py-1 transition-all duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <ul className="flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.li key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground font-medium'
                    : 'hover:bg-muted'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </motion.li>
          ))}
          <li className="ml-2">
            <ThemeToggle3D />
          </li>
        </ul>
      </motion.nav>

      {/* Mobile Navigation Toggle */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg"
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
      </motion.button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="absolute bottom-20 right-6 flex flex-col items-end space-y-3"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Theme toggle for mobile */}
              <div className="mb-2">
                <ThemeToggle3D />
              </div>

              {/* Nav items for mobile */}
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted/80'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 50, opacity: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span>{item.label}</span>
                  {item.icon}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Links - Fixed on the left side */}
      <motion.div
        className="fixed left-6 bottom-1/2 translate-y-1/2 z-30 hidden lg:flex flex-col items-center space-y-4"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="w-px h-20 bg-border"></div>
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target={link.href.startsWith('http') ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-muted/20 hover:bg-muted/40 text-foreground transition-colors"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={link.label}
          >
            {link.icon}
          </motion.a>
        ))}
        <div className="w-px h-20 bg-border"></div>
      </motion.div>
    </>
  );
}
