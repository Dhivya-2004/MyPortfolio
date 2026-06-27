"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar, Building2, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-sm text-primary mb-4">
            <User className="w-4 h-4" />
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold">
            Crafting Digital{" "}
            <span className="gradient-text">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="gradient-border p-px rounded-2xl">
              <div className="bg-card rounded-2xl p-8">
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  I&apos;m a passionate full-stack developer and B.Tech IT graduate from 
                  <strong className="text-foreground"> Anna University</strong>. I love 
                  transforming complex problems into elegant, user-friendly web experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  With hands-on experience from internships at{" "}
                  <strong className="text-foreground">NextSkill Technologies</strong> and{" "}
                  <strong className="text-foreground">Edutantr</strong>, I&apos;ve built 
                  everything from pixel-perfect frontends to robust full-stack applications.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Currently exploring cloud architecture with AWS and building 
                  innovative projects that solve real-world problems.
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/50">
                  {[
                    { label: "Projects", value: "3+" },
                    { label: "Internships", value: "2" },
                    { label: "Technologies", value: "6+" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-display font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location badge */}
            <div className="flex items-center gap-3 px-5 py-3 glass rounded-xl border border-border/50 w-fit">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                Sankarapuram, Kallakurichi, Tamil Nadu
              </span>
            </div>
          </motion.div>

          {/* Education card */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="gradient-border p-px rounded-2xl h-full">
              <div className="bg-card rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold">Education</h3>
                </div>

                <div className="relative pl-6 border-l-2 border-primary/20">
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  <div className="space-y-3">
                    <Badge variant="skill" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      2020 – 2024
                    </Badge>

                    <h4 className="text-lg font-semibold font-display">
                      B.Tech Information Technology
                    </h4>

                    <div className="flex items-start gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4 mt-0.5 shrink-0 text-primary/70" />
                      <span className="text-sm">
                        University College of Engineering, BIT Campus
                      </span>
                    </div>

                    <div className="flex items-start gap-2 text-muted-foreground">
                      <GraduationCap className="w-4 h-4 mt-0.5 shrink-0 text-primary/70" />
                      <span className="text-sm">Anna University, Trichy</span>
                    </div>

                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      Studied core computer science fundamentals, web technologies, 
                      databases, and software engineering practices. Developed 
                      multiple real-world projects during coursework.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {["Data Structures", "DBMS", "Web Tech", "Cloud Computing", "OS"].map((sub) => (
                        <Badge key={sub} variant="gradient" className="text-xs">{sub}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
