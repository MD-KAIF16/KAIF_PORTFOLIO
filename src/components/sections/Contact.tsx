"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Calendar, Download, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import MagneticButton from "@/components/MagneticButton";

const contactLinks = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    value: "mdkaif.1608@gmail.com",
    href: "mailto:mdkaif.1608@gmail.com",
    gradient: "hover:bg-blue-500/10 hover:border-blue-500/30"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    title: "LinkedIn",
    value: "MD KAIF",
    href: "https://www.linkedin.com/in/md-kaif-0aa874254",
    gradient: "hover:bg-blue-600/10 hover:border-blue-600/30"
  },
  {
    icon: <Github className="w-5 h-5" />,
    title: "GitHub",
    value: "MD-KAIF16",
    href: "https://github.com/MD-KAIF16",
    gradient: "hover:bg-neutral-600/10 hover:border-neutral-500/30"
  }
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus('idle');

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-40 overflow-hidden text-white">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Contact.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-2xl mx-auto text-xl font-light"
          >
            Let's discuss architecture, AI systems, or your next major product.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.2)]">
              <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-mono text-neutral-400">Name</label>
                    <input 
                      type="text" 
                      name="user_name"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-colors text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-mono text-neutral-400">Email</label>
                    <input 
                      type="email" 
                      name="user_email"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-colors text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-neutral-400">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-colors text-white resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <MagneticButton 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-black rounded-xl font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow"
                >
                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full" />
                  ) : (
                    <>Send Communication <Send className="w-4 h-4" /></>
                  )}
                </MagneticButton>

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5" /> Message successfully transmitted.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5" /> Transmission failed. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Links Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {contactLinks.map((link) => (
              <a 
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-6 rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/10 transition-all duration-300 group ${link.gradient}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
                  {link.icon}
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-white mb-1">{link.title}</h4>
                  <p className="text-neutral-400 font-light">{link.value}</p>
                </div>
              </a>
            ))}

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <MagneticButton 
                onClick={() => window.open('https://calendly.com', '_blank')}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-colors"
              >
                <Calendar className="w-6 h-6 text-neutral-400" />
                <span className="text-sm font-medium">Schedule Call</span>
              </MagneticButton>
              <MagneticButton 
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = "/MD_KAIF_Resume.pdf";
                  a.download = "MD_KAIF_Resume.pdf";
                  a.click();
                }}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] transition-colors"
              >
                <Download className="w-6 h-6 text-neutral-400" />
                <span className="text-sm font-medium">Get Resume</span>
              </MagneticButton>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
