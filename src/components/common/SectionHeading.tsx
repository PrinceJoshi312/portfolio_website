import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-white/60 max-w-2xl">{subtitle}</p>}
        <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 mt-6 rounded-full" />
      </motion.div>
    </div>
  );
};
