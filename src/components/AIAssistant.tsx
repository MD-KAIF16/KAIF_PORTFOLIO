"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Minimize2 } from "lucide-react";

interface Message {
  id: string;
  type: "bot" | "user";
  text: string;
}

// Simple knowledge base for the chatbot
const knowledgeBase = [
  {
    keywords: ["who", "about", "kaif", "md kaif", "intro"],
    response: "MD KAIF is a Computer Science Engineering student, .NET Full Stack Developer, and AI Engineer. He specializes in ASP.NET Core, Angular, and building enterprise-grade applications, as well as AI solutions."
  },
  {
    keywords: ["skill", "tech", "stack", "know", "angular", "net", "c#", "react"],
    response: "Kaif's technical expertise includes .NET Full Stack (C#, ASP.NET Core), Angular, SQL Server, Entity Framework, REST APIs, and Deep Learning (Python, TensorFlow, CNNs). He is also proficient in object-oriented programming and DSA."
  },
  {
    keywords: ["project", "work", "portfolio", "build", "booking", "hotel", "lung", "medical"],
    response: "Kaif's major projects include a Full Stack Hotel Booking System built with .NET Core and an AI-Powered Lung Disease Detection system using a Custom CNN with Grad-CAM explainability."
  },
  {
    keywords: ["contact", "email", "hire", "reach", "message", "linkedin", "github"],
    response: "You can reach Kaif via email at mdkaif.1608@gmail.com, or connect on LinkedIn (https://www.linkedin.com/in/md-kaif-0aa874254). His GitHub is https://github.com/MD-KAIF16."
  },
  {
    keywords: ["education", "study", "college", "degree", "cs", "computer science", "training", "hcltech"],
    response: "He is currently a Computer Science Engineering student and has completed rigorous training programs, including HCLTech Full Stack Training and Core Java Training."
  },
  {
    keywords: ["resume", "cv", "download"],
    response: "You can download Kaif's resume by clicking the 'Download Resume' button in the Contact or Hero section!"
  }
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", type: "bot", text: "Hello! I'm Kaif's AI Assistant. Ask me anything about his skills, projects, or experience." }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessageText = input.trim();
    const userMessage: Message = { id: Date.now().toString(), type: "user", text: userMessageText };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Process response based on knowledge base
    setTimeout(() => {
      let botResponse = "I'm still learning, but I can tell you that MD KAIF is an exceptional .NET Full Stack and AI Engineer. Would you like to know about his projects, skills, or how to contact him?";
      
      const lowerInput = userMessageText.toLowerCase();
      
      for (const entry of knowledgeBase) {
        if (entry.keywords.some(keyword => lowerInput.includes(keyword))) {
          botResponse = entry.response;
          break;
        }
      }

      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: botResponse
      }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform z-50 group"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="absolute right-full mr-4 bg-neutral-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-neutral-800">
              Ask AI Assistant
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[380px] h-[600px] max-h-[80vh] bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-neutral-800 bg-neutral-900 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">AI Assistant</h3>
                  <p className="text-xs text-neutral-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-neutral-400 hover:text-white transition-colors rounded-lg hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex items-start gap-3 ${msg.type === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.type === "user" ? "bg-white text-black" : "bg-neutral-800 text-blue-400"
                  }`}>
                    {msg.type === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={`p-3 rounded-2xl max-w-[80%] text-sm ${
                    msg.type === "user" 
                      ? "bg-white text-black rounded-tr-none" 
                      : "bg-neutral-900 text-neutral-200 border border-neutral-800 rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 text-blue-400 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 rounded-tl-none flex gap-1">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-neutral-500 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-neutral-500 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-neutral-500 rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 border-t border-neutral-800 bg-neutral-900">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-black border border-neutral-800 rounded-full pl-4 pr-12 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white text-black rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
