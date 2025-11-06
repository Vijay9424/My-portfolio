'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  tech: string[];
  images: string[];
  github?: string;
  live?: string;
  year: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Instagram-Style Social Platform',
    subtitle: 'Real-time Social Network',
    description:
      'Production social platform supporting 500+ concurrent users with real-time messaging, notifications, and activity feeds.',
    achievements: [
      '40% latency reduction (2.8s → 1.7s)',
      '60% database load reduction',
      '99.8% uptime in production',
    ],
    tech: ['Next.js', 'Node.js', 'Socket.IO', 'MongoDB', 'Redis', 'AWS S3'],
    images: [
      '/projects/social/login.png',
      '/projects/social/home.png',
      '/projects/social/profile.png',
      '/projects/social/message list.png',
      '/projects/social/reels.png',
    ],
    github: 'https://github.com/Vijay9424/My_backend/tree/v03',
    live: 'https://my-frontend-plum.vercel.app/',
    year: '2025',
  },
  {
    id: '2',
    title: 'NLP Emotion Detection API',
    subtitle: 'Deep Learning Text Analysis',
    description:
      'Trained deep neural networks on 10,000+ labeled sentences achieving 94% accuracy across five emotion classes.',
    achievements: [
      '94% classification accuracy',
      '85ms prediction latency',
    ],
    tech: ['Python', 'TensorFlow', 'Flask', 'NLP'],
    images: ['/projects/nlp/1.jpg', '/projects/nlp/2.jpg', '/projects/nlp/3.jpg'],
    github: 'https://github.com/Vijay9424/nlp-emotion',
    year: '2022',
  },
  {
    id: '3',
    title: 'Handwriting Personality Prediction',
    subtitle: 'CNN-based Analysis System',
    description:
      'Developed CNN pipeline for personality classification from handwriting samples.',
    achievements: [
      '78% prediction accuracy',
      'Grad-CAM feature visualization',
      '5x dataset expansion via augmentation',
    ],
    tech: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
    images: ['/projects/handwriting/1.png', '/projects/handwriting/2.png'],
    github: 'https://github.com/Vijay9424/handwriting-analysis',
    year: '2023',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [imageIndexes, setImageIndexes] = useState(projects.map(() => 0));
  const { ref, inView } = useInView({ threshold: 0.2 });

  // 🎞 Fade-in fade-out loop for each project
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setImageIndexes((prev) =>
        prev.map((idx, i) => (idx + 1) % projects[i].images.length)
      );
    }, 1800); // smooth and natural timing
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section ref={ref} id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900 dark:text-slate-50">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Production systems built with scalability, performance, and reliability
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Preview */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
              >
                {/* 🎬 Cinematic Fade */}
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${selectedProject.id}-${imageIndexes[projects.findIndex(p => p.id === selectedProject.id)]}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={
                          selectedProject.images[
                            imageIndexes[projects.findIndex((p) => p.id === selectedProject.id)]
                          ]
                        }
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Details */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-mono text-primary-600 dark:text-primary-400">
                      {selectedProject.year}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {selectedProject.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-900 dark:text-slate-50">
                    {selectedProject.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-3">
                      Key Achievements
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {selectedProject.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <FiCheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5" />
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Timeline */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <motion.button
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`relative w-full text-left transition-all ${
                      selectedProject.id === project.id
                        ? 'opacity-100'
                        : 'opacity-60 hover:opacity-80'
                    }`}
                  >
                    <div
                      className={`absolute left-0 w-8 h-8 rounded-full border-4 transition-all ${
                        selectedProject.id === project.id
                          ? 'bg-primary-600 border-primary-600 scale-110'
                          : 'bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700'
                      }`}
                    />
                    <div className="ml-16 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-500">
                          {project.year}
                        </span>
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-1">
                        {project.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {project.subtitle}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
