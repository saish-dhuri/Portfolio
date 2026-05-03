import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  // Group skills by category
  const categories = [...new Set(portfolioData.skills.map(s => s.category))];

  return (
    <section id="skills" className="py-24 relative bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-accent-purple rounded-full"></span>
                {category}
              </h3>
              
              <div className="space-y-6">
                {portfolioData.skills
                  .filter(skill => skill.category === category)
                  .map((skill, i) => (
                    <motion.div key={skill.name} variants={item}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-200">{skill.name}</span>
                        <span className="text-sm font-mono text-accent-cyan">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating elements background */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-blue/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
};

export default Skills;
