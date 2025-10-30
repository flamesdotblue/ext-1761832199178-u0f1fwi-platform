import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Let's connect</h2>
          <p className="mt-4 text-slate-300">
            Want to collaborate or have an opportunity? I'm available for full-time roles and internships. Reach out and I’ll get back soon.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a aria-label="Email" href="mailto:hello@meet.dev" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-medium">
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4"
        >
          <div>
            <label className="text-sm text-slate-300">Name</label>
            <input type="text" placeholder="Your name" className="mt-1 w-full rounded-md bg-slate-900/50 border border-white/10 px-3 py-2 outline-none focus:border-indigo-400" />
          </div>
          <div>
            <label className="text-sm text-slate-300">Email</label>
            <input type="email" placeholder="you@example.com" className="mt-1 w-full rounded-md bg-slate-900/50 border border-white/10 px-3 py-2 outline-none focus:border-indigo-400" />
          </div>
          <div>
            <label className="text-sm text-slate-300">Message</label>
            <textarea rows="4" placeholder="Say hello..." className="mt-1 w-full rounded-md bg-slate-900/50 border border-white/10 px-3 py-2 outline-none focus:border-indigo-400" />
          </div>
          <button type="submit" className="w-full rounded-md bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-medium px-4 py-2">Send</button>
          <p className="text-xs text-slate-400">This is a demo form. Email me directly for a quick response.</p>
        </motion.form>
      </div>
    </section>
  );
}
