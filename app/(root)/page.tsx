"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Education from "./education/page";
import Courses from "./courses/page";
import ContactMe from "./contactme/page";
import Footer from "@/components/related/Footer";
import { FaGithub } from "react-icons/fa";
import Achievements from "./acheivements/page";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.8 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
  const titleWords = ["Aspiring", "Software", "Development", "Engineer"];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          color: #e5e7eb;
          background: transparent;
        }

        .gradient-text {
          background: linear-gradient(to right, #60a5fa, #34d399);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .glow-button {
          transition: all 0.3s ease;
          box-shadow: 0 0 12px rgba(96, 165, 250, 0.4);
        }

        .glow-button:hover {
          box-shadow: 0 0 20px rgba(96, 165, 250, 0.6);
          transform: translateY(-3px);
        }

        .avatar-placeholder {
          background: linear-gradient(135deg, #1e40af, #10b981);
          border: 6px solid rgba(96, 165, 250, 0.3);
          box-shadow: 0 0 30px rgba(96, 165, 250, 0.5);
        }

        @keyframes gentle-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }

        .avatar-animation {
          animation: gentle-scale 5s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 py-20">
          <motion.div
            className="flex-1 space-y-8 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={textVariants}
              className="inline-block px-5 py-2 text-base font-medium text-blue-300 bg-blue-900/10 rounded-full border border-blue-500/20"
            >
              Hello, I'm
            </motion.span>
            <motion.h1
              variants={textVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text"
            >
              Jeevan Jatavath
            </motion.h1>
            <motion.h2
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-3xl font-semibold text-gray-200"
            >
              {titleWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={textVariants}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto md:mx-0"
            >
              B.E. student in AI & ML at CBIT, passionate about crafting innovative applications with modern tech.
            </motion.p>
            <motion.div
              variants={textVariants}
              className="flex gap-5 justify-center md:justify-start"
            >
              <Link
                href="#contactme"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium glow-button flex items-center gap-2 text-base"
              >
                Get In Touch <span>→</span>
              </Link>
              <Link
                href="#projects"
                className="px-8 py-3 bg-gray-800/80 text-gray-200 rounded-lg font-medium glow-button flex items-center gap-2 text-base"
              >
                View Projects <FaGithub className="text-lg" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] rounded-full avatar-placeholder flex items-center justify-center avatar-animation">
              <Image src="/assets/hero.jpg" alt="Jeevan Jatavath" width={450} height={450} className="rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Other Sections */}
        <section id="skills" className="py-20">
          <Skills />
        </section>
        <section id="projects" className="py-20">
          <Projects />
        </section>
        <section id="education" className="py-20">
          <Education />
        </section>
        <section id="courses" className="py-20">
          <Courses />
        </section>
        <section id="achievements" className="py-20">
          <Achievements />
        </section>
        <section id="contactme" className="py-20">
          <ContactMe />
        </section>
      </div>
      <Footer />
    </>
  );
}