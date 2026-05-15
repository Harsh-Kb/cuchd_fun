"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, Ghost, Flame, Code2, Map, Activity, 
  MessageSquare, Calendar, MessageCircle,
  ChevronRight, Sparkles, Cpu, Fingerprint
} from "lucide-react";

const statuses = [
  "System Status: 74.9% Attendance... 🔴",
  "Server: Powered by Maggi 🍜",
  "Compiling... 404 Sleep Not Found 💤",
  "WiFi: Connected, No Internet 🌐",
  "Hostel Warden: Active 🚨",
  "Brain.exe has stopped working 🧠",
  "Debugging ESP32... still crying 🤖",
];

const Ticker = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % statuses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#E60000]/10 border-b border-[#E60000]/20 py-2 flex items-center justify-center overflow-hidden">
      <motion.p
        key={index}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="text-[#E60000] font-mono text-xs sm:text-sm flex items-center gap-2"
      >
        <Terminal size={14} />
        {statuses[index]}
      </motion.p>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-cu-black selection:bg-[#E60000] selection:text-white relative pb-20">
      <Ticker />
      
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#E60000] opacity-20 blur-[150px] pointer-events-none" />

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-4 z-40 mx-4 md:mx-auto max-w-5xl glass rounded-2xl px-6 py-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div 
            className="w-16 h-8 rounded bg-no-repeat shadow-[0_0_15px_rgba(230,0,0,0.3)] border border-[#E60000]/30"
            style={{ 
              backgroundImage: "url('/logo.png')", 
              backgroundSize: "180%", 
              backgroundPosition: "center center" 
            }}
          />
          <div className="text-xl font-bold tracking-tighter">
            CUCHD<span className="text-[#E60000]">.FUN</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#survival" className="hover:text-white transition-colors">Survival Tools</a>
          <a href="#confessional" className="hover:text-white transition-colors">The Confessional</a>
          <a href="#lore" className="hover:text-white transition-colors">Hostel Lore</a>
        </div>
        <button className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
          <Fingerprint size={16} />
          Login
        </button>
      </motion.nav>

      <div className="max-w-5xl mx-auto px-4 pt-24 pb-12 relative z-10">
        
        {/* Hero Section */}
        <section className="text-center mb-32">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono text-gray-400 mb-8"
          >
            <Sparkles size={14} className="text-[#E60000]" />
            v1.0.0-beta is live
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight"
          >
            Welcome to the unofficial <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-[#E60000]">side quest</span> of CU.
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Attendance suffering? Startup cooking? Just here for the memes? You're in the right place. 
            Escape the official portals.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-[#E60000] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all glow-red group">
              Enter the Chaos
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://discord.gg/t5pa8Y3s"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto glass text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={18} />
              Join the Discord
            </a>
          </motion.div>
        </section>

        {/* Coming Soon Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 glass border-[#E60000]/30 border p-6 rounded-2xl relative overflow-hidden text-center group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E60000] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-xl font-bold text-[#E60000] mb-2 flex items-center justify-center gap-2">
            <Terminal size={20} /> COMING SOON
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            This is an early preview. All features below—including the Bunk Planner, Confessional, and Meme Feed—are currently being built and will be <strong className="text-white">available soon</strong>. Join the Discord to stay updated or help build it.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <section id="survival" className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Bunk Planner (Large) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-2 glass rounded-3xl p-8 border-glow-red flex flex-col justify-between group overflow-hidden relative min-h-[300px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E60000] opacity-10 rounded-full blur-[80px] group-hover:opacity-20 transition-opacity" />
              
              <div className="z-10">
                <div className="bg-[#E60000]/10 text-[#E60000] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Activity size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Bunk Planner & CGPA Copium</h3>
                <p className="text-gray-400">Mathematically optimize your 74.9% attendance. Don't risk the debar.</p>
              </div>

              {/* Mock UI Element */}
              <div className="mt-8 glass rounded-xl p-4 border border-[#E60000]/20 z-10">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-sm text-gray-400">Current Deficit</span>
                  <span className="text-[#E60000] font-bold">CRITICAL</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#E60000] w-[74.9%]" />
                </div>
                <div className="mt-2 flex justify-between text-xs font-mono">
                  <span className="text-gray-500">0%</span>
                  <span className="text-[#E60000]">74.9%</span>
                  <span className="text-gray-500">100%</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Confessions (Medium) */}
            <motion.div 
              whileHover={{ y: -5 }}
              id="confessional"
              className="glass rounded-3xl p-8 border-glow-red flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0" />
              <div className="z-10 relative">
                <div className="bg-white/10 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Ghost size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">The Confessional</h3>
                <p className="text-gray-400 text-sm">Spill it safely. The warden isn't watching.</p>
              </div>

              <div className="z-10 mt-6 space-y-3">
                <div className="glass rounded-lg p-3 text-xs text-gray-300 italic opacity-70">
                  "I used ChatGPT for my entire final project and just changed the variables..."
                </div>
                <div className="glass rounded-lg p-3 text-xs text-gray-300 italic opacity-40">
                  "The hostel mess food is evolving, I saw it moving."
                </div>
              </div>
            </motion.div>

            {/* Card 3: Late-Night Builders */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass rounded-3xl p-8 border-glow-red flex flex-col justify-between relative overflow-hidden group min-h-[300px]"
            >
              <div className="absolute right-0 bottom-0 opacity-10 rotate-12 translate-x-4 translate-y-4">
                <Cpu size={120} />
              </div>
              <div className="z-10 relative">
                <div className="bg-blue-500/10 text-blue-400 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Late-Night Builders</h3>
                <p className="text-gray-400 text-sm">Startups, AI models, and midnight coding sessions.</p>
              </div>

              <div className="z-10 mt-8">
                <div className="bg-[#0A0A0A] rounded-lg p-4 font-mono text-xs border border-gray-800">
                  <span className="text-pink-500">import</span> <span className="text-white">sleep</span> <span className="text-pink-500">from</span> <span className="text-green-400">&apos;myth&apos;</span>;<br/>
                  <span className="text-pink-500 mt-2">while</span> (alive) {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">code</span>();<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">drinkCoffee</span>();<br/>
                  {'}'}
                </div>
              </div>
            </motion.div>

            {/* Card 4: Meme Feed (Large/Wide) */}
            <motion.div 
              whileHover={{ y: -5 }}
              id="lore"
              className="md:col-span-2 glass rounded-3xl p-8 border-glow-red flex items-center justify-between overflow-hidden group min-h-[300px] relative"
            >
              {/* Background Placeholder Image */}
              <div 
                className="absolute inset-0 z-0 opacity-20 grayscale mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2000&auto=format&fit=crop')",
                  backgroundSize: "cover",
                  backgroundPosition: "center" 
                }} 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-0" />

              <div className="z-10 relative max-w-md">
                <div className="bg-orange-500/10 text-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Flame size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Hostel Lore & Meme Feed</h3>
                <p className="text-gray-400 mb-6">Hostel culture, unfiltered. Real-time updates on what's going down at NC/LC.</p>
                <button className="glass px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
                  View Latest Lore <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
            
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-10">
            <Calendar className="text-[#E60000]" />
            <h2 className="text-3xl font-bold">Currently Cooking</h2>
          </div>

          <div className="space-y-6">
            {[
              { title: "Training the Meme Algorithm", status: "In Progress", progress: "60%" },
              { title: "Bypassing the Library Wi-Fi Restrictions", status: "Researching", progress: "20%" },
              { title: "Reverse-engineering Mess Menus", status: "Planning", progress: "5%" },
            ].map((item, i) => (
              <div key={i} className="glass rounded-2xl p-6 border-l-4 border-l-transparent hover:border-l-[#E60000] transition-all">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <span className="text-xs font-mono text-[#E60000] px-3 py-1 rounded-full bg-[#E60000]/10">
                    {item.status}
                  </span>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: item.progress }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full bg-gradient-to-r from-gray-600 to-[#E60000]" 
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 pt-12 pb-8 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-6 opacity-80">
            <div 
              className="w-20 h-10 rounded bg-no-repeat shadow-[0_0_15px_rgba(230,0,0,0.3)] border border-[#E60000]/30 grayscale hover:grayscale-0 transition-all duration-300"
              style={{ 
                backgroundImage: "url('/logo.png')", 
                backgroundSize: "180%", 
                backgroundPosition: "center center" 
              }}
            />
            <div className="text-2xl font-bold tracking-tighter">
              CUCHD<span className="text-[#E60000]">.FUN</span>
            </div>
          </div>
          
          <div className="glass px-6 py-4 rounded-xl mb-8 border border-white/10 max-w-2xl">
            <p className="text-xs text-gray-400 font-mono">
              <span className="text-[#E60000] font-bold">DISCLAIMER:</span> Not affiliated with, endorsed by, or legally connected to Chandigarh University. Built by students, for students. If you're a professor, no you didn't see this.
            </p>
          </div>

          <div className="flex items-center gap-6 mb-8 text-gray-500">
            <a href="https://discord.gg/t5pa8Y3s" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><MessageSquare size={20} /></a>
          </div>

          <div className="font-mono text-xs text-gray-600">
            v1.0.0 // STAY TOXIC
          </div>
        </div>
      </footer>
    </main>
  );
}
