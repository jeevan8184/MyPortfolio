"use client";
import { MainItems, navItems } from '@/constants';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [navItem, setNavItem] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id') || 'home';
            setNavItem(sectionId);
          }
        });
      },
      { root: null, rootMargin: '-20% 0px -20% 0px', threshold: 0.3 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Handle initial page load or direct link navigation
    const handleInitialSection = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (document.getElementById(hash)) {
        setNavItem(hash);
      }
    };

    handleInitialSection();

    // Listen for hash changes
    window.addEventListener('hashchange', handleInitialSection);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener('hashchange', handleInitialSection);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        .navbar {
          transition: all 0.5s ease;
        }

        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link.active {
          background: #06b6d4;
          color: #ffffff;
          transform: scale(1.05);
          box-shadow: 0 0 12px rgba(6, 182, 212, 0.6);
        }

        .nav-link:hover {
          background: #06b6d4;
          color: #ffffff;
          transform: scale(1.05);
          box-shadow: 0 0 12px rgba(6,182,212,0.6);
        }

        .nav-link.active::after,
        .nav-link:hover::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: #06b6d4;
          transform: scaleX(1);
          transform-origin: center;
          transition: transform 0.3s ease;
        }

        @keyframes gradient-move {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      <nav className="navbar hidden lg:block fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-2xl border-b border-cyan-500/30 shadow-[0_4px_20px_rgba(6,182,212,0.2)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <span className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_2px_8px_rgba(6,182,212,0.5)] select-none">
              Jeevan
            </span>
            {/* Main Navigation Items */}
            <div className="flex gap-6">
              {MainItems.map((item, i) => (
                <Link href={item.link} passHref key={i}>
                  <span
                    onClick={() => setNavItem(item.name)}
                    className={`nav-link px-4 py-2 text-sm font-medium rounded-lg ${
                      navItem === item.name ? 'active' : 'text-gray-100 hover:text-cyan-300'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {/* Secondary Navigation Items */}
          <div className="flex gap-6">
            {navItems.map((item, i) => (
              <Link href={item.link} passHref key={i}>
                <span
                  onClick={() => setNavItem(item.name)}
                  className={`nav-link px-4 py-2 text-sm font-medium rounded-lg ${
                    navItem === item.name ? 'active' : 'text-gray-100 hover:text-cyan-300'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
        {/* Subtle Background Effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-900/10 via-blue-900/10 to-black/10 opacity-50 animate-gradient-move" style={{ animation: 'gradient-move 8s ease infinite' }} />
      </nav>
    </>
  );
};

export default Navbar;