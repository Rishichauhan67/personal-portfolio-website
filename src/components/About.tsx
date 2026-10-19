import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Code, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="px-6 py-20 bg-on-surface/5 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-12 border-on-surface/5"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
              <BookOpen size={20} />
            </div>
            <h2 className="text-2xl font-bold text-on-surface tracking-tight uppercase">Summary</h2>
          </div>
          
          <div className="space-y-10">
            <p className="text-on-surface-variant text-lg leading-relaxed">
              I am a computer science student with a strong interest in building web applications that are both functional and visually pleasing. My journey began with HTML and CSS, and I’ve since progressed into the React ecosystem, focusing on clean code and reliable performance.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                  <Code size={16} /> What I Do
                </div>
                <p className="text-on-surface-variant/80 text-sm leading-relaxed">
                  I build responsive frontends using React and Typescript, and I'm currently learning more about backend integration with Node.js and basic database management.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider">
                  <Lightbulb size={16} /> My Goal 
                </div>
                <p className="text-on-surface-variant/80 text-sm leading-relaxed">
                  My current goal is to bridge the gap between academic theory and practical software engineering by building real world projects and contributing to open-source tools.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
