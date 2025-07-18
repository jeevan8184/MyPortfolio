"use client";
import { bottomIcons } from "@/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MobileNav: React.FC = () => {
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

                .mobile-nav {
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
                    box-shadow: 0 0 12px rgba(6, 182, 212, 0.6);
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

            <div className="mobile-nav w-full lg:hidden fixed bottom-6 left-0 px-6 z-50 animate-fade-in">
                <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl shadow-[0_4px_20px_rgba(6,182,212,0.2)]">
                    {bottomIcons.map((item, i) => {
                        const isActive = navItem === item.name || navItem === item.altName;
                        const link = isActive && navItem === item.altName ? item.altLink : item.link;
                        return (
                            <Link
                                href={link}
                                passHref
                                key={i}
                                onClick={() => setNavItem(item.altName ? item.altName : item.name)}
                                className={`nav-link flex items-center justify-center px-3 py-2 rounded-lg transition-all duration-300 ${
                                    isActive ? 'active' : 'text-gray-100 hover:text-cyan-300'
                                }`}
                            >
                                <item.Icon
                                    className={`w-6 h-6 transition-all duration-300 ${
                                        isActive
                                            ? 'text-white drop-shadow-[0_2px_8px_rgba(6,182,212,0.5)]'
                                            : 'text-cyan-300 hover:text-cyan-200'
                                    }`}
                                />
                            </Link>
                        );
                    })}
                </div>
                {/* Subtle Background Effect */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-900/10 via-blue-900/10 to-black/10 opacity-50 animate-gradient-move" style={{ animation: 'gradient-move 8s ease infinite' }} />
            </div>
        </>
    );
};

export default MobileNav;