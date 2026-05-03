import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-bg-secondary/20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative border-l-2 border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/10"></div>
          
          {/* Animated Line Progress */}
          <motion.div 
            className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-accent-purple to-accent-cyan origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "circOut" }}
          />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:left-1/2 md:-translate-x-1/2 top-0 w-10 h-10 rounded-full bg-bg-primary border-2 border-accent-purple flex items-center justify-center z-10">
                  <Briefcase size={16} className="text-accent-cyan" />
                </div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}
                >
                  <div className="glass-card p-6 rounded-2xl hover:border-accent-purple/50 transition-colors duration-300">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 text-accent-cyan text-xs font-mono mb-3 border border-white/10">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-md text-accent-purple mb-4 font-medium">{exp.company}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
