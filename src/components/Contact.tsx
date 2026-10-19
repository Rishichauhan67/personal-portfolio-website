import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20  dark:bg-[#dfcdcd]  bg-background text-on-surface transition-colors duration-300" >
      <div className="max-w-6xl mx-auto ">
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left: Contact Details */}
          <div className='transition-colors'>
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Feel free to Contact Me
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase">Email:</p>
                  <a href="mailto:your.email@example.com" className=" hover:text-blue-600 transition-colors">
                    rishikeshc216@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4"> 
                <div className="p-3 bg-green-50 text-green-600 rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase">Phone:</p>
                  <a href="tel:+910000000000" className=" hover:text-green-600 transition-colors">
                    +91 8080057198
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-red-50 text-red-600 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400  uppercase">Address:</p>
                  <p className="font-medium hover:text-red-600">Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4 border-amber-950">
              <a  href="https://github.com/Rishichauhan67?tab=repositories" className="p-2 text-slate-400  hover:text-slate-900 transition-colors"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/devrishichauhan/" className="p-2 text-slate-400  hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>

          {/* Right: Simple Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 2, y: 0 }}
            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-colors"
          >
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none" 
                  placeholder="Your message..."
                />
              </div>
              <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}