// 'use client';

// import React, { useState, useRef } from 'react';
// import Image from 'next/image';
// import { Project } from '@/types';
// import Badge from '@/components/ui/Badge';
// import Button from '@/components/ui/Button';
// import { FiGithub, FiExternalLink, FiPlay, FiMaximize2, FiX } from 'react-icons/fi';
// import { motion, AnimatePresence } from 'framer-motion';

// interface ProjectCardProps {
//   project: Project;
//   index: number;
// }

// export default function ProjectCard({ project, index }: ProjectCardProps) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const [showFullscreen, setShowFullscreen] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//     if (videoRef.current && project.videoUrl) {
//       videoRef.current.play().catch(e => console.log('Video play failed:', e));
//       setIsVideoPlaying(true);
//     }
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//       setIsVideoPlaying(false);
//     }
//   };

//   const toggleFullscreen = () => {
//     setShowFullscreen(!showFullscreen);
//     if (!showFullscreen && videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ 
//           duration: 0.6, 
//           delay: index * 0.1,
//           ease: [0.43, 0.13, 0.23, 0.96]
//         }}
//         whileHover={{ y: -10 }}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         className="group relative"
//       >
//         <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/20">
          
//           {/* Video/Image Container with Advanced Effects */}
//           <div className="relative h-64 w-full overflow-hidden bg-slate-900">
//             {/* Animated Border Gradient */}
//             <motion.div
//               className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"
//               style={{
//                 background: 'linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899, #6366f1)',
//                 backgroundSize: '400% 400%',
//               }}
//               animate={{
//                 backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
//               }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               <div className="absolute inset-[2px] bg-slate-900 rounded-2xl" />
//             </motion.div>

//             {/* Video Content */}
//             {project.videoUrl ? (
//               <div className="relative w-full h-full">
//                 <video
//                   ref={videoRef}
//                   src={project.videoUrl}
//                   poster={project.videoThumbnail || project.imageUrl}
//                   loop
//                   muted
//                   playsInline
//                   className="w-full h-full object-cover"
//                 />
                
//                 {/* Play Overlay */}
//                 <motion.div
//                   className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer"
//                   initial={{ opacity: 1 }}
//                   animate={{ opacity: isVideoPlaying ? 0 : 1 }}
//                   transition={{ duration: 0.3 }}
//                   onClick={toggleFullscreen}
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center"
//                   >
//                     <FiPlay className="w-10 h-10 text-white ml-1" />
//                   </motion.div>
//                 </motion.div>

//                 {/* Fullscreen Button */}
//                 <motion.button
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: isHovered ? 1 : 0 }}
//                   onClick={toggleFullscreen}
//                   className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-colors"
//                 >
//                   <FiMaximize2 className="w-5 h-5" />
//                 </motion.button>
//               </div>
//             ) : (
//               <Image
//                 src={project.imageUrl}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition-transform duration-700 group-hover:scale-110"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             )}

//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//             {/* Featured Badge */}
//             {project.featured && (
//               <motion.div
//                 initial={{ x: -100 }}
//                 animate={{ x: 0 }}
//                 className="absolute top-4 left-4 z-20"
//               >
//                 <Badge variant="warning" className="backdrop-blur-sm bg-yellow-500/90 text-white font-semibold">
//                   ⭐ Featured
//                 </Badge>
//               </motion.div>
//             )}
//           </div>

//           {/* Content Section */}
//           <div className="p-6 flex-grow flex flex-col">
//             {/* Title with Animated Underline */}
//             <motion.h3 
//               className="text-2xl font-bold mb-3 text-slate-900 dark:text-white relative inline-block"
//               whileHover={{ x: 5 }}
//             >
//               {project.title}
//               <motion.div
//                 className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-indigo-600"
//                 initial={{ width: 0 }}
//                 whileHover={{ width: '100%' }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.h3>

//             <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow line-clamp-3">
//               {project.description}
//             </p>

//             {/* Highlights */}
//             {project.highlights && project.highlights.length > 0 && (
//               <motion.div 
//                 className="mb-4 space-y-1"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.2 }}
//               >
//                 {project.highlights.slice(0, 2).map((highlight, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ x: -20, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.3 + i * 0.1 }}
//                     className="flex items-center text-sm text-slate-600 dark:text-slate-400"
//                   >
//                     <span className="text-primary-500 mr-2">✓</span>
//                     {highlight}
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}

//             {/* Tech Stack with Stagger Animation */}
//             <div className="flex flex-wrap gap-2 mb-4">
//               {project.technologies.slice(0, 5).map((tech, i) => (
//                 <motion.div
//                   key={tech}
//                   initial={{ scale: 0, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.1 * i, type: 'spring', stiffness: 200 }}
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                 >
//                   <Badge variant="primary" className="cursor-default">
//                     {tech}
//                   </Badge>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Action Buttons with Hover Effects */}
//             <div className="flex gap-3 mt-auto">
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() => window.open(project.githubUrl, '_blank')}
//                   className="w-full flex items-center justify-center gap-2 group/btn"
//                 >
//                   <FiGithub className="transition-transform group-hover/btn:rotate-12" />
//                   Code
//                 </Button>
//               </motion.div>
              
//               {project.liveUrl && (
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
//                   <Button
//                     variant="primary"
//                     size="sm"
//                     onClick={() => window.open(project.liveUrl, '_blank')}
//                     className="w-full flex items-center justify-center gap-2 group/btn relative overflow-hidden"
//                   >
//                     <motion.div
//                       className="absolute inset-0 bg-gradient-to-r from-primary-400 to-indigo-600"
//                       initial={{ x: '-100%' }}
//                       whileHover={{ x: 0 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                     <span className="relative z-10 flex items-center gap-2">
//                       <FiExternalLink className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
//                       Live Demo
//                     </span>
//                   </Button>
//                 </motion.div>
//               )}
//             </div>
//           </div>

//           {/* Animated Corner Accent */}
//           <motion.div
//             className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full"
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
//             transition={{ duration: 0.3 }}
//           />
//         </div>
//       </motion.div>

//       {/* Fullscreen Video Modal */}
//       <AnimatePresence>
//         {showFullscreen && project.videoUrl && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
//             onClick={toggleFullscreen}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               className="relative max-w-6xl w-full"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={toggleFullscreen}
//                 className="absolute -top-12 right-0 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
//               >
//                 <FiX className="w-6 h-6" />
//               </button>
              
//               <video
//                 src={project.videoUrl}
//                 controls
//                 autoPlay
//                 className="w-full rounded-lg shadow-2xl"
//               />
              
//               <div className="mt-4 text-white">
//                 <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
//                 <p className="text-slate-300">{project.description}</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }