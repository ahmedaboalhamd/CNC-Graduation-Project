import React from 'react';
import { motion } from 'framer-motion';
import { componentsData } from '../data/projectData';

const ComponentsSection = () => {
  return (
    <section id="components" className="pt-32 pb-24 bg-slate-50 dark:bg-dark-800 min-h-screen relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Hardware Architecture</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-500">Components</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-light">
              A detailed look at the core electrical and mechanical components that make up our CNC machine architecture.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {componentsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl glass-card overflow-hidden hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 dark:bg-dark-900/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 right-4 z-20 w-12 h-12 rounded-2xl glass-card flex items-center justify-center transform group-hover:-translate-y-2 group-hover:rotate-6 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col relative z-10 bg-white/50 dark:bg-dark-900/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">{item.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 font-light leading-relaxed">{item.description}</p>
                  
                  <div className="pt-4 border-t border-slate-200 dark:border-white/10 group-hover:border-primary-500/30 transition-colors">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Functionality</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{item.function}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
