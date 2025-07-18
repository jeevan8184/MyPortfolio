"use client";
import { EducationItems } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 120, damping: 15, duration: 0.8 },
  }),
  hover: {
    scale: 1.02,
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

export default function Education() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // 3D Card Effect and Dynamic Timeline Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, card: HTMLElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;
      const cardContent = card.querySelector('.card-content') as HTMLElement;
      if (cardContent) {
        cardContent.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`;
      }
    };

    const handleMouseLeave = (card: HTMLElement) => {
      const cardContent = card.querySelector('.card-content') as HTMLElement;
      if (cardContent) {
        cardContent.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
      }
    };

    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const scrollProgress = Math.min(Math.max((window.innerHeight - rect.top) / (rect.height + window.innerHeight), 0), 1);
        const timelineLine = timelineRef.current.querySelector('.timeline-line') as HTMLElement;
        if (timelineLine) {
          timelineLine.style.height = `${scrollProgress * 100}%`;
          timelineLine.style.transition = 'height 0.15s ease'; // Faster transition
        }
      }
    };

    const cards = document.querySelectorAll('.card-3d');
    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e as MouseEvent, card as HTMLElement));
      card.addEventListener('mouseleave', () => handleMouseLeave(card as HTMLElement));
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e as MouseEvent, card as HTMLElement));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card as HTMLElement));
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400; Cossack:500;600;700&display=swap');

        body {
          background-color: #0a0a0a;
          font-family: 'Inter', sans-serif;
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-in forwards;
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .education-card {
          transition: all 0.3s ease;
        }

        .education-card:hover {
          transform: translateY(-5px);
        }

        .logo-container {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          background: linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1));
        }

        .logo-container::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: rotate(45deg);
          animation: shimmer 2s infinite linear;
        }

        .education-card:hover .logo-container::after {
          animation-duration: 1s;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }

        .timeline-dot {
          position: relative;
        }

        .timeline-dot::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: linear-gradient(45deg, #10b981, #3b82f6);
          z-index: 10;
          box-shadow: 0 0 14px rgba(16, 185, 129, 0.5);
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          width: 3px;
          background: linear-gradient(to bottom, #10b981, #3b82f6);
          transform: translateX(-50%);
          z-index: 5;
        }

        .bg-grid {
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.02) 1px, transparent 0);
          background-size: 24px 24px;
        }

        .glow-effect {
          position: relative;
        }

        .glow-effect::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(45deg, #10b981, #3b82f6);
          border-radius: inherit;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .glow-effect:hover::before {
          opacity: 0.9;
        }

        .card-3d {
          transform-style: preserve-3d;
          perspective: 800px;
        }

        .card-content {
          transition: transform 0.4s ease;
        }

        .card-3d:hover .card-content {
          transform: translateZ(15px);
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="relative min-h-screen py-16 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <section className="relative max-w-5xl mx-auto">
          <motion.div
            className="relative mb-12 text-center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 mb-3">
              Education
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mx-auto shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
            <p className="mt-4 text-gray-300 text-lg max-w-lg mx-auto">
              My academic journey and qualifications
            </p>
          </motion.div>

          <div className="relative z-10" ref={timelineRef}>
            <div className="hidden md:block absolute left-1/2 top-6 bottom-0 timeline-line" style={{ height: '0%' }} />
            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              {EducationItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  className={`education-card relative card-3d ${i === 1 ? 'md:mt-12' : i === 2 ? 'md:mt-24' : ''}`}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={i}
                  variants={cardVariants}
                >
                  <div className="timeline-dot hidden md:block" />
                  <div className="w-full backdrop-blur-md rounded-2xl p-1 shadow-[0_6px_24px_rgba(16,185,129,0.1)] glow-effect">
                    <div className="card-content bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-[1.2rem] p-6 border border-white/5 h-full">
                      <div className="mb-6 flex justify-center">
                        <motion.div
                          whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(16,185,129,0.15)' }}
                          transition={{ type: 'spring', stiffness: 180, damping: 16 }}
                          className="logo-container rounded-xl shadow-[0_6px_20px_rgba(16,185,129,0.1)] p-3 w-[220px] h-[220px] flex items-center justify-center"
                        >
                          <Image
                            src={item.img}
                            alt={item.name}
                            width={200}
                            height={200}
                            className="rounded-lg object-cover w-full h-full z-10"
                            style={{ objectFit: 'contain' }}
                            priority
                          />
                        </motion.div>
                      </div>
                      <div className="flex flex-col gap-2 text-center">
                        <h3 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                          {item.name}
                        </h3>
                        <div className="flex items-center justify-center gap-1.5 text-sm text-gray-300">
                          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 text-sm text-gray-300">
                          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{item.year}</span>
                        </div>
                        <div className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border border-emerald-800/20">
                          <h4 className="text-lg font-medium text-emerald-300">{item.course}</h4>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 text-sm text-white">
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <p>{item.cgpa ? `CGPA: ${item.cgpa}` : item.cgpa1 ? `Percentage: ${item.cgpa1}` : null}</p>
                        </div>
                        {item.website && (
                          <Link
                            href={item.website}
                            target="_blank"
                            className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-medium text-sm transition-all shadow-[0_0_8px_rgba(16,185,129,0.4)] hover:shadow-[0_0_12px_rgba(16,185,129,0.6)]"
                          >
                            <span>Visit Website</span>
                            <svg className="inline-block w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}