import { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MagneticButton } from '../common/MagneticButton';
import { ArrowRight } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const typedText = useTypewriter(['AI Engineer', 'LLM Specialist', 'RAG Developer'], 100, 2000);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from('.hero-bg', {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.inOut',
    })
    .from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.2,
    }, '-=1')
    .from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
    .from('.hero-cta', {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: 'back.out(1.7)',
    }, '-=0.3');
  }, { scope: containerRef });

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Animated Background */}
      <div className="hero-bg absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[110px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto text-center z-10">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/60"
        >
          Prince Joshi
        </motion.div>

        <h1 ref={textRef} className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="hero-title block overflow-hidden uppercase tracking-tighter">Prince</span>
          <span className="hero-title block overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent uppercase tracking-tighter">
            Joshi
          </span>
        </h1>

        <div className="hero-subtitle mb-12 min-h-[1.5rem]">
          <p className="text-lg md:text-2xl text-white/80 font-medium">
            An <span className="text-indigo-400">{typedText}</span>
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-white/40 max-w-2xl mx-auto mt-4 text-base md:text-lg">
            Specializing in LLM applications, RAG, and MCP-based architectures for intelligent assistants and automation systems.
          </p>
        </div>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-6">
          <MagneticButton 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors flex items-center gap-2 group"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-colors"
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};
