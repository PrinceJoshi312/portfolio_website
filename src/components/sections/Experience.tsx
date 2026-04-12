import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'AI Intern',
    company: 'PwC',
    period: 'Oct 2024 - Nov 2024',
    description: 'Designed Power BI dashboards to support HR decision-making across departments. Used DAX and Power Query to build KPI-driven reports, reducing reporting time by 30%.',
  },
  {
    type: 'work',
    title: 'Developer Intern',
    company: 'Salesforce',
    period: 'May 2024 - July 2024',
    description: 'Created dynamic LWC components to enhance CRM interface and usability. Automated workflows for contact and lead modules, improving UI/UX efficiency.',
  },
  {
    type: 'education',
    title: 'B.Tech - Computer Science',
    company: 'Amrapali Group of Institutes, Uttarakhand',
    period: '2021 - 2025',
    description: 'Specializing in Computer Science and Engineering. Key courses: Data Structures, AI, Deep Learning, OS, DBMS, Networking.',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Experience & Education"
          subtitle="A summary of my professional journey and educational background in the field of software engineering."
        />

        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-indigo-500 -translate-x-1/2 border-4 border-[#050505] z-10" />

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                  <div
                    className={`p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all ${
                      i % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}
                  >
                    <div className={`flex items-center gap-4 mb-4 ${
                      i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}>
                      <div className="p-2 rounded-lg bg-white/5 text-indigo-400">
                        {exp.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                      </div>
                      <span className="text-sm font-bold text-indigo-400 uppercase tracking-widest">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <div className="text-white/60 mb-4 font-medium italic">
                      {exp.company}
                    </div>
                    <p className="text-white/40 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
