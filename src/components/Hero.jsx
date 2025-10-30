import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] md:min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 md:pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-indigo-200/90 backdrop-blur">
            <Rocket className="h-3.5 w-3.5" />
            Open to full-time roles and internships
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Hi, I'm Meet — a fresher Full Stack Developer crafting modern, interactive web apps.
          </h1>
          <p className="mt-4 text-slate-300 text-base md:text-lg">
            I enjoy building end-to-end solutions with clean code, robust APIs, and delightful UI. I learn fast, ship often, and love collaborating.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-medium px-5 py-2.5 shadow-lg shadow-indigo-500/20 transition-colors">View Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 transition-colors">Contact Me</a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300/90">
            <TechPill>React</TechPill>
            <TechPill>Node.js</TechPill>
            <TechPill>Express</TechPill>
            <TechPill>MongoDB</TechPill>
            <TechPill>TypeScript</TechPill>
            <TechPill>PostgreSQL</TechPill>
            <TechPill>Tailwind</TechPill>
            <TechPill>Docker</TechPill>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TechPill({ children }) {
  return (
    <span className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">
      {children}
    </span>
  );
}
