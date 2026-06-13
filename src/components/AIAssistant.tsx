"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, User, Sparkles } from "lucide-react";

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string | React.ReactNode;
};

const KNOWLEDGE_BASE = [
  {
    keywords: ["who is", "about kaif", "who are you", "md kaif"],
    response: "MD KAIF is a Software Engineer specializing in full-stack enterprise development and AI. He is currently pursuing a B.Tech in CSE at United College of Engineering & Research (graduating May 2026) and working as an AI & Digital Twin Intern at DoppelIQ."
  },
  {
    keywords: ["education", "university", "graduation", "college", "degree"],
    response: "He is pursuing a B.Tech in Computer Science Engineering at United College of Engineering & Research, graduating in May 2026."
  },
  {
    keywords: ["internship", "doppeliq", "intern", "current job"],
    response: "He is currently an AI & Digital Twin Intern at DoppelIQ (started June 2026). He works on AI-driven Consumer Twin and Digital Twin technologies, enterprise AI solutions, and decision intelligence systems."
  },
  {
    keywords: ["skills", "technologies", "tech stack", "languages", "know"],
    response: "His core skills include: ASP.NET Core, Angular, Next.js, React, TypeScript, SQL Server, Prisma, Entity Framework, REST APIs, Python, Deep Learning, AI, Machine Learning, and DSA."
  },
  {
    keywords: ["backend"],
    response: "For backend development, he specializes in ASP.NET Core, SQL Server, Entity Framework, REST APIs, and Prisma."
  },
  {
    keywords: ["frontend"],
    response: "For frontend development, he specializes in Angular, Next.js, React, TypeScript, and modern CSS frameworks like Tailwind and GSAP."
  },
  {
    keywords: ["ai projects", "machine learning", "deep learning", "ai "],
    response: "He built an AI-Powered Lung Disease Detection System using Python, Deep Learning, ResNet101, and Grad-CAM for explainability. He also works on Enterprise AI at his DoppelIQ internship."
  },
  {
    keywords: ["placementpilot", "placement pilot"],
    response: (
      <>
        <strong>PlacementPilot AI</strong> is an EdTech / Productivity platform built with Next.js, React, TypeScript, Prisma, NextAuth, and Zustand. It serves as a placement preparation ecosystem. 
        <br/><br/>
        GitHub: <a href="https://github.com/MD-KAIF16/PlacementPilot" target="_blank" className="text-blue-400 hover:underline">View Source</a>
      </>
    )
  },
  {
    keywords: ["prayag hype", "prayaghype"],
    response: (
      <>
        <strong>Prayag Hype</strong> is a business promotion and city discovery platform built with Next.js, TypeScript, GSAP, and Framer Motion. 
        <br/><br/>
        Live Demo: <a href="https://prayag-hype.vercel.app" target="_blank" className="text-blue-400 hover:underline">prayag-hype.vercel.app</a>
      </>
    )
  },
  {
    keywords: ["hotel booking", "hotel"],
    response: "He built a Full Stack Hotel Booking System using ASP.NET Core, Angular, SQL Server, and Entity Framework. It features JWT authentication, caching, and an optimized SQL schema."
  },
  {
    keywords: ["lung disease", "lung", "resnet"],
    response: "He developed a custom ResNet101 computer vision pipeline for AI-Powered Lung Disease Detection, capable of providing actionable medical insights with robust Grad-CAM explainability."
  },
  {
    keywords: ["projects", "built", "portfolio"],
    response: (
      <ul className="list-disc pl-4 space-y-1">
        <li><strong>Full Stack Hotel Booking System</strong> (.NET, Angular)</li>
        <li><strong>AI-Powered Lung Disease Detection</strong> (Python, ResNet101)</li>
        <li><strong>PlacementPilot AI</strong> (Next.js, Prisma)</li>
        <li><strong>Prayag Hype</strong> (Next.js, GSAP)</li>
      </ul>
    )
  },
  {
    keywords: ["contact", "email", "github", "linkedin", "hire", "reach"],
    response: (
      <div className="flex flex-col gap-2">
        <a href="mailto:mdkaif.1608@gmail.com" className="text-blue-400 hover:underline">mdkaif.1608@gmail.com</a>
        <a href="https://github.com/MD-KAIF16" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
        <a href="https://www.linkedin.com/in/md-kaif-0aa874254" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a>
      </div>
    )
  }
];

const QUICK_ACTIONS = ["About Kaif", "Projects", "Skills", "Internship", "Contact"];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm MD KAIF's AI Assistant. How can I help you navigate his portfolio today?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const getResponse = (query: string): string | React.ReactNode => {
    const normalizedQuery = query.toLowerCase();
    
    for (const entry of KNOWLEDGE_BASE) {
      if (entry.keywords.some(kw => normalizedQuery.includes(kw))) {
        return entry.response;
      }
    }
    
    return "I don't have information about that yet. Please try asking about his skills, projects, internship, or contact info.";
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: "user", content: text };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate network delay for premium feel
    setTimeout(() => {
      const responseContent = getResponse(text);
      const assistantMessage: Message = { 
        id: (Date.now() + 1).toString(), 
        role: "assistant", 
        content: responseContent 
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 group"
          >
            <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-[100] w-[350px] max-h-[600px] h-[70vh] rounded-2xl bg-neutral-900/80 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Portfolio Assistant</h3>
                  <p className="text-xs text-blue-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex items-start gap-2 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center mt-1 ${msg.role === "user" ? "bg-white/10" : "bg-blue-500/20 text-blue-400"}`}>
                      {msg.role === "user" ? <User className="w-3 h-3 text-neutral-300" /> : <Bot className="w-3 h-3" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${
                      msg.role === "user" 
                        ? "bg-blue-600 text-white rounded-tr-sm" 
                        : "bg-white/5 text-neutral-200 rounded-tl-sm border border-white/5"
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 max-w-[85%]">
                    <div className="w-6 h-6 shrink-0 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Bot className="w-3 h-3" />
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 rounded-tl-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length < 3 && !isTyping && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {QUICK_ACTIONS.map(action => (
                  <button
                    key={action}
                    onClick={() => handleSend(action)}
                    className="text-[10px] px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-3 border-t border-white/10 bg-black/20">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex items-center gap-2 relative"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about my skills or projects..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full pl-4 pr-10 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-1 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
