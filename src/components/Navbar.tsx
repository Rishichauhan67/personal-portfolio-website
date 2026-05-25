import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initial check for theme
    const isDarkStored = localStorage.getItem('theme') === 'dark' || 
                        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkStored);
    if (isDarkStored) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/20 backdrop-blur-2xl transition-colors duration-300">
      <div className="flex justify-between items-center px-8 md:px-12 py-4 max-w-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold text-on-surface tracking-tight"
        >
          TECH_PORTFOLIO
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-on-surface/60 hover:text-primary transition-colors text-sm font-medium"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <motion.button 
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(var(--primary), 0.5)' }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-xl text-on-surface-variant hover:text-primary transition-all cursor-pointer bg-black/5 dark:bg-white/5"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={17} />}
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-on-surface text-background px-5 py-2 rounded-full font-semibold text-sm transition-all flex items-center gap-2 shadow-sm">
            <Download size={14} />
            <a href="https://drive.google.com/file/d/12uUTWTe2wMwDHwg8Fkn7yEC-ytkJzQ3b/view?usp=sharing"><span>Resume</span>  </a>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
