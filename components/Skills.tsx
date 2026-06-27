"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Layers, Database, Cloud, Code, Globe, Server, Braces } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    name: "Next.js",
    icon: Braces,
    level: 90,
    color: "from-white to-gray-300",
    glow: "rgba(255,255,255,0.2)",
    category: "Frontend",
  },
  {
    name: "React",
    icon: Layers,
    level: 88,
    color: "from-cyan-400 to-blue-500",
    glow: "rgba(6,182,212,0.3)",
    category: "Frontend",
  },
  {
    name: "AWS Cloud",
    icon: Cloud,
    level: 72,
    color: "from-orange-400 to-amber-500",
    glow: "rgba(251,146,60,0.3)",
    category: "Cloud",
  },
  {
    name: "Java",
    icon: Server,
    level: 80,
    color: "from-red-400 to-orange-500",
    glow: "rgba(248,113,113,0.3)",
    category: "Backend",
  },
  {
    name: "HTML",
    icon: Globe,
    level: 95,
    color: "from-orange-500 to-red-500",
    glow: "rgba(239,68,68,0.3)",
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: Code,
    level: 90,
    color: "from-blue-500 to-indigo-500",
    glow: "rgba(99,102,241,0.3)",
    category: "Frontend",
  },
  {
    name: "SQL",
    icon: Database,
    level: 82,
    color: "from-purple-400 to-violet-500",
    glow: "rgba(167,139,250,0.3)",
    category: "Database",
  },
];

const categories = ["All", "Frontend", "Backend", "Cloud", "Database"];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-sm text-primary mb-4">
            <Cpu className="w-4 h-4" />
            Tech Stack
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold">
            Skills &amp;{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Technologies I&apos;ve worked with and continue to grow expertise in
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group"
              >
                <div
                  className="gradient-border p-px rounded-2xl h-full cursor-default"
                  style={{ "--glow-color": skill.glow } as React.CSSProperties}
                >
                  <div className="bg-card rounded-2xl p-6 h-full flex flex-col gap-4 group-hover:bg-card/80 transition-colors duration-300">
                    {/* Icon */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} p-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        style={{ boxShadow: `0 8px 32px ${skill.glow}` }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge variant="gradient" className="text-xs">{skill.category}</Badge>
                    </div>

                    {/* Name */}
                    <div>
                      <h3 className="font-display font-semibold text-lg">{skill.name}</h3>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-muted-foreground">Proficiency</span>
                        <span className="text-xs font-semibold text-primary">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: i * 0.08 + 0.3, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
