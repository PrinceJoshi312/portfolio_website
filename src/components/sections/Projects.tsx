import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { ExternalLink, Github } from 'lucide-react';
import rbiImage from '../../assets/images/RBI_Compliance.png';
import codebaseImage from '../../assets/images/codebase.png';
import buggImage from '../../assets/images/BuggAI.png';
import pythonUtilsImage from '../../assets/images/python utlities.png';

const projects = [
  {
    title: 'RBI Compliance Bot',
    description: 'A PDF-based RAG assistant to analyze RBI circulars using LangChain and Google Gemini, enabling natural language queries.',
    image: rbiImage,
    tags: ['LangChain', 'Google Gemini', 'RAG', 'FAISS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/PrinceJoshi312/RBI-Compliance-Bot',
  },
  {
    title: 'Codebase Q&A Assistant',
    description: 'An agentic RAG system to chat with GitHub repositories using Google Gemini and LangChain, featuring automated search-codebase tools.',
    image: codebaseImage,
    tags: ['LangChain', 'Google Gemini', 'ChromaDB', 'FastEmbed'],
    liveUrl: '#',
    githubUrl: 'https://github.com/PrinceJoshi312/Codebase-QA-Assistant',
  },
  {
    title: 'Bugg - AI Voice Assistant',
    description: 'Python-based voice assistant with 20+ commands, utilizing SpeechRecognition and a Keras intent-classification model.',
    image: buggImage,
    tags: ['Python', 'Keras', 'SpeechRecognition', 'Pyttsx3'],
    liveUrl: '#',
    githubUrl: 'https://github.com/PrinceJoshi312/Bugg',
  },
  {
    title: 'Python Utilities',
    description: 'A collection of practical Python scripts for automation, including audio downloading, web scraping, and file organization.',
    image: pythonUtilsImage,
    tags: ['Python', 'Automation', 'Scripts', 'Scraping'],
    liveUrl: '#',
    githubUrl: 'https://github.com/PrinceJoshi312/Python-Utilities',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work, showcasing my skills in AI, data science, and practical automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-left transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 rounded-full bg-white text-black hover:bg-white/90 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/PrinceJoshi312"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};
