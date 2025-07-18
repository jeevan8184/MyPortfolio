"use client";
import { AcheivementItems } from '@/constants';
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

export default function Achievements() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Dynamic Timeline Logic
  useEffect(() => {
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

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

        .achievement-card {
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
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

        .achievement-card:hover .logo-container::after {
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

        .achievement-card:hover .glow-effect::before {
          opacity: 0.9;
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

      <section className="relative py-16 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <motion.div
          className="relative mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 mb-3">
            Achievements
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mx-auto shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
          <p className="mt-4 text-gray-300 text-lg max-w-lg mx-auto">
            My notable accomplishments and recognitions
          </p>
        </motion.div>

        <div className="relative z-10" ref={timelineRef}>
          <div className="hidden md:block absolute left-1/2 top-6 bottom-0 timeline-line" style={{ height: '0%' }} />
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {AcheivementItems.map((item, i) => (
              <motion.div
                key={item.label}
                className={`achievement-card relative ${i === 1 ? 'md:mt-12' : i === 2 ? 'md:mt-24' : ''}`}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.5 }}
                custom={i}
                variants={cardVariants}
              >
                <div className="timeline-dot hidden md:block" />
                <div className="w-full backdrop-blur-md rounded-2xl p-1 shadow-[0_6px_24px_rgba(16,185,129,0.1)] glow-effect">
                  <div className="bg-gradient-to-br from-gray-900/95 to-gray-800/95 rounded-[1.2rem] p-6 border border-white/5 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-1/2 flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(16,185,129,0.15)' }}
                        transition={{ type: 'spring', stiffness: 180, damping: 16 }}
                        className="logo-container rounded-xl shadow-[0_6px_20px_rgba(16,185,129,0.1)] p-3 w-[280px] h-[280px] flex items-center justify-center"
                      >
                        <Image
                          src={item.img}
                          alt={item.label}
                          width={260}
                          height={260}
                          className="rounded-lg object-cover w-full h-full z-10"
                          style={{ objectFit: 'contain' }}
                          priority
                        />
                      </motion.div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-2 text-center md:text-left">
                      <h3 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                        {item.label}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">{item.desc}</p>
                      <Link
                        href={item.url}
                        target="_blank"
                        className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-medium text-sm transition-all shadow-[0_0_8px_rgba(16,185,129,0.4)] hover:shadow-[0_0_12px_rgba(16,185,129,0.6)]"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}