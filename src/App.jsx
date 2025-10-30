import { useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    handleHashScroll();
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 selection:bg-indigo-500/20 selection:text-indigo-200">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg">Meet • Full Stack Developer</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-indigo-300 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-300 transition-colors">Contact</a>
            <div className="h-5 w-px bg-white/10" />
            <a href="mailto:hello@meet.dev" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </nav>
          <div className="md:hidden flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Meet. Built with React, Vite, and Tailwind CSS.</p>
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10">
              <Github className="h-4 w-4" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10">
              <Linkedin className="h-4 w-4" />
            </a>
            <a aria-label="Email" href="mailto:hello@meet.dev" className="p-2 rounded-md hover:bg-white/10">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
