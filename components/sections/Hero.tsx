'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Professional Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg ring-4 ring-slate-100 dark:ring-slate-800">
            <Image
              src="/profile.JPG"
              alt="Vijay Malviya"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="text-4xl md:text-6xl font-semibold mb-4 text-slate-900 dark:text-slate-50"
        >
          Vijay Malviya
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 mb-3 font-medium"
        >
          Backend-Focused Full-Stack Engineer
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
        >
          Building and learning scalable distributed systems
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors btn-press"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors btn-press"
          >
            Get in Touch
          </button>
          <a
            href="/Vijay_Malviya_Resume.pdf"
            download
            className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-50 rounded-lg font-medium hover:border-slate-400 dark:hover:border-slate-600 transition-colors btn-press"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://github.com/Vijay9424"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/Vijay-Malviya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:ashum3486@gmail.com"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            aria-label="Email"
          >
            <FiMail className="w-6 h-6" />
          </a>
          <a
            href="tel:+919893497541"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            aria-label="Phone"
          >
            <FiPhone className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}