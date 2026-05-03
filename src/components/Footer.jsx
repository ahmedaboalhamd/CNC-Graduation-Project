import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Globe, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-900 pt-20 pb-10 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      
      {/* Decorative gradient */}
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-primary-500/10 blur-[100px] pointer-events-none rounded-t-[100%]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 pr-4 md:pr-12">
            <div className="flex items-center gap-2 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
                <Cpu className="text-primary-500 w-8 h-8 relative z-10" />
              </div>
              <span className="text-2xl font-black tracking-wider text-slate-900 dark:text-white transition-colors duration-300">Team <span className="text-primary-500">Quantum</span></span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-light transition-colors duration-300">
              A state-of-the-art graduation project demonstrating the power of modern engineering, IoT integration, and precision manufacturing. Built with passion by Team Quantum, Class of 2026.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-cyan-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-cyan-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-cyan-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 tracking-wider uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 font-light transition-all duration-300 flex items-center gap-3 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:w-4 group-hover:bg-primary-500 transition-all duration-300"></span> <span className="group-hover:translate-x-1 transition-transform duration-300">About Project</span></Link></li>
              <li><Link to="/components" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 font-light transition-all duration-300 flex items-center gap-3 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:w-4 group-hover:bg-primary-500 transition-all duration-300"></span> <span className="group-hover:translate-x-1 transition-transform duration-300">Hardware Components</span></Link></li>
              <li><Link to="/team" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 font-light transition-all duration-300 flex items-center gap-3 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:w-4 group-hover:bg-primary-500 transition-all duration-300"></span> <span className="group-hover:translate-x-1 transition-transform duration-300">Team Members</span></Link></li>
              <li><Link to="/gallery" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 font-light transition-all duration-300 flex items-center gap-3 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:w-4 group-hover:bg-primary-500 transition-all duration-300"></span> <span className="group-hover:translate-x-1 transition-transform duration-300">Gallery</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 tracking-wider uppercase text-sm">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 font-light transition-all duration-300 flex items-center gap-3 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:w-4 group-hover:bg-primary-500 transition-all duration-300"></span> <span className="group-hover:translate-x-1 transition-transform duration-300">Documentation</span></a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 font-light transition-all duration-300 flex items-center gap-3 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:w-4 group-hover:bg-primary-500 transition-all duration-300"></span> <span className="group-hover:translate-x-1 transition-transform duration-300">Source Code</span></a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 font-light transition-all duration-300 flex items-center gap-3 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:w-4 group-hover:bg-primary-500 transition-all duration-300"></span> <span className="group-hover:translate-x-1 transition-transform duration-300">Presentation Slides</span></a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 font-light transition-all duration-300 flex items-center gap-3 group"><span className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:w-4 group-hover:bg-primary-500 transition-all duration-300"></span> <span className="group-hover:translate-x-1 transition-transform duration-300">Research Paper</span></a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300">
          <p className="text-slate-500 text-sm font-light">
            &copy; 2026 Team Quantum Graduation Project. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1 font-light">
            Crafted with <span className="text-primary-500 animate-pulse text-lg">♥</span> React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
