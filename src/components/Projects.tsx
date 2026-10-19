import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  demoLink: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'IntervueAI',
    description: 'Real-time mock interviews with AI, no forms or clicks just natural, personalized conversations.',
    category: 'AI / WEB',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    demoLink: '#',
    features: [
      'Advanced voice-to-text processing for natural conversation flow.',
      'AI-driven behavioral analysis and performance metrics.',
      'Customizable interview tracks for different technical roles.',
      'Instant feedback loops with actionable improvement tips.'
    ]
  },
  {
    id: 2,
    title: 'Blendy',
    description: 'A social app where you can connect in real-time, log in with one click, share moments, posts instantly.',
    category: 'SOCIAL / MOBILE',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
    demoLink: '#',
    features: [
      'Real-time socializing through high-speed data synchronization.',
      'One-click social authentication for rapid onboarding.',
      'Multimedia feed with instant post and moment sharing.',
      'Responsive design optimized for cross-platform mobile experiences.'
    ]
  },
  {
    id: 3,
    title: 'WATCHit',
    description: 'A video streaming app made for easy, personal entertainment and everything you love to binge.',
    category: 'STREAMING / WEB',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800&auto=format&fit=crop',
    demoLink: '#',
    features: [
      'High-fidelity video streaming with adaptive bitrate support.',
      'Personalized watchlists and category-based content discovery.',
      'User-friendly dashboard for managing binge-watching history.',
      'Optimized backend for seamless playback with minimal buffering.'
    ]
  },
  {
    id: 4,
    title: 'Leafchat',
    description: 'A chat app with a smooth, natural feel leafy UI, falling leaves, and calming sounds like an autumn breeze.',
    category: 'UI / UX / WEB',
    image: 'https://images.unsplash.com/photo-1544333346-64e4fe18274b?q=80&w=800&auto=format&fit=crop',
    demoLink: '#',
    features: [
      'Themed "Leafy" interface with organic UI/UX design principles.',
      'Ambient audio integration for a calming user experience.',
      'Real-time messaging with visual leaf-fall animations.',
      'Smooth, nature-inspired transitions between chat rooms.'
    ]
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-6 py-24 bg-[#0a0a0c] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Container with a fixed height - updated to 46.875rem for 750px */}
        <div className="relative w-full min-h-[46.875rem] bg-[#131521] border border-white/10 rounded-[2.5rem] overflow-hidden">
          <AnimatePresence mode="wait">
            {!activeProject ? (
              <motion.div
                key="grid"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project) => (
                  <div key={project.id} className="bg-[#0a0a0c]/50 border border-white/5 rounded-3xl p-6 flex flex-col">
                    <div className="aspect-video overflow-hidden rounded-2xl mb-6 bg-black">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="grow text-slate-400 text-sm mb-8">{project.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <a href={project.demoLink} className="text-[#4a9eff] text-sm font-semibold flex items-center gap-1.5 transition-colors hover:text-blue-300">
                        Live Demo <ExternalLink size={14} />
                      </a>
                      <button
                        onClick={() => setActiveProject(project)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-[#232635] hover:bg-[#2d3145] rounded-xl text-sm font-medium transition-all"
                      >
                        Details <ArrowRight size={14} className="text-slate-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[46.875rem]">
                {/* Image Panel - Using object-contain and padding to prevent zoom */}
                <div className="relative h-64 lg:h-full bg-black/40 flex items-center justify-center p-8 lg:p-12">
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title} 
                    className="w-full h-full object-contain rounded-xl shadow-2xl"
                  />
                  <button
                    onClick={() => setActiveProject(null)}
                    className="absolute top-8 left-8 flex items-center gap-2 px-5 py-2.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-all"
                  >
                    <ArrowLeft size={16} /> Back to Projects
                  </button>
                </div>

                <div className="p-10 lg:p-16 flex flex-col justify-center bg-[#131521]">
                  <span className="text-blue-400 text-xs font-black tracking-widest uppercase mb-2">Project Spotlight</span>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{activeProject.title}</h3>
                  <p className="text-slate-400 text-lg mb-10 leading-relaxed">{activeProject.description}</p>

                  <h4 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6">Key Technical Features</h4>
                  <ul className="space-y-4 mb-12">
                    {activeProject.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4 text-slate-300">
                        <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4 pt-8 border-t border-white/5">
                    <a href={activeProject.demoLink} className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-900/20">
                      Visit Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}