import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.target);
    // Add your Web3Forms Access Key here
    formData.append("access_key", "0a99530a-405d-4572-961e-8dcb1a19b145");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      
      if (data.success) {
        setFormState('success');
        e.target.reset();
        setTimeout(() => setFormState('idle'), 5000);
      } else {
        console.error("Error", data);
        setFormState('idle');
      }
    } catch (error) {
      console.error(error);
      setFormState('idle');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. I'm currently open to new opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-cyan/20 rounded-full blur-[60px]" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-purple/20 rounded-full blur-[60px]" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple focus:bg-white/10 transition-all peer placeholder-transparent"
                  placeholder="Name"
                />
                <label htmlFor="name" className="absolute left-4 -top-2.5 bg-bg-secondary px-1 text-xs text-accent-cyan transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent-cyan peer-focus:bg-bg-secondary rounded">
                  Your Name
                </label>
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple focus:bg-white/10 transition-all peer placeholder-transparent"
                  placeholder="Email"
                />
                <label htmlFor="email" className="absolute left-4 -top-2.5 bg-bg-secondary px-1 text-xs text-accent-cyan transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent-cyan peer-focus:bg-bg-secondary rounded">
                  Email Address
                </label>
              </div>
            </div>

            <div className="relative group">
              <input 
                type="text" 
                id="subject"
                name="subject"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple focus:bg-white/10 transition-all peer placeholder-transparent"
                placeholder="Subject"
              />
              <label htmlFor="subject" className="absolute left-4 -top-2.5 bg-bg-secondary px-1 text-xs text-accent-cyan transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent-cyan peer-focus:bg-bg-secondary rounded">
                Subject
              </label>
            </div>

            <div className="relative group">
              <textarea 
                id="message"
                name="message"
                required
                rows="5"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple focus:bg-white/10 transition-all peer placeholder-transparent resize-none"
                placeholder="Message"
              ></textarea>
              <label htmlFor="message" className="absolute left-4 -top-2.5 bg-bg-secondary px-1 text-xs text-accent-cyan transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent-cyan peer-focus:bg-bg-secondary rounded">
                Message
              </label>
            </div>

            <div className="flex justify-center pt-4">
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-accent-cyan font-medium py-3 px-6 rounded-full bg-accent-cyan/10 border border-accent-cyan/20"
                >
                  <CheckCircle size={20} />
                  Message Sent Successfully!
                </motion.div>
              ) : (
                <MagneticButton variant="gradient" type="submit" className="w-full md:w-auto min-w-[200px]">
                  {formState === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send size={18} />
                    </span>
                  )}
                </MagneticButton>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
