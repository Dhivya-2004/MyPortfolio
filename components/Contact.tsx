"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "divyamsk21@gmail.com",
    href: "mailto:divyamsk21@gmail.com",
    color: "from-purple-600 to-pink-600",
    glow: "rgba(168,85,247,0.3)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sankarapuram, Kallakurichi",
    href: "#",
    color: "from-blue-600 to-cyan-600",
    glow: "rgba(6,182,212,0.3)",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Dhivya-2004",
    href: "https://github.com/dashboard",
    color: "from-gray-600 to-gray-800",
    glow: "rgba(107,114,128,0.3)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/divya-m2130",
    href: "https://www.linkedin.com/in/divya-m2130",
    color: "from-blue-700 to-blue-900",
    glow: "rgba(29,78,216,0.3)",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-sm text-primary mb-4">
            <Mail className="w-4 h-4" />
            Let&apos;s Connect
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold">
            Get In{" "}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have an opportunity, project, or just want to say hi? My inbox is always open!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="gradient-border p-px rounded-2xl">
              <div className="bg-card rounded-2xl p-8">
                <h3 className="text-xl font-display font-bold mb-2">Let&apos;s build something amazing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I&apos;m currently looking for full-time opportunities as a frontend or full-stack developer. 
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-muted-foreground">Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group gradient-border p-px rounded-xl block"
                  >
                    <div className="bg-card rounded-xl p-4 flex items-center gap-3 group-hover:bg-card/80 transition-colors duration-300">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-lg`}
                        style={{ boxShadow: `0 4px 16px ${item.glow}` }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium truncate">{item.value}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="gradient-border p-px rounded-2xl">
              <div className="bg-card rounded-2xl p-8">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm">
                      Thanks for reaching out. I&apos;ll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground" htmlFor="contact-name">
                          Name
                        </label>
                        <Input
                          id="contact-name"
                          placeholder="Your name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground" htmlFor="contact-email">
                          Email
                        </label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground" htmlFor="contact-subject">
                        Subject
                      </label>
                      <Input
                        id="contact-subject"
                        placeholder="What's this about?"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground" htmlFor="contact-message">
                        Message
                      </label>
                      <Textarea
                        id="contact-message"
                        placeholder="Tell me about your project or opportunity..."
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button
                      id="contact-submit"
                      type="submit"
                      variant="gradient"
                      size="lg"
                      className="w-full"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
