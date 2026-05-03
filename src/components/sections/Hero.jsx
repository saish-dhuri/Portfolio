import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { portfolioData } from '../../data/portfolio';
import AnimatedText from '../ui/AnimatedText';
import MagneticButton from '../ui/MagneticButton';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Parallax effect on mouse move for background shapes
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to('.hero-shape-1', { x: xPos, y: yPos, duration: 1, ease: 'power2.out' });
      gsap.to('.hero-shape-2', { x: -xPos * 1.5, y: -yPos * 1.5, duration: 1, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent-purple/20 rounded-full blur-[120px] hero-shape-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-accent-cyan/20 rounded-full blur-[100px] hero-shape-2 pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
          <span className="text-sm font-medium tracking-wide">Available for Work</span>
        </motion.div>

        <AnimatedText 
          text={`Hello, I'm ${portfolioData.personal.name}`}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-4"
          el="h1"
        />
        
        <AnimatedText
          text={portfolioData.personal.role}
          className="text-2xl md:text-4xl font-display text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan mb-8"
          el="h2"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl text-lg text-gray-400 mb-12 font-light leading-relaxed"
        >
          {portfolioData.personal.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a href="#projects">
            <MagneticButton variant="gradient">
              View My Work
            </MagneticButton>
          </a>
          <a href="#contact">
            <MagneticButton variant="outline">
              Contact Me
            </MagneticButton>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-8 h-12 rounded-full border border-gray-600 flex justify-center pt-2"
          >
            <motion.div className="w-1 h-3 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
