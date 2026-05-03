import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../data/projectData';

const Team = () => {
  return (
    <section id="team" className="pt-32 pb-24 bg-white dark:bg-dark-900 min-h-screen relative transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-500 font-semibold tracking-wider uppercase text-sm mb-4 block">The Minds Behind The Machine</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
              Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-cyan-500">Quantum</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg font-light leading-relaxed">
              A collective of 30 passionate engineers working together to build the future of CNC manufacturing.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.1 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/0 to-primary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="glass-card p-5 rounded-2xl text-center transform group-hover:-translate-y-1 transition-all duration-300 relative z-10 border border-slate-200 dark:border-white/5 h-full flex flex-col">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-[3px] border-white dark:border-dark-800 shadow-lg relative shrink-0">
                  <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">{member.name}</h4>
                  <p className="text-primary-500 text-xs font-medium mb-3">{member.role}</p>
                  <div className="mt-auto">
                    <div className="inline-block px-2 py-1 bg-slate-100 dark:bg-dark-800 rounded text-[10px] font-mono text-slate-500">ID: {member.studentId}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
