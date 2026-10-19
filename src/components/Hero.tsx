import { motion } from "motion/react";
import { Rocket } from "lucide-react";


import { useEffect, useState } from "react";

const roles = [
  "Web Developer",
  "Creative Developer",
  "Frontend Developer",
  "UI/UX Designer",
];
export function AnimatedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = deleting ? 45 : 90;

    if (!deleting && text === currentRole) {
      delay = 1500;
    } else if (deleting && text === "") {
      delay = 300;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === currentRole) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (deleting) {
        setText(currentRole.substring(0, text.length - 1));
      } else {
        setText(currentRole.substring(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  return <>{text}</>;
}


export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden mt-16">
      <div className="max-w-7xl w-full relative z-10 text-center md:text-left grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7"
        >
          <div className="inline-block px-3 py-1 bg-accent/20 text-accent text-[10px] uppercase font-bold tracking-widest rounded-md mb-6">
            INTRO
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-on-surface mb-6 leading-[1.1] tracking-tight">
            I'm <span className="text-primary">Rishikesh</span>,<br />
            a{" "}
            <span className="text-primary inline-block md:text-4x1">
              <AnimatedRole />
            </span>
            <span className="text-black animate-pulse">|</span>
          </h1>

          <div className="space-y-4 max-w-2xl mb-10">
            <p className="text-lg text-on-surface/80 leading-relaxed font-medium">
              Building web applications and learning AI for the modern web.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="bg-on-surface text-background px-8 py-3.5 rounded-full font-bold text-sm tracking-tight transition-all shadow-lg"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(var(--primary), 0.05)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-surface border border-on-surface/10 text-on-surface px-8 py-3.5 rounded-full font-bold text-sm tracking-tight transition-all"
            >
              Methodology
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:col-span-5 hidden md:block"
        >
          <div className="glass-panel p-2 group overflow-hidden border-white/10">
            <motion.img
              initial={{ scale: 1.05, filter: "grayscale(1%)" }}
              animate={{ scale: 1.05, filter: "grayscale(1%)" }}
              // whileHover={{ scale: 1.05, filter: 'grayscale(1%)' }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-400 rounded-[1.9rem]"
              alt="Friendly Developer Robot Avatar"
              src="https://thumbs.dreamstime.com/b/programmer-working-program-web-developer-coding-computer-screen-code-script-open-windows-coder-engineer-vector-208530984.jpg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
