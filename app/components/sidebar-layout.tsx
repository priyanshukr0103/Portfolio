"use client";

import Link from 'next/link';
import OptimizedImage from './optimized-image';
import { ModeToggle } from './mode-toggle';
import {
  IconMail,
  IconHome,
  IconUser,
  IconFileText,
  IconBriefcase,
  IconAddressBook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter
} from '@tabler/icons-react';
import Icon3D from './3d-icon';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('home');
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
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

  // If not mounted yet, return a placeholder to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="flex min-h-screen">
        <aside className="fixed left-0 top-0 h-full w-64 bg-slate-900 flex flex-col z-50"></aside>
        <main className="flex-1 ml-64">{children}</main>
      </div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-64 flex flex-col z-50 text-white transition-colors duration-300 ${
        isDark
          ? 'bg-slate-950 bg-opacity-95 shadow-lg shadow-slate-900/50'
          : 'bg-slate-800 bg-opacity-95 shadow-lg shadow-slate-700/30'
      }`}>
        <div className="flex flex-col items-center py-8">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white mb-4">
            <OptimizedImage
              src="/images/me_pk.jpg"
              alt="Priyanshu Kumar"
              fill
              className="object-cover"
              fallbackSrc="/images/profile-placeholder.svg"
              priority
            />
          </div>
          <h2 className="text-xl font-bold">Priyanshu Kumar</h2>

          {/* Social links */}
          <div className="flex space-x-4 mt-4">
            <Link href="https://github.com/priyanshukr0103" target="_blank">
              <div className={`rounded-full p-2 ${isDark ? 'bg-blue-950' : 'bg-blue-900'} hover:bg-blue-800 transition-colors`}>
                <IconBrandGithub size={18} className="text-blue-400" />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/priyanshu-kumar-44ab3624b/" target="_blank">
              <div className={`rounded-full p-2 ${isDark ? 'bg-indigo-950' : 'bg-indigo-900'} hover:bg-indigo-800 transition-colors`}>
                <IconBrandLinkedin size={18} className="text-indigo-400" />
              </div>
            </Link>
            <Link href="https://x.com/Priyanshukr__01" target="_blank">
              <div className={`rounded-full p-2 ${isDark ? 'bg-teal-950' : 'bg-teal-900'} hover:bg-teal-800 transition-colors`}>
                <IconBrandTwitter size={18} className="text-teal-400" />
              </div>
            </Link>
            <Link href="mailto:priyanshukr0103@gmail.com">
              <div className={`rounded-full p-2 ${isDark ? 'bg-pink-950' : 'bg-pink-900'} hover:bg-pink-800 transition-colors`}>
                <IconMail size={18} className="text-pink-400" />
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="mt-8 flex-1">
          <ul className="space-y-1">
            <li>
              <Link
                href="#home"
                scroll={false}
                className={`flex items-center px-6 py-3 transition-colors ${
                  activeSection === 'home'
                    ? 'bg-primary/20 border-l-4 border-primary'
                    : isDark
                      ? 'hover:bg-slate-900'
                      : 'hover:bg-slate-800'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className={`rounded-full p-2 mr-3 ${isDark ? 'bg-blue-950' : 'bg-blue-900'}`}>
                  <IconHome size={16} className="text-blue-400" />
                </div>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                scroll={false}
                className={`flex items-center px-6 py-3 transition-colors ${
                  activeSection === 'about'
                    ? 'bg-primary/20 border-l-4 border-primary'
                    : isDark
                      ? 'hover:bg-slate-900'
                      : 'hover:bg-slate-800'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className={`rounded-full p-2 mr-3 ${isDark ? 'bg-green-950' : 'bg-green-900'}`}>
                  <IconUser size={16} className="text-green-400" />
                </div>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link
                href="/PriyanshuKumar_resume.pdf"
                target="_blank"
                className={`flex items-center px-6 py-3 transition-colors ${
                  isDark
                    ? 'hover:bg-slate-900'
                    : 'hover:bg-slate-800'
                }`}
              >
                <div className={`rounded-full p-2 mr-3 ${isDark ? 'bg-orange-950' : 'bg-orange-900'}`}>
                  <IconFileText size={16} className="text-orange-400" />
                </div>
                <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                scroll={false}
                className={`flex items-center px-6 py-3 transition-colors ${
                  activeSection === 'projects'
                    ? 'bg-primary/20 border-l-4 border-primary'
                    : isDark
                      ? 'hover:bg-slate-900'
                      : 'hover:bg-slate-800'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className={`rounded-full p-2 mr-3 ${isDark ? 'bg-purple-950' : 'bg-purple-900'}`}>
                  <IconBriefcase size={16} className="text-purple-400" />
                </div>
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                scroll={false}
                className={`flex items-center px-6 py-3 transition-colors ${
                  activeSection === 'contact'
                    ? 'bg-primary/20 border-l-4 border-primary'
                    : isDark
                      ? 'hover:bg-slate-900'
                      : 'hover:bg-slate-800'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className={`rounded-full p-2 mr-3 ${isDark ? 'bg-pink-950' : 'bg-pink-900'}`}>
                  <IconMail size={16} className="text-pink-400" />
                </div>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Theme toggle at bottom */}
        <div className="p-6 flex justify-center">
          <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-900' : 'bg-slate-800'}`}>
            <ModeToggle />
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64">
        {children}
      </main>
    </div>
  );
}
