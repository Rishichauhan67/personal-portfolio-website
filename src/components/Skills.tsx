import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPython,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiAngular,
  SiCss,
  SiNpm,
  SiDocker,
  SiPostman,
  SiJira,
  SiJquery,
  SiNetapp,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Web DEVELOPMENT",
    skills: "HTML, CSS, JavaScript, React, Tailwind",
    border: "border-cyan-500/20",
  },
  {
    title: "BACKEND And Database",
    skills: "MySQL, MongoDB",
    border: "border-purple-500/20",
  },
  {
    title: "TOOLS & LEARNING",
    skills: "Git, GitHub, VS Code, Figma basics",
    border: "border-slate-500/20",
  },
];

// Skills Array
const techStack = [
  { icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
  { icon: SiCss, name: "CSS3", color: "text-blue-500" },
  { icon: SiJavascript, name: "JS", color: "text-yellow-400" },
  { icon: SiReact, name: "React JS", color: "text-cyan-400" },
  { icon: SiPython, name: "Python", color: "text-blue-500" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-400" },
  { icon: SiPostgresql, name: "Postgre SQL", color: "text-blue-400" },
  { icon: SiMysql, name: "My SQL", color: "text-blue-500" },
  { icon: SiAngular, name: "Angular", color: "text-red-600" },
  { icon: SiJquery, name: "Jquery", color: "text-red-600" },
  { icon: SiNetapp , name: "Rest API", color: "text-blue-600" },
];

// Tools Array (The icons you were missing)
const toolStack = [
  { icon: SiGit, name: "Git", color: "text-orange-600" },
  { icon: SiGithub, name: "GitHub", color: "text-slate-900 dark:text-white" },
  { icon: SiFigma, name: "Figma", color: "text-purple-500" },
  { icon: SiDocker, name: "Docker", color: "text-blue-400" },
  { icon: SiPostman, name: "Postman", color: "text-orange-500" },
  { icon: SiJira, name: "Jira", color: "text-blue-600" },
  
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section
      id="skills"
      className="px-6 py-24 bg-white dark:bg-[#0a0a0c] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Technical Info */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors">
            Technical Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg transition-colors">
            My expertise bridges the gap between creative vision and technical
            execution.
          </p>

          <div className="space-y-4">
            {skillCategories.map((cat) => (
              <div
                key={cat.title}
                className={`p-6 bg-slate-50 dark:bg-slate-900 border ${cat.border} rounded-2xl transition-colors`}
              >
                <h4 className="text-[10px] uppercase font-black tracking-widest mb-2 text-slate-400">
                  {cat.title}
                </h4>
                <p className="font-bold text-xl text-slate-800 dark:text-slate-100">
                  {cat.skills}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Toggled Grid Container */}
        <div className="relative p-8 rounded-[2.5rem] bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 w-full h-150 flex flex-col overflow-hidden">
          {/* Toggle Button (Ref: image_026783.png) */}
          <div className="flex justify-center mb-10">
            <div className="bg-white dark:bg-slate-800 p-1 rounded-full flex relative w-64 shadow-inner border border-slate-200 dark:border-slate-700">
              <motion.div
                className="absolute inset-y-1 bg-[#E67E43] rounded-full shadow-md"
                animate={{ x: activeTab === "skills" ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ width: "calc(50% - 4px)", cursor: "pointer" }}
              />
              <button
                style={{ cursor: "pointer" }}
                onClick={() => setActiveTab("skills")}
                className={`flex-1 py-2 text-xs font-bold z-10 transition-colors duration-300 ${activeTab === "skills" ? "text-white" : "text-slate-500"}`}
              >
                Skills
              </button>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => setActiveTab("tools")}
                className={`flex-1 py-2 text-xs font-bold z-10 transition-colors duration-300 ${activeTab === "tools" ? "text-white" : "text-slate-500"}`}
              >
                Tools
              </button>
            </div>
          </div>

          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 ml-2">
            {activeTab === "skills"
              ? "Tech Stack Spotlight"
              : "Essential Tools Spotlight"}
          </h3>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-4 gap-4"
            >
              {(activeTab === "skills" ? techStack : toolStack).map((item) => (
                <div
                  key={item.name}
                  className="aspect-square flex flex-col items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 hover:scale-105 transition-transform"
                >
                  <item.icon className={`text-3xl mb-2 ${item.color}`} />
                  <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
