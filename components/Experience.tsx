"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Full Stack Web Development Intern",
    company: "Edutantr",
    location: "Bangalore, Karnataka",
    duration: "3 Months",
    period: "Jan – Apr 2026",
    type: "Full Stack",
    color: "from-purple-600 to-pink-600",
    glow: "hsl(263,70%,65%,0.3)",
    highlights: [
      "Built end-to-end web features using React and Node.js",
      "Collaborated on RESTful API design and integration",
      "Worked with SQL databases for data management",
      "Participated in agile development cycles",
    ],
    tech: ["React", "Node.js", "SQL", "REST APIs", "Git"],
  },
  {
    role: "Frontend Web Development Intern",
    company: "NextSkill Technologies",
    location: "Coimbatore, Tamil Nadu",
    duration: "1 Month",
    period: "Jul – Aug 2024",
    type: "Frontend",
    color: "from-blue-600 to-cyan-600",
    glow: "hsl(200,80%,65%,0.3)",
    highlights: [
      "Developed responsive UI components using HTML, CSS, JavaScript",
      "Gained hands-on experience with modern frontend frameworks",
      "Implemented cross-browser compatible designs",
      "Worked on user experience improvements",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-sm text-primary mb-4">
            <Briefcase className="w-4 h-4" />
            Work Experience
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold">
            My{" "}
            <span className="gradient-text">Internships</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Real-world experience that shaped my development journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent origin-top hidden sm:block"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 + 0.2 }}
                className="sm:pl-20 relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.2 + 0.4 }}
                  className={`absolute left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg hidden sm:flex`}
                  style={{ boxShadow: `0 0 20px ${exp.glow}` }}
                >
                  <Briefcase className="w-4 h-4 text-white" />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="group"
                >
                  <div className="gradient-border p-px rounded-2xl">
                    <div className="bg-card rounded-2xl p-8 transition-all duration-300 group-hover:bg-card/80">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant="gradient"
                              className={`bg-gradient-to-r ${exp.color} text-white border-0 text-xs`}
                            >
                              {exp.type}
                            </Badge>
                            <Badge variant="skill" className="text-xs">
                              <Star className="w-3 h-3 mr-1" />
                              {exp.duration}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-display font-bold">{exp.role}</h3>
                          <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary/70" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary/70" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-6">
                        {exp.highlights.map((h, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: i * 0.2 + j * 0.05 + 0.5 }}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <ArrowRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            {h}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <Badge key={t} variant="skill" className="text-xs">{t}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
