"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { projectImgs, EcommerceImgs } from '@/constants';

const projects = [
  {
    title: "Social Media Platform",
    description: (
      <ul className="list-disc pl-5 text-gray-200">
        <li>User authentication, password encryption, and session management.</li>
        <li>Create, edit, and delete posts with image support.</li>
        <li>Like, comment, save, and real-time sharing using Socket.io.</li>
        <li>Real-time messaging with one-to-one chats, image/post sharing, notifications, and reactions.</li>
      </ul>
    ),
    tech: "Nextjs | TailwindCSS | Shadcn | MongoDB | Socket.io",
    demo: process.env.NEXT_PUBLIC_SOCIAL || "https://example.com/social",
    github: "https://github.com/jeevan8184/social",
    images: [
      "/assets/projects/social1.png",
      "/assets/projects/social.png",
    ],
    isCarousel: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A sleek portfolio website showcasing my skills, projects, and achievements. Designed to authentically reflect my professional journey, it fosters connections and opportunities in the tech industry.",
    tech: "Nextjs | TailwindCSS",
    demo: "/",
    github: "https://github.com/jeevan8184/MyPortfolio",
    images: ["/assets/projects/portfolio.png"],
    isCarousel: false,
  },
  {
    title: "Ecommerce Website",
    description: (
      <ul className="list-disc pl-5 text-gray-200">
        <li>Secure user authentication for sign-in and sign-up.</li>
        <li>Admin product creation and dynamic product display.</li>
        <li>User reviews and ratings for products.</li>
        <li>Advanced search and filtering by reviews, ratings, and price.</li>
        <li>Shopping cart with add/remove functionality.</li>
        <li>Order tracking and history for users.</li>
        <li>Fully responsive across all devices.</li>
      </ul>
    ),
    tech: "Nextjs | TailwindCSS | Shadcn | MongoDB | Stripe",
    demo: process.env.NEXT_PUBLIC_ECOMMERCE || "https://example.com/ecommerce",
    github: "https://github.com/jeevan8184/Ecommerce",
    images: [
      "/assets/projects/Ecommerce1.png",
      "/assets/projects/Ecommerce2.png",
      "/assets/projects/Ecommerce3.png",
    ],
    isCarousel: true,
  },
  {
    title: "Password Generator",
    description:
      "A robust tool for generating secure, random passwords with a mix of letters, numbers, and special characters to enhance online security.",
    tech: "HTML | CSS | Javascript",
    demo: "https://6667fd3a2425d1ba8cff6441--chipper-cuchufli-75e199.netlify.app/",
    github: "https://github.com/jeevan8184/password",
    images: ["/assets/projects/password.png"],
    isCarousel: false,
  },
  {
    title: "Snake Game",
    description:
      "A classic arcade game where players guide a growing snake to eat food while avoiding collisions with its tail and boundaries.",
    tech: "HTML | CSS | Javascript",
    demo: "https://6667fc16c63a2dc10fb5c5bc--creative-ganache-fafb92.netlify.app/",
    github: "https://github.com/jeevan8184/snakeGame",
    video: "/assets/projects/snake.mp4",
    isVideo: true,
  },
  {
    title: "2048 Game",
    description:
      "A captivating sliding puzzle game where players combine numbered tiles on a 4x4 grid to reach the coveted 2048 tile.",
    tech: "HTML | CSS | Javascript",
    demo: "https://main--dainty-naiad-ed34f5.netlify.app/",
    github: "https://github.com/jeevan8184/game2",
    video: "/assets/projects/2048game.mp4",
    isVideo: true,
  },
  {
    title: "AI Quiz Builder",
    description: (
      <>
        <strong>Overview:</strong> <br/>
        A modern, full-stack web application for creating, managing, and participating in quizzes—powered by AI for intelligent question generation. Supports real-time participation, analytics, and collaborative features. Users can build quizzes manually or with AI, host live quizzes, and instantly see results.
      </>
    ),
    tech: "React.js | Node.js | MongoDB | Socket.IO | AI (Gemini/GPT) | Tailwind CSS | Express.js",
    video: "/assets/projects/quiz.mp4",
    isVideo: true,
    demo: "",
    github: "",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, type: 'spring', stiffness: 120, damping: 15 },
  },
  hover: {
    scale: 1.04,
    boxShadow: '0 12px 32px rgba(16, 185, 129, 0.4), 0 0 20px rgba(59, 130, 246, 0.3)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export default function Projects() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          background-color: #0a0a0a;
        }

        .bg-grid {
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.03) 1px, transparent 0);
          background-size: 24px 24px;
        }

        .chrono-timeline .rc-timeline-item {
          padding-left: 48px !important;
          margin-bottom: 32px !important;
        }

        .chrono-timeline .rc-timeline-item-tail {
          background: linear-gradient(to bottom, #10b981, #3b82f6) !important;
          width: 4px !important;
          left: 18px !important;
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.5) !important;
        }

        .chrono-timeline .rc-timeline-item-head {
          background: linear-gradient(45deg, #10b981, #3b82f6) !important;
          border: 2px solid rgba(255, 255, 255, 0.2) !important;
          width: 16px !important;
          height: 16px !important;
          left: 11px !important;
          top: 8px !important;
          box-shadow: 0 0 16px rgba(16, 185, 129, 0.6) !important;
        }

        .chrono-timeline .rc-timeline-item-content {
          background: linear-gradient(to bottom right, rgba(26, 36, 54, 0.95), rgba(35, 43, 77, 0.95)) !important;
          border: 1px solid rgba(16, 185, 129, 0.3) !important;
          border-radius: 16px !important;
          padding: 24px !important;
          box-shadow: 0 8px 32px rgba(16, 185, 129, 0.25) !important;
          transition: all 0.3s ease !important;
        }

        .chrono-timeline .rc-timeline-item-content:hover {
          transform: translateY(-6px) scale(1.04);
          box-shadow: 0 12px 32px rgba(16, 185, 129, 0.4), 0 0 20px rgba(59, 130, 246, 0.3) !important;
          border-color: rgba(16, 185, 129, 0.5) !important;
        }

        .project-image-container {
          position: relative;
          overflow: hidden;
        }

        .project-image-container::after {
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

        .chrono-timeline .rc-timeline-item-content:hover .project-image-container::after {
          animation-duration: 1s;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }
      `}</style>

      <motion.section
        className="relative py-16 px-4 sm:px-6 md:px-8 max-w-full mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-900/10 via-blue-900/10 to-black/10 opacity-60 animate-gradient-move" style={{ animation: 'gradient 8s ease infinite' }} />
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="space-y-16">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="w-full lg:w-1/2">
                    {project.isCarousel && project.images ? (
                      <Carousel
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop
                        useKeyboardArrows
                        autoPlay
                        interval={2000}
                        stopOnHover
                        swipeable
                        className="w-full h-80 md:h-96 rounded-2xl"
                      >
                        {project.images.map((img, idx) => (
                          <div key={idx} className="relative h-80 md:h-96 w-full project-image-container">
                            <Image
                              src={img}
                              alt={`${project.title} ${idx + 1}`}
                              fill
                              style={{ objectFit: "contain" }}
                              className="rounded-2xl"
                            />
                          </div>
                        ))}
                      </Carousel>
                    ) : project.images ? (
                      <div className="relative h-80 md:h-96 w-full project-image-container">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          style={{ objectFit: "contain" }}
                          className="rounded-2xl"
                        />
                      </div>
                    ) : project.isVideo ? (
                      <video
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        className="w-full h-80 md:h-96 rounded-2xl object-contain project-image-container"
                      />
                    ) : null}
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 mb-4">
                      {project.title}
                    </h3>
                    <div className="text-gray-200 text-sm md:text-base leading-relaxed mb-4">
                      {typeof project.description === 'string' ? project.description : project.description}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.split("|").map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-gradient-to-r from-emerald-600/90 to-blue-600/90 text-white text-xs font-medium px-3 py-1 rounded-full shadow-[0_2px_8px_rgba(16,185,129,0.4)] hover:scale-105 transition-transform"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-4">
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 rounded-lg text-white font-medium text-sm transition-all shadow-[0_0_10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_16px_rgba(16,185,129,0.7)]"
                      >
                        Live Demo
                      </Link>
                      <Link
                        href={project.github}
                        target="_blank"
                        className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium text-sm transition-all shadow-[0_0_10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_16px_rgba(16,185,129,0.7)]"
                      >
                        Github
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* AI Quiz Builder Project Card */}
            
          </div>
        </div>
      </motion.section>
    </>
  );
}