import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { 
  Cpu, 
  Layers, 
  Layout, 
  Smartphone, 
  Terminal, 
  Zap 
} from 'lucide-react';

const skills = [
  { name: 'ML/AI', icon: Cpu, percentage: 92, color: 'bg-indigo-500', techs: ['LangChain', 'Gemini API', 'RAG', 'LangGraph', 'LangSmith'] },
  { name: 'Data Engineering', icon: Layers, percentage: 88, color: 'bg-cyan-500', techs: ['Power BI', 'DAX', 'MySQL', 'MongoDB', 'ETL'] },
  { name: 'Web Dev', icon: Layout, percentage: 85, color: 'bg-purple-500', techs: ['Node.js', 'Express.js', 'React', 'TypeScript'] },
  { name: 'Languages', icon: Terminal, percentage: 90, color: 'bg-blue-500', techs: ['Python', 'C++', 'JavaScript'] },
  { name: 'Modern Protocols', icon: Zap, percentage: 85, color: 'bg-yellow-500', techs: ['MCP', 'Bmad method', 'Agentic Workflows'] },
  { name: 'Systems', icon: Smartphone, percentage: 80, color: 'bg-emerald-500', techs: ['REST APIs', 'KPI Tracking', 'Observability'] },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Technical Skills"
          subtitle="My expertise spans across various modern web technologies, focusing on performance, scalability, and exceptional user experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${skill.color} bg-opacity-10 text-${skill.color.split('-')[1]}-500 group-hover:scale-110 transition-transform`}>
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/40">Proficiency</span>
                  <span className="text-white/80">{skill.percentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className={`h-full ${skill.color}`}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {skill.techs.map((tech, j) => (
                  <span
                    key={j}
                    className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-white/5 text-white/40 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
