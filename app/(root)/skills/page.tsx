"use client";
import { Aiml, backend, frontend, programming, tools } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const skillBarColors = [
  'from-emerald-400 to-blue-500',
  'from-teal-400 to-cyan-500',
  'from-green-400 to-emerald-500',
  'from-blue-400 to-indigo-500',
  'from-cyan-400 to-blue-600',
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 120, damping: 15, duration: 0.8 },
  }),
  hover: {
    scale: 1.03,
    boxShadow: '0 10px 20px rgba(16, 185, 129, 0.3)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const barVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: (percent: number) => ({
    width: `${percent}%`,
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  }),
};

const AnimatedSkillBar = ({ label, icon, percent, colorIndex }: { label: string; icon: string; percent: number; colorIndex: number }) => (
  <motion.div className="mb-5" initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <div className="flex items-center gap-3 mb-2">
      <motion.div
        className="relative rounded-lg bg-white/10 p-2 shadow-[0_4px_12px_rgba(16,185,129,0.15)]"
        whileHover={{ scale: 1.05, boxShadow: '0 6px 16px rgba(16,185,129,0.25)' }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <Image src={icon} alt={label} width={40} height={40} className="rounded-lg" />
      </motion.div>
      <span className="font-semibold text-gray-200 text-lg">{label}</span>
      <span className="ml-auto text-sm text-gray-300 font-mono">{percent}%</span>
    </div>
    <div className="w-full h-3 bg-gray-800/40 rounded-full overflow-hidden">
      <motion.div
        className={`h-full bg-gradient-to-r ${skillBarColors[colorIndex % skillBarColors.length]} shadow-[0_0_6px_rgba(16,185,129,0.3)]`}
        variants={barVariants}
        custom={percent}
        style={{ minWidth: 12 }}
      />
    </div>
  </motion.div>
);

export default function Skills() {
  const frontendSkills = [
    ...frontend.map((item, i) => ({ ...item, percent: 90 - i * 10 })),
    { label: 'Redux', img: '/assets/skills/react.svg', percent: 75 },
  ];
  const backendSkills = backend.map((item, i) => ({ ...item, percent: 85 - i * 10 }));
  const programmingSkills = programming.map((item, i) => ({ ...item, percent: 80 - i * 10 }));
  const aimlSkills = Aiml.map((item, i) => ({ ...item, percent: 75 - i * 10 }));
  const toolsSkills = [tools];

  const aiAndroidSkills = [
    { label: 'Android Development (Java)', icon: '/assets/skills/java.svg', percent: 80 },
    { label: 'NLP', icon: '/assets/skills/python.svg', percent: 75 },
    { label: 'Deep Learning (DL)', icon: '/assets/skills/python.svg', percent: 70 },
    { label: 'Machine Learning (ML)', icon: '/assets/skills/python.svg', percent: 85 },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          background-color: #0a0a0a;
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-in forwards;
        }

        .bg-grid {
          background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.02) 1px, transparent 0);
          background-size: 24px 24px;
        }

        .skill-card {
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-4px);
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <motion.section
        className="relative py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
          {/* Frontend & Programming */}
          <motion.div
            className="skill-card flex-1 flex flex-col bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl shadow-[0_6px_20px_rgba(16,185,129,0.15)] p-6 md:p-8 border border-emerald-400/20"
            variants={cardVariants}
            custom={0}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-emerald-400 mb-6">Frontend Development</h3>
            {frontendSkills.map((item, i) => (
              <AnimatedSkillBar key={item.label} label={item.label} icon={item.img} percent={item.percent} colorIndex={i} />
            ))}
            <h3 className="text-xl sm:text-2xl font-semibold text-emerald-400 mt-8 mb-6">Programming Languages</h3>
            {programmingSkills.map((item, i) => (
              <AnimatedSkillBar key={item.label} label={item.label} icon={item.img} percent={item.percent} colorIndex={i + 2} />
            ))}
          </motion.div>
          {/* Backend, Tools, AI/ML */}
          <motion.div
            className="skill-card flex-1 flex flex-col bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl shadow-[0_6px_20px_rgba(16,185,129,0.15)] p-6 md:p-8 border border-emerald-400/20"
            variants={cardVariants}
            custom={1}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-emerald-400 mb-6">Backend Development</h3>
            {backendSkills.map((item, i) => (
              <AnimatedSkillBar key={item.label} label={item.label} icon={item.img} percent={item.percent} colorIndex={i + 1} />
            ))}
            <h3 className="text-xl sm:text-2xl font-semibold text-emerald-400 mt-8 mb-6">Android & AI/ML</h3>
            {aiAndroidSkills.map((item, i) => (
              <AnimatedSkillBar key={item.label} label={item.label} icon={item.icon} percent={item.percent} colorIndex={i + 3} />
            ))}
            <h3 className="text-xl sm:text-2xl font-semibold text-emerald-400 mt-8 mb-6">Tools</h3>
            <AnimatedSkillBar label={tools.label} icon={tools.img} percent={70} colorIndex={4} />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}