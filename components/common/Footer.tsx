import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white pt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.5fr] gap-8 px-6 pb-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent tracking-wide transform origin-left transition-transform duration-300 hover:scale-102">
            BrainWave
          </h2>
          <p className="text-sm text-blue-200 max-w-xs">
            Transforming ideas into digital reality
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-5 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-10 after:bg-blue-400">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="" className="text-indigo-100 hover:text-white transition-colors duration-200 relative inline-block after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full">
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-indigo-100 hover:text-white transition-colors duration-200 relative inline-block after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full">
                Services
              </a>
            </li>
            <li>
              <a href="" className="text-indigo-100 hover:text-white transition-colors duration-200 relative inline-block after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full">
                About Us
              </a>
            </li>
            <li>
              <a href="" className="text-indigo-100 hover:text-white transition-colors duration-200 relative inline-block after:content-[''] after:absolute after:w-0 after:h-px after:-bottom-0.5 after:left-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full">
                Blog
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-5 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-10 after:bg-blue-400">
            Get in Touch
          </h3>
          <a href="mailto:contact@brainwave.com" className="flex items-center gap-2 text-indigo-100 hover:text-white transition-colors duration-200 mb-4">
            <Mail size={16} />
            <span>abhishekmaurya.webdev@gamail.com</span>
          </a>
          <div className="flex gap-4">
            <a href="https://github.com/abhiishekh" aria-label="GitHub" className="flex items-center justify-center w-9 h-9 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/abhishek08" aria-label="LinkedIn" className="flex items-center justify-center w-9 h-9 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/_mauryaaa" aria-label="Twitter" className="flex items-center justify-center w-9 h-9 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center py-6 border-t border-white/10">
        <p className="text-sm text-blue-200">&copy; {currentYear} BrainWave. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;