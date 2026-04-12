import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import githubIcon from '../../assets/icons/github.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import kaggleIcon from '../../assets/icons/kaggle.png';

const socialLinks = [
  { icon: githubIcon, href: 'https://github.com/PrinceJoshi312', label: 'GitHub', isWhiteIcon: true },
  { icon: linkedinIcon, href: 'https://www.linkedin.com/in/princejoshi312', label: 'LinkedIn', isWhiteIcon: false },
  { icon: kaggleIcon, href: 'https://www.kaggle.com/princejoshi18', label: 'Kaggle', isWhiteIcon: false },
];

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/50 text-sm"
        >
          © {new Date().getFullYear()} Prince Joshi. All rights reserved.
        </motion.div>

        <div className="flex gap-6">
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.1 }}
              className="transition-all p-2 rounded-full bg-white flex items-center justify-center shadow-lg"
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={social.icon} 
                alt={social.label} 
                className={cn(
                  "w-6 h-6 object-contain",
                  social.isWhiteIcon && "brightness-0",
                  social.label === 'Kaggle' && "scale-[1.8]"
                )} 
              />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};
