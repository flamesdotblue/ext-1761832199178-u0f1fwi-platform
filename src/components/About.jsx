import { motion } from 'framer-motion';
import { Code2, GraduationCap, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About Meet</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I'm a Full Stack Developer passionate about building practical, scalable products. As a fresher, I've focused on strong fundamentals, modern tooling, and real-world projects to learn by doing. I love clean architecture, type safety, and accessible UI.
          </p>
          <ul className="mt-6 space-y-3 text-slate-300/90">
            <li className="flex items-start gap-3">
              <Code2 className="h-5 w-5 mt-0.5 text-indigo-400" />
              <span>Stack: React, TypeScript, Node.js, Express, PostgreSQL/MongoDB, Prisma, Tailwind CSS</span>
            </li>
            <li className="flex items-start gap-3">
              <GraduationCap className="h-5 w-5 mt-0.5 text-indigo-400" />
              <span>B.Tech in Computer Science (2024). Consistent academic performance and project-based learning.</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5 text-indigo-400" />
              <span>Based in India • Open to remote and relocation</span>
            </li>
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold">Core Skills</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {[
              'JavaScript/TypeScript',
              'React + Vite',
              'Express APIs',
              'Auth (JWT/OAuth)',
              'SQL & Prisma',
              'MongoDB & Mongoose',
              'Tailwind CSS',
              'Testing (Jest)',
              'Docker Basics',
            ].map((skill) => (
              <span key={skill} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center">{skill}</span>
            ))}
          </div>
          <h3 className="mt-6 text-lg font-semibold">Soft Skills</h3>
          <p className="mt-2 text-slate-300 text-sm leading-relaxed">
            Problem solving, communication, collaboration, documentation, ownership, curiosity, and continuous learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
