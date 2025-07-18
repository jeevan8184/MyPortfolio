"use client";
import { MainItems, navItems, SocialIcons } from '@/constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
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

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      <motion.footer
        className="relative w-full py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-900/95 to-black/95 text-white border-t border-emerald-500/20 backdrop-blur-xl shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
      >
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
        <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-10 z-10">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500 drop-shadow-[0_4px_12px_rgba(16,185,129,0.5)]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Jeevan Jatavath
          </motion.h1>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-base md:text-lg font-serif italic text-gray-200 drop-shadow-[0_2px_8px_rgba(16,185,129,0.3)]">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
            <span className="text-sm font-medium text-emerald-300 md:pt-2">— Steve Jobs</span>
          </motion.div>

          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 font-medium text-gray-100">
            {[...MainItems, ...navItems].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.6 }}
              >
                <Link
                  href={item.link}
                  className="relative px-3 py-1 text-sm sm:text-base hover:text-emerald-400 transition-colors duration-300 group bg-transparent hover:bg-transparent focus:bg-transparent"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="flex justify-center gap-4 sm:gap-6 py-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {SocialIcons.map((link, i) => (
              <motion.button
                key={i}
                onClick={() => router.push(link.url!)}
                className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 hover:from-emerald-500/40 hover:to-blue-500/40 border border-emerald-500/30 backdrop-blur-md transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] focus:outline-none focus:ring-2 focus:ring-emerald-400 glow-effect"
                aria-label={link.label}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-200 group-hover:text-white transition-colors duration-300" />
              </motion.button>
            ))}
          </motion.div>

          <motion.p
            className="text-sm text-gray-400 font-medium tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            © {new Date().getFullYear()} Jeevan Jatavath. All rights reserved.
          </motion.p>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-900/10 via-blue-900/10 to-black/10 opacity-50 animate-gradient-move" style={{ animation: 'gradient 8s ease infinite' }} />
      </motion.footer>
    </>
  );
};

export default Footer;