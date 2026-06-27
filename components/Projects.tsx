"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FolderOpen, ExternalLink, Github, ShoppingCart, Hospital, Activity, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-featured online shopping platform with product listings, cart management, user authentication, payment gateway integration, and order tracking.",
    icon: ShoppingCart,
    color: "from-purple-600 to-pink-600",
    glow: "hsl(263,70%,65%,0.3)",
    tech: ["Next.js", "React", "Node.js", "SQL", "CSS"],
    category: "Full Stack",
    highlights: [
      "Product catalog with search & filters",
      "User auth & session management",
      "Shopping cart & checkout flow",
      "Order management dashboard",
    ],
    gradient: "from-purple-600/20 via-pink-600/10 to-transparent",
  },
  {
    title: "Hospital Inpatient Management System",
    description:
      "A comprehensive healthcare management system for tracking inpatient records, medical history, bed allocation, doctor assignments, and billing.",
    icon: Hospital,
    color: "from-blue-600 to-cyan-600",
    glow: "hsl(200,80%,65%,0.3)",
    tech: ["Java", "SQL", "HTML", "CSS", "JavaScript"],
    category: "Web App",
    highlights: [
      "Patient registration & records",
      "Bed & ward management",
      "Doctor & nurse assignment",
      "Billing & discharge summary",
    ],
    gradient: "from-blue-600/20 via-cyan-600/10 to-transparent",
  },
  {
    title: "LoRa Athlete Health Monitoring & Sports Recommendation",
    description:
      "An IoT-based system using LoRa technology to monitor athletes' health metrics in real-time and provide personalized sports recommendations using ML algorithms.",
    icon: Activity,
    color: "from-green-500 to-emerald-600",
    glow: "hsl(150,70%,50%,0.3)",
    tech: ["IoT", "LoRa", "Python", "ML", "React", "AWS"],
    category: "IoT + ML",
    highlights: [
      "Real-time health metric monitoring",
      "LoRa-based long-range communication",
      "ML-powered sports recommendations",
      "Dashboard with live data visualization",
    ],
    gradient: "from-green-600/20 via-emerald-600/10 to-transparent",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-sm text-primary mb-4">
            <FolderOpen className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Real-world solutions I&apos;ve built from concept to deployment
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="gradient-border p-px rounded-2xl h-full">
                  <div className="relative bg-card rounded-2xl p-7 h-full flex flex-col overflow-hidden">
                    {/* Background gradient on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    />

                    {/* Icon + category */}
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                        style={{ boxShadow: `0 8px 32px ${project.glow}` }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <Badge variant="gradient" className="text-xs">{project.category}</Badge>
                    </div>

                    {/* Title & description */}
                    <div className="relative z-10 flex-1">
                      <h3 className="text-xl font-display font-bold mb-3 group-hover:gradient-text transition-all">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-1.5 mb-6">
                        {project.highlights.map((h, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: i * 0.1 + j * 0.05 + 0.5 }}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} shrink-0`}
                            />
                            {h}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="skill" className="text-xs">{t}</Badge>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 relative z-10">
                      <Button
                        id={`project-github-${i}`}
                        variant="outline-gradient"
                        size="sm"
                        className="flex-1"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                      <Button
                        id={`project-demo-${i}`}
                        variant="gradient"
                        size="sm"
                        className="flex-1"
                      >
                        <ArrowUpRight className="w-4 h-4 mr-1" />
                        Demo
                      </Button>
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
