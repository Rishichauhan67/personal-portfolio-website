// import { motion } from 'motion/react';

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="w-full border-t border-on-surface/10 mt-auto bg-on-surface/5 backdrop-blur-2xl transition-colors duration-300">
//       <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 max-w-7xl mx-17 gap-8">
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-on-surface-variant font-bold text-[10px] uppercase tracking-[0.4em]"
//         >
//           TECH_PORTFOLIO
//         </motion.div>

//         <div className="flex flex-wrap justify-center gap-13 postion-relative lef">
//           {['LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
//             <motion.a
//               key={social}
//               href="https://www.linkedin.com/in/devrishichauhan/"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               whileHover={{ color: 'var(--primary)' }}
//               className="text-on-surface-variant transition-colors duration-200 text-[10px] uppercase tracking-[0.2em] font-bold"
//             >
//               {social}
//             </motion.a>

//           ))}
//           <motion.a
//             href="#"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             whileHover={{ color: 'var(--on-surface)' }}
//             className="text-primary transition-colors duration-200 text-[10px] uppercase tracking-[0.2em] font-bold">
//             Back to Top
//           </motion.a>
//         </div>

//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em] font-medium text-center md:text-right"
//         >
//           © {currentYear} ALL RIGHTS RESERVED. DESIGNED BY TECH_PORTFOLIO
//         </motion.div>
//       </div>
//     </footer>
//   );
// }
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/devrishichauhan/"
    },
    {
      name: "GitHub",
      url: "https://github.com/Rishichauhan69"
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/your-username"
    }
  ];

  return (
    <footer className="w-full border-t border-on-surface/10 mt-auto bg-on-surface/5 backdrop-blur-2xl transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 max-w-7xl mx-auto gap-8">

        {/* Logo / Name */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-on-surface-variant font-bold text-[10px] uppercase tracking-[0.4em]"
        >
          TECH_PORTFOLIO
        </motion.div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 relative">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, color: 'var(--primary)' }}
              className="text-on-surface-variant transition-all duration-200 text-[10px] uppercase tracking-[0.2em] font-bold"
            >
              {social.name}
            </motion.a>
          ))}

          {/* Back to top */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ color: 'var(--on-surface)' }}
            className="text-primary transition-colors duration-200 text-[10px] uppercase tracking-[0.2em] font-bold"
          >
            Back to Top
          </motion.a>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-on-surface-variant text-[10px] uppercase tracking-[0.2em] font-medium text-center md:text-right"
        >
          © {currentYear} ALL RIGHTS RESERVED. DESIGNED BY TECH_PORTFOLIO
        </motion.div>

      </div>
    </footer>
  );
}