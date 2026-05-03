import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import GlassCard from '../ui/GlassCard';
import { Code2, Database, Layout } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
              {/* Fallback pattern if image is placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-bg-secondary to-bg-primary" />
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-purple via-transparent to-transparent" />
              
              <img 
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1000&auto=format&fit=crop" 
                alt={portfolioData.personal.name}
                className="relative z-10 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
              />
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl z-20"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl flex items-center gap-3 z-30 border border-white/20"
            >
              <div className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan">
                {portfolioData.experience.length}+
              </div>
              <div className="text-xs font-mono text-gray-300 uppercase leading-tight">
                Years of <br/> Experience
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              I am a <strong className="text-white font-medium">Full Stack Developer</strong> specializing in building robust backends and dynamic, responsive frontends. My journey in tech is driven by a passion for creating scalable architectures and solving complex problems with clean, efficient code.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              With expertise spanning from core <span className="text-accent-blue">Java</span> and <span className="text-accent-purple">Python</span> to modern web technologies, I bridge the gap between complex database operations and intuitive user interfaces.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {[
                { icon: <Database className="text-accent-purple" />, title: "Backend Architecture", desc: "Scalable solutions" },
                { icon: <Layout className="text-accent-cyan" />, title: "Frontend Development", desc: "Interactive UIs" },
                { icon: <Code2 className="text-accent-blue" />, title: "Database Optimization", desc: "High performance" }
              ].map((feature, i) => (
                <GlassCard key={i} delay={0.2 + (i * 0.1)} className="p-5 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-white/5 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
