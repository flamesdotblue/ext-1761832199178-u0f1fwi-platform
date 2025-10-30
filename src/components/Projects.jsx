import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'DevBoard • Project Management',
    desc: 'Kanban-style project board with auth, drag-and-drop tasks, comments, and real-time updates.',
    tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Socket.io'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'ShopSwift • E-commerce API + UI',
    desc: 'RESTful backend with JWT auth, payments simulation, and a responsive storefront.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'React', 'Tailwind'],
    repo: '#',
    demo: '#',
  },
  {
    title: 'Insightly • Analytics Dashboard',
    desc: 'Charts, filters, and role-based access for business metrics with a clean UI.',
    tech: ['React', 'Vite', 'Recharts', 'Auth', 'PostgreSQL'],
    repo: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Projects</h2>
          <p className="text-sm text-slate-400">Built to learn, iterate, and ship.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300/90">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.repo} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-sm">
                  <Github className="h-4 w-4" /> Code
                </a>
                <a href={p.demo} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-500 text-slate-950 hover:bg-indigo-400 text-sm">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
