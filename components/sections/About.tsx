'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiZap, FiShield, FiCpu } from 'react-icons/fi';

const metrics = [
  {
    icon: FiTrendingUp,
    value: '40%',
    label: 'Latency Reduction',
    description: '2.8s → 1.7s',
  },
  {
    icon: FiZap,
    value: '99.2%',
    label: 'System Reliability',
    description: 'Production Uptime',
  },
  {
    icon: FiShield,
    value: '500+',
    label: 'Concurrent Users',
    description: 'Real-time Platform',
  },
  {
    icon: FiCpu,
    value: '60%',
    label: 'Database Load Reduction',
    description: 'Cache Optimization',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-slate-900 dark:text-slate-50">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            <p>
              I'm a backend-focused full-stack engineer specializing in high-performance, scalable
              distributed systems. Currently pursuing B.Tech in Computer Science at{' '}
              <span className="text-slate-900 dark:text-slate-50 font-medium">
                IIIT Vadodara
              </span>{' '}
              (Expected 2026).
            </p>
            <p>
              My expertise lies in architecting production platforms that support hundreds of
              concurrent users with exceptional reliability. I've built real-time communication
              systems using Socket.IO and WebSocket, optimized MongoDB queries for 40% latency
              improvements, and implemented Redis caching strategies that reduced database load by
              60%.
            </p>
            <p>
              I specialize in Node.js microservices, database optimization, cloud deployment, and
              system design. Beyond backend, I work with React/Next.js for full-stack development
              and have experience in ML/AI with TensorFlow and NLP pipelines.
            </p>
            <p>
              I'm passionate about building systems that are not just functional, but
              performant, scalable, and maintainable. Every line of code I write considers
              production impact, monitoring, and future growth.
            </p>

            {/* Education */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Education
              </h3>
              <div className="space-y-1">
                <p className="text-slate-900 dark:text-slate-50">
                  B.Tech in Computer Science & Engineering
                </p>
                <p className="text-sm">
                  Indian Institute of Information Technology (IIIT) Vadodara
                </p>
                <p className="text-sm text-slate-500">Expected Graduation: 2026</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Certifications
              </h3>
              <p className="text-sm">
                NVIDIA Deep Learning Institute - Fundamentals of Deep Learning (March 2024)
              </p>
            </div>
          </motion.div>

          {/* Right: Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800"
              >
                <metric.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3" />
                <div className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-50 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-16 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 border border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-6">
            Core Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Backend Architecture
              </h4>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• Microservices & stateless design</li>
                <li>• Horizontal scaling strategies</li>
                <li>• Queue systems with BullMQ</li>
                <li>• Database indexing & optimization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Real-time Systems
              </h4>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• Socket.IO & WebSocket implementation</li>
                <li>• Sub-100ms message delivery</li>
                <li>• Redis adapter for scaling</li>
                <li>• Room-based messaging patterns</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Performance Optimization
              </h4>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• Redis cache-aside pattern</li>
                <li>• Brotli compression (65% reduction)</li>
                <li>• CDN optimization</li>
                <li>• Query performance tuning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">
                Security & Auth
              </h4>
              <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                <li>• JWT access/refresh token rotation</li>
                <li>• bcrypt password hashing</li>
                <li>• Rate limiting & input validation</li>
                <li>• JTI-based blacklisting</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}