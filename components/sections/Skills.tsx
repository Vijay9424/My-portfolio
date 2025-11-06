'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Backend & APIs',
    skills: [
      'Node.js',
      'Express',
      'Socket.IO',
      'WebSocket',
      'REST APIs',
      'Microservices',
      'JWT Auth',
      'Flask',
      'Django',
    ],
  },
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Redux',
      'Framer Motion',
    ],
  },
  {
    title: 'Databases & Storage',
    skills: [
      'MongoDB',
      'Redis',
      'Elasticsearch',
      'PostgreSQL',
      'Cloudinary',
      'AWS S3',
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    skills: [
      'Docker',
      'GitHub Actions',
      'Vercel',
      'Render',
      'AWS',
      'GCP',
      'Nginx',
    ],
  },
  {
    title: 'ML & Data Engineering',
    skills: [
      'TensorFlow',
      'scikit-learn',
      'OpenCV',
      'NLP',
      'Python',
      'Data Preprocessing',
    ],
  },
  {
    title: 'Architecture & Optimization',
    skills: [
      'System Design',
      'Horizontal Scaling',
      'Caching Strategies',
      'Queue Systems',
      'Load Balancing',
      'Performance Tuning',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900 dark:text-slate-50">
            Technical Skills
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Technologies I work with to build scalable systems
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800"
            >
              <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-50">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 text-sm font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md cursor-default transition-transform"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}