import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Mail, MapPin, Send } from 'lucide-react';
import { MagneticButton } from '../common/MagneticButton';
import { useState } from 'react';
import { cn } from '../../utils/cn';

import githubIcon from '../../assets/icons/github.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import kaggleIcon from '../../assets/icons/kaggle.png';
import xIcon from '../../assets/icons/x.png';

const contactInfo = [
  { icon: Mail, isImage: false, label: 'Email', value: 'princejoshij736@gmail.com', href: 'mailto:princejoshij736@gmail.com', isWhiteIcon: false },
  { icon: xIcon, isImage: true, label: 'X', value: 'PrinceJosh64109', href: 'https://x.com/PrinceJosh64109', isBlackBg: true },
  { icon: linkedinIcon, isImage: true, label: 'LinkedIn', value: 'princejoshi312', href: 'https://www.linkedin.com/in/princejoshi312', isWhiteIcon: false },
  { icon: kaggleIcon, isImage: true, label: 'Kaggle', value: 'princejoshi18', href: 'https://www.kaggle.com/princejoshi18', isWhiteIcon: false },
  { icon: githubIcon, isImage: true, label: 'GitHub', value: 'PrinceJoshi312', href: 'https://github.com/PrinceJoshi312', isWhiteIcon: true },
  { icon: MapPin, isImage: false, label: 'Location', value: 'Uttarakhand, India', href: '#', isWhiteIcon: false },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:princejoshij736@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Get in touch"
          subtitle="Have a project in mind or want to say hello? I'm always open to discussing new opportunities and creative ideas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
                >
                  <div className={cn(
                    "p-2 rounded-lg group-hover:scale-110 transition-transform flex items-center justify-center",
                    item.isImage ? (
                      // @ts-ignore
                      item.isBlackBg ? "bg-black shadow-md border border-white/10" : "bg-white shadow-md"
                    ) : "bg-indigo-500/10 text-indigo-400"
                  )}>
                    {item.isImage ? (
                      <img 
                        src={item.icon as string} 
                        alt={item.label} 
                        className={cn(
                          "w-6 h-6 object-contain",
                          item.isWhiteIcon && "brightness-0",
                          item.label === 'Kaggle' && "scale-[1.8]"
                        )} 
                      />
                    ) : (
                      <item.icon size={20} />
                    )}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40 mb-0.5 font-bold">
                      {item.label}
                    </div>
                    <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors truncate max-w-[150px]">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 border border-white/10">
              <h4 className="text-xl font-bold mb-4">Let's create something together</h4>
              <p className="text-white/60 leading-relaxed">
                Whether you're looking for an AI engineer to lead your project,
                or a collaborator to build something amazing, I'm here to help.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-1">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-1">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me more about your project..."
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            <MagneticButton 
              type="submit"
              className="w-full p-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
