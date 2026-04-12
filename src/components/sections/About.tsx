import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Download } from 'lucide-react';
import profileImg from '../../assets/images/profile.jpg';
import resumePdf from '../../assets/docs/resume.pdf';

const stats = [
  { label: 'Internships', value: '2' },
  { label: 'AI Projects', value: '10+' },
  { label: 'Core Skills', value: '20+' },
  { label: 'Education', value: 'B.Tech' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/10">
              <img
                src={profileImg}
                alt="Prince Joshi"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/20 blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-500/20 blur-3xl -z-10" />
          </motion.div>

          <div>
            <SectionHeading
              title="Building the future with Agentic AI & RAG."
              subtitle="I am an AI Engineer focused on creating scalable, real-world AI solutions leveraging modern agentic and retrieval-based techniques."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 text-white/60 leading-relaxed mb-12"
            >
              <p>
                Specializing in Large Language Model (LLM) applications, Retrieval-Augmented Generation (RAG), 
                and Model Context Protocol (MCP) - based architectures for intelligent assistants and automation systems.
              </p>
              <p>
                Experienced in building AI-driven chatbots and knowledge-aware applications. I am passionate about 
                leveraging state-of-the-art techniques like LangChain, LangGraph, and Gemini API to solve complex 
                real-world problems.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-8 items-center lg:items-start mb-12">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="text-center sm:text-left"
                  >
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider text-white/40">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a
              href={resumePdf}
              download="Prince_Joshi_Resume.pdf"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};
