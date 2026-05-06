import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Cpu, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 transition-colors duration-300">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 bg-slate-50 dark:bg-dark-900 transition-colors duration-500">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565439390118-b20468962ff3?auto=format&fit=crop&q=60&w=1200')] bg-cover bg-center opacity-10 dark:opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/80 to-slate-50 dark:from-transparent dark:via-dark-900/80 dark:to-dark-900 z-10" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-500/5 rounded-full blur-3xl z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full glass-card text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent-500" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-cyan-600 dark:from-primary-400 dark:to-cyan-400 font-semibold tracking-wide">
                Graduation Project 2026
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
              Precision <br className="hidden md:block" />
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-cyan-400 blur-2xl opacity-20 dark:opacity-40 rounded-full"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-cyan-500 dark:from-primary-400 dark:to-cyan-300">
                  Engineering
                </span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              We built an intelligent, high-precision CNC machine powered by a GRBL 1.1 Motherboard, combining advanced mechanics with seamless web connectivity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
              <Link 
                to="/about"
                className="group relative px-8 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto overflow-hidden shadow-2xl shadow-slate-900/20 dark:shadow-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                  Explore The Machine <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              {/* Scroll indicator placed between buttons */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="z-20 shrink-0 mx-2"
              >
                <Link to="/about" className="w-12 h-12 rounded-full glass-card text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center justify-center shadow-lg border border-slate-200 dark:border-white/10">
                  <ChevronDown className="w-5 h-5" />
                </Link>
              </motion.div>

              <Link 
                to="/components"
                className="px-8 py-4 rounded-2xl glass-card text-slate-700 dark:text-slate-200 font-semibold transition-all hover:bg-slate-100 dark:hover:bg-dark-800 w-full sm:w-auto flex justify-center items-center gap-2"
              >
                <Cpu className="w-5 h-5 text-primary-500" />
                Hardware Specs
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
