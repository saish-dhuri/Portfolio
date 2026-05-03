import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../ui/Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'github': return <GithubIcon size={20} />;
      case 'linkedin': return <LinkedinIcon size={20} />;
      case 'twitter': return <TwitterIcon size={20} />;
      default: return null;
    }
  };

  return (
    <footer className="w-full py-12 border-t border-white/10 bg-bg-secondary relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="text-2xl font-display font-bold text-white">
            S<span className="text-accent-cyan">.</span>
          </a>
          <p className="text-sm text-gray-400">
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {portfolioData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-purple hover:bg-accent-purple/10 transition-all duration-300"
            >
              {getIcon(social.icon)}
            </a>
          ))}
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
